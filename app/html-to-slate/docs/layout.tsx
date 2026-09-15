import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { sitePageUrl } from '@/app/site'

export const metadata: Metadata = {
  title: 'htmlToSlate — documentation',
  openGraph: {
    url: sitePageUrl('/html-to-slate/docs'),
  },
}

export default function HtmlToSlateDocsLayout({ children }: { children: ReactNode }) {
  return children
}
