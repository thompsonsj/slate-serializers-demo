import { FC, useContext, ReactNode } from 'react'
import {
  CogIcon,
} from '@heroicons/react/20/solid'

import { SlateConfigContext } from '../../contexts/SlateConfigContext'
import { PageHeadingBasic } from '../PageHeadingBasic'

interface IPageHeading {
  title?: string
  config?: "htmlToSlate" | "slateToDom"
  menu?: ReactNode
  className?: string
}

export const PageHeading: FC<IPageHeading> = ({
  title,
  menu,
  className
}) => {
  const { configName, configUrl } = useContext(SlateConfigContext)

  return (
    <PageHeadingBasic
      title={title}
      description={configName && (
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <CogIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          <strong>Config:&nbsp;&nbsp;</strong> <a target="_blank" rel="noreferrer" className="underline" href=
          {configUrl}>{configName}</a>.
        </div>
      )}
      rightContent={menu}
      className={className}
    />
  )
}
