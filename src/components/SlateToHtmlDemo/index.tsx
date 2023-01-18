import React, { FC, useEffect, useState } from 'react'
import { Descendant } from 'slate'
import stringifyObject from 'stringify-object'

import RichTextEditor from '../../components/RichTextEditor'
import { SlateValueContext } from '../../contexts/SlateValueContext'

import { htmlToSlate, slateToHtml, slateDemoHtmlToSlateConfig, slateDemoSlateToDomConfig } from "slate-serializers"

interface ISlateToHtmlDemo {
  initialValue: Descendant[]
}

export const SlateToHtmlDemo: FC<ISlateToHtmlDemo> = ({
  initialValue
}) => {
  const [slateValue, setSlateValue] = useState(null)
  const [ html, setHtml ] = useState('')
  const [ reserializedSlate, setReserializedSlate ] = useState([])

  useEffect(() => {
    setHtml(slateValue ? slateToHtml(JSON.parse(slateValue), slateDemoSlateToDomConfig): '')
  }, [slateValue])

  useEffect(() => {
    setReserializedSlate(html ? htmlToSlate(html, slateDemoHtmlToSlateConfig): [])
  }, [html])

  return (
    <>
      <SlateValueContext.Provider value={{
        slateValue, setSlateValue
      }}>
        <div className="grid grid-cols-12 gap-6 py-12">
          <div className="col-span-6">
            <label className="block font-bold text-gray-700 mb-6">
              Edit Slate content
            </label>
            <RichTextEditor value={initialValue} />
          </div>
          <div className="col-span-6">
            <label className="block font-bold text-gray-700 mb-6">
              slateToHtml output
            </label>
            <pre><code>{html}</code></pre>
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
              Reserialized with htmlToSlate
            </label>
            <pre><code>{reserializedSlate && reserializedSlate.map(node => stringifyObject(node)).join('\n')}</code></pre>
          </div>
        </div>
      </SlateValueContext.Provider>
    </>
  )
}
