export const defaultExampleSlate = [
  { type: 'h1', children: [{ text: 'Heading 1' }] },
  {
    type: 'p',
    children: [
      { text: 'A paragraph with ' },
      { text: 'bold', bold: true },
      { text: ', ' },
      { text: 'italic', italic: true },
      { text: ' and ' },
      { text: 'inline code', code: true },
      { text: ', plus a ' },
      { type: 'link', url: 'https://docs.slatejs.org', children: [{ text: 'link' }] },
      { text: '.' },
    ],
  },
  {
    type: 'ul',
    children: [
      { type: 'li', children: [{ text: 'One' }] },
      { type: 'li', children: [{ text: 'Two' }] },
    ],
  },
  { type: 'blockquote', children: [{ text: 'A quote.' }] },
]

export const defaultExample = `
import { slateToMarkdown } from '@slate-serializers/markdown'

const slate = ${JSON.stringify(defaultExampleSlate, null, 2)}

const markdown = slateToMarkdown(slate)
`
