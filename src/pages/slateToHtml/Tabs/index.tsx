import { useContext, useEffect, useState } from "react"
import stringifyObject from 'stringify-object'

import { SlateValueContext } from "../../../contexts/SlateValueContext"
import { htmlToSlate, slateToHtml, slateDemoHtmlToSlateConfig, slateDemoSlateToDomConfig } from "slate-serializers"

import { Tab } from '@headlessui/react'
import cx from 'classnames'

const tabClassnames = cx(
  "ui-selected:bg-indigo-100",
  "ui-selected:text-indigo-700",
  "ui-not-selected:text-gray-500",
  "ui-not-selected:hover:text-gray-700",
  "px-3",
  "py-2",
  "font-medium",
  "text-sm",
  "rounded-md"
)

function Tabs() {
  const { slateValue } = useContext(SlateValueContext)
  const [ html, setHtml ] = useState('')
  const [ reserializedSlate, setReserializedSlate ] = useState([])

  useEffect(() => {
    setHtml(slateValue ? slateToHtml(JSON.parse(slateValue), slateDemoSlateToDomConfig): '')
  }, [slateValue])

  useEffect(() => {
    setReserializedSlate(html ? htmlToSlate(html, slateDemoHtmlToSlateConfig): [])
  }, [html])

  return (
    <Tab.Group>
      <Tab.List className="mb-6">
        <Tab className={tabClassnames}>
          Slate JSON
        </Tab>
        <Tab className={tabClassnames}>
          HTML
        </Tab>
        <Tab className={tabClassnames}>
          Reserialized Slate JSON
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
        <pre><code>{slateValue && JSON.parse(slateValue).map(node => stringifyObject(node)).join('\n')}</code></pre>
        </Tab.Panel>
        <Tab.Panel>
        <pre><code>{html}</code></pre>
        </Tab.Panel>
        <Tab.Panel>
        <pre><code>{reserializedSlate && reserializedSlate.map(node => stringifyObject(node)).join('\n')}</code></pre>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
