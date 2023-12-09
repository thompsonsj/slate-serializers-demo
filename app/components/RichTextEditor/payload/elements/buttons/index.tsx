import React, { FormEvent } from 'react'
import { useSlate } from 'slate-react'
import {
  Editor,
  Range,
  Transforms,
  Element as SlateElement,
} from 'slate'
import { Button } from '../../../components'
import { LinkElement } from '../../../types'
import isUrl from 'is-url'
import { Modal, useModal } from '@faceless-ui/modal';
import { LIST_TYPES, TEXT_ALIGN_TYPES } from '../../../constants'

const isBlockActive = (editor: Editor, format: any, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        (n as any)[blockType] === format,
    })
  )

  return !!match
}

const isMarkActive = (editor: Editor, format: any) => {
  const marks = Editor.marks(editor)
  return marks ? (marks as any)[format] === true : false
}

const toggleBlock = (editor: Editor, format: any) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
  )
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })
  let newProperties: Partial<SlateElement>
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    }
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'li' : format,
    }
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

export const toggleMark = (editor: Editor, format: any) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

export const BlockButton = ({ format, icon }: {
  format: any
  icon: any
}) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
      )}
      onMouseDown={(event: Event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      {icon}
    </Button>
  )
}

export const MarkButton = ({ format, icon }: {
  format: any
  icon: any
}) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: Event) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {icon}
    </Button>
  )
}

const isLinkActive = (editor: Editor) => {
  const [link] = Editor.nodes(editor, {
    match: n =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link',
  })
  return !!link
}

const insertLink = (editor: Editor, url: string, linkType = 'custom', target = false) => {
  if (editor.selection) {
    wrapLink(editor, url, linkType as 'custom' | 'internal', target)
  }
}

const unwrapLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, {
    match: n =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link',
  })
}

const wrapLink = (editor: Editor, url: string, linkType?: 'custom' | 'internal', newTab?: boolean) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor)
  }

  const { selection } = editor
  const isCollapsed = selection && Range.isCollapsed(selection)
  const link: LinkElement = {
    type: 'link',
    linkType: linkType || "custom",
    newTab: Boolean(newTab),
    url,
    children: isCollapsed ? [{ text: url }] : [],
  }

  if (isCollapsed) {
    Transforms.insertNodes(editor, link)
  } else {
    Transforms.wrapNodes(editor, link, { split: true })
    Transforms.collapse(editor, { edge: 'end' })
  }
}

export const AddLinkButton = ({ icon }: { icon: any}) => {
  const editor = useSlate()
  const { closeModal, openModal } = useModal()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    insertLink(
      editor,
      (event.target as any)?.elements.url.value,
      (event.target as any)?.elements.linkType.value,
      (event.target as any)?.elements.newTab.checked,
    )
    closeModal("link-modal")
  }
  return (
    <>
      <Modal slug="link-modal">
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <form onSubmit={(event) => handleSubmit(event)}>
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">

                <div className="mt-3 sm:mt-5">
                  <h3 className="text-base font-semibold leading-6 text-gray-900 mb-4" id="modal-title">Insert link</h3>
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    URL
                  </label>
                  <div className="mt-2 mb-4">
                  <input
                    type="text"
                    name="url"
                    id="url"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  </div>
                  <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">Link type</legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">Adds a `linkType` property. Provided for demo purposes - Payload CMS has a more functional editor.</p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="custom"
                        name="linkType"
                        type="radio"
                        value="custom"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="custom" className="block text-sm font-medium leading-6 text-gray-900">
                        Custom
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="internal"
                        name="linkType"
                        type="radio"
                        value="internal"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="internal" className="block text-sm font-medium leading-6 text-gray-900">
                        Internal
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="relative flex gap-x-3 mt-6">
                  <div className="flex h-6 items-center">
                    <input
                      id="new-tab"
                      name="newTab"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                      <label htmlFor="comments" className="font-medium text-gray-900">
                        Open in new tab
                      </label>
                      <p className="text-gray-500">Set `target=&apos;_blank&apos;` on the link.</p>
                    </div>
                  </div>
                </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button type="submit" className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">Deactivate</button>
                <button onClick={() => closeModal("link-modal")} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0">Cancel</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
      </Modal>
      <Button
        active={isLinkActive(editor)}
        onMouseDown={(event: Event) => {
          event.preventDefault()
          openModal("link-modal")
          const url = ""
          if (!url) return
          // insertLink(editor, url)
        }}
      >
        {icon}
      </Button>
    </>
  )
}

export const RemoveLinkButton = ({ icon }: { icon: any }) => {
  const editor = useSlate()

  return (
    <Button
      active={isLinkActive(editor)}
      onMouseDown={() => {
        if (isLinkActive(editor)) {
          unwrapLink(editor)
        }
      }}
    >
      {icon}
    </Button>
  )
}

export const withInlines = (editor: Editor) => {
  const {
    insertData,
    insertText,
    isInline,
    isElementReadOnly,
    isSelectable,
  } = editor

  editor.isInline = element =>
    ['link', 'button', 'badge'].includes(element.type) || isInline(element)

  editor.isElementReadOnly = element =>
    element.type === 'badge' || isElementReadOnly(element)

  editor.isSelectable = element =>
    element.type !== 'badge' && isSelectable(element)

  editor.insertText = text => {
    if (text && isUrl(text)) {
      wrapLink(editor, text)
    } else {
      insertText(text)
    }
  }

  editor.insertData = data => {
    const text = data.getData('text/plain')

    if (text && isUrl(text)) {
      wrapLink(editor, text)
    } else {
      insertData(data)
    }
  }

  return editor
}
