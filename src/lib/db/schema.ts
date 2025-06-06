import { sql } from "drizzle-orm";
import {
  pgTable,
  varchar,
  text,
  timestamp,
  uuid,
  index,
  boolean,
} from "drizzle-orm/pg-core";

export const blogPosts = pgTable("blog_posts", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: varchar("title", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }).notNull().default(""),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  bookmarked: boolean("bookmarked").notNull().default(false),
  created_at: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const blogPostContents = pgTable(
  "blog_post_contents",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    post_id: uuid("post_id")
      .references(() => blogPosts.id, { onDelete: "cascade" })
      .notNull(),
    content: text("content").notNull(),
  },
  (table) => [index("post_id_index").on(table.post_id)]
);
