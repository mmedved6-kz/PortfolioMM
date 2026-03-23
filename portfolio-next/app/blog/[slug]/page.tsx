import { fchownSync } from "fs";

interface BlogPost {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPost) {
    const { slug } = await params;

    return (
        <main>
            <h1>Blog Post: {slug}</h1>
            <p>Coming Soon.</p>
        </main>
    ) 
}