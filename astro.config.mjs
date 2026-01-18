// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact'
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact({ include: ['**/*.tsx'] })],

  adapter: node({
    mode: 'standalone',
  }),
});