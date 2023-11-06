import { defineConfig } from "@playwright/test";

const PORT = 4456;

export default defineConfig({
  testDir: "e2e",
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
  webServer: {
    command: `npm run dev -- --port ${PORT}`,
    port: PORT
  }
});
