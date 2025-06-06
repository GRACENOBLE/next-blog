"use client";

import { GetBlogPostBySlug } from "@/server";
import { useQuery } from "@tanstack/react-query";
import Container from "./common/container";
import Image from "next/image";

const BlogPostDetails = ({ slug }: { slug: string }) => {
  const query = useQuery({
    queryKey: ["blog detailed data"],
    queryFn: () => GetBlogPostBySlug(slug),
  });
  if (query.isLoading) {
    return <Container>Loading....</Container>;
  }
  return (
    <Container className="pt-8">
      <div className="max-w-4xl mx-auto space-y-8 ">
        <Image
          src={query.data?.image || ""}
          alt={""}
          height={500}
          width={1000}
          className="object-cover w-full  "
        />
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold max-w-2xl mb-4">
            {query.data?.title}
          </h2>
          <p>
            {query.data?.created_at
              ? new Date(query.data?.created_at).toLocaleDateString()
              : ""}
          </p>
        </div>
        <ul className="space-y-4 list-disc list-inside px-6">
          {query.data?.content
            ?.split(".")
            .filter((instance) => instance.length !== 0)
            .map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default BlogPostDetails;
