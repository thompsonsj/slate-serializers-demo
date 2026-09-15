import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { openGraphForPath } from '@/app/site'

export const metadata: Metadata = {
  title: 'slateToHtml — documentation',
  openGraph: openGraphForPath('/slate-to-html/docs'),
}

export default function SlateToHtmlDocsLayout({ children }: { children: ReactNode }) {
  return children
}
