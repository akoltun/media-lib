import { defineConfig } from "oxlint";

export default defineConfig({
  options: {
    typeAware: true,
  },
  categories: {
    correctness: "error",
    perf: "error",
    style: "error",
    suspicious: "warn",
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {},
  plugins: ["import", "promise", "typescript"],
  rules: {
    "eslint/sort-imports": "off",
    "import/exports-last": "off",
    "import/no-named-export": "off",
    "import/prefer-default-export": "off",
    "init-declarations": "off",
    "no-duplicate-imports": ["error", { allowSeparateTypeImports: true }],
    "no-magic-numbers": "off",
    "typescript/no-floating-promises": "error",
    "typescript/no-misused-promises": "error",
    "typescript/await-thenable": "error",
    "typescript/no-unsafe-argument": "error",
    "typescript/no-unsafe-assignment": "error",
    "typescript/no-unsafe-call": "error",
    "typescript/no-unsafe-return": "error",
    "typescript/no-unsafe-member-access": "error",
    "typescript/no-unnecessary-type-assertion": "warn",
    "typescript/no-unnecessary-condition": "warn",
    "typescript/prefer-nullish-coalescing": "warn",
    "typescript/prefer-optional-chain": "warn",
    "typescript/switch-exhaustiveness-check": "error",
  },
  ignorePatterns: ["**", "!src/**", "!tests/**"],
  overrides: [
    {
      files: ["src/**/*.tsx", "src/**/*.jsx"],
      plugins: ["react"],
      rules: {
        "react/react-in-jsx-scope": "off",
      },
    },
    {
      files: ["src/**/*.test.ts", "src/**/*.test.tsx", "src/**/*.spec.ts", "src/**/*.spec.tsx"],
      plugins: ["vitest"],
      rules: {
        "typescript/no-unsafe-assignment": "off",
      },
    },
  ],
});
