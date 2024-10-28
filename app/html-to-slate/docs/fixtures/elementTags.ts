export const elementTagsExampleHtml = "<article id=\"main\"><h1>Heading 1</h1><p>Paragraph 1</p><h2>Lists</h2><ul><li>Unordered list item 1</li><li>Unordered list item 2</li></ul><ol><li>Ordered list item 1</li><li>Ordered list item 2</li></ol><h2>Quotes</h2><blockquote>Quote</blockquote></article>"

export const elementTagsExample = `
import {
  htmlToSlate,
  HtmlToSlateConfig,
  htmlToSlateConfig,
} from '@slate-serializers/html';
import { getAttributeValue } from 'domutils';

const html = \`${elementTagsExampleHtml}\`

const config: HtmlToSlateConfig = {
  ...htmlToSlateConfig,
  elementTags: {
    ...htmlToSlateConfig.elementTags,
    article: (el) => ({
      ...(el && {
        id: getAttributeValue(el, 'id'),
      }),
      type: 'article',
    }),
  },
};

const serializedToSlate = htmlToSlate(html, config)
`
