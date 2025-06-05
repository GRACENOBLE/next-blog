"use client";
import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetBlogPosts } from "@/server";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BlogPostsGrid = () => {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: () => GetBlogPosts(),
  });
  return (
    <section className="py-8">
      <Container className="grid grid-cols-3 gap-2">
        {query.isLoading ? (
          <div>Loading...</div>
        ) : (
          query.data?.map(({ id, title, image, slug }, idx) => (
            <Card
              key={idx + id}
              className="w-full max-w-xs relative overflow-hidden mb-6 bg-muted  "
            >
              <CardContent className="">
                <Image
                  src={image}
                  alt={""}
                  height={500}
                  width={500}
                  className="absolute border-b w-full left-0 top-0 h-[250px] object-cover"
                />
              </CardContent>
              <CardFooter className="flex-col gap-2 pt-[230px]">
                <p className="font-semibold text-lg mb-4">{title}</p>
                <Button type="submit" className="w-full">
                  Read
                </Button>
                <Button variant="outline" className="w-full">
                  Save for later
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </Container>
    </section>
  );
};

export default BlogPostsGrid;
