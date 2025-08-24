# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `yarn dev` - Start development server
- `yarn build` - Build the project (includes sitemap generation)
- `yarn typecheck` - Run TypeScript type checking
- `yarn lint` - Run full linting (typecheck + ESLint + Prettier)
- `yarn format` - Format code (Prettier + ESLint with auto-fix)
- `yarn test:e2e` - Run Playwright end-to-end tests

## Architecture Overview

This is a Next.js 15 blog application configured for static export to Cloudflare Pages. The architecture combines:

### Content Management
- **Contentful CMS**: Primary content source via GraphQL API
- **Apollo Client**: GraphQL client for data fetching (`src/utils/apollo-client.ts`)
- **Markdown Processing**: Local markdown files processed with gray-matter and remark

### Static Generation
- **Next.js Export**: Configured for static generation (`output: "export"`)
- **Cloudflare Pages**: Deployment target configured via `wrangler.toml`
- **Sitemap**: Auto-generated using next-sitemap

### Key Directories
- `src/app/_components/`: Reusable components organized by feature
  - `common/`: Global components (header, footer, image)
  - `about/`: About page specific components
- `src/libs/`: Core business logic (article processing)
- `src/utils/`: Utilities (Apollo client, Contentful integration, constants)

### Data Flow
1. Content fetched from Contentful via Apollo Client (`src/utils/contentful.ts`)
2. Article metadata and content processed through `src/libs/articles.ts`
3. Static pages generated at build time with proper SEO metadata

### Styling
- **TailwindCSS v4**: Utility-first styling
- **SCSS Modules**: Component-specific styles (e.g., `articles.module.scss`)
- **Icons**: TailwindCSS Icons plugin with MDI and Simple Icons collections

### Testing
- **Playwright**: Visual regression testing for homepage and about page
- **Multi-browser**: Chromium, Firefox, and mobile Chromium testing
- Test files in `tests/e2e/` directory

## Project Structure Notes
- Uses Yarn v3 as package manager
- Japanese font (Noto Sans JP) loaded via next/font
- Environment-aware base URL handling for Cloudflare Pages
- Static assets served from `public/` directory