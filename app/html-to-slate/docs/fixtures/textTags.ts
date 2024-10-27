export const textTagsExampleHtml = "<p><strong>I am bold text</strong> whereas <sub><strong><i>I am subscript italic bold text</i></strong></sub>.</p>"

export const textTagsExample = `
import {
  htmlToSlate,
  htmlToSlateConfig,
} from '@slate-serializers/html';

const slate = \`${textTagsExampleHtml}\`

const config = {
  ...htmlToSlateConfig,
  textTags: {
    ...htmlToSlateConfig.textTags,
    sub: () => ({ subscript: true }),
  },
};

const serializedToSlate = htmlToSlate(slate, config)
`
