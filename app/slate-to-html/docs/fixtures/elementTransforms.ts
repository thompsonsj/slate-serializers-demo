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

const slate = ${JSON.stringify(elementTransformsExampleSlate, undefined, 2)}

const config = {
  ...slateToHtmlConfig,
  elementTransforms: {
    ...slateToHtmlConfig.elementTransforms,
    image: ({ node }: { node?: any }) => {
      return new Element('img', {
        src: node.url,
      })
    },
  },
}

const serializedToHtml = slateToHtml(slate, config)
`
