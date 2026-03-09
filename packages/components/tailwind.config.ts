import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/tailwind.safelist-helper.ts",
  ],
  darkMode: "class",
  plugins: [],
}

export default config
