import React from 'react'
import { slateToReactConfig } from '@slate-serializers/react'

export const elementTransformsDemoConfig = {
  ...slateToReactConfig,
  elementTransforms: {
    ...slateToReactConfig.elementTransforms,
    image: ({ node }: { node?: any }) =>
      React.createElement('img', { src: node?.url ?? '', alt: '' }),
  },
}
