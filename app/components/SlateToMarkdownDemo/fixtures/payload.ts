export const payloadValue: any[] = [
  {
    children: [
      { text: 'The ' },
      { text: 'Payload CMS', bold: true },
      { text: ' configuration is ' },
      { text: 'very similar to the default', italic: true },
      { text: ' because it imports the default configuration as a base.' },
    ],
  },
  {
    children: [
      { text: 'Payload stores paragraphs as Slate nodes without a ' },
      { text: 'type', code: true },
      { text: '. They are serialized as Markdown paragraphs separated by a blank line.' },
    ],
  },
  {
    type: 'h2',
    children: [{ text: 'Links' }],
  },
  {
    type: 'ul',
    children: [
      {
        type: 'li',
        children: [
          {
            type: 'link',
            linkType: 'custom',
            newTab: true,
            url: 'https://github.com/thompsonsj/slate-serializers',
            children: [{ text: 'Payload links' }],
          },
          { text: ' become inline Markdown links.' },
        ],
      },
      {
        type: 'li',
        children: [
          { text: 'Markdown has no syntax for ' },
          { text: 'newTab', code: true },
          { text: ' or ' },
          { text: 'linkType', code: true },
          { text: ', so only the URL and link text are kept.' },
        ],
      },
    ],
  },
]
