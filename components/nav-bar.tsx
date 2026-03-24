"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

export default function NavBar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
    ];

    const isActive = (href: string) => {
        return pathname === href || pathname.startsWith(href + "/");
    };

    return (
        <nav className="floating-nav px-4 py-3 flex gap-5 items-center">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={[
                        "text-sm font-medium transition-colors duration-200",
                        isActive(link.href)
                            ? "text-[var(--accent)] font-semibold"
                            : "link-theme hover:underline",
                    ].join(" ")}
                >
                    {link.label}
                </Link>
            ))}
            <ThemeToggle />
        </nav>
    )
}