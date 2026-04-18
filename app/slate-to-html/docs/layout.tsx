import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'slateToHtml — documentation',
}

export default function SlateToHtmlDocsLayout({ children }: { children: ReactNode }) {
  return children
}
