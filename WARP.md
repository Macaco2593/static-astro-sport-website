# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an Astro minimal starter project. Astro is a modern static site generator that supports multiple UI frameworks and focuses on shipping less JavaScript to the browser.

## Development Commands

All commands should be run from the root of the project:

- `npm run dev` - Start local development server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally before deploying
- `npm run astro ...` - Run Astro CLI commands (e.g., `npm run astro add`, `npm run astro check`)

## Architecture

### Project Structure

- `src/pages/` - File-based routing system. Each `.astro` or `.md` file becomes a route based on its filename
- `src/components/` - Place for Astro/React/Vue/Svelte/Preact components
- `public/` - Static assets (images, fonts, etc.) served as-is
- `astro.config.mjs` - Astro configuration file
- `tsconfig.json` - TypeScript configuration (extends `astro/tsconfigs/strict`)

### Astro Files (.astro)

Astro files have two sections:
1. **Frontmatter** (between `---` delimiters) - Server-side JavaScript/TypeScript code
2. **Template** - HTML-like syntax with component support

The frontmatter runs at build time, not in the browser.

## Development Notes

- TypeScript is configured with strict mode via `astro/tsconfigs/strict`
- The project uses ES modules (`"type": "module"` in package.json)
- Astro generates types automatically in `.astro/types.d.ts`
