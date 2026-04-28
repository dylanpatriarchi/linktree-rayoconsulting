import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        deep: "#030305",
        surface: {
          DEFAULT: "rgba(255,255,255,0.04)",
          hover: "rgba(255,255,255,0.08)",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.06)",
          hover: "rgba(255,255,255,0.14)",
          active: "rgba(255,255,255,0.20)",
        },
        accent: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
          glow: "rgba(37,99,235,0.35)",
        },
        "text-primary": "#f8fafc",
        "text-secondary": "#94a3b8",
        "text-tertiary": "#64748b",
      },
      animation: {
        "mesh-move": "meshMove 20s ease infinite alternate",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        meshMove: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-30px) scale(1.05)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
          "100%": { transform: "translate(10px,-10px) scale(1.02)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
