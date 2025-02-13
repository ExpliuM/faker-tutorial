import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["babel.config.js", "wallaby.js"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
