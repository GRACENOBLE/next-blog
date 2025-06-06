import BlogPostsGrid from "@/components/blog-posts-grid";
import Container from "@/components/common/container";
import Link from "next/link";

const page = () => {
  return (
    <section className="min-h-screen bg-muted">
      <Container>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/blog-posts"}>Blog + a little spice</Link>
      </Container>
    </section>
  );
};

export default page;
