import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'slateToTemplate — documentation',
}

export default function SlateToTemplateDocsLayout({ children }: { children: ReactNode }) {
  return children
}
