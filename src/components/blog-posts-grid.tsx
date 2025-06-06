"use client";
import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";

import { GetBlogPosts } from "@/server";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";

const BlogPostsGrid = () => {
  const query = useQuery({
    queryKey: ["blog posts"],
    queryFn: () => GetBlogPosts(),
  });
  return (
    <section className="py-8">
      <Container className="grid grid-cols-3 gap-8">
        {query.isLoading ? (
          <div>Loading...</div>
        ) : (
          query.data?.map(({ id, title, image, slug }, idx) => (
            <Link
              href={`/blog-posts/${slug}`}
              type="submit"
              className={"w-full relative"}
            >
              <Image
                src={image}
                alt={""}
                height={500}
                width={500}
                className=" bg-white w-full left-0 top-0 h-[250px] object-cover mb-4"
              />
              <p className="font-semibold text-lg line-clamp-1 mb-4">{title}</p>

              <Button
                variant="ghost"
                size={"icon"}
                className="absolute top-2 right-2 text-muted-foreground"
              >
                <Bookmark />
              </Button>
            </Link>
          ))
        )}
      </Container>
    </section>
  );
};

export default BlogPostsGrid;
