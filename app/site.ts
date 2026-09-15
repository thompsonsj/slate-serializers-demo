import type { Metadata } from 'next'

/**
 * Canonical URLs for this project’s GitHub Pages site
 * (`https://thompsonsj.github.io/slate-serializers-demo/`).
 *
 * Origin-root `/robots.txt` and the hub index live in `thompsonsj/thompsonsj.github.io`
 * (see `user-site/` in this repo and DEPLOY.md).
 */
export const SITE_ORIGIN = 'https://thompsonsj.github.io' as const
export const SITE_BASE_PATH = '/slate-serializers-demo' as const
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE_PATH}` as const

export const SITE_DESCRIPTION =
  'Documentation and interactive demos for slate-serializers: npm packages that serialize Slate.js editor content to HTML strings and parse HTML back to Slate nodes, render Slate to React components, produce DOM for custom pipelines, and emit template-style output (e.g. JSX or partial HTML).'

export const SITE_OG_TITLE =
  'slate-serializers — Slate.js serialization (HTML, React, DOM, templates)' as const

export const SITE_OG_SITE_NAME = 'slate-serializers demo' as const

/** App-relative path for Next `Link` (basePath is applied automatically). */
export const SITE_LLMS_PATH = '/llms.txt' as const
/**
 * Href for the static `public/llms.txt` file. Use a plain `<a>` (not `next/link`) —
 * client-side routing treats this as a missing App Router page and shows 404.
 * Include `basePath` because manual anchors do not get it automatically.
 */
export const SITE_LLMS_HREF = `${SITE_BASE_PATH}${SITE_LLMS_PATH}` as const
export const SITE_LLMS_URL = `${SITE_URL}/llms.txt` as const
export const SITE_SITEMAP_URL = `${SITE_URL}/sitemap.xml` as const
export const SITE_ROBOTS_URL = `${SITE_ORIGIN}/robots.txt` as const

/** Paths relative to SITE_BASE_PATH (leading slash, no trailing slash except ''). */
export const SITEMAP_PATHS: readonly string[] = [
  '',
  '/html-to-slate',
  '/html-to-slate/docs',
  '/html-to-slate/docs/payload',
  '/slate-to-dom/docs',
  '/slate-to-html',
  '/slate-to-html/docs',
  '/slate-to-html/docs/payload',
  '/slate-to-react',
  '/slate-to-react/docs',
  '/slate-to-react/docs/payload',
  '/slate-to-template',
  '/slate-to-template/docs',
]

export function sitePageUrl(path: string): string {
  if (path === '' || path === '/') {
    return `${SITE_URL}/`
  }
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

/**
 * Full Open Graph object for a route. Next.js shallow-merges `openGraph`, so
 * child segments must restate shared fields when they set `url`.
 */
export function openGraphForPath(path: string): NonNullable<Metadata['openGraph']> {
  return {
    title: SITE_OG_TITLE,
    description: SITE_DESCRIPTION,
    type: 'website',
    siteName: SITE_OG_SITE_NAME,
    url: sitePageUrl(path),
  }
}
