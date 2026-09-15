/**
 * Build a static tree for this repo’s *project* GitHub Pages site.
 * Artifact paths are served under `/slate-serializers-demo/…` and meta-refresh
 * to the user-site origin root (`https://thompsonsj.github.io/…`).
 *
 * Keep PATHS in sync with `app/site.ts` → `SITEMAP_PATHS`.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE_ORIGIN = 'https://thompsonsj.github.io'

const PATHS = [
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

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'out-legacy-redirects')

function targetUrl(path) {
  if (path === '' || path === '/') return `${SITE_ORIGIN}/`
  return `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`
}

function redirectHtml(to) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Moved — slate-serializers</title>
  <meta http-equiv="refresh" content="0;url=${to}" />
  <link rel="canonical" href="${to}" />
  <script>location.replace(${JSON.stringify(to)})</script>
</head>
<body>
  <p>This page has moved to <a href="${to}">${to}</a>.</p>
</body>
</html>
`
}

function writeRedirect(relPath, to) {
  const filePath = join(outDir, relPath)
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, redirectHtml(to))
}

mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, '.nojekyll'), '')

for (const path of PATHS) {
  const to = targetUrl(path)
  if (path === '') {
    writeRedirect('index.html', to)
    continue
  }
  const trimmed = path.replace(/^\//, '')
  writeRedirect(join(trimmed, 'index.html'), to)
  writeRedirect(`${trimmed}.html`, to)
}

writeRedirect('404.html', targetUrl(''))

console.log(`Wrote legacy redirects → ${outDir}`)
