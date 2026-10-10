'use client'

import { ModalProvider, ModalContainer } from '@faceless-ui/modal'
import type { ReactNode } from 'react'
import { Grid } from './components/page-specific/grid'
import { SITE_LLMS_HREF } from './site'

export function HomeClient({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <div className="max-w-2xl">
        <header className="prose max-w-none">
          <h1>slate-serializers</h1>
          <p className="lead">
            Turn <a href="https://www.npmjs.com/package/slate">Slate.js</a> editor content into <strong>HTML</strong>{' '}
            and back, render it as <strong>React</strong> components, walk an intermediate <strong>DOM</strong> tree,
            emit <strong>template-style</strong> output, or export <strong>Markdown</strong>. Works in Node.js and the
            browser.
          </p>
          <p className="text-sm text-gray-600">
            Machine-readable overview for AI tools: <a href={SITE_LLMS_HREF}>llms.txt</a>
          </p>
        </header>
        <section className="mt-10" aria-labelledby="packages-heading">
          <h2 id="packages-heading" className="sr-only">
            Packages
          </h2>
          <Grid />
        </section>
        {children}
      </div>
      <ModalContainer />
    </ModalProvider>
  )
}
