import React, { FC, useEffect, useState } from 'react'
import { Descendant } from 'slate'
import stringifyObject from 'stringify-object'

import { PageHeading } from '../PageHeading'
import RichTextEditor from '../../components/RichTextEditor'
import PayloadRichTextEditor from '../../components/RichTextEditor/payload'
import { SlateValueContext } from '../../contexts/SlateValueContext'

import { htmlToSlate, slateToHtml } from "slate-serializers"
import type { SlateToDomConfig, HtmlToSlateConfig } from "slate-serializers"

interface ISlateToHtmlDemo {
  slateToDomConfig: SlateToDomConfig
  htmlToSlateConfig: HtmlToSlateConfig
  initialValue: Descendant[]
  editorConfig?: "slate" | "payload"
}

export const SlateToHtmlDemo: FC<ISlateToHtmlDemo> = ({
  slateToDomConfig,
  htmlToSlateConfig,
  initialValue,
  editorConfig = "slate"
}) => {
  const [slateValue, setSlateValue] = useState(null)
  const [ html, setHtml ] = useState('')
  const [ reserializedSlate, setReserializedSlate ] = useState([])

  useEffect(() => {
    setHtml(slateValue ? slateToHtml(JSON.parse(slateValue), slateToDomConfig): '')
  }, [slateValue])

  useEffect(() => {
    setReserializedSlate(html ? htmlToSlate(html, htmlToSlateConfig): [])
  }, [html])

  return (
    <>
      <PageHeading
        title="Convert Slate JSON to HTML"
        config="slateToDom"
        className="p-6 mt-8 bg-slate-200 rounded"
      />
      <SlateValueContext.Provider value={{
        slateValue, setSlateValue
      }}>
        <div className="grid grid-cols-12 gap-6 py-12">
          <div className="col-span-6">
            <label className="block font-bold text-gray-700 mb-6">
              Edit Slate content
            </label>
            {editorConfig === "slate" && (
            <RichTextEditor value={initialValue} />
            )}
            {editorConfig === "payload" && (
            <PayloadRichTextEditor value={initialValue} />
            )}
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
