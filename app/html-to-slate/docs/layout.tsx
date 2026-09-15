import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { openGraphForPath } from '@/app/site'

export const metadata: Metadata = {
  title: 'htmlToSlate — documentation',
  openGraph: openGraphForPath('/html-to-slate/docs'),
}

export default function HtmlToSlateDocsLayout({ children }: { children: ReactNode }) {
  return children
}
