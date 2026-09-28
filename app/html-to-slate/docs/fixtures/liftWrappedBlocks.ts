export const liftWrappedBlocksExampleHtml = `<div><h1>Heading 1</h1><p>Paragraph 1</p></div>`

export const liftWrappedBlocksExample = `
import { htmlToSlate } from '@slate-serializers/html'

const html = \`${liftWrappedBlocksExampleHtml}\`

const serializedToSlate = htmlToSlate(html)
`

export const liftWrappedBlocksDisabledExample = `
import { htmlToSlate, htmlToSlateConfig } from '@slate-serializers/html'

const html = \`${liftWrappedBlocksExampleHtml}\`

const serializedToSlate = htmlToSlate(html, {
  ...htmlToSlateConfig,
  liftWrappedBlocks: false,
})
`
