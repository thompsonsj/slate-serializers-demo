export const defaultExampleHtml = `<h1>Heading 1</h1><p>Paragraph 1</p>`

export const defaultExample = `
import { htmlToSlate } from '@slate-serializers/html'

const html = ${defaultExampleHtml}

const serializedToSlate = htmlToSlate(html)
`
