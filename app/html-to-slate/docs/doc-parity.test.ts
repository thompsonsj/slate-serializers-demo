import { htmlToSlate, htmlToSlateConfig } from '@slate-serializers/html'
import { describe, expect, it } from 'vitest'
import {
  liftWrappedBlocksDisabledExample,
  liftWrappedBlocksExample,
  liftWrappedBlocksExampleHtml,
} from './fixtures/liftWrappedBlocks'

describe('html-to-slate docs: liftWrappedBlocks', () => {
  it('Code blocks embed the same HTML used for the live output', () => {
    expect(liftWrappedBlocksExample).toContain(liftWrappedBlocksExampleHtml)
    expect(liftWrappedBlocksDisabledExample).toContain(liftWrappedBlocksExampleHtml)
  })

  it('default config places wrapped Slate elements at the top level', () => {
    expect(htmlToSlate(liftWrappedBlocksExampleHtml)).toEqual([
      { type: 'h1', children: [{ text: 'Heading 1' }] },
      { type: 'p', children: [{ text: 'Paragraph 1' }] },
    ])
  })

  it('liftWrappedBlocks: false keeps them inside an element with no type', () => {
    expect(
      htmlToSlate(liftWrappedBlocksExampleHtml, { ...htmlToSlateConfig, liftWrappedBlocks: false }),
    ).toEqual([
      {
        children: [
          { type: 'h1', children: [{ text: 'Heading 1' }] },
          { type: 'p', children: [{ text: 'Paragraph 1' }] },
        ],
      },
    ])
  })
})
