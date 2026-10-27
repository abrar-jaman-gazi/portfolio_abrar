import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#07090E",
          900: "#0B0F17",
          850: "#101622",
          800: "#161D2E",
          700: "#222B3F",
          600: "#34415A",
        },
        accent: {
          blue: "#38BDF8",
          indigo: "#6366F1",
          violet: "#8B5CF6",
          cyan: "#06B6D4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "glow-sm": "0 0 20px -5px rgba(56, 189, 248, 0.15)",
        "glow-md": "0 0 30px -5px rgba(99, 102, 241, 0.2)",
        "glow-lg": "0 0 45px -5px rgba(139, 92, 246, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
