import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'SlateToReact — Payload CMS',
}

export default function SlateToReactPayloadDocsLayout({ children }: { children: ReactNode }) {
  return children
}
