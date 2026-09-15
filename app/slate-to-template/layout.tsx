import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { openGraphForPath } from '@/app/site'

export const metadata: Metadata = {
  title: 'slateToTemplate',
  description:
    'Serialize Slate.js trees to template-style output (HTML chunks, JSX, custom) with @slate-serializers/template.',
  openGraph: openGraphForPath('/slate-to-template'),
}

export default function SlateToTemplateLayout({ children }: { children: ReactNode }) {
  return children
}
