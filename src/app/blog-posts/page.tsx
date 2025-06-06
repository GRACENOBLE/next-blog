import BlogPostsGrid from "@/components/blog-posts-grid";
import Container from "@/components/common/container";

const page = () => {
  return (
    <section className="bg-muted min-h-screen">
      <Container>
        <h2 className="text-2xl font-semibold pt-10">Clever Blog</h2>
      </Container>
      <BlogPostsGrid />
    </section>
  );
};

export default page;
