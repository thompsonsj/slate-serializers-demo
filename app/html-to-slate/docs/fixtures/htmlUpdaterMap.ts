export const htmlUpdaterMapExampleHtml = `<figure><img src="https://example.com/image.jpg" alt="Alt text" /></figure>`

export const htmlUpdaterMapExample = `
import {
  htmlToSlate,
  HtmlToSlateConfig,
  htmlToSlateConfig,
} from '@slate-serializers/html';
import { Element } from 'domhandler';
import { findOne } from 'domutils';

const html = ${htmlUpdaterMapExampleHtml}

const config: HtmlToSlateConfig = {
  ...htmlToSlateConfig,
  elementTags: {
    ...htmlToSlateConfig.elementTags,
    figure: (el) => ({
      ...(el && el.attribs),
      type: 'image',
    }),
  },
  htmlUpdaterMap: {
    figure: (el) => {
      const img = findOne((node) => node.name === 'img', [el]);
      if (!img) {
        return el;
      }
      const src = img.attribs['src'];
      const alt = img.attribs['alt'];
      return new Element(
        'figure',
        {
          ...el.attribs,
          'data-src': src,
          'data-alt': alt,
        },
        []
      );
    },
  },
};

const serializedToSlate = htmlToSlate(slate, config)
`
