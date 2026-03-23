import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#FFF8F0",
          accent: "#C08552",
          "accent-dark": "#8C5A3C",
          text: "#4B2E2B",
        },
      },
    },
  },
  plugins: [],
};
export default config;