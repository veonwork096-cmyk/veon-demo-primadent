// VEON demo base: technical setup only. Visual design comes from design/concept.md of each client.
import { defineConfig } from "astro/config";

// SITE_URL (public address of the demo) enables canonical, og:url and absolute URLs in JSON-LD.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
  devToolbar: { enabled: false },
});
