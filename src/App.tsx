import React, { useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

import logo from './logo.svg';
import './App.css';

// TypeScript users only add this code
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'

import RichTextEditor from './components/RichTextEditor'

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
    <RichTextEditor />
  )
}

export default App;
