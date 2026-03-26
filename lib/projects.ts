export type ProjectItem = {
    slug: string;
    title: string;
    summary: string;
    outcome: string;
    stack: string[];
    featured?: boolean;
    repoUrl?: string;
};

export const PROJECTS: ProjectItem[] = [
    {
    slug: "portfolio-workspace",
    title: "Portfolio Workspace",
    summary: "Personal portfolio with clean UI, responsive layout, and dark/light theme support.",
    outcome: "First production deployment showcasing my work and growth as an engineer.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    repoUrl: "https://github.com/mmedved6-kz/PortfolioMM",
  },
]