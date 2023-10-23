import React, { FC, useEffect, useState, ReactNode } from 'react'
import stringifyObject from 'stringify-object'

import { PageHeading } from '../PageHeading/react'
import RichTextEditor from '../RichTextEditor/default'
import PayloadRichTextEditor from '../RichTextEditor/payload'
import SlateDemoRichTextEditor from '../RichTextEditor/slate-demo'

import { SlateValueContext } from '../../contexts/SlateValueContext'
import { IConfigContext, SlateToTemplateConfigContext } from '../../contexts/SlateToTemplateConfigContext'
import { Select } from '../PageHeading/template/Select';
import { initialValue as startValue } from '../PageHeading/template/Select'


import { slateToTemplate, slateToTemplateConfig } from "@slate-serializers/template"

export const SlateToTemplateDemo: FC = () => {
  const [slateConfig, setSlateConfig] = useState<IConfigContext>({
    configName: "Default",
    configSlug: "default",
    configUrlDom: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToDom/default.ts",
    configUrl: "https://github.com/thompsonsj/slate-serializers/blob/main/src/config/slateToReact/default.tsx",
    slateToTemplateConfig: slateToTemplateConfig,
    initialValue: startValue,
  });
  const [slateValue, setSlateValue] = useState(JSON.stringify(startValue))
  const [ jsx, setJsx ] = useState(slateValue ? slateToTemplate(JSON.parse(slateValue), slateConfig.slateToTemplateConfig): [])

  useEffect(() => {
    setJsx(slateValue ? slateToTemplate(JSON.parse(slateValue), slateConfig.slateToTemplateConfig): [])
  }, [slateValue, slateToTemplateConfig])

  const translatedJsx = jsx.map(value => {
    if (typeof value === "string") {
      return <span dangerouslySetInnerHTML={{__html: value}} />
    } else {
      return value as ReactNode
    }
  })

  return (
    <>
    <SlateToTemplateConfigContext.Provider value={slateConfig}>
      <SlateValueContext.Provider value={{
        slateValue, setSlateValue
      }}>
        <PageHeading
          title="Convert Slate JSON to React JSX using slateToTemplate"
          config="slateToDom"
          menu={<Select
            setSlateConfig={setSlateConfig}
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
              slateToReact output
            </label>
            <div className="prose p-6 bg-slate-100">{translatedJsx}</div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 py-12">
          <div className="col-span-6">
            <label className="block font-bold text-gray-700 mb-6">
              Slate value
            </label>
            <pre><code>{slateValue && JSON.parse(slateValue).map(node => stringifyObject(node)).join('\n')}</code></pre>
          </div>
        </div>
      </SlateValueContext.Provider>
      </SlateToTemplateConfigContext.Provider>
    </>
  )
}
