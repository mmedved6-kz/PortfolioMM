import ProjectRail from "@/components/project-rail";
import { PROJECTS } from "@/lib/projects";
import Link from "next/link";

const featuredProjects = PROJECTS.filter((p) => p.featured);

const proofCards = [
  {
    id: "experience",
    title: "Years of Experience",
    value: "1+",
    note: "Internship and hands-on team collaboration in real product workflows.",
    emphasis: false,
  },
  {
    id: "projects",
    title: "Projects Deployed",
    value: "1",
    note: "Full-stack projects with measurable outcomes.",
    emphasis: true,
  },
  {
    id: "fun",
    title: "Cups of Coffee",
    value: "58",
    note: "Regular companion for debugging, learning and building.",
    emphasis: false,
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
            I build practical full-stack products while growing as a software engineer.
          </h1>

          <p className="mt-4 text-base md:text-lg text-muted max-w-2xl">
            Clean UX. Clean Code. Steady Progress - from idea to implementation.
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
              I focus on fundamentals: understand the problem, build a simple solution first,
              and then improve it with feedback. I prefer practical decisions over overengineering.
          </p>

          <h3 className="mt-6 text-lg font-semibold">About Me</h3>
          <p className="mt-2 text-muted leading-7">
            I&apos;m currently studying Software Engineering at Heriot-Watt University, Dubai, and growing through
            practical full-stack work, continuous learning and iterative product building.
          </p>

          <Link href="/about" className="mt-5 inline-block link-theme text-sm font-medium">
            Read full profile
          </Link>
        </article>

        <article className="surface p-6 md:p-8 lg:col-span-2">
          <h2 className="text-2xl font-semibold">Latest Writing</h2>
          <p className="mt-4 text-sm text-muted leading-6">
            This section is being prepared for upcoming blog posts. New writing will appear here soon.
          </p>
          <Link href="/blog" className="mt-4 inline-block link-theme text-sm font-medium">
            Visit Blog
          </Link>
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