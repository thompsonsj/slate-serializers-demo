import React, { useState } from 'react'
import { Descendant } from 'slate'

import RichTextEditor from '../../components/RichTextEditor'
import Tabs from './Tabs'
import { SlateValueContext } from '../../contexts/SlateValueContext'

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

function App() {
  const [slateValue, setSlateValue] = useState(null);

  return (
    <>
      <SlateValueContext.Provider value={{
        slateValue, setSlateValue
      }}>
        <div className="grid grid-cols-12 gap-6 py-12">
          <div className="col-span-6">
            <RichTextEditor value={initialValue} />
          </div>
          <div className="col-span-6">
            <Tabs />
          </div>
        </div>
      </SlateValueContext.Provider>
    </>
  )
}

export default App;
