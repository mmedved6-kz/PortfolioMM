export type ProjectItem = {
    slug: string;
    title: string;
    summary: string;
    outcome: string;
    stack: string[];
    featured?: boolean;
};

export const PROJECTS: ProjectItem[] = [
    {
        slug: "azure-cost-insights",
        title: "Azure Cost Insights Dashboard",
        summary: "Cost visibility and anomaly tracking for cloud workloads.",
        outcome: "Reduced monthly cloud spend by 18%.",
        stack: ["Next.js", "TypeScript", "Azure", "Power BI"],
        featured: true,
    },
    {
        slug: "knowledge-search",
        title: "Internal Knowledge Search",
        summary: "Semantic search over technical docs and playbooks.",
        outcome: "Faster onboarding and issue resolution.",
        stack: ["Node.js", "PostgreSQL", "OpenAI", "Vector Search"],
        featured: true,
    },
    {
        slug: "portfolio-workspace",
        title: "Portfolio Workspace",
        summary: "MDX-ready portfolio with floating nav and theme system.",
        outcome: "Improved structure and design consistency.",
        stack: ["Next.js", "Tailwind", "MDX"],
        featured: true,
    },
]