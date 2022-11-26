import React, { useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { withReact } from 'slate-react'

// TypeScript users only add this code
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'

import RichTextEditor from './components/RichTextEditor'

import Header from './components/Header'
import Tabs from './components/Tabs'

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
  const [editor] = useState(() => withReact(createEditor()))
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-6 py-12">
          <div className="col-span-6">
            <RichTextEditor />
          </div>
          <div className="col-span-6">
            <Tabs />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
