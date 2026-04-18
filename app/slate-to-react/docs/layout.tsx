import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'SlateToReact — documentation',
}

export default function SlateToReactDocsLayout({ children }: { children: ReactNode }) {
  return children
}
