import { DocumentTextIcon, WindowIcon } from '@heroicons/react/20/solid'
import { BsGithub } from 'react-icons/bs'
import { IoLogoNpm } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const serializers = [
  {
    title: 'slateToHtml',
    package: '@slate-serializers/html',
    npm: 'https://www.npmjs.com/package/@slate-serializers/html',
    github: 'https://github.com/thompsonsj/slate-serializers/tree/main/packages/html',
    content: <>
      <p>Convert Slate JSON to HTML.</p>
    </>,
    docsLink: '#',
    demoLink: '/slatetohtml',
  },
  {
    title: 'htmlToSlate',
    package: '@slate-serializers/html',
    npm: 'https://www.npmjs.com/package/@slate-serializers/html',
    github: 'https://github.com/thompsonsj/slate-serializers/tree/main/packages/html',
    content: <>
      <p>Convert HTML to Slate JSON.</p>
    </>,
    docsLink: '#',
    demoLink: '/htmltoslate',
  },
  // More serializers...
]

export const Grid = () => {
  return (
    <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {serializers.map((s, index) => (
        <li key={index} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="w-full items-center justify-between space-y-6 p-6">
            
            <h2 className="truncate text-lg font-medium text-gray-900"><code>{s.title}</code></h2>
            
            
            <div className="flex gap-6">
          <h3 className="truncate text-lg font-medium text-gray-800">{s.package}</h3>
          {s.npm && (
              <a
                href={s.npm}
                className="inline rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View project on npm</span>
                <IoLogoNpm className="h-6 w-6" aria-hidden="true" />
              </a>
            )}
            {s.github && (
              <a
                href={s.github}
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View project on GitHub</span>
                <BsGithub className="h-6 w-6" aria-hidden="true" />
              </a>
            )}
          </div>
          
          {s.content}
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              {s.docsLink && (
              <div className="flex w-0 flex-1">
                <NavLink
                  to={`${s.docsLink}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <DocumentTextIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Docs
                </NavLink>
              </div>
              )}
              {s.demoLink && (
              <div className="-ml-px flex w-0 flex-1">
                <NavLink
                  to={`${s.demoLink}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <WindowIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Demo
                </NavLink>
              </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
