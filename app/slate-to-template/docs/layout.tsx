import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { sitePageUrl } from '@/app/site'

export const metadata: Metadata = {
  title: 'slateToTemplate — documentation',
  openGraph: {
    url: sitePageUrl('/slate-to-template/docs'),
  },
}

export default function SlateToTemplateDocsLayout({ children }: { children: ReactNode }) {
  return children
}
