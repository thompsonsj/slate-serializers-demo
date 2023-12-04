import { FC, ReactNode } from 'react'
import cx from 'classnames'

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
    <div className={cx(
      "p-6 bg-slate-200 rounded",
      className
    )}>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {title}
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            {description}
          </div>
        </div>
        {rightContent && (
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          {rightContent}
        </div>
        )}
      </div>
    </div>
  )
}
