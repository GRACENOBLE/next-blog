"use server";

import { db } from "@/lib/db";
import { blogPostContents, blogPosts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const GetBlogPosts = async () => {
  return await db
    .select()
    .from(blogPosts)
    .catch((error) => {
      throw new Error("Failed to fetch Blog posts: ", error);
    });
};

export const GetBlogPostBySlug = async (slug: string) => {
  try {
    const post = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .leftJoin(blogPostContents, eq(blogPostContents.post_id, blogPosts.id))
      .then((res) => {
        if (!res || res.length === 0) return null;
        const { blog_posts, blog_post_contents } = res[0];
        return { ...blog_posts, ...blog_post_contents };
      });
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  } catch (error) {
    throw new Error("Failed to fetch Blog post by slug");
  }
};

export const AddToBookmarked = async(slug: string) => {
  try {
    const post = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .then((res) => (res && res.length > 0 ? res[0] : null));

    if (!post) {
      throw new Error("Post not found");
    }

    // Assuming you have a 'bookmarked' column in blogPosts table
    await db
      .update(blogPosts)
      .set({ bookmarked: true })
      .where(eq(blogPosts.slug, slug));

    return { success: true, message: "Post bookmarked successfully" };
  } catch (error) {
    throw new Error("Failed to bookmark post");
  }
}

export const RemoveFromBookmarked = async (slug: string) => {
  try {
    const post = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .then((res) => (res && res.length > 0 ? res[0] : null));

    if (!post) {
      throw new Error("Post not found");
    }

    await db
      .update(blogPosts)
      .set({ bookmarked: false })
      .where(eq(blogPosts.slug, slug));

    return { success: true, message: "Post removed from bookmarks successfully" };
  } catch (error) {
    throw new Error("Failed to remove post from bookmarks");
  }
};