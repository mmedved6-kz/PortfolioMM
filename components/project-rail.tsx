"use client";

import type { ProjectItem } from "@/lib/projects";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

type ProjectRailProps = {
    projects: ProjectItem[];
}

const MIN_PROJECTS_FOR_EDGE_FADE = 4;

export default function ProjectRail ({ projects }: ProjectRailProps) {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            dragFree: true,
        },
        [
            AutoScroll({
                playOnInit: true,
                speed: 0.8,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
                startDelay: 0
            }),
        ]
    );

    const hasEdgeFade = projects.length >= MIN_PROJECTS_FOR_EDGE_FADE;

    return (
        <div className={["project-rail mt-5", hasEdgeFade ? "project-rail--faded" : ""].join(" ").trim()} role="region" aria-label="Featured projects carousel">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {projects.map((project, idx) => (
                        <div key={`${project.slug}-${idx}`} className="embla__slide">
                            <article className="rounded-xl border border-[var(--border)] p-4 min-w-[280px] max-w-[320px] bg-[var(--surface)]">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="mt-2 text-sm">{project.summary}</p>
                                <p className="mt-2 text-sm text-muted">
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}