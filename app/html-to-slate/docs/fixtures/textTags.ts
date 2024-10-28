export const textTagsExampleHtml = "<p><strong>I am bold text</strong> whereas <sub><strong><i>I am subscript italic bold text</i></strong></sub>.</p><p>Published: <time datetime=\"2016-01-20\">20 January 2016</time></p>"

export const textTagsExample = `
import {
  htmlToSlate,
  htmlToSlateConfig,
  HtmlToSlateConfig,
} from '@slate-serializers/html';
import { getAttributeValue } from 'domutils';

const slate = \`${textTagsExampleHtml}\`

const config: HtmlToSlateConfig = {
  ...htmlToSlateConfig,
  textTags: {
    ...htmlToSlateConfig.textTags,
    sub: () => ({ subscript: true }),
    time: (el) => ({
      ...(el && {
        datetime: getAttributeValue(el, 'datetime'),
      }),
      time: true,
    }),
  },
};

const serializedToSlate = htmlToSlate(slate, config)
`
