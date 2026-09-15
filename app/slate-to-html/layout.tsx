import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { openGraphForPath } from '@/app/site'

export const metadata: Metadata = {
  title: 'slateToHtml',
  description:
    'Serialize Slate.js content to HTML strings with @slate-serializers/html — demos, options, and Payload notes.',
  openGraph: openGraphForPath('/slate-to-html'),
}

export default function SlateToHtmlLayout({ children }: { children: ReactNode }) {
  return children
}
