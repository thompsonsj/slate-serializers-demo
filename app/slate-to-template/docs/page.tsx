import { Code } from 'bright'
import { ghUrl } from '@/app/utilities/docs'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="prose max-w-none">
      <h1>
        <code>slateToTemplate</code>
      </h1>

      <p>
        From <code>@slate-serializers/template</code>. Renders each <strong>top-level</strong> Slate node to either a
        string of HTML (via the same pipeline as <Link href="/slate-to-html/docs">slateToHtml</Link>) or a custom
        value from your configuration. Framework-agnostic: custom serializers can return React/Vue/Astro nodes or
        any value your app knows how to mount.
      </p>

      <ul>
        <li>
          Default config:{' '}
          <a href={ghUrl('packages/template/src/lib/config/default.ts')}>
            packages/template/src/lib/config/default.ts
          </a>
        </li>
        <li>
          Payload:{' '}
          <a href={ghUrl('packages/template/src/lib/config/payload.ts')}>
            packages/template/src/lib/config/payload.ts
          </a>
        </li>
        <li>
          Serializer implementation:{' '}
          <a href={ghUrl('packages/template/src/lib/serializers.ts')}>packages/template/src/lib/serializers.ts</a>
        </li>
      </ul>

      <h2>Basic usage</h2>
      <p>Without custom serializers, each block becomes an HTML string (same idea as serializing one top-level node at a time with <code>slateToHtml</code>).</p>
      <div className="not-prose">
        <Code lang="ts">{`import { slateToTemplate, slateToTemplateConfig } from '@slate-serializers/template'

const slate = [
  { type: 'h1', children: [{ text: 'Heading 1' }] },
  { type: 'p', children: [{ text: 'Paragraph 1' }] },
]

const out = slateToTemplate(slate, slateToTemplateConfig)
// string[] e.g. ["<h1>Heading 1</h1>", "<p>Paragraph 1</p>"]`}</Code>
      </div>

      <h2>
        <code>customElementSerializers</code>
      </h2>
      <p>
        Map a Slate <code>type</code> to a function that returns a non-HTML value (for example JSX). Unmapped types
        fall back to <code>slateToHtml([node], config)</code> for that node.
      </p>
      <div className="not-prose">
        <Code lang="ts">{`import {
  slateToTemplateConfig,
  type SlateToTemplateConfig,
} from '@slate-serializers/template'

const config: SlateToTemplateConfig = {
  ...slateToTemplateConfig,
  customElementSerializers: {
    button: ({ node }) =>
      \`<button class="\${node.buttonType ?? 'primary'}">\${node.children?.[0]?.text ?? ''}</button>\`,
  },
}`}</Code>
      </div>
      <p>
        The library README shows returning a function in some examples—your custom serializer may return a string,
        JSX, or another renderable depending on how you consume the resulting array.
      </p>

      <h2>Relationship to other packages</h2>
      <ul>
        <li>
          <strong>
            <Link href="/slate-to-html/docs">slateToHtml</Link>
          </strong>{' '}
          — always produces an HTML string for the whole document.
        </li>
        <li>
          <strong>
            <Link href="/slate-to-react/docs">SlateToReact</Link>
          </strong>{' '}
          — React component output with <code>config.dom</code> + <code>config.react.elementTransforms</code>.
        </li>
        <li>
          <strong>slateToTemplate</strong> — one output slot per top-level node; mix HTML strings and custom outputs.
        </li>
      </ul>

      <p>
        <Link href="/slate-to-template">Try the interactive demo</Link>.
      </p>
    </div>
  )
}
