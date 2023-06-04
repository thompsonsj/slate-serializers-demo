import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BsList, BsBell, BsX, BsFillPlusCircleFill, BsGithub } from 'react-icons/bs'
import { IoLogoNpm } from 'react-icons/io5'
import cx from 'classnames'
import { NavLink, Link } from "react-router-dom"

const navigation = [
  {
    name: 'slateToHtml',
    to: '/'
  },
  {
    name: 'htmlToSlate',
    to: '/htmltoslate'
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <BsX className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <BsList className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <code className="p-2">slate-serializers</code>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navigation.map(item => (
                  <NavLink
                    to={item.to}
                    className={({ isActive}) => cx(
                      "inline-flex items-center",
                      "border-b-2",
                      "px-1 pt-1",
                      "text-sm font-medium",
                      isActive ? "border-indigo-500" : "border-transparent",
                      isActive ? "text-gray-900" : "text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    )}
                  >
                    {item.name}
                  </NavLink>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-shrink-0">
                <a
                    href="https://www.npmjs.com/package/slate-serializers"
                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View project on npm</span>
                    <IoLogoNpm className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  <a
                    href="https://github.com/thompsonsj/slate-serializers"
                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View project on GitHub</span>
                    <BsGithub className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
          {({ close }) => (
            <>
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {navigation.map(item => (
              <NavLink
                to={item.to}
                className={({ isActive}) => cx(
                  "block border-l-4",
                  "py-2 pl-3 pr-4",
                  "sm:pl-5 sm:pr-6",
                  "text-base font-medium",
                  isActive ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                )}
                onClick={() => close()}
              >
                {item.name}
              </NavLink>
              ))}
            </div>
            </>
          )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
