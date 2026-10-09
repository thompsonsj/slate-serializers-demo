import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { openGraphForPath } from '@/app/site'

export const metadata: Metadata = {
  title: 'slateToMarkdown — documentation',
  openGraph: openGraphForPath('/slate-to-markdown/docs'),
}

export default function SlateToMarkdownDocsLayout({ children }: { children: ReactNode }) {
  return children
}
