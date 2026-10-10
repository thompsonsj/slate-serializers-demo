import { FC, ReactNode } from 'react'

export const DemoGrid: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="mt-8 grid gap-x-8 gap-y-10 lg:grid-cols-2">{children}</div>
)

export const DemoPanel: FC<{ title: ReactNode; children: ReactNode }> = ({ title, children }) => (
  <section className="min-w-0">
    <h2 className="mb-3 text-sm font-semibold text-gray-900">{title}</h2>
    {children}
  </section>
)

export const RenderedOutput: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="prose max-w-none rounded-md border border-gray-200 p-6">{children}</div>
)
