export const markTransformsExampleSlate = [
  {
    type: 'p',
    children: [
      {
        bold: true,
        fontSize: '96px',
        text: 'Paragraph',
      },
    ],
  },
]

export const markTransformsExample = `
import { slateToHtml, slateToHtmlConfig } from '@slate-serializers/html'
import { Element } from "domhandler"

const slate = ${JSON.stringify(markTransformsExampleSlate, undefined, 2)}

const config = {
  ...slateToHtmlConfig,
  markTransforms: {
    ...slateToHtmlConfig.markTransforms,
    fontSize: ({ node }) => {
      return new Element('span', {
        style: \`font-size:\${node.fontSize};\`
      })
    }
  },
}

const serializedToHtml = slateToHtml(slate, config)
`
