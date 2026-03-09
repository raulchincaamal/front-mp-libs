import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import tsConfigPaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"
import tailwindcss from "@tailwindcss/vite"
import * as packageJson from "./package.json"

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
        exportType: "default",
      },
      include: "**/*.svg",
    }),
    react(),
    tsConfigPaths(),
    dts({
      include: ["src/lib/"],
      tsconfigPath: "./tsconfig.app.json",
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: {
        /** paths /lib/components/* */
        index: path.join("src", "lib/components/index.ts"),
        animation: path.join("src", "lib/components/animation/index.ts"),
        /** paths /lib/assets/icons/* */
        icons: path.join("src", "lib/assets/icons/index.ts"),
        /** paths /lib/hooks/* */
        hooks: path.join("src", "lib/hooks/index.ts"),
        layout: path.join("src", "lib/layout/index.ts"),
        /** path tailwind config */
        utils: path.join("src", "lib/utils/index.ts"),
      },
      name: "UI Components",
      formats: ["es", "cjs"],
      fileName: (format, name) => {
        const libraryName = "ui-components"
        if (format === "es") {
          return `${libraryName}-${name}.js`
        }
        return `${libraryName}-${name}.${format}`
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["tailwindcss", ...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
}))
