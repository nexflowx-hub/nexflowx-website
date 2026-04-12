import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── NexFlowX Brand Core ── */
        primary: {
          DEFAULT: "#2F6BFF",
          dark: "#0A1F44",
          light: "#5B8AFF",
          muted: "rgba(47, 107, 255, 0.08)",
          border: "rgba(47, 107, 255, 0.18)",
        },
        accent: {
          DEFAULT: "#00C2FF",
          muted: "rgba(0, 194, 255, 0.08)",
          border: "rgba(0, 194, 255, 0.18)",
        },
        graphite: "#1A1D23",
        "slate-soft": "#F5F7FA",
        /* ── Status ── */
        success: {
          DEFAULT: "#22C55E",
          muted: "rgba(34, 197, 94, 0.1)",
          border: "rgba(34, 197, 94, 0.2)",
        },
        warning: {
          DEFAULT: "#F59E0B",
          muted: "rgba(245, 158, 11, 0.1)",
          border: "rgba(245, 158, 11, 0.2)",
        },
        error: {
          DEFAULT: "#EF4444",
          muted: "rgba(239, 68, 68, 0.1)",
          border: "rgba(239, 68, 68, 0.2)",
        },
        /* ── Dark mode surfaces ── */
        dark: {
          base: "#0B0F1A",
          card: "#111827",
          surface: "#1A2035",
          border: "#1E293B",
          text: "#E5E7EB",
          muted: "#94A3B8",
        },
        /* ── shadcn/ui compatibility ── */
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        md: "0.625rem",
        sm: "0.375rem",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "Sora", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-space-mono)", "Space Mono", "monospace"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
