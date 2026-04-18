import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'htmlToSlate',
  description:
    'Parse HTML into Slate.js nodes and serialize Slate to HTML using @slate-serializers/html — demos and docs.',
}

export default function HtmlToSlateLayout({ children }: { children: ReactNode }) {
  return children
}
