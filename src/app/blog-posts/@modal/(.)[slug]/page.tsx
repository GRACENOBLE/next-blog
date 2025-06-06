import { GetBlogPostBySlug } from "@/server";
import { useQuery } from "@tanstack/react-query";
import Container from "@/components/common/container";
import Image from "next/image";
import Modal from "@/components/modal";

const BlogPostDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blogData = await GetBlogPostBySlug(slug);

  return (
    <Modal>
      {!blogData ? (
        <Container>Loading....</Container>
      ) : (
        <div className="max-w-4xl mx-auto  bg-white">
          <Image
            src={blogData.image || ""}
            alt={blogData.title}
            className="w-full object-cover aspect-video"
            width={500}
            height={500}
          />

          <div className="bg-white p-4 pt-6 pb-10 ">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold max-w-2xl mb-4">
                {blogData.title}
              </h2>
              <p>
                {blogData.created_at
                  ? new Date(blogData.created_at).toLocaleDateString()
                  : ""}
              </p>
            </div>
            <ul className="space-y-4 list-disc px-6 ps-10 max-w-xl">
              {blogData.content
                ?.split(".")
                .filter((instance) => instance.length !== 0)
                .map((sentence, index) => (
                  <li key={index}>{sentence}</li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default BlogPostDetails;
