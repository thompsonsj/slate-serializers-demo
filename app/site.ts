/**
 * Canonical URLs for GitHub Pages deployment (see next.config.js basePath).
 */
export const SITE_ORIGIN = 'https://thompsonsj.github.io' as const
export const SITE_BASE_PATH = '/slate-serializers-demo' as const
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE_PATH}` as const

/** App-relative path (Next `basePath` prefixes this for Link/`next/link`). Absolute URL for crawlers/docs. */
export const SITE_LLMS_PATH = '/llms.txt' as const
export const SITE_LLMS_URL = `${SITE_URL}/llms.txt` as const
export const SITE_SITEMAP_URL = `${SITE_URL}/sitemap.xml` as const
export const SITE_ROBOTS_URL = `${SITE_URL}/robots.txt` as const

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
