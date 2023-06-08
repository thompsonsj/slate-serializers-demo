import { ReactEditor } from 'slate-react'
import { BaseEditor } from 'slate'

/**
 * Define Slate JS types for all editor
 * configurations.
 * 
 * @see https://docs.slatejs.org/concepts/12-typescript#defining-editor-element-and-text-types
 */

type CustomElement = {
  type:
    'paragraph'
    | 'blockquote'
    | 'block-quote'
    | 'p'
    | 'h1'
    | 'h2'
    | 'ul'
    | 'ol'
    | 'li'
    | 'numbered-list'
    | 'bulleted-list'
    | 'list-item'
    | 'link';
  align?: string;
  children: CustomText[]
}
type CustomText = { text: string; bold?: boolean; italic?: boolean; code?: boolean }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
