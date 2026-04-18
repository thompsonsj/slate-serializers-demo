import { slateToReactConfig } from '@slate-serializers/react'

export const elementMapDemoConfig = {
  ...slateToReactConfig,
  dom: {
    ...slateToReactConfig.dom,
    elementMap: {
      ...slateToReactConfig.dom.elementMap,
      ['heading-one']: 'h1',
    },
  },
}
