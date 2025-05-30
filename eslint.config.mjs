import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  js.configs.recommended,
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      // Your custom rules here
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
    },
    settings: {
      next: {
        rootDir: ".",
      },
    },
  },
];

export default eslintConfig;
