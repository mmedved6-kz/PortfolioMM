import type { Metadata } from "next";
import {Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Spotlight from "@/components/spotlight";
import { contact } from "@/lib/contact";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-medmur.vercel.app"),
  title: "Portfolio - Medet Murzakhanov",
  description: "A personal portfolio website showcasing the projects, experience, and skills of Medet Murzakhanov.",
  icons: {
    icon: "/icon.png",
  },
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
      suppressHydrationWarning
    >
      <head>
        {/* Set theme before first paint to avoid a light flash for dark-mode users. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col text-theme">
        <header className="floating-nav-wrap z-20">
            <NavBar />
        </header>

        <div className="nav-spacer" aria-hidden="true" />

        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
          {children}
        </main>

        <footer className="footer-shell mt-12 py-6 text-center text-muted">
          <p>&copy; {new Date().getFullYear()} Medet Murzakhanov. All rights reserved.</p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href={`mailto:${contact.email}`} className="contact-link" aria-label="Email">
              <Image src="/mailto.svg" alt="" aria-hidden="true" width={24} height={24} className="contact-link-icon theme-icon-light" />
              <Image src="/mailto-white.svg" alt="" aria-hidden="true" width={24} height={24} className="contact-link-icon theme-icon-dark" />
              <span className="sr-only">Email</span>
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="contact-link" aria-label="GitHub">
              <Image src="/github-svg.svg" alt="" aria-hidden="true" width={24} height={24} className="contact-link-icon theme-icon-light" />
              <Image src="/github-svg-white.svg" alt="" aria-hidden="true" width={24} height={24} className="contact-link-icon theme-icon-dark" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-link" aria-label="LinkedIn">
              <Image src="/linkedin-svg.svg" alt="" aria-hidden="true" width={24} height={24} className="contact-link-icon" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </footer>

        <Spotlight />
        <Analytics />
      </body>
    </html>
  );
}
