import { Code } from "bright"
import { htmlToSlate, htmlToSlateConfig } from '@slate-serializers/html'
import { ghUrl } from "@/app/utilities/docs"
import Link from "next/link"
import { getAttributeValue } from 'domutils';

// fixtures
import { defaultExample, defaultExampleHtml } from "./fixtures/default"
import { textTagsExample, textTagsExampleHtml } from "./fixtures/textTags"
import { elementTagsExample, elementTagsExampleHtml } from "./fixtures/elementTags"
import { elementAttributeTransformExample, elementAttributeTransformExampleHtml } from "./fixtures/elementAttributeTransform"
import { textTagsVsElementTagsExample, textTagsVsElementTagsExampleHtml } from "./fixtures/texttagsvselementtags"

const DefaultConfigListItem = () => <li>Default: <a href={ghUrl("packages/html/src/lib/serializers/htmlToSlate/config/default.ts")}>packages/html/src/lib/serializers/htmlToSlate/config/default.ts</a>.</li>

export default function Page() {
  // eslint-disable-next-line react/no-unescaped-entities
  return <div className="prose">
    <h1><code>htmlToSlate</code></h1>

    <ul>
      <li><a href="#default">Default</a></li>
      <li><a href="#configuration">Configuration</a></li>
      <li><a href="#starting-point">Starting point</a><ul>
        <li><a href="#payloadcms">Payload CMS</a></li>
        </ul></li>
      <li>
        <a href="#options">Options</a>
        <ul>
          <li><a href="#texttags"><code>textTags</code></a></li>
          <li><a href="#elementtags"><code>elementTags</code></a></li>
          <li><a href="#texttagsvselementtags"><code>textTags</code> vs <code>elementTags</code></a></li>
          <li><a href="#elementattributetransform"><code>elementAttributeTransform</code></a></li>
          <li><a href="#htmlpreprocessstring"><code>htmlPreProcessString</code></a></li>
          <li><a href="#filterwhitespacenodes"><code>filterWhitespaceNodes</code></a></li>
          <li><a href="#convertbrtolinebreak"><code>convertBrToLineBreak</code></a></li>
          <li><a href="#trimwhitespace"><code>trimWhiteSpace</code></a></li>
        </ul>
      </li>
    </ul>

    All <code>output.json</code> file content on this page is generated with the <code>htmlToSlate</code> serializer.

    <h2 id="default">Default</h2>

    <p>By default, <code>htmlToSlate</code> incorporates transformation rules based on the example in <a href="https://docs.slatejs.org/concepts/10-serializing#html">HTML | Serializing | Slate</a>.</p>

    <div className="not-prose">
      <Code lang="js">{defaultExample}</Code>
      <Code lang="json" title="output.json">{JSON.stringify(htmlToSlate(defaultExampleHtml), undefined, 2)}</Code>
    </div>

    <h2 id="configuration">Configuration</h2>

    <p>Slate JS has a <strong>schema-less core</strong>. It makes few assumptions the schema of the data you will be transforming. See <a href="https://docs.slatejs.org/#principles">Principles | Introduction | Slate</a></p>

    <p>As a result, it is likely that you will need to create your own configuration file that implements your schema.</p>
    
    <h3 id="starting-point">Starting point</h3>

    <ul>
      <li>See <a href={ghUrl("packages/html/src/lib/serializers/htmlToSlate/config/payload.ts")}>packages/html/src/lib/serializers/htmlToSlate/config/payload.ts</a> for an example of how to extend the default configuration; or</li>
      <li>copy <a href={ghUrl("packages/html/src/lib/serializers/htmlToSlate/config/default.ts")}>packages/html/src/lib/serializers/htmlToSlate/config/default.ts</a> and rewrite it as appropriate.</li>
      </ul>

    <h4 id="payloadcms">Payload CMS</h4>

    <p>If you are using <a href="https://payloadcms.com/docs/rich-text/slate">Slate Rich Text in Payload CMS</a>, a dedicated configuration file is available. See <Link href="/html-to-slate/docs/payload"><code>htmlToSlate</code>: Payload CMS configuration</Link>.</p>

    <h3>Options</h3>

    <h4 id="texttags"><code>textTags</code></h4>

    <p>Define transform functions for HTML formatting elements.</p>
    
    <ul>
      <DefaultConfigListItem />
      <li>Receives <code>el</code> of type <a href="https://domhandler.js.org/classes/Element.html"><code>Element</code></a> as an argument.<ul><li>Combine with utilities from <a href="https://domutils.js.org/"><code>domutils</code></a> to perform further manipulation.</li></ul></li>
      <li>Test examples: <a href={ghUrl("packages/html/src/lib/tests/htmlToSlate/configuration/textTags.spec.ts")}>packages/html/src/lib/tests/htmlToSlate/configuration/textTags.spec.ts</a>.</li>
    </ul>

    <p>In the following example, <code>strong</code> and <code>i</code> HTML tags are mapped in the default configuration.</p>

    <div className="not-prose">
      <Code lang="js">{textTagsExample}</Code>
      <Code lang="json" title="output.json">{JSON.stringify(htmlToSlate(textTagsExampleHtml, {
        ...htmlToSlateConfig,
        textTags: {
          ...htmlToSlateConfig.textTags,
          sub: () => ({ subscript: true }),
          time: (el) => ({
            ...(el && {
              datetime: getAttributeValue(el, 'datetime'),
            }),
            time: true,
          }),
        },
      }), undefined, 2)}</Code>
    </div>

    <h4 id ="elementtags"><code>elementTags</code></h4>

    <p>Map HTML element tags to Slate JSON nodes.</p>
    
    <ul>
      <DefaultConfigListItem />
      <li>Receives <code>el</code> of type <a href="https://domhandler.js.org/classes/Element.html"><code>Element</code></a> as an argument.<ul><li>Combine with utilities from <a href="https://domutils.js.org/"><code>domutils</code></a> to perform further manipulation.</li></ul></li>
      <li>Test examples: <a href={ghUrl("packages/html/src/lib/tests/htmlToSlate/configuration/elementTags.spec.ts")}>packages/html/src/lib/tests/htmlToSlate/configuration/elementTags.spec.ts</a>.</li>
    </ul>

    <div className="not-prose">
      <Code lang="js">{elementTagsExample}</Code>
      <Code lang="json" title="output.json">{JSON.stringify(htmlToSlate(elementTagsExampleHtml, {
        ...htmlToSlateConfig,
        elementTags: {
          ...htmlToSlateConfig.elementTags,
          article: (el) => ({
            ...(el && {
              id: getAttributeValue(el, 'id'),
            }),
            type: 'article',
          }),
        },
      }), undefined, 2)}</Code>
    </div>

    <h4 id ="texttagsvselementtags"><code>textTags</code> vs <code>elementTags</code></h4>

    <ul>
      <li>Test example: <a href={ghUrl("packages/html/src/lib/tests/htmlToSlate/configuration/textTagsVselementTags.spec.ts")}>packages/html/src/lib/tests/htmlToSlate/configuration/textTagsVselementTags.spec.ts</a>.</li>
    </ul>

    <p>Use <code>elementTags</code> transform functions for HTML element tags that structure content. e.g. <code>h1</code>, <code>h2</code>, <code>div</code>...etc.</p>

    <ul>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning">Content sectioning | Elements | HTML</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content">Text content | Elements | HTML</a></li>
    </ul>

    <p>Use <code>textTags</code> transform functions for HTML element tags that define inline meaning, structure or style of content. e.g. <code>strong</code>, <code>abbr</code>, <code>sub</code>...etc.</p>

    <ul>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics">Inline text semantics | Elements | HTML</a></li>
    </ul>

    Note how <code>textTags</code> are combined to represent inline meaning/structure/style whereas <code>elementTags</code> always create new Slate nodes.

    <div className="not-prose">
      <Code lang="js">{textTagsVsElementTagsExample}</Code>
      <Code lang="json" title="output.json">{JSON.stringify(htmlToSlate(textTagsVsElementTagsExampleHtml, {
        ...htmlToSlateConfig,
        textTags: {
          ...htmlToSlateConfig.textTags,
          time: (el) => ({
            ...(el && {
              datetime: getAttributeValue(el, 'datetime'),
            }),
            time: true,
          }),
        },
        elementTags: {
          ...htmlToSlateConfig.elementTags,
          article: (el) => ({
            ...(el && {
              id: getAttributeValue(el, 'id'),
            }),
            type: 'article',
          }),
        },
      }), undefined, 2)}</Code>
    </div>

    <h4 id="elementattributetransform"><code>elementAttributeTransform</code></h4>

    <p>Apply attribute transformations to every node.</p>

    <ul>
      <li>Test example: <a href={ghUrl("packages/html/src/lib/tests/htmlToSlate/configuration/elementAttributeTransform.spec.ts")}>packages/html/src/lib/tests/htmlToSlate/configuration/elementAttributeTransform.spec.ts</a>.</li>
      <li><a href="#elementtags"><code>elementTags</code></a> can also be used to transform attributes, but these functions are defined per element. <code>elementAttributeTransform</code> accepts a single function that applies to every element.</li>
    </ul>

    <div className="not-prose">
      <Code lang="js">{elementAttributeTransformExample}</Code>
      <Code lang="json" title="output.json">{JSON.stringify(htmlToSlate(elementAttributeTransformExampleHtml, {
        ...htmlToSlateConfig,
        elementAttributeTransform: ({ el }) => {
          const attribs: { [key: string]: string } = {};
          const id = getAttributeValue(el, 'id');
          if (id) {
            attribs['id'] = id;
          }
          return attribs;
        },
      }), undefined, 2)}</Code>
    </div>

    <h4 id="htmlpreprocessstring"><code>htmlPreProcessString</code></h4>

    <p>Perform any operations on the HTML string before serializing to the DOM. This is the first operation to run.</p>

    <p>String operations are not ideal, but may be necessary in some cases.</p>

    <ul>
      <DefaultConfigListItem />
      <li>In the default config, regular expressions are used to replace all <code>&lt;pre&gt;</code> HTML elements with <code>&lt;code&gt;</code>. This is helpful because <code>htmlparser2</code> will separate out <code>&lt;pre&gt;</code> tags into their own block, whereas <code>&lt;code&gt;</code> tags are kept inline.</li>
    </ul>

    <h4 id="filterwhitespacenodes"><code>filterWhitespaceNodes</code></h4>

    <p>Remove any Slate JSON nodes that have no type or content. For example:</p>

    <div className="not-prose">
      <Code lang="js">{JSON.stringify({"children": []}, undefined, 2)}</Code>
    </div>

    <p>These nodes may appear after <a href={ghUrl("docs/engineering.md#whitespace")}>processing whitespace</a>.</p>

    <h4 id="convertbrtolinebreak"><code>convertBrToLineBreak</code></h4>

    <p>Convert <code>&lt;br&gt;</code> HTML element tags to Slate nodes with empty content or <code>\n</code> as appropriate.</p>

    <p>Default: <code>true</code>.</p>

    <ul>
      <DefaultConfigListItem />
      <li>Test examples: <a href={ghUrl("packages/html/src/lib/tests/htmlToSlate/configuration/convertBrToLineBreak.spec.ts")}>packages/html/src/lib/tests/htmlToSlate/configuration/convertBrToLineBreak.spec.ts</a>.</li>
    </ul>

    <h4 id="trimwhitespace"><code>trimWhiteSpace</code></h4>

    <p>Extra whitespace is valid in HTML and will often be reduced to a single space or removed when the HTML is rendered. By default, <code>htmlToSlate</code> will apply such whitespace reduction rules to Slate node values.</p>

    <p>Default: <code>true</code>.</p>

    <ul>
      <DefaultConfigListItem />
      <li>Test examples: <a href={ghUrl("packages/html/src/lib/tests/htmlToSlate/configuration/whitespace.spec.ts")}>packages/html/src/lib/tests/htmlToSlate/configuration/whitespace.spec.ts</a>.</li>
      <li>See rationale in <a href={ghUrl("docs/engineering.md#whitespace")}>processing whitespace</a>.</li>
    </ul>

  </div>
}
