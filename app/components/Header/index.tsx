'use client'

import { Disclosure } from '@headlessui/react'
import { BsGithub } from 'react-icons/bs'
import { IoLogoNpm } from 'react-icons/io5'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavChild = { name: string; href: string }

type NavItem =
  | { name: string; href: string; children?: undefined }
  | { name: string; children: NavChild[]; href?: undefined }

const navigation: NavItem[] = [
  { name: 'Overview', href: '/' },
  {
    name: 'slateToHtml',
    children: [
      { name: 'Docs', href: '/slate-to-html/docs' },
      { name: 'Demo', href: '/slate-to-html' },
    ],
  },
  {
    name: 'htmlToSlate',
    children: [
      { name: 'Docs', href: '/html-to-slate/docs' },
      { name: 'Demo', href: '/html-to-slate' },
    ],
  },
  {
    name: 'slateToReact',
    children: [
      { name: 'Docs', href: '/slate-to-react/docs' },
      { name: 'Demo', href: '/slate-to-react' },
    ],
  },
  {
    name: 'slateToTemplate',
    children: [{ name: 'Demo', href: '/slate-to-template' }],
  },
]

function normalizePath(p: string) {
  if (!p) return '/'
  const trimmed = p.replace(/\/$/, '') || '/'
  return trimmed
}

/** Docs (and nested routes like /docs/payload) vs demo routes that share a prefix with docs. */
function isSubLinkActive(href: string, pathname: string) {
  const path = normalizePath(pathname)
  const h = normalizePath(href)
  if (h.endsWith('/docs')) {
    return path === h || path.startsWith(`${h}/`)
  }
  return path === h
}

function isOverviewActive(pathname: string) {
  return normalizePath(pathname) === '/'
}

function isSectionActive(item: NavItem, pathname: string) {
  if (!('children' in item) || !item.children) return false
  return item.children.some((child) => isSubLinkActive(child.href, pathname))
}

export default function Header() {
  const pathname = usePathname() ?? '/'

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">
        <code className="p-2">slate-serializers</code>
      </div>
      <nav className="flex flex-1 flex-col" aria-label="Main">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {'href' in item && item.href ? (
                    <Link
                      href={item.href}
                      aria-current={isOverviewActive(pathname) ? 'page' : undefined}
                      className={cx(
                        isOverviewActive(pathname) ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700'
                      )}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Disclosure
                      as="div"
                      key={`${item.name}-${pathname}`}
                      defaultOpen={isSectionActive(item, pathname)}
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={cx(
                              isSectionActive(item, pathname) ? 'bg-gray-50' : 'hover:bg-gray-50',
                              'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700'
                            )}
                          >
                            <ChevronRightIcon
                              className={cx(
                                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                'h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children!.map((subItem) => {
                              const active = isSubLinkActive(subItem.href, pathname)
                              return (
                                <li key={subItem.name}>
                                  <Disclosure.Button
                                    as={Link}
                                    href={subItem.href}
                                    aria-current={active ? 'page' : undefined}
                                    className={cx(
                                      active ? 'bg-gray-50' : 'hover:bg-gray-50',
                                      'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700'
                                    )}
                                  >
                                    {subItem.name}
                                  </Disclosure.Button>
                                </li>
                              )
                            })}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <div className="flex items-center p-4">
              <div className="flex shrink-0">
                <a
                  href="https://www.npmjs.com/package/slate-serializers"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View project on npm</span>
                  <IoLogoNpm className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
              <div className="hidden md:ml-4 md:flex md:shrink-0 md:items-center">
                <a
                  href="https://github.com/thompsonsj/slate-serializers"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View project on GitHub</span>
                  <BsGithub className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
