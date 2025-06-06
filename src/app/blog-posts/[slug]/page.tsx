import BlogPostDetails from "@/components/blog-post-details";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div className="bg-muted min-h-screen">
      <BlogPostDetails slug={slug} />
    </div>
  );
};

export default page;
