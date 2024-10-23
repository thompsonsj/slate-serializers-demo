export const elementMapExampleSlate = [
  {
    type: 'h1',
    children: [
      {
        text: 'Heading 1',
      },
    ],
  },
  {
    type: 'heading-one',
    children: [
      {
        text: 'Heading 1 (identified with our custom type)',
      },
    ],
  },
]

export const elementMapExample = `
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'

const slate = ${JSON.stringify(elementMapExampleSlate, undefined, 2)}

const config = {
  ...slateToHtmlConfig,
  elementMap: {
    // default configuration includes 'h1'
    ...slateToHtmlConfig.elementMap,
    ['heading-one']: 'h1',
  },
}

const serializedToHtml = slateToHtml(slate, config)
`
