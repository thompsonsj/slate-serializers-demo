import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { sitePageUrl } from '@/app/site'

export const metadata: Metadata = {
  title: 'slateToTemplate',
  description:
    'Serialize Slate.js trees to template-style output (HTML chunks, JSX, custom) with @slate-serializers/template.',
  openGraph: {
    url: sitePageUrl('/slate-to-template'),
  },
}

export default function SlateToTemplateLayout({ children }: { children: ReactNode }) {
  return children
}
