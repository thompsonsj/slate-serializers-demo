export const payloadExampleHtml = "<h1>Heading 1</h1>"

export const payloadExample = `
import { htmlToSlate, payloadHtmlToSlateConfig } from '@slate-serializers/html'

const html = ${payloadExampleHtml}

const serializedToSlate = slateToHtml(slate, payloadHtmlToSlateConfig)
`
