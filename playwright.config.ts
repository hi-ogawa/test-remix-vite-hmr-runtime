import process from "node:process";
import { defineConfig } from "@playwright/test";

const PORT = 4456;

export default defineConfig({
  testDir: "e2e",
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "on-first-retry",
  },
  timeout: 10 * 60 * 1000,
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
  webServer: {
    command: `pnpm dev --port ${PORT}`,
    port: PORT
  }
});
