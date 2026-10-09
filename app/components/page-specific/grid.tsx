import { DocumentTextIcon, WindowIcon } from '@heroicons/react/20/solid'
import { BsGithub } from 'react-icons/bs'
import { IoLogoNpm } from 'react-icons/io5'
import Link from 'next/link'
import { IconLink } from '../IconLink'

const serializers = [
  {
    title: 'slateToHtml',
    package: '@slate-serializers/html',
    npm: 'https://www.npmjs.com/package/@slate-serializers/html',
    github: 'https://github.com/thompsonsj/slate-serializers/tree/main/packages/html',
    content: <>
      <p>Convert Slate JSON to HTML.</p>
    </>,
    docsLink: '/slate-to-html/docs',
    demoLink: '/slate-to-html',
  },
  {
    title: 'htmlToSlate',
    package: '@slate-serializers/html',
    npm: 'https://www.npmjs.com/package/@slate-serializers/html',
    github: 'https://github.com/thompsonsj/slate-serializers/tree/main/packages/html',
    content: <>
      <p>Convert HTML to Slate JSON.</p>
    </>,
    docsLink: '/html-to-slate/docs',
    demoLink: '/html-to-slate',
  },
  {
    title: 'slateToReact',
    package: '@slate-serializers/react',
    npm: 'https://www.npmjs.com/package/@slate-serializers/react',
    github: 'https://github.com/thompsonsj/slate-serializers/tree/main/packages/react',
    content: <>
      <p>Convert Slate JSON to React.</p>
    </>,
    docsLink: '/slate-to-react/docs',
    demoLink: '/slate-to-react',
  },
  {
    title: 'slateToTemplate',
    package: '@slate-serializers/template',
    npm: 'https://www.npmjs.com/package/@slate-serializers/template',
    github: 'https://github.com/thompsonsj/slate-serializers/tree/main/packages/template',
    content: <>
      <p>Convert Slate JSON to an array of HTML strings mixed with custom serializers (e.g. JSX).</p>
    </>,
    docsLink: '/slate-to-template/docs',
    demoLink: '/slate-to-template',
  },
  {
    title: 'slateToMarkdown',
    package: '@slate-serializers/markdown',
    npm: 'https://www.npmjs.com/package/@slate-serializers/markdown',
    github: 'https://github.com/thompsonsj/slate-serializers/tree/main/packages/markdown',
    content: <>
      <p>Convert Slate JSON to GitHub Flavored Markdown.</p>
    </>,
    docsLink: '/slate-to-markdown/docs',
    demoLink: '/slate-to-markdown',
  },
  {
    title: 'slateToDom',
    package: '@slate-serializers/dom',
    npm: 'https://www.npmjs.com/package/@slate-serializers/dom',
    github: 'https://github.com/thompsonsj/slate-serializers/tree/main/packages/dom',
    content: (
      <>
        <p>
          Convert Slate JSON to a <code>htmlparser2</code> DOM before serializing to HTML—useful when you need to
          manipulate the tree first.
        </p>
      </>
    ),
    docsLink: '/slate-to-dom/docs',
    demoLink: '',
  },
]

const footerLinkClassName =
  'flex flex-1 items-center justify-center gap-x-2 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50'

export const Grid = () => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {serializers.map((s) => (
        <li key={s.title} className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-mono text-base font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-0.5 truncate font-mono text-xs text-gray-500">{s.package}</p>
              </div>
              <div className="-mr-1 -mt-1 flex shrink-0">
                <IconLink href={s.npm} label={`${s.package} on npm`} icon={IoLogoNpm} />
                <IconLink href={s.github} label={`${s.package} on GitHub`} icon={BsGithub} />
              </div>
            </div>
            <div className="mt-3 text-sm leading-6 text-gray-600">{s.content}</div>
          </div>
          <div className="flex divide-x divide-gray-200 border-t border-gray-200">
            <Link href={s.docsLink} className={footerLinkClassName}>
              <DocumentTextIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              Docs
            </Link>
            {s.demoLink && (
              <Link href={s.demoLink} className={footerLinkClassName}>
                <WindowIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                Demo
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
