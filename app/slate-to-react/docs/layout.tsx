import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { openGraphForPath } from '@/app/site'

export const metadata: Metadata = {
  title: 'SlateToReact — documentation',
  openGraph: openGraphForPath('/slate-to-react/docs'),
}

export default function SlateToReactDocsLayout({ children }: { children: ReactNode }) {
  return children
}
