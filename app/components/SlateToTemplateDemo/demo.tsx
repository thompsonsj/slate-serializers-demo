import React, { FC, ReactNode } from 'react'
import { slateToTemplate, slateToTemplateConfig } from "@slate-serializers/template"

interface IButton {
  className?: string
  onClick?: () => void
  children?: ReactNode
}

const Button: FC<IButton> = ({ className, onClick, children }) => {
  return <button className={className} onClick={onClick}>{children}</button>
}

const slate = [
  {
    "type": "p",
    "children": [
        {
            "text": "This page demonstrates:"
        }
    ]
},
  {
    "type": "ul",
    "children": [
        {
            "type": "li",
            "children": [
                {
                    "text": "content rendered using the "
                },
                {
                    "text": "slateToTemplate",
                    "bold": true
                },
                {
                    "text": " function; and"
                }
            ]
        },
        {
          "children": [
              {
                  "text": "a custom element serializer that passes a React component."
              }
          ],
          "type": "li"
      },
    ]
  },
  {
    type: "button",
  }
]

const config = {
  ...slateToTemplateConfig,
  customElementSerializers: {
    button: () => <Button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => alert('button clicked')}>Test button</Button>
  }
}

export const Demo = () => {

  const serializedArray = slateToTemplate(slate, config)

  const jsx = serializedArray.map(value => {
    if (typeof value === "string") {
      return <span dangerouslySetInnerHTML={{__html: value}} />
    } else {
      return value as ReactNode
    }
  })

  return <div className="prose pt-24">{jsx}</div>
}
