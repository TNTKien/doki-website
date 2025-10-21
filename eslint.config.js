import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";

import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["node_modules/", ".vitepress/cache", ".vitepress/dist"]),
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off", // causes errors when using prop ads with TypeScript
    },
  },
  eslintConfigPrettier,
]);
