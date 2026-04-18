import { slateToReactConfig } from '@slate-serializers/react'

export const elementMapDemoConfig = {
  ...slateToReactConfig,
  elementMap: {
    ...slateToReactConfig.elementMap,
    ['heading-one']: 'h1',
  },
}
