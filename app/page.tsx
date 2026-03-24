import { PROJECTS } from "@/lib/projects";
import Link from "next/link";

const featuredProjects = PROJECTS.filter((p) => p.featured);

const proofCards = [
  {
    id: "experience",
    title: "Years of Experience",
    value: "1+",
    note: "Production team collaboration and delivery",
    emphasis: false,
  },
  {
    id: "projects",
    title: "Projects Deployed",
    value: "3",
    note: "Full-stack projects with measurable outcomes",
    emphasis: true,
  },
  {
    id: "fun",
    title: "Cups of Coffee",
    value: "100+",
    note: "Consumed while debugging \"impossible\" bugs",
    emphasis: false,
  }
]

const latestPost = [
  {
    title: "Why I choce MDX for portfolio blogging",
    meta: "Engineering - 6 min read",
    href: "/blog",
  },
  {
    title: "Desigining a calm light/dark theme system",
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
      <section className="surface p-6 md:p-10">
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

        <div className="project-rail mt-5">
            <div className="project-track">
              {[...featuredProjects, ...featuredProjects].map((project, idx) => (
                <article 
                  key={`${project.slug}-${idx}`}
                  className="rounded-xl border border-[var(--border)] p-4 min-w-[280px] max-w-[320px] bg-[var(--surface)]"
                >
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted">{project.summary}</p>
                  <p className="mt-2 text-sm">
                    <span className="font-medium">Outcome:</span> {project.outcome}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li key={item} className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/projects" className="mt-4 inline-block link-theme text-sm font-medium">
                    View Project
                  </Link>
                </article>
              ))}
            </div>
        </div>
      </section>
    </main>
  );
}