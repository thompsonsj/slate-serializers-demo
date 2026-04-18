import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Sidebar } from './components/Sidebar'
import './globals.css'


export const metadata: Metadata = {
  title: 'slate-serializers — docs & demos',
  description:
    'Interactive documentation for @slate-serializers: Slate to HTML, HTML to Slate, React, DOM, and template serializers.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  

  return (
    <html lang="en">
    <body>
      <div>
        <Sidebar />
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            {children} 
          </div>
        </main>
      </div>
    </body>
    </html>
  )
}
