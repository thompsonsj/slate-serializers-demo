'use client'

import { ModalProvider, ModalContainer } from '@faceless-ui/modal'
import type { ReactNode } from 'react'
import { PageHeadingBasic } from './components/PageHeadingBasic'
import { Grid } from './components/page-specific/grid'

export function HomeClient({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <PageHeadingBasic
        title="slate-serializers"
        description={
          <div className="max-w-prose">
            <div className="prose">
              <p>
                <strong>slate-serializers</strong> helps{' '}
                <a href="https://www.npmjs.com/package/slate">Slate.js</a> apps turn editor content into{' '}
                <strong>HTML</strong> and back, render it as <strong>React</strong> components, walk an intermediate{' '}
                <strong>DOM</strong> tree, or emit <strong>template-style</strong> output (e.g. JSX or partial HTML). Works
                in Node.js and the browser.
              </p>
            </div>
          </div>
        }
        className="p-6 bg-slate-200 rounded-sm"
      />
      {children}
      <div className="mt-6">
        <Grid />
      </div>
      <ModalContainer />
    </ModalProvider>
  )
}
