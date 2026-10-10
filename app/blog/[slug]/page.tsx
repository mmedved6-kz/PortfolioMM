import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts, type PostMetadata } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

async function loadPost(slug: string) {
  return (await import(`../../content/${slug}.mdx`)) as { default: React.ComponentType; metadata: PostMetadata };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { metadata } = await loadPost((await params).slug);
  return { title: `${metadata.title} - Medet Murzakhanov`, description: metadata.description };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { default: Post, metadata } = await loadPost((await params).slug);

  return (
    <article className="surface p-6 md:p-10">
      <Link href="/blog" className="link-theme text-sm font-medium">&larr; All posts</Link>
      <header className="mt-4 border-b border-[var(--border)] pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{metadata.tag}</p>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">{metadata.title}</h1>
        <p className="text-muted mt-3 text-sm">{formatDate(metadata.date)}</p>
      </header>
      <div className="mt-6">
        <Post />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;
