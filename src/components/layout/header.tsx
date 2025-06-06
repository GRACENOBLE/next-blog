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
        <Link
          href={"/bookmarks"}
          className={buttonVariants({ variant: "ghost" })}
        >
          Bookmarks
        </Link>
      </Container>
    </header>
  );
};

export default Header;
