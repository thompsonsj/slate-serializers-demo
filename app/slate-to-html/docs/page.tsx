import { Code } from "bright"
import { slateToHtml, slateToHtmlConfig, payloadSlateToHtmlConfig } from '@slate-serializers/html'
import { ghUrl } from "@/app/utilities/docs"

// fixtures
import { defaultExample, defaultExampleSlate } from "./fixtures/default"
import { markMapExample, markMapExampleSlate } from "./fixtures/markMap"
import { payloadExample, payloadExampleSlate } from "./fixtures/payload"
import { elementMapExample, elementMapExampleSlate } from "./fixtures/elementMap"

export default function Page() {
  // eslint-disable-next-line react/no-unescaped-entities
  return <div className="prose">
    <h1><code>slateToHtml</code></h1>

    All <code>output.html</code> file content on this page is generated with serializers.

    <h2>Default</h2>

    <p>By default, slateToHtml incorporates transformation rules based on the example in <a href="https://docs.slatejs.org/concepts/10-serializing#deserializing">Deserializing | Serializing | Slate</a>.</p>

    <div className="not-prose">
      <Code lang="js">{defaultExample}</Code>
      <Code lang="html" title="output.html">{slateToHtml(defaultExampleSlate)}</Code>
    </div>

    <h2>Configuration</h2>

    <p>Slate JS has a <strong>schema-less core</strong>. It makes few assumptions the schema of the data you will be transforming. See <a href="https://docs.slatejs.org/#principles">Principles | Introduction | Slate</a></p>

    <p>As a result, it is likely that you will need to create your own configuration file that implements your schema.</p>
    
    <h3>Starting point</h3>

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

    <h4><code>markMap</code></h4>

    <p>Map Slate JSON properties to HTML formatting element tags.</p>
    
    <ul>
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

    <h4><code>elementMap</code></h4>

    <p>Map Slate JSON <code>type</code> values to HTML element tags.</p>
    
    <ul>
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

    <p></p>

  </div>
}
