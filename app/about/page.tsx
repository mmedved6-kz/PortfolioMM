"use client";

import { ABOUT_INTRO, ABOUT_SECTION_IDS, ABOUT_SECTION_LABELS, AboutSectionId, EDUCATION, WORK_EXPERIENCE, type TimelineItem } from "@/lib/about";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Timeline({ items }: { items: TimelineItem[]}) {
    return (
        <div className="mt-5 relative border-l border-[var(--border)] pl-5 space-y-5">
            {items.map((item, idx) => (
                <article key={`${item.title}-${item.organisation}-${idx}`}
                className="relative rounded-xl border border-[var(--border)] p-4">
                    <span className="absolute -left-[1.62rem] top-5 h-3 w-3 rounded-full bg-[var(--accent)]" />
                    <p className="text-sm text-muted">{item.date}</p>
                    <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.organisation}</p>
                    <p className="mt-3 text-muted leading-7">{item.description}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                            <span key={skill} 
                                className="rounded-md border border-[var(--border)] px-2.5 py-1 text-xs bg-[color-mix(in_oklab, var(--surface), black_2%)]"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
}

export default function About() {    
    const [activeSection, setActiveSection] = useState<AboutSectionId>("introduction");
    const sectionIds = useMemo(() => ABOUT_SECTION_IDS, []);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: "-35% 0px -55% 0px",
                    threshold: [0.1, 0.25, 0.5],
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((observer) => observer.disconnect());
    }, [sectionIds]);

    return (
        <main className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] gap-8">
            <aside className="h-fit lg:sticky lg:self-start pr-4 border-l-2 border-[var(--border)] pl-4"
                style={{ top: "calc(var(--floating-nav-offset) + var(--floating-nav-height) + 1rem)"}}>
                <h3 className="text-xs uppercase tracking-[0.14em] text-muted font-semibold">On this page</h3>
                <nav className="mt-3 space-y-1">
                    {ABOUT_SECTION_IDS.map((sectionId) => {
                        const isActive = activeSection === sectionId;
                        return (
                            <a 
                                key={sectionId}
                                href={`#${sectionId}`}
                                className={[
                                    "block rounded-md px-3 py-2 text-sm transition-colors",
                                    isActive
                                        ? "text-[var(--accent)] font-semibold bg-[color-mix(in_oklab,var(--accent),transparent_90%)]"
                                        : "text-muted hover:text-theme",
                                ].join(" ")}
                            >
                                {ABOUT_SECTION_LABELS[sectionId]}
                            </a>
                        );
                    })}
                </nav>
            </aside>

            <article className="space-y-10">
                <section id="introduction">
                    <div className="grid gap-6 md:grid-cols-[1fr_220px] md:items-start">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold">{ABOUT_INTRO.heading}</h1>
                            <p className="mt-3 text-muted">{ABOUT_INTRO.subtitle}</p>
                            {ABOUT_INTRO.paragraphs.map((paragraph) => (
                                <p key={paragraph} className="mt-4 text-muted leading-7">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="rounedd-xl border border-[var(--border)] p-3">
                            <div className="relative h-56 w-full overflow-hidden rounded-lg">
                                <Image 
                                    src="/profile.png"
                                    alt="Profile picture"
                                    fill
                                    sizes="220px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="work-experience">
                    <h2 className="text-2xl font-semibold">Work Experience</h2>
                    <Timeline items={WORK_EXPERIENCE} />
                </section>

                <section id="education">
                    <h2 className="text-2xl font-semibold">Education</h2>
                    <Timeline items={EDUCATION} />
                </section>
            </article>
        </main>
    );    
}