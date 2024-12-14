import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        cross: "cross 30s linear infinite",
        "spin-slow": "spin 90s linear infinite",
        "spin-slow-r": "spin-reverse 90s linear infinite",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        white: "var(--white)",
      },
      fontFamily: {
        curly: ["var(--font-curly)"],
      },
      keyframes: {
        cross: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(-375px)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
