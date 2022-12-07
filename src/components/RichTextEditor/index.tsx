import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate, ReactEditor } from 'slate-react'
import { withHistory } from 'slate-history'
import { BlockButton, MarkButton, toggleMark } from './elements/buttons'
import { createEditor, BaseEditor, Descendant } from 'slate'

import { Toolbar } from './components'
import {
  RiBold,
  RiItalic,
  RiUnderline,
  RiCodeSSlashFill,
  RiH1,
  RiH2,
  RiDoubleQuotesL,
  RiListOrdered,
  RiListUnordered,
  RiAlignLeft,
  RiAlignCenter,
  RiAlignRight,
  RiAlignJustify
} from 'react-icons/ri'

import { SlateValueContext } from '../../contexts/SlateValueContext'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

type CustomElement = { type: 'paragraph' | 'block-quote'; align?: string; children: CustomText[] }
type CustomText = { text: string; bold?: boolean; italic?: boolean; code?: boolean }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

interface IRichTextEditor {
  value: Descendant[]
}

const RichTextEditor = ({value}: IRichTextEditor) => {
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const { setSlateValue } = useContext(SlateValueContext)
  useEffect(() => {
    setSlateValue(JSON.stringify(value))
  }, [])

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => {
        const isAstChange = editor.operations.some(
          op => 'set_selection' !== op.type
        )
        if (isAstChange) {
          // Save the value to Local Storage.
          const content = JSON.stringify(value)
          localStorage.setItem('content', content)
          setSlateValue(content)
        }
      }}
    >
      <Toolbar>
        <MarkButton format="bold" icon={<RiBold />} />
        <MarkButton format="italic" icon={<RiItalic />} />
        <MarkButton format="underline" icon={<RiUnderline />} />
        <MarkButton format="code" icon={<RiCodeSSlashFill />} />
        <BlockButton format="heading-one" icon={<RiH1 />} />
        <BlockButton format="heading-two" icon={<RiH2 />} />
        <BlockButton format="block-quote" icon={<RiDoubleQuotesL />} />
        <BlockButton format="numbered-list" icon={<RiListOrdered />} />
        <BlockButton format="bulleted-list" icon={<RiListUnordered />} />
        <BlockButton format="left" icon={<RiAlignLeft />} />
        <BlockButton format="center" icon={<RiAlignCenter />} />
        <BlockButton format="right" icon={<RiAlignRight />} />
        <BlockButton format="justify" icon={<RiAlignJustify />} />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={event => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey]
              toggleMark(editor, mark)
            }
          }
        }}
      />
    </Slate>
  )
}

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align }
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

export default RichTextEditor