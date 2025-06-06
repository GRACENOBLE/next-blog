import ModalContent from "@/components/modal-content";
import { GetBlogPostBySlug } from "@/server";

const BlogPostDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blogData = await GetBlogPostBySlug(slug);

  return <ModalContent blogData={blogData} />;
};

export default BlogPostDetails;
