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
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (href: string) => {
        return pathname === href || pathname.startsWith(href + "/");
    };

    return (
        <nav className="floating-nav flex items-center gap-1 px-2 py-1.5 md:gap-2 md:px-3 md:py-2 max-w-full overflow-x-auto whitespace-nowrap">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={[
                        "rounded-full px-2.5 py-1 text-xs sm:px-3 sm:text-sm font-medium transition-colors duration-200",
                        isActive(link.href)
                            ? "bg-accent/10 text-accent"
                            : "text-muted hover:text-fg",
                    ].join(" ")}
                >
                    {link.label}
                </Link>
            ))}
            <ThemeToggle />
        </nav>
    )
}