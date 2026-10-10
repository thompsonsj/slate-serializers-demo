import { FC, useContext, ReactNode } from 'react'
import { SlateToTemplateConfigContext } from '../../../contexts/SlateToTemplateConfigContext'
import { ConfigLinks, PageHeadingBasic } from '../../PageHeadingBasic'

interface IPageHeading {
  title?: string
  menu: ReactNode
}

export const PageHeading: FC<IPageHeading> = ({
  title,
  menu,
}) => {
  const { configName, configUrl, configUrlDom } = useContext(SlateToTemplateConfigContext)

  return (
    <PageHeadingBasic
      title={title}
      description={configName && (
        <ConfigLinks
          links={[
            { label: `${configName} (DOM)`, href: configUrlDom },
            { label: `${configName} (template)`, href: configUrl },
          ]}
        />
      )}
      rightContent={menu}
    />
  )
}
