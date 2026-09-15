import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Sidebar } from './components/Sidebar'
import {
  SITE_DESCRIPTION,
  SITE_OG_SITE_NAME,
  SITE_OG_TITLE,
  SITE_URL,
} from './site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: 'slate-serializers — docs & demos',
    template: '%s | slate-serializers',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Slate.js',
    'Slate editor',
    'rich text',
    'serialization',
    'slateToHtml',
    'htmlToSlate',
    'Slate to HTML',
    'HTML to Slate',
    'Slate to React',
    'slate-serializers',
    '@slate-serializers/html',
    '@slate-serializers/react',
    'slateToDom',
    'slateToTemplate',
  ],
  openGraph: {
    title: SITE_OG_TITLE,
    description: SITE_DESCRIPTION,
    type: 'website',
    siteName: SITE_OG_SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'slate-serializers — Slate.js serialization docs & demos',
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'slate-serializers',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    isBasedOn: 'https://github.com/thompsonsj/slate-serializers',
    featureList: [
      'Serialize Slate.js document JSON to HTML',
      'Parse HTML to Slate.js nodes',
      'Render Slate content as React components',
      'Serialize Slate to DOM or template-style output',
    ],
  }

  return (
    <html lang="en">
    <body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
