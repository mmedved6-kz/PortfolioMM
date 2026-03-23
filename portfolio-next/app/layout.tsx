import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Medet Murzakhanov",
  description: "A personal portfolio website showcasing the projects, experience, and skills of Medet Murzakhanov.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-theme">
        <header className="sticky top-0 nav-shell backdrop-blur-sm z-20">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex gap-6 items-center">
            <h1 className="font-bold text-lg flex-1 nav-brand">Portfolio</h1>
            <Link href="/" className="link-theme hover:underline">
              Home
            </Link>
            <Link href="/about" className="link-theme hover:underline">
              About
            </Link>
            <Link href="/projects" className="link-theme hover:underline">
              Projects
            </Link>
            <Link href="/blog" className="link-theme hover:underline">
              Blog
            </Link>
          </nav>
        </header>

        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-100 mt-12 py-6 text-center text-muted">
          <p>&copy; {new Date().getFullYear()} Medet Murzakhanov. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
