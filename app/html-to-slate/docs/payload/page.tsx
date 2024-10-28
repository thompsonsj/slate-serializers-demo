import { Code } from "bright"
import { htmlToSlate, payloadHtmlToSlateConfig } from '@slate-serializers/html'
import { payloadExample, payloadExampleHtml } from "./fixtures/payload"
import { comprehensiveExample, comprehensiveExampleHtml } from "./fixtures/comprehensive"
import Link from "next/link"

export default function Page() {
  // eslint-disable-next-line react/no-unescaped-entities
  return <div className="prose">
    <h1><code>htmlToSlate</code>: Payload CMS configuration</h1>

    <p>If you are using <a href="https://payloadcms.com/docs/rich-text/slate">Slate Rich Text in Payload CMS</a>, import the Payload configuration file and pass it as a parameter to the serializer.</p>

    <div className="not-prose">
      <Code lang="js">{payloadExample}</Code>
      <Code lang="json" title="output.json">{JSON.stringify(htmlToSlate(payloadExampleHtml, payloadHtmlToSlateConfig), undefined, 2)}</Code>
    </div>

    <p>The following example demonstrates the conversion of HTML generated in <Link href="/slate-to-html/docs/payload"><code>slateToHtml</code>: Payload CMS configuration</Link> back to a Slate JSON object.</p>

    <p>Note that the <code>relationship</code> field is not converted to HTML. To support relationships, add <Link href="/slate-to-html/docs#elementtransforms"><code>elementTransforms</code></Link> to your configuration.</p>
    
    <div className="not-prose">
      <Code lang="js">{comprehensiveExample}</Code>
      <Code lang="json" title="output.json">{JSON.stringify(htmlToSlate(comprehensiveExampleHtml, payloadHtmlToSlateConfig), undefined, 2)}</Code>
    </div>
  </div>
}
