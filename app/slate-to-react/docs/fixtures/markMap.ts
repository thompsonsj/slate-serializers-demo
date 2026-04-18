import { slateToHtmlConfig } from '@slate-serializers/html'

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

/** Parallel DOM config for slateToHtml (equivalent HTML column). */
export const markMapHtmlConfig = {
  ...slateToHtmlConfig,
  markMap: {
    ...slateToHtmlConfig.markMap,
    subScript: ['sub'],
  },
}

export const markMapExample = `
import { SlateToReact, slateToReactConfig } from '@slate-serializers/react'

const slate = ${JSON.stringify(markMapExampleSlate, undefined, 2)}

const config = {
  ...slateToReactConfig,
  markMap: {
    // bold already in default configuration
    ...slateToReactConfig.markMap,
    subScript: ['sub'],
  },
}

export default function Page() {
  return <SlateToReact node={slate} config={config} />
}
`
