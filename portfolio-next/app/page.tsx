import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justfy-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">Feel free to explore my work!</p>
        <Link href="/home" className="px-6 py-3 bg-blue-600 text-white rounded">
          Explore My Work
        </Link>
      </div>
    </main>
  );
}