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
  content/          # Markdown posts (blog)
  layouts/          # Base + Post layouts
  pages/            # Home, about, resume, projects, blog, rss
  components/       # Blog list grid + pagination
  styles/           # Tailwind entry + globals
public/
  resume.pdf        # My resume
```

## Notable features

- Intuitive visual system with Tailwind v4 + custom palette.
- Markdown-driven blog with Shiki highlighting, tags, pagination, and RSS.
- Pagefind-ready markup (now generated automatically in `npm run build`).
- Cloudflare Web Analytics (IP)
