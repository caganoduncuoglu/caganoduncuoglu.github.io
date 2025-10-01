import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          800: "#5C4033",
          700: "#7B4B33",
        },
        latte: "#F5E6D3",
        espresso: "#3C2F2F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        chalk: ["var(--font-patrick)", "cursive"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Shadcn UI için şart
  ],
}
export default config
