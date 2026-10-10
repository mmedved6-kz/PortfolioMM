import type { PostMetadata } from "@/lib/blog";
import { ogSize, renderOg } from "@/lib/og";

export const alt = "Blog post by Medet Murzakhanov";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { metadata } = (await import(`../../content/${slug}.mdx`)) as { metadata: PostMetadata };
  return renderOg({ eyebrow: `Blog · ${metadata.tag}`, title: metadata.title, subtitle: metadata.description });
}
