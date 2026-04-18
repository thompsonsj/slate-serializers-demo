import { slateToHtmlConfig } from '@slate-serializers/html'
import { Element } from '@/app/lib/dom-element'

export const elementTransformsExampleSlate = [
  {
    type: 'p',
    children: [
      {
        text: 'Paragraph',
      },
    ],
  },
  {
    type: 'image',
    url: 'https://picsum.photos/id/237/200/300',
  },
]

export const elementTransformsHtmlConfig = {
  ...slateToHtmlConfig,
  elementTransforms: {
    ...slateToHtmlConfig.elementTransforms,
    image: ({ node }: { node?: any }) => {
      return new Element('img', {
        src: node?.url ?? '',
      })
    },
  },
}

export const elementTransformsExample = `
import React from 'react'
import { SlateToReact, slateToReactConfig } from '@slate-serializers/react'

const slate = ${JSON.stringify(elementTransformsExampleSlate, undefined, 2)}

const config = {
  ...slateToReactConfig,
  elementTransforms: {
    ...slateToReactConfig.elementTransforms,
    image: ({ node }) => {
      return React.createElement('img', { src: node?.url ?? '', alt: '' })
    },
  },
}

export default function Page() {
  return <SlateToReact node={slate} config={config} />
}
`
