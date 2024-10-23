import { Code } from "bright"
import { slateToHtml, slateToHtmlConfig, payloadSlateToHtmlConfig } from '@slate-serializers/html'
import { ghUrl } from "@/app/utilities/docs"
import { Element } from "domhandler"

// fixtures
import { defaultExample, defaultExampleSlate } from "./fixtures/default"
import { markMapExample, markMapExampleSlate } from "./fixtures/markMap"
import { payloadExample, payloadExampleSlate } from "./fixtures/payload"
import { elementMapExample, elementMapExampleSlate } from "./fixtures/elementMap"
import { markTransformsExample, markTransformsExampleSlate } from "./fixtures/markTransforms"
import { elementTransformsExample, elementTransformsExampleSlate } from "./fixtures/elementTransforms"

const DefaultConfigListItem = () => <li>Default: <a href={ghUrl("packages/dom/src/lib/config/default.ts")}>packages/dom/src/lib/config/default.ts</a>.</li>

export default function Page() {
  // eslint-disable-next-line react/no-unescaped-entities
  return <div className="prose">
    <h1><code>slateToHtml</code></h1>

    <ul>
      <li><a href="#default">Default</a></li>
      <li><a href="#configuration">Configuration</a></li>
      <li><a href="#starting-point">Starting point</a></li>
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

    All <code>output.html</code> file content on this page is generated with serializers.

    <h2 id="default">Default</h2>

    <p>By default, slateToHtml incorporates transformation rules based on the example in <a href="https://docs.slatejs.org/concepts/10-serializing#deserializing">Deserializing | Serializing | Slate</a>.</p>

    <div className="not-prose">
      <Code lang="js">{defaultExample}</Code>
      <Code lang="html" title="output.html">{slateToHtml(defaultExampleSlate)}</Code>
    </div>

    <h2 id="configuration">Configuration</h2>

    <p>Slate JS has a <strong>schema-less core</strong>. It makes few assumptions the schema of the data you will be transforming. See <a href="https://docs.slatejs.org/#principles">Principles | Introduction | Slate</a></p>

    <p>As a result, it is likely that you will need to create your own configuration file that implements your schema.</p>
    
    <h3 id="starting-point">Starting point</h3>

    <ul>
      <li>See <a href={ghUrl("packages/dom/src/lib/config/payload.ts")}>packages/dom/src/lib/config/payload.ts</a> for an example of how to extend the default configuration; or</li>
      <li>copy <a href={ghUrl("packages/dom/src/lib/config/default.ts")}>packages/dom/src/lib/config/default.ts</a> and rewrite it as appropriate.</li>
      </ul>

    <details>
      <summary>Payload CMS</summary>
      <p>If you are using Payload CMS, import the Payload configuration file and pass it as a parameter to the serializer.</p>
      <div className="not-prose">
        <Code lang="js">{payloadExample}</Code>
        <Code lang="html" title="output.html">{slateToHtml(payloadExampleSlate, payloadSlateToHtmlConfig)}</Code>
      </div>
    </details>

    <h3>Options</h3>

    <h4 id="markmap"><code>markMap</code></h4>

    <p>Map Slate JSON properties to HTML formatting element tags.</p>
    
    <ul>
      <DefaultConfigListItem />
      <li>A Slate JSON node may have multiple attributes.</li>
      <li>Accepts an array of HTML element tag names.</li>
      <li>Test example: <a href={ghUrl("packages/html/src/lib/tests/slateToHtml/configuration/markMap.spec.ts")}>packages/html/src/lib/tests/slateToHtml/configuration/markMap.spec.ts</a>.</li>
    </ul>

    <div className="not-prose">
      <Code lang="js">{markMapExample}</Code>
      <Code lang="html" title="output.html">{slateToHtml(markMapExampleSlate, {
        ...slateToHtmlConfig,
        markMap: {
          // bold already in default configuration
          ...slateToHtmlConfig.markMap,
          subScript: ['sub'],
        },
      })}</Code>
    </div>

    <h4 id ="elementmap"><code>elementMap</code></h4>

    <p>Map Slate JSON <code>type</code> values to HTML element tags.</p>
    
    <ul>
      <DefaultConfigListItem />
      <li>Staightforward transform - no attributes are considered.</li>
      <li>Use <code>elementTransforms</code> for more control over the returned element.</li>
      <li>Test example: <a href={ghUrl("packages/html/src/lib/tests/slateToHtml/configuration/elementMap.spec.ts")}>packages/html/src/lib/tests/slateToHtml/configuration/elementMap.spec.ts</a>.</li>
    </ul>

    <div className="not-prose">
      <Code lang="js">{elementMapExample}</Code>
      <Code lang="html" title="output.html">{slateToHtml(elementMapExampleSlate, {
        ...slateToHtmlConfig,
        elementMap: {
          // default configuration includes 'h1'
          ...slateToHtmlConfig.elementMap,
          ['heading-one']: 'h1',
        },
      })}</Code>
    </div>

    <h4 id ="marktransforms"><code>markTransforms</code></h4>

    <p>Define transform functions for Slate JSON properties.</p>

    <ul>
      <DefaultConfigListItem />
      <li>Overrides corresponding values in <a href="#markmap"><code>markMap</code></a>.</li>
      <li>Use <code>markTransforms</code> for more control over the returned element.</li>
      <li>Test example: <a href={ghUrl("packages/html/src/lib/tests/slateToHtml/configuration/markTransforms.spec.ts")}>packages/html/src/lib/tests/slateToHtml/configuration/markTransforms.spec.ts</a>.</li>
    </ul>

    <div className="not-prose">
      <Code lang="js">{markTransformsExample}</Code>
      <Code lang="html" title="output.html">{slateToHtml(markTransformsExampleSlate, {
        ...slateToHtmlConfig,
        markTransforms: {
          ...slateToHtmlConfig.markTransforms,
          fontSize: ({ node }) => {
            return new Element('span', { style: `font-size:${node.fontSize};` })
          }
        },
      })}</Code>
    </div>

    <h4 id ="elementtransforms"><code>elementTransforms</code></h4>

    <p>Map Slate JSON <code>type</code> values to HTML element tags.</p>

    <ul>
      <DefaultConfigListItem />
      <li>Overrides corresponding values in <a href="#elementmap"><code>elementMap</code></a>.</li>
      <li>Use <code>elementTransforms</code> for more control over the returned element.</li>
      <li>Test example: <a href={ghUrl("packages/html/src/lib/tests/slateToHtml/configuration/elementTransforms.spec.ts")}>packages/html/src/lib/tests/slateToHtml/configuration/elementTransforms.spec.ts</a>.</li>
    </ul>

    <div className="not-prose">
      <Code lang="js">{elementTransformsExample}</Code>
      <Code lang="html" title="output.html">{slateToHtml(elementTransformsExampleSlate, {
        ...slateToHtmlConfig,
        elementTransforms: {
          ...slateToHtmlConfig.elementTransforms,
          image: ({ node }) => {
            return new Element('img', {
              src: node.url,
            })
          },
        },
      })}</Code>
    </div>

    <h4 id="elementattributetransform"><code>elementAttributeTransform</code></h4>

    <p>Apply attribute transformations to every node.</p>

    <ul>
      <li>For a comprehensive example transforming HTML CSS attributes, see <a href={ghUrl("packages/tests/src/lib/html/snapshots/htmlToSlateToHtml.spec.ts")}>packages/tests/src/lib/html/snapshots/htmlToSlateToHtml.spec.ts</a>.</li>
      <li><a href="#elementtransforms"><code>elementTransforms</code></a> can also be used to transform attributes, but these functions are defined per element. <code>elementAttributeTransform</code> accepts a single function that applies to every element.</li>
    </ul>

    <h4 id ="formatting">Formatting</h4>

    <p>Control the way resulting HTML is encoded/formatted.</p>

    <ul>
      <DefaultConfigListItem />
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
      <li>The Payload CMS configuration uses a <code>defaultTag</code> of <code>p</code>. See <a href={ghUrl("packages/dom/src/lib/config/payload.ts")}>packages/dom/src/lib/config/payload.ts</a>.</li>
      <li>This is consistent with the approach taken by Payload CMS: See <a href="https://github.com/payloadcms/payload/blob/master/docs/fields/rich-text.mdx">payloadcms/payload/blob/master/docs/fields/rich-text.mdx</a>.</li>
    </ul>

  </div>
}
