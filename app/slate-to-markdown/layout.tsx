import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { openGraphForPath } from '@/app/site'

export const metadata: Metadata = {
  title: 'slateToMarkdown',
  description:
    'Serialize Slate.js editor content to GitHub Flavored Markdown with @slate-serializers/markdown.',
  openGraph: openGraphForPath('/slate-to-markdown'),
}

export default function SlateToMarkdownLayout({ children }: { children: ReactNode }) {
  return children
}
