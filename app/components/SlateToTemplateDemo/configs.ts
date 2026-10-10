import {
  slateToTemplateConfig,
  payloadSlateToTemplateConfig,
  slateDemoSlateToTemplateConfig,
} from '@slate-serializers/template'
import { domConfigUrl, templateConfigUrl } from '@/app/utilities/slate-serializers-config-urls'
import type { IConfigContext } from '@/app/contexts/SlateToTemplateConfigContext'

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
      configUrl: templateConfigUrl.default,
      slateToTemplateConfig: slateToTemplateConfig,
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
      configUrl: templateConfigUrl.slateDemo,
      slateToTemplateConfig: slateDemoSlateToTemplateConfig,
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
      configUrl: templateConfigUrl.payload,
      slateToTemplateConfig: payloadSlateToTemplateConfig,
      initialValue: payloadValue,
    }
  },
]
