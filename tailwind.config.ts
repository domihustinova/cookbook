import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
        wotfard: ["var(--font-wotfard)"],
      },
      colors: {
        green: {
          primary: "#008a7a",
          darkest: "#132925",
          dark: "#4A5759",
          medium: "#B0C4B1",
          light: "#DEDBD2",
        },
        red: {
          primary: "#d8003e",
          dark: "#ad0032",
          light: "#fdf1f4",
        },
        yellow: {
          primary: "#ffd634",
        },
      },
    },
  },
  plugins: [],
}
export default config
