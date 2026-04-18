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
import { SlateToReact } from '@slate-serializers/react'

const slate = ${JSON.stringify(defaultExampleSlate, undefined, 2)}

export default function Page() {
  return <SlateToReact node={slate} />
}
`
