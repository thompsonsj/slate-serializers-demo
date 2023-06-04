import React, { FC, useEffect, useState } from 'react'
import stringifyObject from 'stringify-object'

import { PageHeading } from '../PageHeading'
import RichTextEditor from '../../components/RichTextEditor'
import PayloadRichTextEditor from '../../components/RichTextEditor/payload'
import { SlateValueContext } from '../../contexts/SlateValueContext'
import { IConfigContext, SlateConfigContext } from '../../contexts/SlateConfigContext'
import { Select } from '../../components/PageHeading/Select';
import { initialValue as startValue } from '../../components/PageHeading/Select'


import { htmlToSlate, slateToHtml } from "slate-serializers"
import type { SlateToDomConfig, HtmlToSlateConfig } from "slate-serializers"

interface ISlateToHtmlDemo {
  slateToDomConfig: SlateToDomConfig
  htmlToSlateConfig: HtmlToSlateConfig
  editorConfig?: "slate" | "payload"
}

export const SlateToHtmlDemo: FC<ISlateToHtmlDemo> = ({
  slateToDomConfig,
  htmlToSlateConfig,
  editorConfig = "slate"
}) => {
  const [slateConfig, setSlateConfig] = useState<IConfigContext>({
    configName: "Default",
    configSlug: "default",
    configUrl: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToDom/default.ts",
    config: slateToDomConfig,
    initialValue: startValue,
  });
  const [slateValue, setSlateValue] = useState(JSON.stringify(startValue))
  const [ html, setHtml ] = useState('')
  const [ reserializedSlate, setReserializedSlate ] = useState([])

  useEffect(() => {
    setHtml(slateValue ? slateToHtml(JSON.parse(slateValue), slateConfig.config): '')
  }, [slateValue])

  useEffect(() => {
    setReserializedSlate(html ? htmlToSlate(html, htmlToSlateConfig): [])
  }, [html])

  return (
    <>
    <SlateConfigContext.Provider value={slateConfig}>
      <SlateValueContext.Provider value={{
        slateValue, setSlateValue
      }}>
        <PageHeading
          title="Convert Slate JSON to HTML"
          config="slateToDom"
          menu={<Select
            setSlateConfig={setSlateConfig}
          />}
          className="p-6 mt-8 bg-slate-200 rounded"
        />
        <div className="grid grid-cols-12 gap-6 py-12">
          <div className="col-span-6">
            <label className="block font-bold text-gray-700 mb-6">
              Edit Slate content
            </label>
            {editorConfig === "slate" && (
            <RichTextEditor value={slateConfig.initialValue} dynamicValue={slateConfig.initialValue} />
            )}
            {editorConfig === "payload" && (
            <PayloadRichTextEditor value={slateConfig.initialValue} />
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
      </SlateConfigContext.Provider>
    </>
  )
}
