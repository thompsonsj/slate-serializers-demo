import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'slateToHtml — Payload CMS',
}

export default function SlateToHtmlPayloadDocsLayout({ children }: { children: ReactNode }) {
  return children
}
