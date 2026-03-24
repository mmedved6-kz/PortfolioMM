import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justfy-center">
      <div className="text-center surface p-8 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8 text-muted">Feel free to explore my work!</p>
        <Link href="/home" className="button-primary inline-block">
          Explore My Work
        </Link>
      </div>
    </main>
  );
}