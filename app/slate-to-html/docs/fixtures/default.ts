export const defaultExampleSlate = [
  {
    children: [
      {
        text: 'Heading 1',
      },
    ],
    type: 'h1',
  },
  {
    children: [
      {
        text: 'Paragraph 1',
      },
    ],
    type: 'p',
  },
]

export const defaultExample = `
import { slateToHtml } from '@slate-serializers/html'

const slate = ${JSON.stringify(defaultExampleSlate, undefined, 2)}

const serializedToHtml = slateToHtml(slate)
`
