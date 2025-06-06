import BlogPostsGrid from "@/components/blog-posts-grid";
import Container from "@/components/common/container";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="min-h-screen bg-muted">
      <Container>
        <div className="flex flex-col gap-6 items-center justify-center min-h-[500px]">
          <h1 className="text-5xl font-semibold">This is a demonstration</h1>
          <p className="max-w-2xl text-balance text-center">
            It is meant to show how we can retain users on an important web page
            <br />
            by using one of the advanced routing patterns of Next Js
          </p>
          <div className="flex gap-4 mt-10">
            {["/logos/neon.png", "/logos/next.svg", "/logos/tanstack.png"].map(
              (url, idx) => (
                <Image
                  key={idx}
                  src={url}
                  alt=""
                  width={80}
                  height={80}
                  className="aspect-square w-full max-w-20 mix-blend-multiply"
                />
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
