export const constructsExampleSlate = [
  {
    type: 'ol',
    start: 3,
    children: [
      { type: 'li', children: [{ text: 'Third' }] },
      {
        type: 'li',
        children: [
          { text: 'Fourth, with a nested list' },
          { type: 'ul', children: [{ type: 'li', children: [{ text: 'Nested' }] }] },
        ],
      },
    ],
  },
  {
    type: 'ul',
    children: [
      { type: 'li', checked: true, children: [{ text: 'Done' }] },
      { type: 'li', checked: false, children: [{ text: 'To do' }] },
    ],
  },
  {
    type: 'code-block',
    language: 'ts',
    children: [
      { type: 'code-line', children: [{ text: "const greeting = 'Hello'" }] },
      { type: 'code-line', children: [{ text: 'console.log(greeting)' }] },
    ],
  },
  {
    type: 'table',
    children: [
      {
        type: 'tr',
        children: [
          { type: 'th', children: [{ text: 'Package' }] },
          { type: 'th', align: 'right', children: [{ text: 'Version' }] },
        ],
      },
      {
        type: 'tr',
        children: [
          { type: 'td', children: [{ text: '@slate-serializers/markdown' }] },
          { type: 'td', children: [{ text: '2.8.1' }] },
        ],
      },
    ],
  },
  { type: 'image', url: 'https://example.com/diagram.png', alt: 'Diagram', children: [{ text: '' }] },
  { type: 'hr', children: [{ text: '' }] },
  { type: 'p', children: [{ text: 'Line one\nLine two' }] },
]

export const constructsExample = `
import { slateToMarkdown } from '@slate-serializers/markdown'

const slate = ${JSON.stringify(constructsExampleSlate, null, 2)}

const markdown = slateToMarkdown(slate)
`
