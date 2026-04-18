import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Sidebar } from './components/Sidebar'
import { SITE_ORIGIN, SITE_URL } from './site'
import './globals.css'


const siteDescription =
  'Documentation and interactive demos for slate-serializers: npm packages that serialize Slate.js editor content to HTML strings and parse HTML back to Slate nodes, render Slate to React components, produce DOM for custom pipelines, and emit template-style output (e.g. JSX or partial HTML).'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: 'slate-serializers — docs & demos',
    template: '%s | slate-serializers',
  },
  description: siteDescription,
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
    title: 'slate-serializers — Slate.js serialization (HTML, React, DOM, templates)',
    description: siteDescription,
    type: 'website',
    url: '/slate-serializers-demo/',
    siteName: 'slate-serializers demo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'slate-serializers — Slate.js serialization docs & demos',
    description: siteDescription,
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
    description: siteDescription,
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
