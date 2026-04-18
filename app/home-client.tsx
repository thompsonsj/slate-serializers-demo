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
                A collection of serializers to convert{' '}
                <a href="https://www.npmjs.com/package/slate">Slate</a> JSON objects to various formats and vice versa.
                Designed to work in both Node.js and browser environments.
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
