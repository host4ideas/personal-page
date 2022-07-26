import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig(
  {
    // Enable Vue to support Vue components.
    integrations: [vue()],
  },
  {
    base: "/personal-page",
  },
  {
    site: "http://host4ideas.me/personal-page",
  }
);
