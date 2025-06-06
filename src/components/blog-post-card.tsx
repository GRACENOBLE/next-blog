import Image from "next/image";
import { Bookmark, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { AddToBookmarked, RemoveFromBookmarked } from "@/server";
import Link from "next/link";

const BlogPostCard = ({
  id,
  title,
  image,
  slug,
  bookmarked,
}: {
  id: string;
  title: string;
  image: string;
  slug: string;
  bookmarked: boolean;
}) => {
  const queryClient = useQueryClient();
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);

  const mutation = useMutation({
    mutationFn: async () => {
      if (isBookmarked) {
        await RemoveFromBookmarked(slug);
      } else {
        await AddToBookmarked(slug);
      }
    },
    onSuccess: () => {
      setIsBookmarked((prev) => !prev);
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
      }, 2000);
    },
  });

  return (
    <div className="relative group">
      <Image
        src={image}
        alt={title}
        height={500}
        width={500}
        className="bg-white w-full left-0 top-0 h-[250px] object-cover mb-4"
      />
      <Link
        href={`/blog-posts/${slug}`}
        className="w-full group-hover:underline relative font-semibold text-lg line-clamp-1 mb-4"
      >
        {title}
      </Link>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 text-muted-foreground"
        onClick={() => mutation.mutate()}
        disabled={mutation.isPending}
        aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
      >
        {mutation.isPending ? (
          <span className="animate-spin aspect-square">
            <LoaderCircle />
          </span>
        ) : (
          <Bookmark className={isBookmarked ? "fill-muted-foreground" : ""} />
        )}
      </Button>
    </div>
  );
};

export default BlogPostCard;
