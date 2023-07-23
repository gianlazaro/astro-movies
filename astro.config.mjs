import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch()],
  output: "server",
  adapter: vercel(),
  experimental: {
    assets: true,
    viewTransitions: true,
  },
});
