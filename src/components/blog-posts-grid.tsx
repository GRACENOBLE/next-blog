"use client";
import Container from "@/components/common/container";

import { GetBlogPosts } from "@/server";
import { useQuery } from "@tanstack/react-query";

import { usePathname } from "next/navigation";
import BlogPostCard from "./blog-post-card";

const BlogPostsGrid = () => {
  const pathname = usePathname();
  const query = useQuery({
    queryKey: ["blog-posts"],
    queryFn: () => GetBlogPosts(),
  });

  return (
    <section className="py-8 bg-muted min-h-screen">
      <Container className="grid grid-cols-3 gap-8">
        {query.isLoading ? (
          <div>Loading...</div>
        ) : (
          query.data
            ?.filter((post) =>
              pathname === "/bookmarks" ? post.bookmarked : true
            )
            .map(({ id, title, image, slug, bookmarked }, idx) => (
              <BlogPostCard
                key={idx + id}
                id={id}
                title={title}
                image={image}
                slug={slug}
                bookmarked={bookmarked}
              />
            ))
        )}
      </Container>
    </section>
  );
};

export default BlogPostsGrid;
