import { slateToHtmlConfig } from '@slate-serializers/html'
import { Element } from '@slate-serializers/html'

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

export const markTransformsHtmlConfig = {
  ...slateToHtmlConfig,
  markTransforms: {
    ...slateToHtmlConfig.markTransforms,
    fontSize: ({ node }: { node?: any }) => {
      return new Element('span', {
        style: `font-size:${node.fontSize};`,
      })
    },
  },
}

export const markTransformsExample = `
import { slateToHtml, slateToHtmlConfig } from '@slate-serializers/html'
import { Element } from '@slate-serializers/html'

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
