import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'htmlToSlate — Payload CMS',
}

export default function HtmlToSlatePayloadDocsLayout({ children }: { children: ReactNode }) {
  return children
}
