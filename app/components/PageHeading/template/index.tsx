import { FC, Fragment, useContext, ReactNode } from 'react'
import {
  CogIcon,
  CheckIcon,
  ChevronDownIcon,
  LinkIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { Select } from './Select'
import cx from "classnames"
import { SlateToReactConfigContext } from '../../../contexts/SlateToReactConfigContext'

const configs = {
  slateToDom: {
    text: "Default",
    url: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToDom/default.ts",
  },
  htmlToSlate: {
    text: "Default",
    url: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/htmlToSlate/default.ts",
  }
}

interface IPageHeading {
  title?: string
  config?: "htmlToSlate" | "slateToDom"
  menu: ReactNode
  className?: string
}

export const PageHeading: FC<IPageHeading> = ({
  title,
  config = "htmlToSlate",
  menu,
  className
}) => {
  const { configName, configUrl, configUrlDom } = useContext(SlateToReactConfigContext)

  return (
    <div className={className}>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {title}
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            {configName && (
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CogIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <strong>Config:&nbsp;&nbsp;</strong> <a target="_blank" className="underline" href=
              {configUrlDom}>{configName} (Dom)</a>, &nbsp; <a target="_blank" className="underline" href=
              {configUrl}>{configName} (React)</a>.
            </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          {menu}
        </div>
      </div>
    </div>
  )
}
