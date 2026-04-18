import { Code } from 'bright'
import { ghUrl } from '@/app/utilities/docs'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="prose max-w-none">
      <h1>
        <code>slateToDom</code>
      </h1>

      <p>
        From <code>@slate-serializers/dom</code>. Converts Slate JSON to a <code>htmlparser2</code> DOM (via{' '}
        <code>domhandler</code> nodes). <Link href="/slate-to-html/docs">slateToHtml</Link> uses this pipeline and
        then serializes to an HTML string—you only need <code>slateToDom</code> when you want to walk or mutate the
        DOM before serialization.
      </p>

      <ul>
        <li>
          Implementation:{' '}
          <a href={ghUrl('packages/dom/src/lib/serializers.ts')}>packages/dom/src/lib/serializers.ts</a>
        </li>
        <li>
          Default config (shared shape with <code>slateToHtml</code>):{' '}
          <a href={ghUrl('packages/dom/src/lib/config/default.ts')}>packages/dom/src/lib/config/default.ts</a>
        </li>
        <li>
          Core conversion:{' '}
          <a href={ghUrl('packages/dom/src/lib/utilities/convert-slate.ts')}>
            packages/dom/src/lib/utilities/convert-slate.ts
          </a>{' '}
          (<code>convertSlate</code> is also exported for advanced use).
        </li>
      </ul>

      <h2>Usage</h2>
      <div className="not-prose">
        <Code lang="ts">{`import { slateToDom, slateToDomConfig } from '@slate-serializers/dom'

const slate = [{ type: 'p', children: [{ text: 'Hello' }] }]
const dom = slateToDom(slate, slateToDomConfig)
// domhandler Document / nodes — pass to dom-serializer or traverse with domutils`}</Code>
      </div>

      <h2>Additional exports</h2>
      <p>
        The package also exports helpers such as <code>extractCssFromStyle</code>, <code>styleMapToAttribs</code>, and{' '}
        <code>isEmptyObject</code> for working with attributes and styles. See{' '}
        <a href={ghUrl('packages/dom/src/index.ts')}>packages/dom/src/index.ts</a>.
      </p>

      <h2>
        <code>@slate-serializers/utilities</code>
      </h2>
      <p>
        A separate package with small shared helpers (nested property access, style object handling, etc.). Most apps
        consume serializers through <code>@slate-serializers/html</code> or <code>dom</code> without importing
        utilities directly; reach for it when you extend or debug serializers.
      </p>
      <p>
        Source: <a href={ghUrl('packages/utilities/src/index.ts')}>packages/utilities/src/index.ts</a>.
      </p>

      <h2>Further reading</h2>
      <ul>
        <li>
          <a href="https://github.com/thompsonsj/slate-serializers/blob/main/docs/engineering.md">
            Engineering decisions
          </a>{' '}
          — Slate compatibility, <code>htmlparser2</code>, whitespace.
        </li>
        <li>
          <Link href="/slate-to-html/docs">slateToHtml configuration</Link> — <code>markMap</code>,{' '}
          <code>elementTransforms</code>, and encoding options apply to the same DOM config type.
        </li>
      </ul>
    </div>
  )
}
