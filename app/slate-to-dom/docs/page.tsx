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
        From <code>@slate-serializers/dom</code>. Converts Slate JSON to a <code>htmlparser2</code> DOM (nodes use the
        same model as <code>domhandler</code>). <Link href="/slate-to-html/docs">slateToHtml</Link> uses this pipeline and
        then serializes to an HTML string—you only need <code>slateToDom</code> when you want to walk or mutate the
        DOM before serialization.
      </p>

      <p>
        Config uses the same shape as <code>slateToHtml</code>. Default:{' '}
        <a href={ghUrl('packages/dom/src/lib/config/default.ts')}>packages/dom/src/lib/config/default.ts</a>.
      </p>

      <h2>Usage</h2>
      <div className="not-prose">
        <Code lang="ts">{`import { slateToDom, slateToDomConfig } from '@slate-serializers/dom'

const slate = [{ type: 'p', children: [{ text: 'Hello' }] }]
const dom = slateToDom(slate, slateToDomConfig)
// import { Element, Text } from '@slate-serializers/dom'
// Pass nodes to dom-serializer or traverse with domutils.`}</Code>
      </div>

      <h2>Additional exports</h2>
      <p>
        Helpers such as <code>extractCssFromStyle</code>, <code>styleMapToAttribs</code>, and <code>isEmptyObject</code>{' '}
        are available for attribute and style work. You can also import the <code>ChildNode</code> type and the{' '}
        <code>Element</code> / <code>Text</code> constructors from <code>@slate-serializers/dom</code> or{' '}
        <code>@slate-serializers/html</code> (no separate <code>domhandler</code> dependency required).
      </p>

      <h2>
        <code>@slate-serializers/utilities</code>
      </h2>
      <p>
        A separate package with small shared helpers (nested property access, style object handling, etc.). Most apps
        only need <code>@slate-serializers/html</code> or <code>@slate-serializers/dom</code>; import utilities when you
        extend serializers.
      </p>

      <h2>Further reading</h2>
      <ul>
        <li>
          <Link href="/slate-to-html/docs">slateToHtml configuration</Link> — <code>markMap</code>,{' '}
          <code>elementTransforms</code>, and encoding options use the same DOM config shape.
        </li>
      </ul>
    </div>
  )
}
