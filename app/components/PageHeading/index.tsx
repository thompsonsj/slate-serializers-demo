import { FC, useContext, ReactNode } from 'react'

import { SlateConfigContext } from '../../contexts/SlateConfigContext'
import { ConfigLinks, PageHeadingBasic } from '../PageHeadingBasic'

interface IPageHeading {
  title?: string
  menu?: ReactNode
}

export const PageHeading: FC<IPageHeading> = ({
  title,
  menu,
}) => {
  const { configName, configUrl } = useContext(SlateConfigContext)

  return (
    <PageHeadingBasic
      title={title}
      description={configName && <ConfigLinks links={[{ label: configName, href: configUrl }]} />}
      rightContent={menu}
    />
  )
}
