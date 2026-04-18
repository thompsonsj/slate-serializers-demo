import { slateToReactConfig } from '@slate-serializers/react'

/** Same object used by the live &lt;SlateToReact&gt; demo on the docs page. */
export const markMapDemoConfig = {
  ...slateToReactConfig,
  dom: {
    ...slateToReactConfig.dom,
    markMap: {
      ...slateToReactConfig.dom.markMap,
      subScript: ['sub'],
    },
  },
}
