import { PROJECTS } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";


export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <section className="surface p-6 md:p-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted mt-2">Selected work with outcomes and architecture notes.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project) => (
          <article key={project.slug} className="surface card-hover p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              {project.repoUrl && (
                <a 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-fg transition-colors"
                  aria-label={`View ${project.title} repository`}>
                    <Image src="/github-svg.svg" alt="" aria-hidden="true" width={20} height={20} className="ml-2 theme-icon-light" />
                    <Image src="/github-svg-white.svg" alt="" aria-hidden="true" width={20} height={20} className="ml-2 theme-icon-dark" />
                  </a>
              )}
            </div>
            <p className="mt-2">{project.summary}</p>
            <p className="mt-2 text-sm text-muted">
              <span className="font-medium">Outcome:</span> {project.outcome}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
            {project.caseStudy && (
              <Link href={`/projects/${project.slug}`} className="mt-4 inline-block link-theme text-sm font-medium">
                Read case study &rarr;
              </Link>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}