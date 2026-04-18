# Agent notes — slate-serializers-demo

This repository is a **Next.js (App Router) documentation and demo site** for the npm packages published from [**slate-serializers**](https://github.com/thompsonsj/slate-serializers). It is **not** the library source code.

## What users get from the libraries

- **Slate.js** rich-text content as JSON (`Descendant[]`).
- **HTML**: `slateToHtml` / `htmlToSlate` (`@slate-serializers/html`).
- **DOM** pipeline: `slateToDom` (`@slate-serializers/dom`).
- **React**: `<SlateToReact />` (`@slate-serializers/react`).
- **Templates / custom output**: `slateToTemplate` (`@slate-serializers/template`).

## Project commands

```bash
npm install
npm run dev      # http://localhost:3000 — basePath is /slate-serializers-demo
npm run build    # static export → out/
npm run test
npm run lint
npm run type-check
```

## Important config

- **`next.config.js`**: `output: 'export'`, **`basePath: '/slate-serializers-demo'`** (GitHub Pages). Local dev uses the same base path; links in the app should use root-relative paths starting with `/slate-serializers-demo` or `next/link` without hard-coding the origin.
- **Canonical site URL**: see `app/site.ts` (`SITE_URL`, `SITEMAP_PATHS`).

## Where things live

| Area | Path |
|------|------|
| Pages & routes | `app/**/page.tsx` |
| Shared UI | `app/components/` |
| Sidebar nav | `app/components/Sidebar/` |
| Serializer docs fixtures | `app/*/docs/fixtures/` |
| LLM-oriented summary | `public/llms.txt` (also linked from README) |
| Crawlers | `public/robots.txt`, `app/sitemap.ts` → `sitemap.xml` at build |

## Conventions

- Match existing patterns for imports, styling (Tailwind + `prose`), and Bright code blocks.
- Serializer **configs** for `@slate-serializers/react` are **flat** (`markMap`, `elementMap`, `elementTransforms` on the root `config` object), not nested under `dom` / `react`.

## Upstream

- **Library repo**: https://github.com/thompsonsj/slate-serializers  
- **Live demo site**: https://thompsonsj.github.io/slate-serializers-demo/
