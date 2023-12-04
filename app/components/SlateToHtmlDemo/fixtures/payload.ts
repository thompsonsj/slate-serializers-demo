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
      {
        text:
          "For this configuration, Slate nodes without a type are serialized to ",
      },
      {
        code: true,
        text:
          "p",
      },
      {
        text:
          " HTML element tags.",
      },
    ],
  },
  {
    children: [
      {
        text:
          "Note some custom element transforms:",
      },
    ],
  },
  {
    type: 'h2',
    children: [{ text: 'Links' }],
  },
  {
    type: "ul",
    children: [
        {
            type: "li",
            children: [
              {
                type: 'link',
                linkType: 'custom',
                newTab: true,
                url: "https://github.com/thompsonsj/slate-serializers",
                children: [{ text: 'A data attribute is added to link HTML to keep track of Payload\'s link type.' }],
              },
            ]
        },
        {
          type: "li",
          children: [
            {
              text:
                " The ",
            },
            {
              code: true,
              text:
                "target",
            },
            {
              text:
                " and ",
            },
            {
              code: true,
              text:
                "href",
            },
            {
              text:
                " attributes are also supported.",
            },
          ]
        }
    ]
  },
]
