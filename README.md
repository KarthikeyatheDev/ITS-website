# ITS South East Residency — Static Website

This repository contains a static website for a hotel built with Vite, React, TypeScript and Tailwind CSS. It is intended to be run as a static site (development with Vite or a built `dist/` served by a static server).

## Contents
- Source: `src/` — React components, pages, styles and assets
- Public: `public/` — static assets served as-is (`robots.txt`, `sitemap.xml`, `og-image.svg`, `favicon.svg`, `_redirects`)
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
 - The site is deployed to Netlify at: `https://itshotelwebsite.netlify.app` (canonical, OG and sitemap were updated to this domain).
 - The original Lovable favicon was replaced with `public/favicon.svg`. If you still see the old icon, clear browser cache or verify the deployed `favicon.svg` is accessible.

Netlify-specific notes
- A `_redirects` file is included in `public/` to enable SPA routing (`/* /index.html 200`). Netlify will honor this on deploy.
- After pushing changes to your Git repository or triggering a Netlify deploy, verify these URLs:
	- `https://itshotelwebsite.netlify.app/robots.txt`
	- `https://itshotelwebsite.netlify.app/sitemap.xml`
	- `https://itshotelwebsite.netlify.app/og-image.svg`
	- `https://itshotelwebsite.netlify.app/favicon.svg`

Social preview verification
- Use the Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/ to refresh cached OG previews.
- Use the Twitter Card Validator: https://cards-dev.twitter.com/validator to confirm Twitter preview.

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

This is a static site — deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.). For Netlify, push to your connected Git repo or drag the site to Netlify; Netlify will serve the `public/_redirects` file for SPA routing and the files in `public/` at the root of the deployed site.

After deploy, update any domain settings (if using a custom domain) and confirm `rel="canonical"`, `og:url`, and `twitter:url` point to your final domain.



## Technologies

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS