import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="space-y-4">
      <section className="surface p-6 md:p-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted mt-2">Selected work with outcomes and architecture notes.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project) => (
          <article key={project.slug} className="surface p-5">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-muted mt-2">{project.summary}</p>
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
          </article>
        ))}
      </section>
    </main>
  );
}