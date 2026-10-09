# Design principles

How pages on this site should look and be built. The aim is plain, readable developer docs: content first, few decorations, the same patterns everywhere.

## Page types

There are three kinds of page. Pick one and use its building blocks.

| Page | Width | Starts with | Building blocks |
|------|-------|-------------|-----------------|
| Home | `max-w-2xl` column | Plain `h1` + lead paragraph | Package cards (`page-specific/grid.tsx`), `GettingStarted` |
| Docs (`/*/docs`) | `prose` (about 65 characters per line) | `h1` with the API name in `<code>` | Prose, Bright `<Code>` blocks wrapped in `not-prose` |
| Demo (`/slate-to-*`, `/html-to-slate`) | Full content width | `PageHeadingBasic` (title, `ConfigLinks`, config `Select`) | `DemoGrid` and `DemoPanel` from `components/DemoLayout` |

## Shared components

Reuse these components instead of copying their class strings:

| Need | Component |
|------|-----------|
| Demo page header | `PageHeadingBasic` with `ConfigLinks` |
| Config switcher | `PageHeading/Select`. Pass each demo's `publishingOptions` from its `configs.ts` |
| Demo layout | `DemoGrid`, `DemoPanel`, `RenderedOutput` |
| npm / GitHub icon links | `IconLink` |
| Editor toolbar | `RichTextEditor/components` (`Toolbar`, `Button`) |

## Styling rules

- Use Tailwind utilities from the default theme. Don't use arbitrary values (`h-[400px]`), hex colours, inline styles or CSS-in-JS.
- `globals.css` is only for elements Tailwind classes can't reach: rendered Markdown and HTML, inline `code`, `pre` and `blockquote`. It refers to theme variables (`var(--color-gray-200)`), not literal colours.
- If you need the same class string in two places, make a component.

## Layout

- **One `h1` per page.** `PageHeadingBasic` renders it on demo pages; docs and home write it in prose. Section titles inside a page are `h2`.
- **Containers match their content.** A background panel or border should be exactly as wide as the content around it. Don't put a full-width panel above a narrow text column.
- **Text never runs full width.** Long-form text stays inside `prose` or `max-w-2xl`. Only demos, which put two panes side by side, use the full content width.
- **Mobile first.** Grids start as one column and add columns at a breakpoint (`sm:grid-cols-2`, `lg:grid-cols-2`). Don't use fixed `col-span-6` splits.
- **Vertical rhythm.** Use Tailwind's spacing scale: `mt-2` between a heading and its description, `gap-4` between cards, `mt-8`–`mt-12` between page sections. Don't make up one-off values.

## Cards and panels

- **Cards** are `rounded-lg border border-gray-200 bg-white`. Use no shadows.
- Card actions sit in a footer pinned to the bottom (`flex flex-col` on the card, `flex-1` on the body), so footers line up across a row.
- **Panels** (tinted backgrounds) are only for page headers on demo pages: `rounded-lg bg-gray-100 p-6`. Don't use tinted boxes for ordinary content.
- **Output boxes** in demos: use `<pre><code>` for source output (the global style gives a light grey box), and `RenderedOutput` for rendered HTML or React output.

## Type and colour

- **Body text** uses the system font stack; code uses the mono stack in `globals.css`.
- **Colour:**
  - Text is `gray-900`, secondary text `gray-600`, and tertiary text and icons `gray-400`/`gray-500`.
  - Gray is the only neutral colour family. Don't mix in slate, zinc or neutral.
  - Indigo is the only accent colour, used for primary controls such as the config select.
- **Inline code** is a small grey chip without backticks (see `globals.css`). Inside headings it inherits the heading's size and weight.
- **Contrast:** body text must meet WCAG AA, so nothing lighter than `gray-600` on white.

## Code examples

- Use Bright `<Code lang="…">` for static examples. Wrap it in `<div className="not-prose">` so the typography plugin doesn't restyle it.
- Show output with a filename title when it helps (`title="output.md"`), and generate it from the real serializer at build time rather than pasting it.
- Keep examples short. Show only the config keys that matter for the point being made.

## Writing

- Plain English for developers using the packages. Explain how to use something, not its history. Skip PR links and changelog narrative.
- Lead with what the API does, then a minimal example, then options.
- Link API names to their docs page the first time they appear on a page.

## Accessibility

- Icon-only links need an `sr-only` label that says where they go (for example "@slate-serializers/html on npm").
- Use `focus-visible:ring-2 focus-visible:ring-indigo-500` for focus states on custom links and buttons.
- Use `<label htmlFor>` only for real form controls. Panel titles are headings.
