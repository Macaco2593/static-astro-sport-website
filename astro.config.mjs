// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact'
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact({ include: ['**/*.tsx'] }), mdx()],

  adapter: node({
    mode: 'standalone',
  }),
});