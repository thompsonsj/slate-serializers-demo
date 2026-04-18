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
import { SlateToReact, slateToReactConfig } from '@slate-serializers/react'

const slate = ${JSON.stringify(markMapExampleSlate, undefined, 2)}

const config = {
  ...slateToReactConfig,
  dom: {
    ...slateToReactConfig.dom,
    markMap: {
      // bold already in default configuration
      ...slateToReactConfig.dom.markMap,
      subScript: ['sub'],
    },
  },
}

export default function Page() {
  return <SlateToReact node={slate} config={config} />
}
`
