import { readdir, readFile } from "fs/promises";
import { join } from "path";

export type PostMetadata = {
  title: string;
  date: string; // ISO yyyy-mm-dd
  description: string;
  tag: string;
};

export type Post = PostMetadata & {
  slug: string;
  readingTimeMinutes: number;
};

const CONTENT_DIR = join(process.cwd(), "app", "content");

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "short", day: "numeric" }).format(new Date(iso));
}

// Posts without an exported `metadata` are treated as drafts and hidden.
export async function getPosts(): Promise<Post[]> {
  const files = (await readdir(CONTENT_DIR)).filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { metadata } = (await import(`../app/content/${slug}.mdx`)) as { metadata?: PostMetadata };
      if (!metadata) return null;

      const source = await readFile(join(CONTENT_DIR, file), "utf-8");
      const words = source.split(/\s+/).filter(Boolean).length;
      return { ...metadata, slug, readingTimeMinutes: Math.max(1, Math.ceil(words / 220)) };
    }),
  );

  return posts.filter((post) => post !== null).sort((a, b) => b.date.localeCompare(a.date));
}
