import Link from "next/link";
import { formatDate, getPosts } from "@/lib/blog";

export default async function BlogPage() {
  const blogPosts = await getPosts();
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <div className="space-y-4">
      <section className="surface relative overflow-hidden p-6 md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,color-mix(in_oklab,var(--accent),transparent_86%),transparent_48%)]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
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
            {featuredPost ? (
              <article className="border-b border-border p-6 md:p-8">
                <Link href={`/blog/${featuredPost.slug}`} 
                  className="group grid gap-4 md:grid-cols-[1fr_auto] md:items-start"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.09em] text-gold">
                      Featured Entry
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold leading-tight transition-colors group-hover:text-accent md:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted mt-3 max-w-2xl text-base md:text-lg">
                      {featuredPost.description}
                    </p>
                    <p className="text-muted mt-4 text-sm">
                      {formatDate(featuredPost.date)} &middot; {featuredPost.readingTimeMinutes} min read
                    </p>
                  </div>

                  <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-2">
                    <span className="chip chip-accent">
                      {featuredPost.tag}
                    </span>
                    <span className="text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                      Read more &rarr;
                    </span>
                  </div>
                </Link>
              </article>
            ): null}

            <div className="divide-y divide-border">
              {otherPosts.map((post, index) => (
                <article key={post.slug} className="section-animate" style={{ animationDelay: `${index * 60}ms` }}>
                  <Link href={`/blog/${post.slug}`} className="group relative grid gap-4 px-6 py-5 md:grid-cols-[170px_1fr_auto] md:items-center md:px-8 md:py-6">
                    <span className="pointer-events-none absolute inset-y-2 left-2 w-0.5 bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                    <div className="text-muted text-sm">
                      <p>{formatDate(post.date)}</p>
                      <p>{post.readingTimeMinutes} min read</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">
                        {post.title}
                      </h3>
                      <p className="text-muted mt-2 text-sm md:text-base">{post.description}</p>
                    </div>

                    <div className="flex items-center justify-between gap-3 md:justify-end">
                      <span className="chip group-hover:border-accent group-hover:text-accent">
                        {post.tag}
                      </span>
                      <span className="text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                        Read more &rarr;
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}