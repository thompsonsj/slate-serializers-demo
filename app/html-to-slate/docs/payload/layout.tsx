import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { sitePageUrl } from '@/app/site'

export const metadata: Metadata = {
  title: 'htmlToSlate — Payload CMS',
  openGraph: {
    url: sitePageUrl('/html-to-slate/docs/payload'),
  },
}

export default function HtmlToSlatePayloadDocsLayout({ children }: { children: ReactNode }) {
  return children
}
