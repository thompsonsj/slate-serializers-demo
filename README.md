# slate-serializers-demo

Interactive **documentation and demo site** for [**slate-serializers**](https://github.com/thompsonsj/slate-serializers): serializers that convert [Slate](https://www.npmjs.com/package/slate) JSON to and from HTML, DOM, React, and template-style output.

**Live site:** [thompsonsj.github.io/slate-serializers-demo](https://thompsonsj.github.io/slate-serializers-demo)

**LLM / tool summary:** [public/llms.txt](public/llms.txt) (also served at `/slate-serializers-demo/llms.txt` on the live site) — short, keyword-dense description of what slate-serializers does for Slate.js (HTML, React, DOM, templates).

The library source lives in a separate repository; this app consumes the published `@slate-serializers/*` packages from npm.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command            | Description                |
| ------------------ | -------------------------- |
| `npm run dev`      | Next.js dev server         |
| `npm run build`    | Production build           |
| `npm run lint`     | ESLint                     |
| `npm run type-check` | TypeScript (`tsc --noEmit`) |
| `npm run test`     | Vitest                     |

## Repository layout

- `app/` — Next.js App Router pages: overview, per-serializer **Docs** and **Demo** routes, Payload-specific docs.
- `app/components/` — Shared UI (sidebar, editors, demos).

## Related

- **Library (monorepo):** [github.com/thompsonsj/slate-serializers](https://github.com/thompsonsj/slate-serializers)
- **npm meta package:** [slate-serializers](https://www.npmjs.com/package/slate-serializers)
