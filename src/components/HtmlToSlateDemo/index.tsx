import React, { FC, useEffect, useState } from 'react'
import stringifyObject from 'stringify-object'

import RichTextEditor from '../../components/RichTextEditor'
import { SlateValueContext } from '../../contexts/SlateValueContext'

import { htmlToSlate, slateToHtml, slateDemoHtmlToSlateConfig, slateDemoSlateToDomConfig } from "slate-serializers"

interface IHtmlToSlateDemo {
  initialValue: string
}

export const HtmlToSlateDemo: FC<IHtmlToSlateDemo> = ({
  initialValue
}) => {
  const [ html, setHtml ] = useState('')
  const [ htmlValue, setHtmlValue ] = useState(initialValue)
  const [ slateValue, setSlateValue ] = useState(null)
  const [ serializedSlateValue, setSerializedSlateValue ] = useState([])
  const [ reserializedHtml, setReserializedHtml ] = useState('')

  useEffect(() => {
    setSerializedSlateValue(htmlValue ? htmlToSlate(htmlValue, slateDemoHtmlToSlateConfig): [])
  }, [htmlValue])

  useEffect(() => {
    setReserializedHtml(slateValue ? slateToHtml(JSON.parse(slateValue), slateDemoSlateToDomConfig): '')
  }, [slateValue])

  return (
    <>
    <SlateValueContext.Provider value={{slateValue, setSlateValue}}>
      <div className="grid grid-cols-12 gap-6 py-12">
        <div className="col-span-6">
         <label className="block font-bold text-gray-700 mb-6">
            Edit HTML content
          </label>
          <textarea
            className="block w-full h-[400px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={initialValue}
            onChange={ev => setHtmlValue(ev.target.value)}
          ></textarea>
        </div>
        <div className="col-span-6">
          <label className="block font-bold text-gray-700 mb-6">
            htmlToSlate output
          </label>
          <RichTextEditor value={htmlToSlate(initialValue, slateDemoHtmlToSlateConfig)} dynamicValue={serializedSlateValue} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 py-12">
        <div className="col-span-6">
          <label className="block font-bold text-gray-700 mb-6">
            Slate value
          </label>
          <pre><code>{slateValue && JSON.parse(slateValue).map(node => stringifyObject(node)).join('\n')}</code></pre>
        </div>
        <div className="col-span-6">
          <label className="block font-bold text-gray-700 mb-6">
            Reserialized with slateToHtml
          </label>
          <pre><code>{reserializedHtml}</code></pre>
        </div>
      </div>
      </SlateValueContext.Provider>
    </>
  )
}
