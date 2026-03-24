import type { Metadata } from "next";
import {Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
      className={`${outfit.className} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-theme">
        <header className="floating-nav-wrap z-20">
            <NavBar />
        </header>

        <div className="nav-spacer" aria-hidden="true" />

        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
          {children}
        </main>

        <footer className="footer-shell bg-gray-100 mt-12 py-6 text-center text-muted">
          <p>&copy; {new Date().getFullYear()} Medet Murzakhanov. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
