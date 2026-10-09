import { slateToMarkdownConfig, type SlateToMarkdownConfig } from '@slate-serializers/markdown'

export const elementMapExampleSlate = [
  { type: 'title', children: [{ text: 'Release notes' }] },
  { type: 'p', children: [{ text: 'A custom title element becomes a level 1 heading.' }] },
]

export const elementMapConfig: SlateToMarkdownConfig = {
  ...slateToMarkdownConfig,
  elementMap: { ...slateToMarkdownConfig.elementMap, title: 'h1' },
}

export const elementMapExample = `
import { slateToMarkdown, slateToMarkdownConfig } from '@slate-serializers/markdown'

const slate = ${JSON.stringify(elementMapExampleSlate, null, 2)}

const markdown = slateToMarkdown(slate, {
  ...slateToMarkdownConfig,
  elementMap: { ...slateToMarkdownConfig.elementMap, title: 'h1' },
})
`

export const markMapExampleSlate = [
  {
    type: 'p',
    children: [
      { text: 'Markdown has no syntax for ' },
      { text: 'highlighted', highlight: true },
      { text: ' or ' },
      { text: 'underlined', underline: true },
      { text: ' text, so HTML tags are used.' },
    ],
  },
]

export const markMapConfig: SlateToMarkdownConfig = {
  ...slateToMarkdownConfig,
  markMap: { ...slateToMarkdownConfig.markMap, highlight: { open: '<mark>', close: '</mark>' } },
}

export const markMapExample = `
import { slateToMarkdown, slateToMarkdownConfig } from '@slate-serializers/markdown'

const slate = ${JSON.stringify(markMapExampleSlate, null, 2)}

const markdown = slateToMarkdown(slate, {
  ...slateToMarkdownConfig,
  markMap: {
    ...slateToMarkdownConfig.markMap,
    highlight: { open: '<mark>', close: '</mark>' },
  },
})
`

export const elementTransformsExampleSlate = [
  {
    type: 'p',
    children: [
      { text: 'Thanks ' },
      { type: 'mention', username: 'thompsonsj', children: [{ text: '' }] },
      { text: ' for the review.' },
    ],
  },
  { type: 'callout', kind: 'Note', children: [{ text: 'Callouts become block quotes.' }] },
]

export const elementTransformsConfig: SlateToMarkdownConfig = {
  ...slateToMarkdownConfig,
  elementTransforms: {
    mention: ({ node }) => `@${node.username}`,
    callout: ({ node, children }) => `> **${node.kind}:** ${children}`,
  },
}

export const elementTransformsExample = `
import { slateToMarkdown, slateToMarkdownConfig } from '@slate-serializers/markdown'

const slate = ${JSON.stringify(elementTransformsExampleSlate, null, 2)}

const markdown = slateToMarkdown(slate, {
  ...slateToMarkdownConfig,
  elementTransforms: {
    mention: ({ node }) => \`@\${node.username}\`,
    callout: ({ node, children }) => \`> **\${node.kind}:** \${children}\`,
  },
})
`

export const formattingExampleSlate = [
  {
    type: 'p',
    children: [
      { text: 'Some ' },
      { text: 'emphasis', italic: true },
      { text: ' and a literal *asterisk*.' },
    ],
  },
  {
    type: 'ul',
    children: [
      { type: 'li', children: [{ text: 'One' }] },
      { type: 'li', children: [{ text: 'Two' }] },
    ],
  },
]

export const formattingConfig: SlateToMarkdownConfig = {
  ...slateToMarkdownConfig,
  emphasisDelimiter: '_',
  bulletMarker: '*',
}

export const formattingExample = `
import { slateToMarkdown, slateToMarkdownConfig } from '@slate-serializers/markdown'

const slate = ${JSON.stringify(formattingExampleSlate, null, 2)}

const markdown = slateToMarkdown(slate, {
  ...slateToMarkdownConfig,
  emphasisDelimiter: '_',
  bulletMarker: '*',
})
`

export const escapeExampleSlate = [
  { type: 'p', children: [{ text: 'Text that already contains **Markdown**.' }] },
]

export const escapeConfig: SlateToMarkdownConfig = {
  ...slateToMarkdownConfig,
  escape: false,
}

export const escapeExample = `
import { slateToMarkdown, slateToMarkdownConfig } from '@slate-serializers/markdown'

const slate = ${JSON.stringify(escapeExampleSlate, null, 2)}

slateToMarkdown(slate)
// default: the asterisks are escaped

slateToMarkdown(slate, { ...slateToMarkdownConfig, escape: false })
// escape: false: the asterisks are written as given
`
