import BlogPostsGrid from "@/components/blog-posts-grid";
import Container from "@/components/common/container";

const page = () => {
  return (
    <section className="bg-muted min-h-screen">
      <Container>
        <BlogPostsGrid />
      </Container>
    </section>
  );
};

export default page;
