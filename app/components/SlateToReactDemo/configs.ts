import {
  slateToHtmlConfig,
  payloadSlateToHtmlConfig,
  slateDemoSlateToHtmlConfig,
} from '@slate-serializers/html'
import { slateToReactConfig, payloadSlateToReactConfig, slateDemoSlateToReactConfig } from '@slate-serializers/react'
import { domConfigUrl, reactConfigUrl } from '@/app/utilities/slate-serializers-config-urls'
import type { IConfigContext } from '@/app/contexts/SlateToReactConfigContext'

import { initialValue } from './fixtures/default'
import { slateValue } from '../SlateToHtmlDemo/fixtures/slate-demo'
import { payloadValue } from '../SlateToHtmlDemo/fixtures/payload'

export const publishingOptions: { title: string; description: string; config: IConfigContext }[] = [
  {
    title: 'Default',
    description: 'Default configuration.',
    config: {
      configName: "Default",
      configSlug: "default",
      configUrlDom: domConfigUrl.default,
      configUrl: reactConfigUrl.default,
      slateToHtmlConfig: slateToHtmlConfig,
      slateToReactConfig: slateToReactConfig,
      initialValue,
    }
  },
  {
    title: 'Slate demo',
    description: 'Uses a similar configuration to the examples provided on the Slate JS website.',
    config: {
      configName: "Slate demo",
      configSlug: "slate",
      configUrlDom: domConfigUrl.slateDemo,
      configUrl: reactConfigUrl.slateDemo,
      slateToHtmlConfig: slateDemoSlateToHtmlConfig,
      slateToReactConfig: slateDemoSlateToReactConfig,
      initialValue: slateValue,
    }
  },
  {
    title: 'Payload CMS',
    description: 'Configuration designed to work with the Slate JS implementation in Payload CMS.',
    config: {
      configName: "Payload CMS",
      configSlug: "payload",
      configUrlDom: domConfigUrl.payload,
      configUrl: reactConfigUrl.payload,
      slateToHtmlConfig: payloadSlateToHtmlConfig,
      slateToReactConfig: payloadSlateToReactConfig,
      initialValue: payloadValue,
    }
  },
]
