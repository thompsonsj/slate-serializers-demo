import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { sitePageUrl } from '@/app/site'

export const metadata: Metadata = {
  title: 'SlateToReact — Payload CMS',
  openGraph: {
    url: sitePageUrl('/slate-to-react/docs/payload'),
  },
}

export default function SlateToReactPayloadDocsLayout({ children }: { children: ReactNode }) {
  return children
}
