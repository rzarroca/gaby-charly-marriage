import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
      fontFamily: {
        curly: ["var(--font-curly)"],
      },
      animation: {
        cross: "cross 20s linear infinite",
      },
      keyframes: {
        cross: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(-375px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
