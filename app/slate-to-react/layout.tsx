import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { openGraphForPath } from '@/app/site'

export const metadata: Metadata = {
  title: 'SlateToReact',
  description:
    'Render Slate.js values as React elements with @slate-serializers/react — configuration and examples.',
  openGraph: openGraphForPath('/slate-to-react'),
}

export default function SlateToReactLayout({ children }: { children: ReactNode }) {
  return children
}
