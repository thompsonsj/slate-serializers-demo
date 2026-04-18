import type { MetadataRoute } from 'next'
import { SITEMAP_PATHS, sitePageUrl } from './site'

/** Required for `output: 'export'` so the sitemap is emitted to `out/` at build time. */
export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((path) => ({
    url: sitePageUrl(path),
    lastModified: new Date(),
    changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
    priority: path === '' ? 1 : path.endsWith('/docs') ? 0.85 : 0.75,
  }))
}
