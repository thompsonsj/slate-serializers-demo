import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'SlateToReact',
  description:
    'Render Slate.js values as React elements with @slate-serializers/react — configuration and examples.',
}

export default function SlateToReactLayout({ children }: { children: ReactNode }) {
  return children
}
