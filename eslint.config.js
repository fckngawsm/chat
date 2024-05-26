import prettierConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    plugins: {
      "react-hooks": eslintReactHooks,
      react: eslintReact,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      ...prettierConfigPrettier.rules,
      "jest/no-focused-tests": "off",
      'indent': ["error", 2],
      'quotes': ["error", "double"],
      'semi': ["error", "always"],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "error",
      "@typescript-eslint/no-explicit-any": "off",
      'eqeqeq': "error",
      "@typescript-eslint/ban-ts-ignore": "off",
      "no-eval": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "no-unsafe-finally": "error",
    },
  },
];