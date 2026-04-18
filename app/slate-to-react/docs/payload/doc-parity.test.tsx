/** @see ../doc-parity.test.tsx */
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'
import { describe, expect, it } from 'vitest'
import { comprehensiveExample, comprehensiveExampleSlate } from './fixtures/comprehensive'
import { payloadExample, payloadExampleSlate } from './fixtures/payload'
import { documentedCodeIncludesSlate } from '../lib/parity'

describe('slate-to-react payload docs: documented code vs fixture data', () => {
  it('payload example: Code block embeds the same slate JSON', () => {
    expect(documentedCodeIncludesSlate(payloadExample, payloadExampleSlate)).toBe(true)
  })

  it('comprehensive example: Code block embeds the same slate JSON', () => {
    expect(documentedCodeIncludesSlate(comprehensiveExample, comprehensiveExampleSlate)).toBe(true)
  })
})

describe('slate-to-react payload docs: slateToHtml (payload config)', () => {
  it('payload example', () => {
    expect(slateToHtml(payloadExampleSlate, payloadSlateToHtmlConfig)).toMatchSnapshot()
  })

  it('comprehensive example', () => {
    expect(slateToHtml(comprehensiveExampleSlate, payloadSlateToHtmlConfig)).toMatchSnapshot()
  })
})
