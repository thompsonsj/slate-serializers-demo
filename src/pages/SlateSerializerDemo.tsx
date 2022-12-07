import React, { useState } from 'react'

// TypeScript users only add this code
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'

import RichTextEditor from '../components/RichTextEditor'

import Tabs from '../components/Tabs'

import { SlateValueContext } from '../contexts/SlateValueContext'

type CustomElement = { type: 'paragraph' | 'block-quote'; align?: string; children: CustomText[] }
type CustomText = { text: string; bold?: boolean; italic?: boolean; code?: boolean }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
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
            <RichTextEditor />
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
