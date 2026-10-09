import React, { FC, useEffect, useState, ReactNode } from 'react'
import stringifyObject from 'stringify-object'

import { PageHeading } from '../PageHeading/template'
import { DemoGrid, DemoPanel, RenderedOutput } from '../DemoLayout'
import RichTextEditor from '../RichTextEditor/default'
import PayloadRichTextEditor from '../RichTextEditor/payload'
import SlateDemoRichTextEditor from '../RichTextEditor/slate-demo'

import { SlateValueContext } from '../../contexts/SlateValueContext'
import { IConfigContext, SlateToTemplateConfigContext } from '../../contexts/SlateToTemplateConfigContext'
import { Select } from '../PageHeading/template/Select';
import { initialValue as startValue } from '../PageHeading/template/Select'


import { slateToTemplate, slateToTemplateConfig } from "@slate-serializers/template"
import { domConfigUrl, templateConfigUrl } from "@/app/utilities/slate-serializers-config-urls"

export const SlateToTemplateDemo: FC = () => {
  const [slateConfig, setSlateConfig] = useState<IConfigContext>({
    configName: "Default",
    configSlug: "default",
    configUrlDom: domConfigUrl.default,
    configUrl: templateConfigUrl.default,
    slateToTemplateConfig: slateToTemplateConfig,
    initialValue: startValue,
  });
  const [slateValue, setSlateValue] = useState(JSON.stringify(startValue))
  const [ jsx, setJsx ] = useState(slateValue ? slateToTemplate(JSON.parse(slateValue), slateConfig.slateToTemplateConfig): [])

  useEffect(() => {
    setJsx(slateValue ? slateToTemplate(JSON.parse(slateValue), slateConfig.slateToTemplateConfig): [])
  }, [slateValue, slateToTemplateConfig])

  const translatedJsx = jsx?.map((value: unknown, index: number) => {
    if (typeof value === "string") {
      return <span key={index} dangerouslySetInnerHTML={{__html: value}} />
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
          title="Convert Slate JSON with slateToTemplate"
          menu={<Select
            setSlateConfig={setSlateConfig}
          />}
        />
        <DemoGrid>
          <DemoPanel title="Edit Slate content">
            {slateConfig.configSlug === "default" && (
            <RichTextEditor value={slateConfig.initialValue} />
            )}
            {slateConfig.configSlug === "payload" && (
            <PayloadRichTextEditor value={slateConfig.initialValue} />
            )}
            {slateConfig.configSlug === "slate" && (
            <SlateDemoRichTextEditor value={slateConfig.initialValue} />
            )}
          </DemoPanel>
          <DemoPanel title="slateToTemplate output">
            <RenderedOutput>{translatedJsx}</RenderedOutput>
          </DemoPanel>
          <DemoPanel title="Slate value">
            <pre><code>{slateValue && JSON.parse(slateValue).map((node: any) => stringifyObject(node)).join('\n')}</code></pre>
          </DemoPanel>
        </DemoGrid>
      </SlateValueContext.Provider>
      </SlateToTemplateConfigContext.Provider>
    </>
  )
}
