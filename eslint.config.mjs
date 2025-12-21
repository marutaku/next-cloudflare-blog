import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    "node_modules",
    ".pnp",
    "**/.pnp.js",
    ".yarn/install-state.gz",
    "coverage",
    ".next/",
    "out/",
    "build",
    "**/.DS_Store",
    "**/*.pem",
    "**/npm-debug.log*",
    "**/yarn-debug.log*",
    "**/yarn-error.log*",
    "**/.env*.local",
    "**/.vercel",
    "**/*.tsbuildinfo",
    "**/next-env.d.ts",
    "**/.pnp.*",
    ".yarn/*",
    "**/.env*",
  ]),
  {
    extends: [js.configs.recommended],
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
]);
