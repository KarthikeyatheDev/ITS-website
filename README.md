# ITS South East Residency — Static Website

This repository contains a static website for a hotel built with Vite, React, TypeScript and Tailwind CSS. It is intended to be run as a static site (development with Vite or a built `dist/` served by a static server).

## Contents
- Source: `src/` — React components, pages, styles and assets
- Public: `public/` — static assets served as-is (`robots.txt`, `sitemap.xml`, `og-image.svg`, `favicon.ico`)
- Config: `vite.config.ts`, `tailwind.config.ts`, `tsconfig.json`

## Quick start (development)

Requirements: Node.js (16+ recommended) and npm or yarn.

```bash
# clone
git clone <YOUR_REPO_URL>
cd hotel_website

# install deps
npm install

# start dev server
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

## Build & preview (production)

```bash
# build
npm run build

# preview the production build
npm run preview

# or serve the generated 'dist' with a static server
npx http-server dist
```

To view the site without Node, build the project and open the served `dist` folder in a browser.

## Static-only (open index.html directly)

The project uses ES module imports and a build step. Opening `index.html` via `file://` will not run the React app as-is. To get a static site you must either:
- Build and serve `dist/` with a simple static server (recommended), or
- Create a pre-built `dist/` and keep it in the repo (not recommended for source repos).

## SEO and production notes

- `index.html` contains meta tags (title, description), Open Graph and Twitter cards. Update the `rel="canonical"` and the OG/Twitter `og:url`/`twitter:url` values to your deployed domain.
- `public/sitemap.xml` is present as a minimal placeholder. Replace or regenerate it to include your real URLs.
- `public/robots.txt` references `/sitemap.xml` and allows crawling; update if you need custom crawl rules.
- A local OG image placeholder exists at `public/og-image.svg`. Replace with your final social image and ensure the path is correct after deployment.

Performance tips
- Images in `src/assets` should be optimized and converted to WebP/AVIF for better page speed.
- The project uses a Google Fonts import in `src/index.css`. Consider self-hosting critical fonts or using a font-display strategy to reduce render-blocking.
- The Google Maps iframe in `src/components/LocationSection.tsx` increases load; consider using a click-to-load static image for better performance.

Accessibility & indexability
- Navigation links are standard anchor tags (`#rooms`, `#contact`) so crawlers and accessibility tools can follow them.
- Headings (H1/H2) are used across sections; ensure they map correctly to content hierarchy.
- Ensure all images have descriptive `alt` attributes (hero and room images include `alt` text).

## Project structure (excerpt)

- `src/main.tsx` — app entry
- `src/App.tsx` — top-level routing/structure
- `src/components/` — site sections (Hero, Rooms, Contact, Location, Footer, Header)
- `src/assets/` — images used on the site
- `public/robots.txt`, `public/sitemap.xml`, `public/og-image.svg`

## Useful commands

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — preview production bundle locally
- `npm run lint` — run ESLint


## Deployment

This is a static site — deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.). Update canonical/OG URLs and ensure `robots.txt` / `sitemap.xml` point to your deployed domain.

## Troubleshooting
- If images do not appear after build, ensure asset imports in `src` resolve correctly and check the `dist` output paths.
- If social previews do not update, confirm the deployed `og:image` path is accessible and use the platform's debugger (Facebook Sharing Debugger, Twitter Card Validator) to refresh.

## Contact / Next steps

If you'd like, I can:
- generate a full sitemap for this repo and commit it to `public/sitemap.xml`,
- create an image-optimization script to produce WebP assets and update imports, or
- add a small `postbuild` script to auto-generate the sitemap.

Tell me which of the above you'd like me to implement and I'll update the repository.

Requirements: Node.js and npm/yarn.

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

To view the static site without Node, open `index.html` in your browser from the `public` folder or the project root (depending on your build output).

## Technologies

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Notes

- All references to external platform-specific services have been removed. Replace any hosting URLs with your preferred provider when deploying.
- For standalone usage, open `index.html` in a browser or use a simple static server such as `npx http-server`.
