'use client'

import Link from 'next/link'

const ENGINEERING =
  'https://github.com/thompsonsj/slate-serializers/blob/main/docs/engineering.md'

function CodeBlock({ children, lang }: { children: string; lang: string }) {
  return (
    <pre className="rounded-md bg-gray-900 p-4 text-sm text-gray-100 overflow-x-auto">
      <code className={`language-${lang}`}>{children}</code>
    </pre>
  )
}

export function GettingStarted() {
  return (
    <div className="prose max-w-none mb-10">
      <h2 className="text-2xl font-bold text-gray-900">Getting started</h2>
      <p>
        Install only the packages you need. Each serializer is published under <code>@slate-serializers/</code>{' '}
        on npm. The umbrella package <code>slate-serializers</code> re-exports the HTML and DOM serializers and
        their default configs—useful if you want a single dependency for server-side HTML ↔ Slate workflows.
      </p>

      <h3 className="text-lg font-semibold text-gray-900">Packages at a glance</h3>
      <div className="not-prose overflow-x-auto">
        <table className="min-w-full text-left text-sm border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 font-semibold border-b">npm package</th>
              <th className="p-3 font-semibold border-b">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-3 font-mono text-xs sm:text-sm">@slate-serializers/html</td>
              <td className="p-3">
                <code>slateToHtml</code>, <code>htmlToSlate</code>, and shared configs (depends on DOM internally).
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono text-xs sm:text-sm">@slate-serializers/dom</td>
              <td className="p-3">
                <code>slateToDom</code> — <code>htmlparser2</code> DOM nodes before stringifying to HTML. Use when
                you need to inspect or tweak the DOM first.{' '}
                <Link href="/slate-to-dom/docs" className="text-indigo-600 hover:underline">
                  Docs
                </Link>
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono text-xs sm:text-sm">@slate-serializers/react</td>
              <td className="p-3">
                <code>&lt;SlateToReact /&gt;</code> for React output with <code>config.dom</code> +{' '}
                <code>config.react.elementTransforms</code>.
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono text-xs sm:text-sm">@slate-serializers/template</td>
              <td className="p-3">
                <code>slateToTemplate</code> — top-level nodes as HTML strings or custom serializers (e.g. JSX).{' '}
                <Link href="/slate-to-template/docs" className="text-indigo-600 hover:underline">
                  Docs
                </Link>
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono text-xs sm:text-sm">@slate-serializers/utilities</td>
              <td className="p-3">
                Small helpers (e.g. style object handling) used across the monorepo; rarely needed directly unless you
                extend serializers.
              </td>
            </tr>
            <tr>
              <td className="p-3 font-mono text-xs sm:text-sm">slate-serializers</td>
              <td className="p-3">
                Meta package: re-exports <code>htmlToSlate</code>, <code>slateToHtml</code>, <code>slateToDom</code>,
                and related configs from the HTML/DOM packages.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-gray-900">Install</h3>
      <div className="not-prose space-y-4">
        <CodeBlock lang="bash">{`npm install @slate-serializers/html slate slate-react
# or, for React output:
npm install @slate-serializers/react slate slate-react`}</CodeBlock>
      </div>

      <h3 className="text-lg font-semibold text-gray-900">Minimal examples</h3>
      <p>HTML round-trip:</p>
      <div className="not-prose">
        <CodeBlock lang="ts">{`import { slateToHtml, htmlToSlate } from '@slate-serializers/html'

const slate = [{ type: 'p', children: [{ text: 'Hello' }] }]
const html = slateToHtml(slate)
const back = htmlToSlate(html)`}</CodeBlock>
      </div>
      <p>React output:</p>
      <div className="not-prose">
        <CodeBlock lang="tsx">{`import { SlateToReact } from '@slate-serializers/react'

export function RichText({ value }: { value: any[] }) {
  return <SlateToReact node={value} />
}`}</CodeBlock>
      </div>

      <h3 className="text-lg font-semibold text-gray-900">Slate version</h3>
      <p>
        Serializers target Slate&apos;s modern data model (≥ 0.50). This demo is built with{' '}
        <strong>Slate ~0.101</strong> and <strong>slate-react ~0.101</strong>. The library README notes historical
        testing on older releases; for compatibility detail and parser choices, see{' '}
        <a href={ENGINEERING} className="text-indigo-600 hover:underline">
          Engineering decisions
        </a>{' '}
        in the monorepo.
      </p>
    </div>
  )
}
