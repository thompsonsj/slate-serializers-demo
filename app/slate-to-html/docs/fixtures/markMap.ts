export const markMapExampleSlate = [{
  type: 'p',
  children: [
    {
      text: 'Subscript and bold text',
      bold: true,
      subScript: true,
    },
  ],
}]

export const markMapExample = `
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'

const slate = ${JSON.stringify(markMapExampleSlate, undefined, 2)}

const config = {
  ...slateToHtmlConfig,
  markMap: {
    // bold already in default configuration
    ...slateToHtmlConfig.markMap,
    subScript: ['sub'],
  },
}

const serializedToHtml = slateToHtml(slate, config)
`
