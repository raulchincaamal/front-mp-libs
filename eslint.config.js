// import prettier from "eslint-plugin-prettier"
// import typescriptEslint from "@typescript-eslint/eslint-plugin"
// import globals from "globals"
// import tsParser from "@typescript-eslint/parser"
// import path from "node:path"
// import { fileURLToPath } from "node:url"
// import { FlatCompat } from "@eslint/eslintrc"

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
//   allConfig: js.configs.all,
// })

// import { defineConfig, globalIgnores } from "eslint/config"
// import nextVitals from "eslint-config-next/core-web-vitals"
// import nextTs from "eslint-config-next/typescript"
// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

// export default [
//   {
//     ignores: [
//       "node_modules",
//       "**/node_modules/**",
//       "**/dist",
//       "**/*.js",
//       "**/*.d.ts",
//     ],
//   },
//   ...compat.extends(
//     "eslint:recommended",
//     "prettier",
//     "plugin:@typescript-eslint/recommended"
//   ),
//   {
//     plugins: {
//       prettier,
//       "@typescript-eslint": typescriptEslint,
//     },
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...globals.node,
//       },
//       parser: tsParser,
//       parserOptions: {
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//     rules: {
//       "prettier/prettier": "error",
//       "prefer-const": "error",
//       "react-hooks/exhaustive-deps": 0,
//       "import/order": 0,
//       "@typescript-eslint/no-unused-vars": [
//         "error",
//         {
//           argsIgnorePattern: "^_",
//           varsIgnorePattern: "^_",
//           caughtErrorsIgnorePattern: "^_",
//         },
//       ],
//       "@typescript-eslint/no-explicit-any": "error",
//       "@typescript-eslint/no-empty-interface": [
//         "error",
//         {
//           allowSingleExtends: true,
//         },
//       ],
//       "@typescript-eslint/ban-types": 0,
//       "@typescript-eslint/consistent-type-imports": [
//         "error",
//         {
//           prefer: "type-imports",
//         },
//       ],
//       "no-console": "error",
//       "@typescript-eslint/ban-types": 0,
//       "max-len": [
//         "error",
//         {
//           code: 80,
//           ignoreComments: true,
//           ignoreStrings: true,
//           ignoreTemplateLiterals: true,
//           ignoreRegExpLiterals: true,
//         },
//       ],
//       "max-lines": [
//         "error",
//         {
//           max: 80,
//           skipBlankLines: true,
//           skipComments: true,
//         },
//       ],
//     },
//   },
//   {
//     files: [
//       "**/*.stories.tsx",
//       "**/*.test.tsx",
//       "./packages/icons/lib/**/index.ts",
//     ],
//     rules: {
//       "max-lines": "off",
//     },
//   },
// ]

import { defineConfig, globalIgnores } from "eslint/config"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import tseslint from "typescript-eslint"
import eslint from "@eslint/js"

const eslintConfig = defineConfig([
  eslintPluginPrettierRecommended,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      "prettier/prettier": "error",
      "prefer-const": "error",
      "react-hooks/exhaustive-deps": 0,
      "import/order": 0,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          allowSingleExtends: true,
        },
      ],
      "@typescript-eslint/ban-types": 0,
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "max-len": [
        "error",
        {
          code: 80,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "max-lines": [
        "error",
        {
          max: 80,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
  },
  {
    files: [
      "**/*.stories.tsx",
      "**/*.test.tsx",
      "./packages/icons/lib/**/index.ts",
    ],
    rules: {
      "max-lines": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    "node_modules",
    "**/node_modules/**",
    "**/dist",
    "**/*.js",
    "**/*.d.ts",
  ]),
])

export default eslintConfig
