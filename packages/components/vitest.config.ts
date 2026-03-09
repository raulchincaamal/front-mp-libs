import { defineConfig } from "vitest/config"
import path from "node:path"
import tsConfigPaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: "default",
      },
      include: "**/*.svg",
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    includeSource: ["src/**/*.{js,ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/lib"),
    },
  },
})
