import {
  htmlToSlateConfig,
  payloadHtmlToSlateConfig,
  slateDemoHtmlToSlateConfig,
  slateToHtmlConfig,
  payloadSlateToHtmlConfig,
  slateDemoSlateToHtmlConfig,
} from '@slate-serializers/html'

import { initialValue } from './fixtures/default'
import { slateValue } from './fixtures/slate-demo'
import { payloadValue } from './fixtures/payload'

export const publishingOptions = [
  {
    title: 'Default',
    description: 'Default configuration.',
    current: true,
    config: {
      configName: "Default",
      configSlug: "default",
      configUrl: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToDom/default.ts",
      slateToHtmlConfig: slateToHtmlConfig,
      htmlToSlateConfig: htmlToSlateConfig, 
      initialValue,
    }
  },
  {
    title: 'Slate demo',
    description: 'Uses a similar configuration to the examples provided on the Slate JS website.',
    current: false,
    config: {
      configName: "Slate demo",
      configSlug: "slate",
      configUrl: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToDom/slateDemo.ts",
      slateToHtmlConfig: slateDemoSlateToHtmlConfig,
      htmlToSlateConfig: slateDemoHtmlToSlateConfig, 
      initialValue: slateValue,
    }
  },
  {
    title: 'Payload CMS',
    description: 'Configuration designed to work with the Slate JS implementation in Payload CMS.',
    current: false,
    config: {
      configName: "Payload CMS",
      configSlug: "payload",
      configUrl: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToDom/payload.ts",
      slateToHtmlConfig: payloadSlateToHtmlConfig,
      htmlToSlateConfig: payloadHtmlToSlateConfig, 
      initialValue: payloadValue,
    }
  },
]
