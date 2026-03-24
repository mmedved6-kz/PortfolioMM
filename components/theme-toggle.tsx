"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  useEffect(() => {
    applyTheme(getPreferredTheme());
  }, []);

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "light" ? "dark" : "light");
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
      <img src="/light_mode.svg" alt="" aria-hidden="true" width="20" height="20" className="theme-toggle-icon theme-toggle-icon-light" />
      <img src="/dark_mode.svg" alt="" aria-hidden="true" width="20" height="20" className="theme-toggle-icon theme-toggle-icon-dark" />
      <span className="sr-only">Toggle theme</span>  
    </button>
  );
}