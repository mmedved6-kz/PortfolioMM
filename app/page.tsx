import ProjectRail from "@/components/project-rail";
import { PROJECTS } from "@/lib/projects";
import Link from "next/link";

const featuredProjects = PROJECTS.filter((p) => p.featured);

const proofCards = [
  {
    id: "experience",
    title: "Years of Experience",
    value: "1+",
    note: "Production team collaboration and delivery.",
    emphasis: false,
  },
  {
    id: "projects",
    title: "Projects Deployed",
    value: "3",
    note: "Full-stack projects with measurable outcomes.",
    emphasis: true,
  },
  {
    id: "fun",
    title: "Cups of Coffee",
    value: "100+",
    note: "Consumed while debugging \"impossible\" bugs.",
    emphasis: false,
  }
]

const latestPost = [
  {
    title: "Why I chose MDX for portfolio blogging",
    meta: "Engineering - 6 min read",
    href: "/blog",
  },
  {
    title: "Designing a calm light/dark theme system",
    meta: "Frontend - 4 min read",
    href: "/blog",
  },
  {
    title: "From static site to App Router",
    meta: "Architecture - 5 min read",
    href: "/blog",
  }
]

export default function Page() {
  return (
    <main className="space-y-6">
      <section className="surface p-6 md:p-10 relative overflow-hidden bg-gradient-to-br from-[var(--surface)] to-[rgba(29,78,216,0.08)]">        
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--accent)] opacity-5 blur-3xl" />
        <div className="relative z-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-muted">
            Medet Murzakhanov - Software Engineer
          </p>

          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            I build reliable full-stack products with strong architecture and measurable outcomes.
          </h1>

          <p className="mt-4 text-base md:text-lg text-muted max-w-2xl">
            I care about clean UX, practical engineering trade-offs and shipping work that lasts.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projects" className="button-primary inline-block">
              View Projects
            </Link>

            <Link
              href="/about"
              className="inline-block rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium link-theme"
            >
              About Me
            </Link>

            <Link
              href="/blog"
              className="inline-block rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium link-theme"
            >
              Read Blog
            </Link>
        
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {proofCards.map((card) => (
          <article 
            key={card.id} 
            className={[
              "surface p-5 md:p-6 transition-all duration-200 relative", 
              card.emphasis 
                ? "md:-translate-y-1 border-2 border-[var(--accent)] shadow-[0_10px_30px_rgba(29,78,216,0.18)]"
                : "opacity-95 hover:opacity-100",
            ].join(" ")}
          >
            <p className="text-sm uppercase tracking-[0.08em] text-muted">{card.title}</p>
            <p className={card.emphasis ? "mt-2 text-5xl font-bold text-[var(--accent)]" : "mt-2 text-4xl font-bold"}>{card.value}</p>
            <p className="mt-2 text-sm text-muted">{card.note}</p>
          </article>
        ))}
      </section>

      <section className="surface p-6 md:p-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="link-theme text-sm font-medium">
            View All Projects
          </Link>
        </div>

        <ProjectRail projects={featuredProjects} />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <article className="surface p-6 md:p-8 lg:col-span-3">
          <h2 className="text-2xl font-semibold">How I Think</h2>
          <p className="mt-3 text-muted leading-7">
              I like building systems where UX clarity, maintainable architecture, and delivery speed
              stay in balance. I care about practical trade-offs, not overengineering.
          </p>

          <h3 className="mt-6 text-lg font-semibold">About Me</h3>
          <p className="mt-2 text-muted leading-7">
            I’m a full-stack engineer focused on shipping useful products. I enjoy turning ambiguous
            ideas into production-ready experiences with strong technical foundations.
          </p>

          <Link href="/about" className="mt-5 inline-block link-theme text-sm font-medium">
            Read full profile
          </Link>
        </article>

        <article className="surface p-6 md:p-8 lg:col-span-2">
          <h2 className="text-2xl font-semibold">Latest Writing</h2>
          <ul className="mt-4 space-y-3">
            {latestPost.map((post) => (
              <li key={post.title} className="rounded-xl border border-[var(--border)] p-3">
                <Link href={post.href} className="font-medium link-theme">
                  {post.title}
                </Link>
                <p className="text-xs text-muted mt-1">{post.meta}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="surface p-6 md:p-8 text-center">
        <h2 className="text-2xl font-semibold">Open to Collaborations</h2>
        <p className="mt-3 text-muted">If you have a role, product idea, or challenge, let&apos;s talk</p>
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <Link href="/contact" className="button-primary inline-block">Contact Me</Link>
          <Link href="/blog" className="inline-block rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium link-theme">Explore Blog</Link>
        </div>
      </section>
    </main>
  );
}