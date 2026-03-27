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
        <nav className="floating-nav flex items-center gap-3 px-3 py-2 md:gap-5 md:px-4 md:py-3 max-w-full overflow-x-auto whitespace-nowrap">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={[
                        "text-xs sm:text-sm font-medium transition-colors duration-200",
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