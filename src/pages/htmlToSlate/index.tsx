import React from 'react'
import { HtmlToSlateDemo } from '../../components/HtmlToSlateDemo'
import { slateDemoSlateToDomConfig, slateDemoHtmlToSlateConfig } from "slate-serializers"
import RichTextEditor from '../../components/RichTextEditor'

const initialValue: string = `<p>This is editable <strong>rich</strong> text, <i>much</i> better than a <pre><code>&lt;textarea&gt;</code></pre>!</p>

<p>Since it&apos;s rich text, you can do things like turn a selection of text <strong>bold</strong>, or add a semantically rendered block quote in the middle of the page, like this:</p>

<blockquote>A wise quote.</blockquote>

<p style="text-align:center;">Try it out for yourself!</p>`

const App = () => <HtmlToSlateDemo
  initialValue={initialValue}
  slateToDomConfig={slateDemoSlateToDomConfig}
  htmlToSlateConfig={slateDemoHtmlToSlateConfig}
/>

export default App
