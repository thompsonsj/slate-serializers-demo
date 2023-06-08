import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate } from 'slate-react'
import { withHistory } from 'slate-history'
import { BlockButton, MarkButton, toggleMark } from './elements/buttons'
import { createEditor, Descendant } from 'slate'

import { Toolbar } from '../components'
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
} from 'react-icons/ri'

import { SlateValueContext } from '../../../contexts/SlateValueContext'
import { cx } from '@emotion/css'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

interface IRichTextEditor {
  value: Descendant[]
  dynamicValue?: Descendant[]
}

const RichTextEditor = ({
  value = [],
  dynamicValue = []
}: IRichTextEditor) => {
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const { setSlateValue } = useContext(SlateValueContext)
  useEffect(() => {
    setSlateValue(JSON.stringify(value))
  }, [])

  if (dynamicValue.length > 0) {
    editor.children = dynamicValue
  }

  useEffect(() => {
    const content = JSON.stringify(editor.children)
    localStorage.setItem('content', content)
    setSlateValue(content)
  }, [dynamicValue])

  return (
    <Slate
      editor={editor}
      initialValue={value}
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
        <BlockButton format="h1" icon={<RiH1 />} />
        <BlockButton format="h2" icon={<RiH2 />} />
        <BlockButton format="blockquote" icon={<RiDoubleQuotesL />} />
        <BlockButton format="ol" icon={<RiListOrdered />} />
        <BlockButton format="ul" icon={<RiListUnordered />} />
      </Toolbar>
      <Editable
        className={cx(
          'prose',
          'p-6',
          'rounded-lg border border-gray-300',
          'shadow-sm',
          'focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500'
        )}
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
    case 'p':
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
    case 'blockquote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'ul':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'h1':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'li':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'ol':
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
