import React from 'react'
import { slateToReactConfig } from '@slate-serializers/react'

export const elementTransformsDemoConfig = {
  ...slateToReactConfig,
  react: {
    ...slateToReactConfig.react,
    elementTransforms: {
      ...slateToReactConfig.react.elementTransforms,
      image: ({ node }: { node?: any }) =>
        React.createElement('img', { src: node?.url ?? '', alt: '' }),
    },
  },
}
