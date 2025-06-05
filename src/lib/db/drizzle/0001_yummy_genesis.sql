ALTER TABLE "blog_post_content" RENAME TO "blog_post_contents";--> statement-breakpoint
ALTER TABLE "blog_posts" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "blog_posts" RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE "blog_post_contents" DROP CONSTRAINT "blog_post_content_post_id_blog_posts_id_fk";
--> statement-breakpoint
ALTER TABLE "blog_posts" ADD COLUMN "image" varchar(255) DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "blog_post_contents" ADD CONSTRAINT "blog_post_contents_post_id_blog_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."blog_posts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "post_id_index" ON "blog_post_contents" USING btree ("post_id");