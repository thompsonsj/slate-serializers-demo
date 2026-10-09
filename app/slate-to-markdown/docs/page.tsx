import { Code } from "bright"
import { slateToMarkdown, payloadSlateToMarkdownConfig } from '@slate-serializers/markdown'
import { ghUrl } from "@/app/utilities/docs"
import Link from "next/link"

// fixtures
import { defaultExample, defaultExampleSlate } from "./fixtures/default"
import { constructsExample, constructsExampleSlate } from "./fixtures/constructs"
import { payloadExample, payloadExampleSlate } from "./fixtures/payload"
import {
  elementMapConfig,
  elementMapExample,
  elementMapExampleSlate,
  markMapConfig,
  markMapExample,
  markMapExampleSlate,
  elementTransformsConfig,
  elementTransformsExample,
  elementTransformsExampleSlate,
  formattingConfig,
  formattingExample,
  formattingExampleSlate,
  escapeConfig,
  escapeExample,
  escapeExampleSlate,
} from "./fixtures/configuration"

const DefaultConfigListItem = () => <li>Default: <a href={ghUrl("packages/markdown/src/lib/config/default.ts")}>packages/markdown/src/lib/config/default.ts</a>.</li>

export default function Page() {

  return <div className="prose">
    <h1><code>slateToMarkdown</code></h1>

    <ul>
      <li><a href="#default">Default</a></li>
      <li><a href="#supported-markdown">Supported Markdown</a></li>
      <li><a href="#payloadcms">Payload CMS</a></li>
      <li>
        <a href="#options">Options</a>
        <ul>
          <li><a href="#elementmap"><code>elementMap</code></a></li>
          <li><a href="#markmap"><code>markMap</code></a></li>
          <li><a href="#elementtransforms"><code>elementTransforms</code></a></li>
          <li><a href="#emphasisdelimiter"><code>emphasisDelimiter</code> and <code>bulletMarker</code></a></li>
          <li><a href="#escape"><code>escape</code></a></li>
        </ul>
      </li>
      <li><a href="#behaviour">Behaviour</a></li>
    </ul>

    <p>
      From <code>@slate-serializers/markdown</code>. Converts Slate JSON to a{' '}
      <a href="https://github.github.com/gfm/">GitHub Flavored Markdown</a> string. Use it to export editor content
      to README files, issue trackers, chat tools or anything else that accepts Markdown.
    </p>

    <div className="not-prose">
      <Code lang="bash">{`npm install @slate-serializers/markdown`}</Code>
    </div>

    All <code>output.md</code> file content on this page is generated with the <code>slateToMarkdown</code> serializer.

    <h2 id="default">Default</h2>

    <p>
      The default configuration understands the element names used by the other <code>@slate-serializers</code>{' '}
      packages (<code>p</code>, <code>h1</code>, <code>ul</code>, <code>li</code>, <code>blockquote</code>,{' '}
      <code>link</code>, …) and by the <a href="https://www.slatejs.org/examples/richtext">Slate examples</a>{' '}
      (<code>paragraph</code>, <code>heading-one</code>, <code>bulleted-list</code>, <code>list-item</code>,{' '}
      <code>block-quote</code>, <code>check-list-item</code>, …), so you can often call it without a config.
    </p>

    <div className="not-prose">
      <Code lang="js">{defaultExample}</Code>
      <Code lang="md" title="output.md">{slateToMarkdown(defaultExampleSlate)}</Code>
    </div>

    <h2 id="supported-markdown">Supported Markdown</h2>

    <ul>
      <li>Headings, paragraphs, block quotes, horizontal rules, line breaks, links and images.</li>
      <li>Bullet and ordered lists, including nested lists and task lists.</li>
      <li>Fenced code blocks and tables with column alignment.</li>
      <li>
        Bold, italic, strikethrough and inline code. Underline, subscript and superscript have no Markdown syntax, so
        they are written as HTML tags, which GFM allows.
      </li>
      <li>
        Text is escaped, so characters such as <code>*</code>, <code>_</code>, <code>[</code> or a leading{' '}
        <code>1.</code> stay literal.
      </li>
    </ul>

    <p>Some constructs read extra properties from the Slate node:</p>

    <div className="not-prose overflow-x-auto">
      <table className="min-w-full text-left text-sm border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 font-semibold border-b">Construct</th>
            <th className="p-3 font-semibold border-b">Properties read from the node</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="p-3"><code>link</code></td>
            <td className="p-3"><code>url</code> (or <code>href</code>)</td>
          </tr>
          <tr>
            <td className="p-3"><code>image</code></td>
            <td className="p-3"><code>url</code> (or <code>src</code>), <code>alt</code> (or <code>caption</code>, or the node&apos;s text)</td>
          </tr>
          <tr>
            <td className="p-3"><code>ol</code></td>
            <td className="p-3"><code>start</code></td>
          </tr>
          <tr>
            <td className="p-3"><code>li</code>, <code>task</code></td>
            <td className="p-3"><code>checked</code>: a boolean makes the item a task list item</td>
          </tr>
          <tr>
            <td className="p-3"><code>code-block</code></td>
            <td className="p-3"><code>language</code> (or <code>lang</code>). Child elements (e.g. <code>code-line</code>) become lines.</td>
          </tr>
          <tr>
            <td className="p-3"><code>table-cell</code></td>
            <td className="p-3"><code>align</code> (or <code>textAlign</code>) on the first row sets the column alignment</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="not-prose">
      <Code lang="js">{constructsExample}</Code>
      <Code lang="md" title="output.md">{slateToMarkdown(constructsExampleSlate)}</Code>
    </div>

    <h2 id="payloadcms">Payload CMS</h2>

    <p>
      If you are using <a href="https://payloadcms.com/docs/rich-text/slate">Slate Rich Text in Payload CMS</a>, pass{' '}
      <code>payloadSlateToMarkdownConfig</code>. It adds support for Payload <code>upload</code> elements: images become{' '}
      <code>![alt](url)</code> and other files become links.
    </p>

    <ul>
      <li>Payload config: <a href={ghUrl("packages/markdown/src/lib/config/payload.ts")}>packages/markdown/src/lib/config/payload.ts</a>.</li>
    </ul>

    <div className="not-prose">
      <Code lang="js">{payloadExample}</Code>
      <Code lang="md" title="output.md">{slateToMarkdown(payloadExampleSlate, payloadSlateToMarkdownConfig)}</Code>
    </div>

    <h2 id="options">Options</h2>

    <p>Spread <code>slateToMarkdownConfig</code> and override what you need. The config type is exported as <code>SlateToMarkdownConfig</code>.</p>

    <h4 id="elementmap"><code>elementMap</code></h4>

    <p>
      Map a Slate element <code>type</code> to a Markdown construct: <code>paragraph</code>, <code>h1</code>–<code>h6</code>,{' '}
      <code>blockquote</code>, <code>ul</code>, <code>ol</code>, <code>li</code>, <code>task</code>, <code>link</code>,{' '}
      <code>image</code>, <code>line-break</code>, <code>hr</code>, <code>code-block</code>, <code>table</code>,{' '}
      <code>table-section</code>, <code>table-row</code> or <code>table-cell</code>.
    </p>

    <ul>
      <DefaultConfigListItem />
    </ul>

    <div className="not-prose">
      <Code lang="js">{elementMapExample}</Code>
      <Code lang="md" title="output.md">{slateToMarkdown(elementMapExampleSlate, elementMapConfig)}</Code>
    </div>

    <h4 id="markmap"><code>markMap</code></h4>

    <p>
      Map a leaf property such as <code>bold</code> to <code>strong</code>, <code>emphasis</code>,{' '}
      <code>strikethrough</code> or <code>code</code>, or to a pair of <code>{'{ open, close }'}</code> strings.
      Earlier entries wrap later ones.
    </p>

    <ul>
      <DefaultConfigListItem />
    </ul>

    <div className="not-prose">
      <Code lang="js">{markMapExample}</Code>
      <Code lang="md" title="output.md">{slateToMarkdown(markMapExampleSlate, markMapConfig)}</Code>
    </div>

    <h4 id="elementtransforms"><code>elementTransforms</code></h4>

    <p>
      Custom output per element <code>type</code>. Each function receives the <code>node</code> and its{' '}
      <code>children</code>, already serialized to Markdown, and returns a string. Return <code>undefined</code> to
      fall back to <a href="#elementmap"><code>elementMap</code></a>.
    </p>

    <div className="not-prose">
      <Code lang="js">{elementTransformsExample}</Code>
      <Code lang="md" title="output.md">{slateToMarkdown(elementTransformsExampleSlate, elementTransformsConfig)}</Code>
    </div>

    <h4 id="emphasisdelimiter"><code>emphasisDelimiter</code> and <code>bulletMarker</code></h4>

    <ul>
      <li><code>emphasisDelimiter</code>: <code>&apos;*&apos;</code> (default) or <code>&apos;_&apos;</code>. <code>*</code> also works inside words.</li>
      <li><code>bulletMarker</code>: <code>&apos;-&apos;</code> (default), <code>&apos;*&apos;</code> or <code>&apos;+&apos;</code>.</li>
    </ul>

    <div className="not-prose">
      <Code lang="js">{formattingExample}</Code>
      <Code lang="md" title="output.md">{slateToMarkdown(formattingExampleSlate, formattingConfig)}</Code>
    </div>

    <h4 id="escape"><code>escape</code></h4>

    <p>
      Escape text that Markdown would treat as syntax. Default: <code>true</code>. Set to <code>false</code> if your
      text already contains Markdown.
    </p>

    <div className="not-prose">
      <Code lang="js">{escapeExample}</Code>
      <Code lang="md" title="output.md (default)">{slateToMarkdown(escapeExampleSlate)}</Code>
      <Code lang="md" title="output.md (escape: false)">{slateToMarkdown(escapeExampleSlate, escapeConfig)}</Code>
    </div>

    <h2 id="behaviour">Behaviour</h2>

    <ul>
      <li>Blocks are separated by a blank line. Empty paragraphs are dropped, because Markdown cannot represent them.</li>
      <li>A <code>\n</code> in text becomes a hard line break (<code>\</code> at the end of the line). In table cells it becomes <code>&lt;br&gt;</code>.</li>
      <li>The first table row is the header row. Content that tables cannot hold, such as lists, is joined with <code>&lt;br&gt;</code>.</li>
      <li>Elements that are not in <code>elementMap</code> are treated as inline when they sit beside text, and as a wrapper around their children otherwise.</li>
      <li>Link attributes that Markdown has no syntax for, such as <code>newTab</code>, are ignored. Use <code>elementTransforms</code> to output HTML instead.</li>
      <li>When a <code>*</code>, <code>**</code> or <code>~~</code> pair would not parse in its position (for example bold directly next to italic), the equivalent HTML tag is written instead.</li>
      <li>
        Escaping keeps Markdown syntax in text literal. It is not HTML sanitization: <code>elementTransforms</code>,{' '}
        <code>{'{ open, close }'}</code> marks and URLs are written as given. Sanitize the result if you render
        untrusted documents as HTML.
      </li>
    </ul>

    <p>
      <Link href="/slate-to-markdown">Try the interactive demo</Link>.
    </p>
  </div>
}
