import { readdirSync, readFileSync, statSync } from "fs";
import Link from "next/link";
import { join } from "path";

type BlogListItem = {
  slug: string;
  title: string;
  excerpt?: string;
  publishedLabel?: string;
  publishedAt?: number;
  readingTimeMinutes?: number;
  tag: string;
}

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function inferTag(slug: string) {
  const firstToken = slug.split("-").filter(Boolean)[0] ?? "notes";
  return firstToken.charAt(0).toUpperCase() + firstToken.slice(1);
}

function extractText(mdxSource: string) {
  return mdxSource
    .replace(/^---[\s\S]*?---\s*/m, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/[>#*_~\-|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildExcerpt(text: string, maxLength: number = 148) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
}

function formatPublishedDate(date: Date) {
  return new Intl.DateTimeFormat("en-UK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function getBlogPosts(): BlogListItem[] {
  const contentDir = join(process.cwd(), "app", "content");

  return readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/.mdx$/, "");
      const filePath = join(contentDir, file);
      const source = readFileSync(filePath, "utf-8");
      const text = extractText(source);
      const words = text.length === 0 ? 0 : text.split(" ").length;
      const stats = statSync(filePath);

      return {
        slug,
        title: slugToTitle(slug),
        excerpt: buildExcerpt(text || "A short note from the my journal."),
        publishedLabel: formatPublishedDate(stats.mtime),
        publishedAt: stats.mtime.getTime(),
        readingTimeMinutes: Math.max(1, Math.ceil(words / 220)),
        tag: inferTag(slug),
      };
    })
    .sort((a, b) => b.publishedAt - a.publishedAt);
}

export default function BlogPage() {
  const blogPosts = getBlogPosts();
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <main className="space-y-4">
      <section className="surface relative overflow-hidden p-6 md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,color-mix(in_oklab,var(--accent),transparent_86%),transparent_48%)]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Journal
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">Blog</h1>
        <p className="text-muted mt-3 max-w-2xl">Writing on builds, patterns, and lessons learned from shipped work.</p>
        </div>
      </section>
      
      <section className="surface overflow-hidden">
        {blogPosts.length === 0 ? (
          <p className="p-6 md:p-8 text-muted">No posts yet.</p>
        ) : (
          <>
            
          </>
        )}
      </section>
    </main>
  );
}