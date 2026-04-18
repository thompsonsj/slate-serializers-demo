import { Code } from "bright"
import { slateToHtml } from '@slate-serializers/html'
import { ghUrl } from "@/app/utilities/docs"
import Link from "next/link"

// fixtures
import { defaultExample, defaultExampleSlate } from "./fixtures/default"
import {
  markMapExample,
  markMapExampleSlate,
  markMapHtmlConfig,
} from "./fixtures/markMap"
import { markMapDemoConfig } from "./fixtures/markMap.demo"
import {
  elementMapExample,
  elementMapExampleSlate,
  elementMapHtmlConfig,
} from "./fixtures/elementMap"
import { elementMapDemoConfig } from "./fixtures/elementMap.demo"
import { markTransformsExample, markTransformsExampleSlate, markTransformsHtmlConfig } from "./fixtures/markTransforms"
import {
  elementTransformsExample,
  elementTransformsExampleSlate,
  elementTransformsHtmlConfig,
} from "./fixtures/elementTransforms"
import { elementTransformsDemoConfig } from "./fixtures/elementTransforms.demo"
import { SlateToReact } from "@slate-serializers/react"

const DefaultConfigListItem = () => <li>Default: <a href={ghUrl("packages/react/src/lib/config/default.tsx")}>packages/react/src/lib/config/default.tsx</a>.</li>

