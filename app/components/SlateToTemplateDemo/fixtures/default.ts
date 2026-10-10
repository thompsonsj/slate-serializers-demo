export const initialValue: any[] = [
  {
    type: 'h2',
    children: [{ text: 'slateToTemplate' }],
  },
  {
    type: 'h3',
    children: [{ text: 'Demo' }],
  },
  {
    type: 'p',
    children: [
      { text: 'Try changing the contents of this editor. The rest of the page updates as you make changes to demonstrate:' },
    ],
  },
  {
    type: 'ul',
    children: [
      { type: 'li', children: [{ text: 'the Slate JSON value;' }] },
      {
        type: 'li',
        children: [
          { text: 'content rendered using the ' },
          { text: 'slateToTemplate', code: true },
          { text: '.' },
        ],
      },
    ],
  },
]
