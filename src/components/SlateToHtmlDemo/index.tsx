import React, { FC, useEffect, useState } from 'react'
import stringifyObject from 'stringify-object'

import { PageHeading } from '../PageHeading'
import RichTextEditor from '../RichTextEditor/default'
import PayloadRichTextEditor from '../RichTextEditor/payload'
import SlateDemoRichTextEditor from '../RichTextEditor/slate-demo'

import { SlateValueContext } from '../../contexts/SlateValueContext'
import { IConfigContext, SlateConfigContext } from '../../contexts/SlateConfigContext'
import { Select } from '../../components/PageHeading/Select';
import { initialValue as startValue } from '../../components/PageHeading/Select'

import { htmlToSlate, slateToHtml } from "@slate-serializers/html"
import { htmlToSlateConfig, slateToHtmlConfig } from "@slate-serializers/html"
import { publishingOptions } from './configs'

export const SlateToHtmlDemo: FC = () => {
  const [slateConfig, setSlateConfig] = useState<IConfigContext>({
    configName: "Default",
    configSlug: "default",
    configUrl: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToDom/default.ts",
    slateToHtmlConfig: slateToHtmlConfig,
    htmlToSlateConfig: htmlToSlateConfig,
    initialValue: startValue,
  });
  const [slateValue, setSlateValue] = useState(JSON.stringify(startValue))
  const [ html, setHtml ] = useState(slateValue ? slateToHtml(JSON.parse(slateValue), slateToHtmlConfig): '')
  const [ reserializedSlate, setReserializedSlate ] = useState(html ? htmlToSlate(html, htmlToSlateConfig): [])

  useEffect(() => {
    setHtml(slateValue ? slateToHtml(JSON.parse(slateValue), slateConfig.slateToHtmlConfig): '')
  }, [slateValue, slateConfig])

  useEffect(() => {
    setReserializedSlate(html ? htmlToSlate(html, slateConfig.htmlToSlateConfig): [])
  }, [html, slateConfig])

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
            options={publishingOptions}
            onChange={(event) => {
              setSlateConfig(event.config)
              setSlateValue(JSON.stringify(event.config.initialValue))
            }}
          />}
          className="p-6 bg-slate-200 rounded"
        />
        <div className="grid grid-cols-12 gap-6 py-12">
          <div className="col-span-6">
            <label className="block font-bold text-gray-700 mb-6">
              Edit Slate content
            </label>
            {slateConfig.configSlug === "default" && (
            <RichTextEditor value={slateConfig.initialValue} />
            )}
            {slateConfig.configSlug === "payload" && (
            <PayloadRichTextEditor value={slateConfig.initialValue} />
            )}
            {slateConfig.configSlug === "slate" && (
            <SlateDemoRichTextEditor value={slateConfig.initialValue} />
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
