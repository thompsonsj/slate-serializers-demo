export const payloadExampleSlate = [
  { type: 'h2', children: [{ text: 'Uploads' }] },
  {
    type: 'upload',
    relationTo: 'media',
    value: { url: '/media/diagram.png', alt: 'Architecture diagram', mimeType: 'image/png' },
    children: [{ text: '' }],
  },
  {
    type: 'upload',
    relationTo: 'media',
    value: { url: '/media/report.pdf', filename: 'report.pdf', mimeType: 'application/pdf' },
    children: [{ text: '' }],
  },
]

export const payloadExample = `
import { slateToMarkdown, payloadSlateToMarkdownConfig } from '@slate-serializers/markdown'

const slate = ${JSON.stringify(payloadExampleSlate, null, 2)}

const markdown = slateToMarkdown(slate, payloadSlateToMarkdownConfig)
`
