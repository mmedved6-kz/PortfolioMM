import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/projects";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

function getProject(slug: string) {
  const project = PROJECTS.find((p) => p.slug === slug && p.caseStudy);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  return { title: `${project.title} - Case Study - Medet Murzakhanov`, description: project.summary };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = getProject((await params).slug);
  const { default: CaseStudy } = await import(`../../content/projects/${project.slug}.mdx`);

  return (
    <article className="surface p-6 md:p-10">
      <Link href="/projects" className="link-theme text-sm font-medium">&larr; All projects</Link>
      <header className="mt-4 border-b border-border pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Case study</p>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">{project.title}</h1>
        <p className="text-muted mt-3 max-w-2xl">{project.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.stack.map((item) => (
            <span key={item} className="chip">{item}</span>
          ))}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="link-theme ml-auto text-sm font-medium">
              View source &rarr;
            </a>
          )}
        </div>
      </header>
      <div className="prose mt-6">
        <CaseStudy />
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.caseStudy).map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;
