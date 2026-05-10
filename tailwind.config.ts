import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07070A",
        coal: "#0E0E12",
        graphite: "#15151B",
        bone: "#F4EFE6",
        cream: "#E8E1D2",
        smoke: "#9A98A0",
        ash: "#5F5D66",
        ember: "#FF5B2E",
        dune: "#C7B299",
        gold: "#D9B779",
        electric: "#7C5CFF"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"]
      },
      letterSpacing: {
        crisp: "-0.04em",
        sharp: "-0.025em",
        wide2: "0.18em",
        wide3: "0.32em"
      },
      backgroundImage: {
        "aurora":
          "radial-gradient(60% 60% at 20% 20%, rgba(124,92,255,0.20), transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(255,91,46,0.18), transparent 60%), radial-gradient(70% 70% at 50% 100%, rgba(217,183,121,0.18), transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.95  0 0 0 0 0.95  0 0 0 0 0.95  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"
      },
      boxShadow: {
        ring: "0 0 0 1px rgba(244,239,230,0.08)",
        plate: "0 30px 80px -20px rgba(0,0,0,0.65), 0 0 0 1px rgba(244,239,230,0.06) inset",
        emberGlow: "0 0 60px -10px rgba(255,91,46,0.55)"
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 80s linear infinite",
        breathe: "breathe 7s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        breathe: {
          "0%,100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.08)", opacity: "0.85" }
        },
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(8px,-14px,0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        }
      }
    }
  },
  plugins: []
};

export default config;
