import { slateToReactConfig } from '@slate-serializers/react'

/** Same object used by the live &lt;SlateToReact&gt; demo on the docs page. */
export const markMapDemoConfig = {
  ...slateToReactConfig,
  markMap: {
    ...slateToReactConfig.markMap,
    subScript: ['sub'],
  },
}
