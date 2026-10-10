import { ogSize, renderOg } from "@/lib/og";
import { PROJECTS } from "@/lib/projects";

export const alt = "Project case study by Medet Murzakhanov";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  return renderOg({ eyebrow: "Case study", title: project?.title ?? "Project", subtitle: project?.summary });
}
