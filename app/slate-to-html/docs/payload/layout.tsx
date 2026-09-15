import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { sitePageUrl } from '@/app/site'

export const metadata: Metadata = {
  title: 'slateToHtml — Payload CMS',
  openGraph: {
    url: sitePageUrl('/slate-to-html/docs/payload'),
  },
}

export default function SlateToHtmlPayloadDocsLayout({ children }: { children: ReactNode }) {
  return children
}
