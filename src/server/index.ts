"use server";

import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";

export const GetBlogPosts = async () => {
  return await db
    .select()
    .from(blogPosts)
    .catch((error) => {
      throw new Error("Failed to fetch Blog posts");
    });
};
