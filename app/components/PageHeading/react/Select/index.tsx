import { ChangeEvent, Fragment, useContext, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  slateToHtmlConfig,
  payloadSlateToHtmlConfig,
  slateDemoSlateToHtmlConfig,
} from '@slate-serializers/html'
import { slateToReactConfig } from '@slate-serializers/react'
import { Descendant } from 'slate'
import { SlateValueContext } from '../../../../contexts/SlateValueContext'
import cx from 'classnames'

export const initialValue: any[] = [
  {
      "children": [
          {
              "text": "slateToReact"
          }
      ],
      "type": "h2"
  },
  {
      "children": [
          {
              "text": "Demo"
          }
      ],
      "type": "h3"
  },
  {
      "type": "p",
      "children": [
          {
              "text": "Try changing the contents of this editor. The rest of the page updates as you make changes to demonstrate:"
          }
      ]
  },
  {
      "type": "ul",
      "children": [
          {
              "children": [
                  {
                      "text": "the Slate JSON value;"
                  }
              ],
              "type": "li"
          },
          {
              "type": "li",
              "children": [
                  {
                      "text": "content rendered using the "
                  },
                  {
                      "text": "<SlateToReact>",
                      "code": true
                  },
                  {
                      "text": " component."
                  }
              ]
          }
      ]
  },
]

export const slateValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

export const payloadValue: any[] = [
  {
    children: [
      { text: 'The ' },
      { text: 'Payload CMS', bold: true },
      { text: ' configuration is ' },
      { text: 'very similar to the default', italic: true },
      { text: ' because it imports the default configuration as a base.' },
    ],
  },
  {
    children: [
      {
        text:
          "For this configuration, Slate nodes without a type are serialized to ",
      },
      {
        code: true,
        text:
          "p",
      },
      {
        text:
          " HTML element tags.",
      },
    ],
  },
  {
    children: [
      {
        text:
          "Note some custom element transforms:",
      },
    ],
  },
  {
    type: 'h2',
    children: [{ text: 'Links' }],
  },
  {
    type: "ul",
    children: [
        {
            type: "li",
            children: [
              {
                type: 'link',
                linkType: 'custom',
                newTab: true,
                url: "https://github.com/thompsonsj/slate-serializers",
                children: [{ text: 'A data attribute is added to link HTML to keep track of Payload\'s link type.' }],
              },
            ]
        },
        {
          type: "li",
          children: [
            {
              text:
                " The ",
            },
            {
              code: true,
              text:
                "target",
            },
            {
              text:
                " and ",
            },
            {
              code: true,
              text:
                "href",
            },
            {
              text:
                " attributes are also supported.",
            },
          ]
        }
    ]
  },
]

const publishingOptions = [
  {
    title: 'Default',
    description: 'Default configuration.',
    current: true,
    config: {
      configName: "Default",
      configSlug: "default",
      configUrlDom: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToDom/default.ts",
      configUrl: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToReact/default.tsx",
      slateToHtmlConfig: slateToHtmlConfig,
      slateToReactConfig: slateToReactConfig, 
      initialValue,
    }
  },
  {
    title: 'Slate demo',
    description: 'Uses a similar configuration to the examples provided on the Slate JS website.',
    current: false,
    config: {
      configName: "Slate demo",
      configSlug: "slate",
      configUrlDom: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToDom/slateDemo.ts",
      configUrl: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToReact/slateDemo.tsx",
      slateToHtmlConfig: slateDemoSlateToHtmlConfig,
      slateToReactConfig: slateToReactConfig, 
      initialValue: slateValue,
    }
  },
  {
    title: 'Payload CMS',
    description: 'Configuration designed to work with the Slate JS implementation in Payload CMS.',
    current: false,
    config: {
      configName: "Payload CMS",
      configSlug: "payload",
      configUrlDom: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToDom/payload.ts",
      configUrl: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToReact/payload.tsx",
      slateToHtmlConfig: payloadSlateToHtmlConfig,
      slateToReactConfig: slateToReactConfig,  
      initialValue: payloadValue,
    }
  },
]

export const Select = ({
  setSlateConfig
}: {
  setSlateConfig: (value: any) => void
}) => {
  const [selected, setSelected] = useState(publishingOptions[0])
  const { setSlateValue } = useContext(SlateValueContext)

  const onChange = (event: any) => {
    setSlateConfig(event.config)
    setSlateValue(JSON.stringify(event.config.initialValue))
    setSelected(event)
  }

  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">Change configuration</Listbox.Label>
          <div className="relative">
            <div className="inline-flex divide-x divide-indigo-700 rounded-md shadow-sm">
              <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-indigo-600 px-3 py-2 text-white shadow-sm">
                <CheckIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                <p className="text-sm font-semibold">{selected.title}</p>
              </div>
              <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-600 p-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50">
                <span className="sr-only">Change configuration</span>
                <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </Listbox.Button>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {publishingOptions.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    className={({ active }) =>
                      cx(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'cursor-default select-none p-4 text-sm'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p className={selected ? 'font-semibold' : 'font-normal'}>{option.title}</p>
                          {selected ? (
                            <span className={active ? 'text-white' : 'text-indigo-600'}>
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </div>
                        <p className={cx(active ? 'text-indigo-200' : 'text-gray-500', 'mt-2')}>
                          {option.description}
                        </p>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