export default function Page() {
   
  return <div className="prose">
    <h1><code>SlateToReact</code></h1>

    <ul>
      <li><a href="#default">Default</a></li>
      <li><a href="#configuration">Configuration</a></li>
      <li><a href="#starting-point">Starting point</a><ul>
        <li><a href="#payloadcms">Payload CMS</a></li>
      </ul></li>
      <li>
        <a href="#options">Options</a>
        <ul>
          <li><a href="#markmap"><code>markMap</code></a></li>
          <li><a href="#elementmap"><code>elementMap</code></a></li>
          <li><a href="#marktransforms"><code>markTransforms</code></a></li>
          <li><a href="#elementtransforms"><code>elementTransforms</code></a></li>
          <li><a href="#elementattributetransform"><code>elementAttributeTransform</code></a></li>
          <li><a href="#formatting"><code>formatting</code></a></li>
          <li><a href="#defaulttag"><code>defaultTag</code></a></li>
        </ul>
      </li>
    </ul>

    <p>
      The <code>&lt;SlateToReact&gt;</code> component uses a nested configuration object: <code>dom</code> holds the same options as <Link href="/slate-to-html/docs"><code>slateToHtml</code></Link> (mark and element mapping, formatting, and so on), while <code>react.elementTransforms</code> supplies React components for element types that need them.
    </p>

    <h2 id="default">Default</h2>

    <p>By default, <code>SlateToReact</code> incorporates transformation rules based on the example in <a href="https://docs.slatejs.org/concepts/10-serializing#deserializing">Deserializing | Serializing | Slate</a>.</p>

    <div className="not-prose">
      <Code lang="js">{defaultExample}</Code>
      <Code lang="html" title="output.html (equivalent)">{slateToHtml(defaultExampleSlate)}</Code>
    </div>

    <h3>Output</h3>

    <div className="border p-4">
      <SlateToReact node={defaultExampleSlate} />
    </div>

    <h2 id="configuration">Configuration</h2>

    <p>Slate JS has a <strong>schema-less core</strong>. It makes few assumptions about the schema of the data you will be transforming. See <a href="https://docs.slatejs.org/#principles">Principles | Introduction | Slate</a></p>

    <p>As a result, it is likely that you will need to create your own configuration file that implements your schema.</p>

    <h3 id="starting-point">Starting point</h3>

    <ul>
      <li>See <a href={ghUrl("packages/react/src/lib/config/payload.tsx")}>packages/react/src/lib/config/payload.tsx</a> for an example of how to extend the default configuration; or</li>
      <li>copy <a href={ghUrl("packages/react/src/lib/config/default.tsx")}>packages/react/src/lib/config/default.tsx</a> and rewrite it as appropriate.</li>
    </ul>

    <h4 id="payloadcms">Payload CMS</h4>

    <p>If you are using <a href="https://payloadcms.com/docs/rich-text/slate">Slate Rich Text in Payload CMS</a>, a dedicated configuration file is available. See <Link href="/slate-to-react/docs/payload"><code>&lt;SlateToReact&gt;</code>: Payload CMS configuration</Link>.</p>

    <h3>Options</h3>

    <h4 id="markmap"><code>markMap</code></h4>

    <p>Map Slate JSON properties to HTML formatting element tags.</p>

    <ul>
      <DefaultConfigListItem />
      <li>A Slate JSON node may have multiple attributes.</li>
      <li>Accepts an array of HTML element tag names.</li>
      <li>Configure these on <code>config.dom.markMap</code>.</li>
      <li>See <Link href="/slate-to-html/docs#markmap"><code>markMap</code> | <code>slateToHtml</code></Link>. The <code>dom</code> portion of the React config matches <code>slateToHtml</code>.</li>
      <li>Test example: <a href={ghUrl("packages/html/src/lib/tests/slateToHtml/configuration/markMap.spec.ts")}>packages/html/src/lib/tests/slateToHtml/configuration/markMap.spec.ts</a>.</li>
    </ul>

    <div className="not-prose">
      <Code lang="js">{markMapExample}</Code>
      <Code lang="html" title="output.html">{slateToHtml(markMapExampleSlate, markMapHtmlConfig)}</Code>
    </div>

    <h3>Output</h3>

    <div className="border p-4">
      <SlateToReact node={markMapExampleSlate} config={markMapDemoConfig} />
    </div>

    <h4 id="elementmap"><code>elementMap</code></h4>

    <p>Map Slate JSON <code>type</code> values to HTML element tags.</p>

    <ul>
      <DefaultConfigListItem />
      <li>Straightforward transform - no attributes are considered.</li>
      <li>Use <code>react.elementTransforms</code> for more control over the returned element.</li>
      <li>Configure mapping on <code>config.dom.elementMap</code>.</li>
      <li>Test example: <a href={ghUrl("packages/html/src/lib/tests/slateToHtml/configuration/elementMap.spec.ts")}>packages/html/src/lib/tests/slateToHtml/configuration/elementMap.spec.ts</a>.</li>
    </ul>

    <div className="not-prose">
      <Code lang="js">{elementMapExample}</Code>
      <Code lang="html" title="output.html">{slateToHtml(elementMapExampleSlate, elementMapHtmlConfig)}</Code>
    </div>

    <h3>Output</h3>

    <div className="border p-4">
      <SlateToReact node={elementMapExampleSlate} config={elementMapDemoConfig} />
    </div>

    <h4 id="marktransforms"><code>markTransforms</code></h4>

    <p>Define transform functions for Slate JSON properties.</p>

    <ul>
      <DefaultConfigListItem />
      <li>Overrides corresponding values in <a href="#markmap"><code>markMap</code></a>.</li>
      <li>Use <code>markTransforms</code> for more control over the returned element.</li>
      <li>Test example: <a href={ghUrl("packages/html/src/lib/tests/slateToHtml/configuration/markTransforms.spec.ts")}>packages/html/src/lib/tests/slateToHtml/configuration/markTransforms.spec.ts</a>.</li>
    </ul>

    <p>
      Custom DOM <code>markTransforms</code> apply to <Link href="/slate-to-html/docs"><code>slateToHtml</code></Link>. The <code>&lt;SlateToReact&gt;</code> implementation routes text marks through the DOM pipeline using <code>markMap</code> only; use <code>slateToHtml</code> if you need the full <code>markTransforms</code> behavior shown below.
    </p>

    <div className="not-prose">
      <Code lang="js">{markTransformsExample}</Code>
      <Code lang="html" title="output.html">{slateToHtml(markTransformsExampleSlate, markTransformsHtmlConfig)}</Code>
    </div>

    <h4 id="elementtransforms"><code>elementTransforms</code></h4>

    <p>For React, define transforms on <code>config.react.elementTransforms</code>. Each function returns a React node (for example JSX or <code>React.createElement</code>).</p>

    <ul>
      <DefaultConfigListItem />
      <li>Overrides corresponding values in <a href="#elementmap"><code>elementMap</code></a>.</li>
      <li>Test example: <a href={ghUrl("packages/html/src/lib/tests/slateToHtml/configuration/elementTransforms.spec.ts")}>packages/html/src/lib/tests/slateToHtml/configuration/elementTransforms.spec.ts</a> (HTML serializer; the same shapes apply on the DOM side).</li>
    </ul>

    <div className="not-prose">
      <Code lang="js">{elementTransformsExample}</Code>
      <Code lang="html" title="output.html">{slateToHtml(elementTransformsExampleSlate, elementTransformsHtmlConfig)}</Code>
    </div>

    <h3>Output</h3>

    <div className="border p-4">
      <SlateToReact node={elementTransformsExampleSlate} config={elementTransformsDemoConfig} />
    </div>

    <h4 id="elementattributetransform"><code>elementAttributeTransform</code></h4>

    <p>Apply attribute transformations to every node.</p>

    <ul>
      <li>For a comprehensive example transforming HTML CSS attributes, see <a href={ghUrl("packages/tests/src/lib/html/snapshots/htmlToSlateToHtml.spec.ts")}>packages/tests/src/lib/html/snapshots/htmlToSlateToHtml.spec.ts</a>.</li>
      <li><a href="#elementtransforms"><code>elementTransforms</code></a> can also be used to transform attributes, but these functions are defined per element. <code>elementAttributeTransform</code> accepts a single function that applies to every element.</li>
      <li>Set this on <code>config.dom.elementAttributeTransform</code>.</li>
    </ul>

    <h4 id="formatting">Formatting</h4>

    <p>Control the way resulting markup is encoded/formatted.</p>

    <ul>
      <DefaultConfigListItem />
      <li>These options live on <code>config.dom</code> (same as <code>slateToHtml</code>).</li>
      <li>Test examples: <a href={ghUrl("packages/html/src/lib/tests/slateToHtml/configuration/formatting.spec.ts")}>packages/html/src/lib/tests/slateToHtml/configuration/formatting.spec.ts</a>.</li>
    </ul>

    <h5><code>encodeEntities</code></h5>

    <p>See <a href="https://github.com/cheeriojs/dom-serializer#encodeentities">cheeriojs/dom-serializer - encodeEntities</a>.</p>

    <ul>
      <li>Default: <code>true</code></li>
    </ul>

    <h5><code>alwaysEncodeBreakingEntities</code></h5>

    <p>Encode &amp;, &lt; and &gt; regardless of other option settings.</p>

    <ul>
      <li>Default: <code>false</code></li>
    </ul>

    <h5><code>alwaysEncodeCodeEntities</code></h5>

    <p>Encode entities in &lt;pre&gt; tags regardless of other option settings.</p>

    <ul>
      <li>Default: <code>true</code></li>
    </ul>

    <h5><code>convertLineBreakToBr</code></h5>

    <p>Convert &#92;n line breaks in Slate text nodes to an HTML &lt;br&gt; element.</p>

    <h4 id="defaulttag"><code>defaultTag</code></h4>

    <p>Render a HTML element for Slate nodes that have no <code>type</code>.</p>

    <ul>
      <li>The Payload CMS configuration uses a <code>defaultTag</code> of <code>p</code>. See <a href={ghUrl("packages/react/src/lib/config/payload.tsx")}>packages/react/src/lib/config/payload.tsx</a>.</li>
      <li>This is consistent with the approach taken by Payload CMS: See <a href="https://github.com/payloadcms/payload/blob/master/docs/fields/rich-text.mdx">payloadcms/payload/blob/master/docs/fields/rich-text.mdx</a>.</li>
    </ul>

  </div>
}
