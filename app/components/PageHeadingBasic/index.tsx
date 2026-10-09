import { FC, ReactNode } from 'react'
import cx from 'classnames'
import { CogIcon } from '@heroicons/react/20/solid'

interface IPageHeadingBasic {
  title?: string | ReactNode
  description?: ReactNode
  rightContent?: ReactNode
  className?: string
}

export const PageHeadingBasic: FC<IPageHeadingBasic> = ({
  title,
  description,
  rightContent,
  className
}) => {
  return (
    <div className={cx('rounded-lg bg-slate-100 p-6', className)}>
      <div className="gap-6 lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h1>
          {description && <div className="mt-2">{description}</div>}
        </div>
        {rightContent && (
        <div className="mt-4 flex shrink-0 lg:mt-0">
          {rightContent}
        </div>
        )}
      </div>
    </div>
  )
}

interface IConfigLinks {
  links: { label: string; href: string }[]
}

export const ConfigLinks: FC<IConfigLinks> = ({ links }) => (
  <p className="flex flex-wrap items-center gap-x-2 text-sm text-gray-600">
    <CogIcon className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
    <span className="font-semibold">Config:</span>
    {links.map((link, index) => (
      <span key={link.href}>
        <a target="_blank" rel="noreferrer" className="underline hover:text-gray-900" href={link.href}>
          {link.label}
        </a>
        {index < links.length - 1 && ','}
      </span>
    ))}
  </p>
)
