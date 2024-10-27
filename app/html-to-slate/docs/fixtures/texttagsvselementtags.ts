export const textTagsVsElementTagsExampleHtml = "<article id=\"main\"><p>Published: <time datetime=\"2016-01-20\"><strong>20 January 2016</strong></time></p></article>"

export const textTagsVsElementTagsExample = `
import {
  htmlToSlate,
  HtmlToSlateConfig,
  htmlToSlateConfig,
} from '@slate-serializers/html';
import { getAttributeValue } from 'domutils';

const html = ${textTagsVsElementTagsExampleHtml}

const config: HtmlToSlateConfig = {
  ...htmlToSlateConfig,
  textTags: {
    ...htmlToSlateConfig.textTags,
    time: (el) => ({
      ...(el && {
        datetime: getAttributeValue(el, 'datetime'),
      }),
      time: true,
    }),
  },
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

const serializedToSlate = htmlToSlate(slate, config)
`
