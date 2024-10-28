export const elementAttributeTransformExampleHtml = `<h1 id="h1-1">Heading 1</h1><p id="p-1">Paragraph 1</p><h2 id="h2-1">Lists</h2><ul id="ul-1"><li id="li-1">Unordered list item 1</li><li id="li-2">Unordered list item 2</li></ul><ol id="ol-1"><li id="li-3">Ordered list item 1</li><li id="li-4">Ordered list item 2</li></ol><h2 id="h2-2">Quotes</h2><blockquote id="blockquote-1">Quote</blockquote>`

export const elementAttributeTransformExample = `
import {
  htmlToSlate,
  HtmlToSlateConfig,
  htmlToSlateConfig,
} from '@slate-serializers/html';
import { getAttributeValue } from 'domutils';

const html = ${elementAttributeTransformExampleHtml}

const config: HtmlToSlateConfig = {
  ...htmlToSlateConfig,
  elementAttributeTransform: ({ el }) => {
    const attribs: { [key: string]: string } = {};
    const id = getAttributeValue(el, 'id');
    if (id) {
      attribs['id'] = id;
    }
    return attribs;
  },
};

const serializedToSlate = htmlToSlate(slate, config)
`
