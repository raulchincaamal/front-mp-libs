import prettier from "eslint-plugin-prettier"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      "node_modules",
      "**/node_modules/**",
      "**/dist",
      "**/*.js",
      "**/*.d.ts",
    ],
  },
  ...compat.extends(
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended"
  ),
  {
    plugins: {
      prettier,
      "@typescript-eslint": typescriptEslint,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "prefer-const": "error",
      "prettier/prettier": "error",
      "react-hooks/exhaustive-deps": 0,
      "import/order": 0,
      "no-debugger": "error",
      "no-var": "error",
      "no-use-before-define": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-warning-comments": "error",
      "no-inline-comments": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          allowSingleExtends: true,
        },
      ],
      "@typescript-eslint/ban-types": 0,
    },
  },
]
