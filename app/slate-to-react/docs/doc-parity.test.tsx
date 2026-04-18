/**
 * Parity checks for SlateToReact docs:
 * 1. Every `<Code>` snippet embeds the same `JSON.stringify(slate, null, 2)` as the live demo’s fixture data.
 * 2. Snapshots lock `slateToHtml` output for the HTML column configs (see ./fixtures/*.ts).
 *
 * React demo configs live in `*.demo.ts(x)` so Vitest does not import `@slate-serializers/react` (bundled ulidx
 * fails to initialize in the test runner).
 */
import { slateToHtml } from '@slate-serializers/html'
import { describe, expect, it } from 'vitest'
import { defaultExample, defaultExampleSlate } from './fixtures/default'
import {
  elementMapExample,
  elementMapExampleSlate,
  elementMapHtmlConfig,
} from './fixtures/elementMap'
import {
  elementTransformsExample,
  elementTransformsExampleSlate,
  elementTransformsHtmlConfig,
} from './fixtures/elementTransforms'
import {
  markMapExample,
  markMapExampleSlate,
  markMapHtmlConfig,
} from './fixtures/markMap'
import { markTransformsExample, markTransformsExampleSlate, markTransformsHtmlConfig } from './fixtures/markTransforms'
import { documentedCodeIncludesSlate } from './lib/parity'

describe('slate-to-react docs: documented code vs fixture data', () => {
  it('default: Code block embeds the same slate JSON used for the live demo', () => {
    expect(documentedCodeIncludesSlate(defaultExample, defaultExampleSlate)).toBe(true)
  })

  it('markMap: Code block embeds the same slate JSON', () => {
    expect(documentedCodeIncludesSlate(markMapExample, markMapExampleSlate)).toBe(true)
  })

  it('elementMap: Code block embeds the same slate JSON', () => {
    expect(documentedCodeIncludesSlate(elementMapExample, elementMapExampleSlate)).toBe(true)
  })

  it('markTransforms: Code block embeds the same slate JSON', () => {
    expect(documentedCodeIncludesSlate(markTransformsExample, markTransformsExampleSlate)).toBe(true)
  })

  it('elementTransforms: Code block embeds the same slate JSON', () => {
    expect(documentedCodeIncludesSlate(elementTransformsExample, elementTransformsExampleSlate)).toBe(true)
  })
})

/**
 * Live demos and the HTML column use configs exported from the same fixtures as the page
 * (see ./fixtures/*.ts). These snapshots guard against accidental drift in serialized HTML.
 */
describe('slate-to-react docs: slateToHtml output (fixture configs)', () => {
  it('default', () => {
    expect(slateToHtml(defaultExampleSlate)).toMatchSnapshot()
  })

  it('markMap', () => {
    expect(slateToHtml(markMapExampleSlate, markMapHtmlConfig)).toMatchSnapshot()
  })

  it('elementMap', () => {
    expect(slateToHtml(elementMapExampleSlate, elementMapHtmlConfig)).toMatchSnapshot()
  })

  it('markTransforms', () => {
    expect(slateToHtml(markTransformsExampleSlate, markTransformsHtmlConfig)).toMatchSnapshot()
  })

  it('elementTransforms', () => {
    expect(slateToHtml(elementTransformsExampleSlate, elementTransformsHtmlConfig)).toMatchSnapshot()
  })
})
