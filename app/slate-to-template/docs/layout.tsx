import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { openGraphForPath } from '@/app/site'

export const metadata: Metadata = {
  title: 'slateToTemplate — documentation',
  openGraph: openGraphForPath('/slate-to-template/docs'),
}

export default function SlateToTemplateDocsLayout({ children }: { children: ReactNode }) {
  return children
}
