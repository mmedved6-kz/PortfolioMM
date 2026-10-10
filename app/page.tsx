import ProjectRail from "@/components/project-rail";
import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import { formatDate, getPosts } from "@/lib/blog";
import { contact } from "@/lib/contact";
import { getGithubActivity, timeAgo } from "@/lib/github";

const featuredProjects = PROJECTS.filter((p) => p.featured);

// Full class names so Tailwind can see them; index = GitHub contribution level 0-4.
const HEAT = ["bg-border", "bg-accent/25", "bg-accent/50", "bg-accent/75", "bg-accent"];

export default async function Page() {
  const [posts, github] = await Promise.all([getPosts(), getGithubActivity()]);
  const latestPosts = posts.slice(0, 2);
  const commit = github?.latestCommit;

  return (
    <div className="space-y-6">
      <section className="surface p-6 md:p-10 relative overflow-hidden bg-gradient-to-br from-surface to-accent/8">        
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent opacity-5 blur-3xl" />
        <div className="relative z-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-gold">
            Medet Murzakhanov - Software Engineer
          </p>

          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight max-w-3xl">
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
              className="button-secondary"
            >
              About Me
            </Link>

            <Link
              href="/blog"
              className="button-secondary"
            >
              Read Blog
            </Link>
        
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        <article className="surface card-hover p-5 md:p-6 md:-translate-y-1 border-2 border-accent shadow-[0_10px_30px_color-mix(in_oklab,var(--accent),transparent_82%)]">
          <p className="text-sm uppercase tracking-[0.08em] text-muted">Latest commit</p>
          {commit ? (
            <a href={commit.url} target="_blank" rel="noreferrer" className="group mt-2 block">
              <p className="font-mono text-lg font-semibold leading-snug text-accent line-clamp-2 group-hover:underline">{commit.message}</p>
              <p className="mt-2 text-sm text-muted">{commit.repo} &middot; {timeAgo(commit.date)}</p>
            </a>
          ) : (
            <a href={contact.github} target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold text-accent hover:underline">
              See what I&apos;m building on GitHub &rarr;
            </a>
          )}
        </article>

        <article className="surface card-hover p-5 md:p-6">
          <p className="text-sm uppercase tracking-[0.08em] text-muted">Public repos</p>
          <p className="mt-2 text-4xl font-bold">{github?.publicRepos ?? "—"}</p>
          <p className="mt-2 text-sm text-muted">
            {github ? `On GitHub since ${github.memberSince}.` : "Open-source work and experiments."}
          </p>
        </article>

        {github?.contributions ? (
          <article className="surface card-hover p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.08em] text-muted">Contributions</p>
            <div className="mt-3 flex gap-[3px]" role="img" aria-label={`${github.contributions.total} contributions in the last year`}>
              {github.contributions.weeks.map((week, i) => (
                <div key={i} className="flex flex-col gap-[3px]">
                  {week.map((level, j) => (
                    <span key={j} className={`h-2.5 w-2.5 rounded-[2px] ${HEAT[level]}`} />
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-2 text-sm text-muted">{github.contributions.total} in the last year.</p>
          </article>
        ) : (
          <article className="surface card-hover p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.08em] text-muted">Years of Experience</p>
            <p className="mt-2 text-4xl font-bold">1+</p>
            <p className="mt-2 text-sm text-muted">Internship and hands-on team collaboration in real product workflows.</p>
          </article>
        )}
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
          {latestPosts.length === 0 ? (
            <p className="mt-4 text-sm text-muted leading-6">New writing will appear here soon.</p>
          ) : (
            <ul className="mt-4 divide-y divide-border">
              {latestPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block py-3">
                    <p className="font-medium transition-colors group-hover:text-accent">{post.title}</p>
                    <p className="mt-1 text-sm text-muted">{formatDate(post.date)} &middot; {post.readingTimeMinutes} min read</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
          <Link href="/blog" className="button-secondary">Explore Blog</Link>
        </div>
      </section>
    </div>
  );
}