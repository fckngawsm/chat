module.exports = {
  parser: "@typescript-eslint/parser",
  env: { node: true, "jest/globals": true },
  extends: ["prettier", "plugin:@typescript-eslint/recommended"],
  plugins: ["prettier", "@typescript-eslint", "react", "jest"],
  rules: {
    "jest/no-focused-tests": "off",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-var": "error",
    "prefer-const": "error",
    "no-console": "warn",
    eqeqeq: "error",
    "@typescript-eslint/ban-ts-ignore": "off",
    "no-eval": "error",
    "react/jsx-uses-vars": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "no-unsafe-finally": "error",
    "valid-jsdoc": "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "all",
      },
    ],
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/require-ts-comment-description": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  settings: {
    "import/resolver": {},
  },

  overrides: [
    {
      files: ["*.tsx", "*.jsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  env: {
    node: true,
  },
};
