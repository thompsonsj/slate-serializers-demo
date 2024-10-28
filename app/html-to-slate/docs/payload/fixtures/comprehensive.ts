import { comprehensiveExampleSlate } from "@/app/slate-to-html/docs/payload/fixtures/comprehensive"
import { payloadSlateToHtmlConfig, slateToHtml } from "@slate-serializers/html"

export const comprehensiveExampleHtml = slateToHtml(comprehensiveExampleSlate, payloadSlateToHtmlConfig)

export const comprehensiveExample = `
import { htmlToSlate, payloadHtmlToSlateConfig } from '@slate-serializers/html'

const html = \`${comprehensiveExampleHtml}\`

const serializedToSlate = slateToHtml(slate, payloadHtmlToSlateConfig)
`
