import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'slateToTemplate',
  description:
    'Serialize Slate.js trees to template-style output (HTML chunks, JSX, custom) with @slate-serializers/template.',
}

export default function SlateToTemplateLayout({ children }: { children: ReactNode }) {
  return children
}
