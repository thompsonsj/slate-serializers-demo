export const payloadExampleSlate = [
  {
    children: [
      {
        text: 'Heading 1',
      },
    ],
    type: 'h1',
  },
]

export const payloadExample = `
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'

const slate = ${JSON.stringify(payloadExampleSlate, undefined, 2)}

const serializedToHtml = slateToHtml(slate, payloadSlateToHtmlConfig)
`
