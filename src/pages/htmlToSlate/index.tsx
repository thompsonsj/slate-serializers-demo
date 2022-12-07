import React, { useState } from 'react'
import { Descendant } from 'slate'

import RichTextEditor from '../../components/RichTextEditor'
import Tabs from './Tabs'
import { HtmlValueContext } from '../../contexts/HtmlValueContext'
import { SlateValueContext } from '../../contexts/SlateValueContext'

const initialValue: string = `<p>This is editable <strong>rich</strong> text, <i>much</i> better than a <pre><code>&lt;textarea&gt;</code></pre>!</p>

<p>Since it&apos;s rich text, you can do things like turn a selection of text <strong>bold</strong>, or add a semantically rendered block quote in the middle of the page, like this:</p>

<blockquote>A wise quote.</blockquote>

<p style="text-align:center;">Try it out for yourself!</p>`

function App() {
  const [slateValue, setSlateValue] = useState(null);
  const [htmlValue, setHtmlValue] = useState(initialValue);

  return (
    <>
    <SlateValueContext.Provider value={{
        slateValue, setSlateValue
      }}>
      <HtmlValueContext.Provider value={{
        htmlValue, setHtmlValue
      }}>
        <div className="grid grid-cols-12 gap-6 py-12">
          <div className="col-span-6">
            <textarea
              className="block w-full h-[400px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue={initialValue}
              onChange={ev => setHtmlValue(ev.target.value)}
            ></textarea>
          </div>
          <div className="col-span-6">
            <Tabs />
          </div>
        </div>
      </HtmlValueContext.Provider>
      </SlateValueContext.Provider>
    </>
  )
}

export default App;
