# dupedbyte.dev (Astro + Tailwind)

Personal site for Sagnik Chakraborty — projects, writing, and experiments. Built with Astro, Tailwind CSS, Markdown content, Shiki code highlighting, and ready for Cloudflare Pages + Web Analytics.

## Quickstart

```sh
npm install
npm run dev -- --port 3000
# npm run build && npm run preview
```

## Project layout

```
src/
  content/          # Markdown collections (blog)
  layouts/          # Base + Post layouts
  pages/            # Home, about, resume, projects, blog, rss
  components/       # Blog list grid + pagination
  styles/           # Tailwind entry + globals
public/
  resume.pdf        # Resume asset
```

## Notable features

- Green-forward visual system with Tailwind v4 + custom palette.
- Markdown-driven blog with Shiki highlighting, tags, pagination, and RSS.
- Pagefind-ready markup (now generated automatically in `npm run build`).
- Cloudflare Web Analytics script is included; set your beacon token in `BaseLayout.astro`.

## Deploy + search (Cloudflare Pages)

1. Connect the repo in Cloudflare Pages (Git integration).
2. Build command: `npm run build` (runs Astro + Pagefind).
3. Output directory: `dist`.
4. Framework preset: Astro. Node 20+ recommended (set `NODE_VERSION=20` in build env vars if needed).
5. Ensure `site` is set in `astro.config.mjs` (currently `https://dupedbyte.dev`).

## Content

- Blog posts live in `src/content/blog/` and use `PostLayout.astro`.
- Resume lives at `public/resume.pdf` and is embedded on `/resume`.

Feel free to adjust copy with details from the attached resume and keep iterating on the green palette.
