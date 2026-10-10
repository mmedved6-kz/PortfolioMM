"use client";

import Image from "next/image";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "light" ? "dark" : "light");
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