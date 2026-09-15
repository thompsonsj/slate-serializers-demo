import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { sitePageUrl } from '@/app/site'

export const metadata: Metadata = {
  title: 'htmlToSlate',
  description:
    'Parse HTML into Slate.js nodes and serialize Slate to HTML using @slate-serializers/html — demos and docs.',
  openGraph: {
    url: sitePageUrl('/html-to-slate'),
  },
}

export default function HtmlToSlateLayout({ children }: { children: ReactNode }) {
  return children
}
