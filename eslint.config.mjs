import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    rules: {}
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        },
        project: "./tsconfig.json",
        tsconfigRootDir: "C:/Users/musaw/OneDrive/Desktop/Everything/Repo/TemplateRestaurant"
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      "@next/next": nextPlugin,
      "@typescript-eslint": tsPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...tsPlugin.configs["recommended"].rules,
      "@typescript-eslint/no-unused-vars": "warn"
    },
    settings: {
      next: {
        rootDir: "."
      },
      react: {
        version: "detect"
      }
    }
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts"
    ]
  }
];
