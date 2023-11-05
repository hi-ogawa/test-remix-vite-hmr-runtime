import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  clearScreen: false,
  plugins: [remix(), tsconfigPaths()],
  optimizeDeps: {
    include: ["@remix-run/react"],
  },
});
