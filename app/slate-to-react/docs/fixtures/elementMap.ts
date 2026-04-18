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
import { SlateToReact, slateToReactConfig } from '@slate-serializers/react'

const slate = ${JSON.stringify(elementMapExampleSlate, undefined, 2)}

const config = {
  ...slateToReactConfig,
  dom: {
    ...slateToReactConfig.dom,
    elementMap: {
      // default configuration includes 'h1'
      ...slateToReactConfig.dom.elementMap,
      ['heading-one']: 'h1',
    },
  },
}

export default function Page() {
  return <SlateToReact node={slate} config={config} />
}
`
