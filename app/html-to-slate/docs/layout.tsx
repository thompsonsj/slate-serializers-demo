import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'htmlToSlate — documentation',
}

export default function HtmlToSlateDocsLayout({ children }: { children: ReactNode }) {
  return children
}
