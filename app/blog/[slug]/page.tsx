interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const { default: Post} = await import(`../../content/${slug}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  return [
    { slug: "first-post" },
    { slug: "second-post" },
  ]
}

export const dynamicParams = false;