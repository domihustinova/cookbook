import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

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
          lightest: "#EBEAE4",
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
      backgroundImage: {
        defaultGreen:
          "linear-gradient(to right bottom, #dedbd2, #d5d5c8, #cacfbf, #bec9b7, #b0c4b1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"])
    }),
  ],
}
export default config
