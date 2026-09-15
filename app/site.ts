/**
 * Canonical URLs for the user GitHub Pages site (`thompsonsj/thompsonsj.github.io`).
 * This demo repo builds the site; legacy project Pages keep `/slate-serializers-demo/*` redirects.
 */
export const SITE_ORIGIN = 'https://thompsonsj.github.io' as const
/** Empty at the user-site root (no project subpath). */
export const SITE_BASE_PATH = '' as const
export const SITE_URL = SITE_ORIGIN

/** Former project-Pages prefix; used only for legacy redirect generation / docs. */
export const LEGACY_SITE_BASE_PATH = '/slate-serializers-demo' as const
export const LEGACY_SITE_URL = `${SITE_ORIGIN}${LEGACY_SITE_BASE_PATH}` as const

/** App-relative path for `next/link`. Absolute URL for crawlers/docs. */
export const SITE_LLMS_PATH = '/llms.txt' as const
export const SITE_LLMS_URL = `${SITE_URL}/llms.txt` as const
export const SITE_SITEMAP_URL = `${SITE_URL}/sitemap.xml` as const
export const SITE_ROBOTS_URL = `${SITE_URL}/robots.txt` as const

/** Paths relative to the site root (leading slash, no trailing slash except ''). */
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
