// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact({ include: ["**/*.tsx"] }), sitemap()],

  output: "static",
  adapter: vercel(),

  prefetch: {
    prefetchAll: false, // APAGADO: No descarga los links solo por aparecer en pantalla
    defaultStrategy: "hover", // ENCENDIDO: Solo descarga cuando el usuario pone el mouse encima
  },
  image: {
    domains: ["pub-15b0928184294a4692cb0b949397344a.r2.dev"],
  },

  site: "https://adadet.org/",
});
