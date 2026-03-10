// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook"
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
  ...storybook.configs["flat/recommended"],
])

export default eslintConfig
