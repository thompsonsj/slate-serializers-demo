import { slateToMarkdownConfig, payloadSlateToMarkdownConfig } from '@slate-serializers/markdown'
import { markdownConfigUrl } from '@/app/utilities/slate-serializers-config-urls'

import { initialValue } from './fixtures/default'
import { slateValue } from '../SlateToHtmlDemo/fixtures/slate-demo'
import { payloadValue } from '../SlateToHtmlDemo/fixtures/payload'

export const publishingOptions = [
  {
    title: 'Default',
    description: 'Default configuration.',
    config: {
      configName: 'Default',
      configSlug: 'default',
      configUrl: markdownConfigUrl.default,
      slateToMarkdownConfig,
      initialValue,
    },
  },
  {
    title: 'Slate demo',
    description: 'Content from the Slate JS website examples. The default configuration already understands these element names.',
    config: {
      configName: 'Default',
      configSlug: 'slate',
      configUrl: markdownConfigUrl.default,
      slateToMarkdownConfig,
      initialValue: slateValue,
    },
  },
  {
    title: 'Payload CMS',
    description: 'Configuration designed to work with the Slate JS implementation in Payload CMS.',
    config: {
      configName: 'Payload CMS',
      configSlug: 'payload',
      configUrl: markdownConfigUrl.payload,
      slateToMarkdownConfig: payloadSlateToMarkdownConfig,
      initialValue: payloadValue,
    },
  },
]

export type MarkdownDemoConfig = (typeof publishingOptions)[number]['config']
