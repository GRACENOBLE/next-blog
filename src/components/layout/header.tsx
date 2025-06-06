import Link from "next/link";
import Container from "../common/container";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const Header = () => {
  return (
    <header className="border-b py-4">
      <Container className={cn("flex justify-between items-center")}>
        <Link href={"/"} className="text-2xl font-semibold">
          Next Blog
        </Link>
        <div className="flex items-center gap-20">
          <div>
            {[
              { href: "/blog-posts", label: "Blog" },
              { href: "/bookmarks", label: "Bookmarks" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  " min-w-28",
                  buttonVariants({ variant: "ghost" })
                )}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="aspect-square p-2 bg-muted rounded-full">GN</div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
