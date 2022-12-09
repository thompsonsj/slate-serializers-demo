import { useContext, useEffect, useState } from "react"
import stringifyObject from 'stringify-object'

import { HtmlValueContext } from "../../../contexts/HtmlValueContext"
import { htmlToSlate, slateToHtml, slateDemoHtmlToSlateConfig, slateDemoSlateToDomConfig } from "slate-serializers"

import { Tab } from '@headlessui/react'
import cx from 'classnames'
import RichTextEditor from "../../../components/RichTextEditor"
import { SlateValueContext } from "../../../contexts/SlateValueContext"

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
  const { htmlValue } = useContext(HtmlValueContext)
  const { slateValue } = useContext(SlateValueContext)
  const [ html, setHtml ] = useState('')
  const [ reserializedSlate, setReserializedSlate ] = useState([])

  useEffect(() => {
    setHtml(slateValue ? slateToHtml(JSON.parse(slateValue), slateDemoSlateToDomConfig): '')
  }, [slateValue])

  return (
    <Tab.Group>
      <Tab.List className="mb-6">
        <Tab className={tabClassnames}>
          Slate
        </Tab>
        <Tab className={tabClassnames}>
          Slate JSON
        </Tab>
        <Tab className={tabClassnames}>
          Reserialized HTML
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
        <RichTextEditor value={htmlToSlate(htmlValue, slateDemoHtmlToSlateConfig)} />
        </Tab.Panel>
        <Tab.Panel>
        <pre><code>{slateValue && JSON.parse(slateValue).map(node => stringifyObject(node)).join('\n')}</code></pre>
        </Tab.Panel>
        <Tab.Panel>
        <pre><code>{html}</code></pre>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs
