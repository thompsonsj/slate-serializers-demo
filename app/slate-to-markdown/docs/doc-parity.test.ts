import {
  payloadSlateToMarkdownConfig,
  slateToMarkdown,
  slateToMarkdownConfig,
} from '@slate-serializers/markdown'
import { describe, expect, it } from 'vitest'
import { documentedCodeIncludesSlate } from '@/app/slate-to-react/docs/lib/parity'
import { constructsExample, constructsExampleSlate } from './fixtures/constructs'
import {
  elementMapConfig,
  elementMapExample,
  elementMapExampleSlate,
  elementTransformsConfig,
  elementTransformsExample,
  elementTransformsExampleSlate,
  escapeConfig,
  escapeExample,
  escapeExampleSlate,
  formattingConfig,
  formattingExample,
  formattingExampleSlate,
  markMapConfig,
  markMapExample,
  markMapExampleSlate,
} from './fixtures/configuration'
import { defaultExample, defaultExampleSlate } from './fixtures/default'
import { payloadExample, payloadExampleSlate } from './fixtures/payload'

const examples = {
  default: [defaultExample, defaultExampleSlate, slateToMarkdownConfig],
  constructs: [constructsExample, constructsExampleSlate, slateToMarkdownConfig],
  payload: [payloadExample, payloadExampleSlate, payloadSlateToMarkdownConfig],
  elementMap: [elementMapExample, elementMapExampleSlate, elementMapConfig],
  markMap: [markMapExample, markMapExampleSlate, markMapConfig],
  elementTransforms: [elementTransformsExample, elementTransformsExampleSlate, elementTransformsConfig],
  formatting: [formattingExample, formattingExampleSlate, formattingConfig],
  escape: [escapeExample, escapeExampleSlate, escapeConfig],
} as const

describe('slate-to-markdown docs: documented code vs fixture data', () => {
  it.each(Object.entries(examples))('%s: Code block embeds the same slate JSON', (_name, [code, slate]) => {
    expect(documentedCodeIncludesSlate(code, slate)).toBe(true)
  })
})

describe('slate-to-markdown docs: slateToMarkdown output', () => {
  it.each(Object.entries(examples))('%s', (_name, [, slate, config]) => {
    expect(slateToMarkdown(slate, config)).toMatchSnapshot()
  })

  it('escape: default escapes Markdown syntax in text', () => {
    expect(slateToMarkdown(escapeExampleSlate)).toMatchSnapshot()
  })
})
