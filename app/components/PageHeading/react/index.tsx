import { FC, useContext, ReactNode } from 'react'
import { SlateToReactConfigContext } from '../../../contexts/SlateToReactConfigContext'
import { ConfigLinks, PageHeadingBasic } from '../../PageHeadingBasic'

interface IPageHeading {
  title?: string
  menu: ReactNode
}

export const PageHeading: FC<IPageHeading> = ({
  title,
  menu,
}) => {
  const { configName, configUrl, configUrlDom } = useContext(SlateToReactConfigContext)

  return (
    <PageHeadingBasic
      title={title}
      description={configName && (
        <ConfigLinks
          links={[
            { label: `${configName} (DOM)`, href: configUrlDom },
            { label: `${configName} (React)`, href: configUrl },
          ]}
        />
      )}
      rightContent={menu}
    />
  )
}
