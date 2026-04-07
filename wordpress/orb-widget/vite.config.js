import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/orb-widget.js",
      name: "AutonomsOrbWidget",
      fileName: () => "orb-widget.js",
      formats: ["iife"],
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});

