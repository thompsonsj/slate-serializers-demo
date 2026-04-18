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
import { SlateToReact, payloadSlateToReactConfig } from '@slate-serializers/react'

const slate = ${JSON.stringify(payloadExampleSlate, undefined, 2)}

export default function Page() {
  return <SlateToReact node={slate} config={payloadSlateToReactConfig} />
}
`
