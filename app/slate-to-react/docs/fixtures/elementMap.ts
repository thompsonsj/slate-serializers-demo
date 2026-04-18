import { slateToHtmlConfig } from '@slate-serializers/html'

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

export const elementMapHtmlConfig = {
  ...slateToHtmlConfig,
  elementMap: {
    ...slateToHtmlConfig.elementMap,
    ['heading-one']: 'h1',
  },
}

export const elementMapExample = `
import { SlateToReact, slateToReactConfig } from '@slate-serializers/react'

const slate = ${JSON.stringify(elementMapExampleSlate, undefined, 2)}

const config = {
  ...slateToReactConfig,
  elementMap: {
    // default configuration includes 'h1'
    ...slateToReactConfig.elementMap,
    ['heading-one']: 'h1',
  },
}

export default function Page() {
  return <SlateToReact node={slate} config={config} />
}
`
