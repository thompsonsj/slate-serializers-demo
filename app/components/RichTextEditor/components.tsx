import React, { Ref, PropsWithChildren } from 'react'
import cx from 'classnames'

interface BaseProps {
  className?: string
  [key: string]: unknown
}

type ButtonProps = PropsWithChildren<
  {
    active: boolean
  } & BaseProps
>

export const Button = React.forwardRef<HTMLSpanElement, ButtonProps>(
  function Button({ className, active, ...props }, ref: Ref<HTMLSpanElement>) {
    return (
      <span
        {...props}
        ref={ref}
        className={cx('cursor-pointer', active ? 'text-gray-900' : 'text-gray-300 hover:text-gray-500', className as string | undefined)}
      />
    )
  }
)

export const Toolbar = React.forwardRef<HTMLDivElement, PropsWithChildren<BaseProps>>(
  function Toolbar({ className, ...props }, ref: Ref<HTMLDivElement>) {
    return (
      <div
        {...props}
        ref={ref}
        className={cx('relative flex flex-wrap items-center gap-4 px-6 pb-3', className as string | undefined)}
      />
    )
  }
)
