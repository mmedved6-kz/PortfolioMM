"use client";

import Image from "next/image";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "light" ? "dark" : "light";

    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme(next);
      return;
    }

    // Reveal the new theme as a circle growing from the button to the farthest corner.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    document.startViewTransition(() => applyTheme(next)).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 500, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" },
      );
    });
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
      <Image
        src="/light_mode.svg"
        alt="Light mode"
        aria-hidden="true"
        width={24}
        height={24}
        className="theme-toggle-icon theme-toggle-icon-light"
      />
      <Image
        src="/dark_mode.svg"
        alt="Dark mode"
        aria-hidden="true"
        width={24}
        height={24}
        className="theme-toggle-icon theme-toggle-icon-dark"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}