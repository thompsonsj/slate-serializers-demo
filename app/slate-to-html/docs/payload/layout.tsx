import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { openGraphForPath } from '@/app/site'

export const metadata: Metadata = {
  title: 'slateToHtml — Payload CMS',
  openGraph: openGraphForPath('/slate-to-html/docs/payload'),
}

export default function SlateToHtmlPayloadDocsLayout({ children }: { children: ReactNode }) {
  return children
}
