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

export const elementTransformsExample = `
import { slateToHtml, slateToHtmlConfig } from '@slate-serializers/html'
import { Element } from "domhandler"

const slate = ${JSON.stringify(elementTransformsExampleSlate, undefined, 2)}

const config = {
  ...slateToHtmlConfig,
  elementTransforms: {
    ...slateToHtmlConfig.elementTransforms,
    image: ({ node }) => {
      return new Element('img', {
        src: node.url,
      })
    },
  },
}

const serializedToHtml = slateToHtml(slate, config)
`
