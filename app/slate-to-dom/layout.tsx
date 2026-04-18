import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'slateToDom',
  description:
    'Serialize Slate.js to htmlparser2 DOM nodes with @slate-serializers/dom before HTML or custom processing.',
}

export default function SlateToDomLayout({ children }: { children: ReactNode }) {
  return children
}
