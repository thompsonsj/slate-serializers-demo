import React, { Ref, PropsWithChildren, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { cx, css } from '@emotion/css'

interface BaseProps {
  className: string
  [key: string]: unknown
}

type ButtonProps = PropsWithChildren<
  {
    active: boolean
    reversed: boolean
  } & BaseProps
>

export const Button = React.forwardRef<HTMLSpanElement, ButtonProps>(
  function Button(
    {
      className,
      active,
      reversed,
      ...props
    },
    ref: Ref<HTMLSpanElement>
  ) { return (
    <span
      {...props}
      ref={ref}
      className={cx(
        className as string,
        css`
          cursor: pointer;
          color: ${reversed
            ? active
              ? 'white'
              : '#aaa'
            : active
            ? 'black'
            : '#ccc'};
        `
      )}
    />
  )}
)

type EditorValueProps = PropsWithChildren<
  {
    value: any
  } & BaseProps
>

export const EditorValue = React.forwardRef<HTMLDivElement, EditorValueProps>(
  function EditorValue (
    {
      className,
      value,
      ...props
    },
    ref: Ref<HTMLDivElement>
  ) {
    const textLines = (value as any).document.nodes
      .map((node: any) => node.text)
      .toArray()
      .join('\n')
    return (
      <div
        ref={ref}
        {...props}
        className={cx(
          className as string,
          css`
            margin: 30px -20px 0;
          `
        )}
      >
        <div
          className={css`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `}
        >
          Slate&apos;s value as text
        </div>
        <div
          className={css`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `}
        >
          {textLines}
        </div>
      </div>
    )
  }
)

export const Instruction = React.forwardRef<HTMLDivElement, PropsWithChildren<BaseProps>>(
  function Instruction(
    { className, ...props },
    ref: Ref<HTMLDivElement>
  ) { return (
    <div
      {...props}
      ref={ref}
      className={cx(
        className as string,
        css`
          white-space: pre-wrap;
          margin: 0 -20px 10px;
          padding: 10px 20px;
          font-size: 14px;
          background: #f8f8e8;
        `
      )}
    />
  )}
)

export const Menu = React.forwardRef<HTMLDivElement, PropsWithChildren<BaseProps>>(
  function Menu(
    { className, ...props },
    ref: Ref<HTMLDivElement>
  ) {return (
    <div
      {...props}
      ref={ref}
      className={cx(
        className as string,
        css`
          & > * {
            display: inline-block;
          }

          & > * + * {
            margin-left: 15px;
          }
        `
      )}
    />
  )}
)

export const Portal = ({ children }: { children: ReactNode}) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null
}

export const Toolbar = React.forwardRef<HTMLDivElement, PropsWithChildren<BaseProps>>(
  function Toolbar(
    { className, ...props },
    ref: Ref<HTMLDivElement>
  ) { return (
    <Menu
      {...props}
      ref={ref}
      className={cx(
        className as string,
        'px-6',
        'pb-3',
        'relative'
      )}
    />
  )}
)
