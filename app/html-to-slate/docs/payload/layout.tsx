import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { openGraphForPath } from '@/app/site'

export const metadata: Metadata = {
  title: 'htmlToSlate — Payload CMS',
  openGraph: openGraphForPath('/html-to-slate/docs/payload'),
}

export default function HtmlToSlatePayloadDocsLayout({ children }: { children: ReactNode }) {
  return children
}
