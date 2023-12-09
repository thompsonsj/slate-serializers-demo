import { ReactEditor } from 'slate-react'
import { BaseEditor, Descendant } from 'slate'

/**
 * Define Slate JS types for all editor
 * configurations.
 * 
 * @see https://docs.slatejs.org/concepts/12-typescript#defining-editor-element-and-text-types
 */

export type LinkElement = {
  type: 'link';
  linkType: 'custom' | 'internal';
  newTab: boolean,
  url: string;
  children: Descendant[]
}

export type GeneralElement = {
  type:
    'paragraph'
    | 'blockquote'
    | 'block-quote'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'ul'
    | 'ol'
    | 'li'
    | 'numbered-list'
    | 'bulleted-list'
    | 'list-item'
    | 'link'
    | 'badge';
  align?: string;
  children: CustomText[] | Descendant[]
}

export type CustomElement = GeneralElement | LinkElement
type CustomText = { text: string; bold?: boolean; italic?: boolean; code?: boolean }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
