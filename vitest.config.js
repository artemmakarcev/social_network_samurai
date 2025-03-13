import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environments: "jsdom",
    browser: {
      enabled: true,
      css: true,
      headless: true,
      provider: "playwright",
      instances: [{ browser: "chromium" }],
    },
  },
  resolveSpecials: true,
  nodeResolve: {
    browser: true,
  },
});

// Vitest config file for testing React components with Redux and React Router
