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
npm run dev      # http://localhost:3000/slate-serializers-demo (basePath)
npm run build    # static export → out/
npm run test
npm run lint
npm run type-check
```

## Important config

- **`next.config.js`**: `output: 'export'`, **`basePath: '/slate-serializers-demo'`** (project GitHub Pages).
- **User hub** (origin `/` + `/robots.txt`): source in `user-site/`, published to `thompsonsj/thompsonsj.github.io` — see [DEPLOY.md](DEPLOY.md).
- **Canonical project URL**: see `app/site.ts` (`SITE_URL`, `SITEMAP_PATHS`).

## Where things live

| Area | Path |
|------|------|
| Pages & routes | `app/**/page.tsx` |
| Shared UI | `app/components/` |
| Sidebar nav | `app/components/Sidebar/` |
| Serializer docs fixtures | `app/*/docs/fixtures/` |
| LLM-oriented summary | `public/llms.txt` |
| Project crawlers | `public/robots.txt`, `app/sitemap.ts` |
| Origin hub source | `user-site/` |

## Conventions

- Match existing patterns for imports, styling (Tailwind + `prose`), and Bright code blocks.
- Target **`@slate-serializers/*` ^2.6.0** in `package.json`. Serializer **configs** for `@slate-serializers/react` are **flat** (`markMap`, `elementMap`, `elementTransforms` on the root `config` object), not nested under `dom` / `react`.
- Import **`Element` and `Text` constructors** (and `import type { ChildNode }`) from **`@slate-serializers/html`** or **`slate-serializers`** — not from `domhandler` directly (re-exports; see upstream PR #218).

## Dependency upgrade playbook

Inferred from past PRs (`YYYYMMDD-upgrade-dependencies`, `upgrade-next`, `upgrade-tailwind-3-to-4`). There is no separate tooling script.

1. **Branch** — `YYYYMMDD-upgrade-dependencies` for routine bumps; named topic branches for framework majors.
2. **Routine bumps** — Prefer `package.json` + lockfile only. Keep `next` and `eslint-config-next` on the **same** version. Stay within current majors unless intentional (do not auto-jump `slate` 0.12x, TypeScript 7, ESLint 10, Vitest 5).
3. **Framework majors** — Separate PRs; use official migrators when they exist (e.g. `npx @tailwindcss/upgrade`). Expect config/code follow-ups (ESLint flat config, React 19 types/`overrides`, Tailwind class renames).
4. **`@slate-serializers/*`** — Bump all packages together. Treat as a **docs PR** when the release notes include API/config changes (fixtures, option docs, Getting Started version note).
5. **Verify** — `npm run lint && npm run type-check && npm run test && npm run build` (CI also checks static export files under `out/`).
6. **Known pitfall (2026-09)** — `vitest@4.1.11` can trip an npm Arborist `edgesOut` crash with the current Vite 8 peer graph; leave Vitest on `^4.1.4` until that clears, or bump Vitest in isolation after confirming `npm install` succeeds.

## Upstream

- **Library repo**: https://github.com/thompsonsj/slate-serializers  
- **Live demo site**: https://thompsonsj.github.io/slate-serializers-demo/
- **User hub**: https://thompsonsj.github.io/
