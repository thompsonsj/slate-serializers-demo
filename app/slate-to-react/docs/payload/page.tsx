import { Code } from "bright"
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'
import { SlateToReact, payloadSlateToReactConfig } from '@slate-serializers/react'
import { payloadExample, payloadExampleSlate } from "./fixtures/payload"
import { comprehensiveExample, comprehensiveExampleSlate } from "./fixtures/comprehensive"
import Link from "next/link"

export default function Page() {
  // eslint-disable-next-line react/no-unescaped-entities
  return <div className="prose">
    <h1><code>SlateToReact</code>: Payload CMS configuration</h1>

    <p>If you are using <a href="https://payloadcms.com/docs/rich-text/slate">Slate Rich Text in Payload CMS</a>, import the Payload configuration file and pass it as a parameter to the serializer.</p>

    <div className="not-prose">
      <Code lang="js">{payloadExample}</Code>
      <Code lang="html" title="output.html (equivalent)">{slateToHtml(payloadExampleSlate, payloadSlateToHtmlConfig)}</Code>
    </div>

    <h3>Output</h3>

    <div className="border p-4">
      <SlateToReact node={payloadExampleSlate} config={payloadSlateToReactConfig} />
    </div>

    <p>The following example demonstrates the conversion of a Slate JSON object taken from the API of a Payload CMS document. The default Slate Rich Text editor configuration was used in a Payload CMS v2.30.0 installation.</p>

    <p>Note that the <code>relationship</code> field is not converted to HTML. To support relationships, add <Link href="/slate-to-react/docs#elementtransforms"><code>elementTransforms</code></Link> to your configuration.</p>

    <div className="not-prose">
      <Code lang="js">{comprehensiveExample}</Code>
      <Code lang="html" title="output.html (equivalent)">{slateToHtml(comprehensiveExampleSlate, payloadSlateToHtmlConfig)}</Code>
    </div>

    <h3>Output</h3>

    <div className="border p-4">
      <SlateToReact node={comprehensiveExampleSlate} config={payloadSlateToReactConfig} />
    </div>
  </div>
}
