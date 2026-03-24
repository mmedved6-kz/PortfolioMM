interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Blog Post: {slug}</h1>
      <p>MDX content will render here.</p>
    </main>
  );
}