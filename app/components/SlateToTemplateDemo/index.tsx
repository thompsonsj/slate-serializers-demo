import React, { FC, useEffect, useState, ReactNode } from 'react'
import stringifyObject from 'stringify-object'

import { PageHeading } from '../PageHeading/template'
import { DemoGrid, DemoPanel, RenderedOutput } from '../DemoLayout'
import RichTextEditor from '../RichTextEditor/default'
import PayloadRichTextEditor from '../RichTextEditor/payload'
import SlateDemoRichTextEditor from '../RichTextEditor/slate-demo'

import { SlateValueContext } from '../../contexts/SlateValueContext'
import { IConfigContext, SlateToTemplateConfigContext } from '../../contexts/SlateToTemplateConfigContext'
import { Select } from '../PageHeading/Select'
import { publishingOptions } from './configs'

import { slateToTemplate } from "@slate-serializers/template"

export const SlateToTemplateDemo: FC = () => {
  const [slateConfig, setSlateConfig] = useState<IConfigContext>(publishingOptions[0].config)
  const [slateValue, setSlateValue] = useState(JSON.stringify(slateConfig.initialValue))
  const [ jsx, setJsx ] = useState(slateValue ? slateToTemplate(JSON.parse(slateValue), slateConfig.slateToTemplateConfig): [])

  useEffect(() => {
    setJsx(slateValue ? slateToTemplate(JSON.parse(slateValue), slateConfig.slateToTemplateConfig): [])
  }, [slateValue, slateConfig])

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
            options={publishingOptions}
            onChange={(option) => {
              setSlateConfig(option.config)
              setSlateValue(JSON.stringify(option.config.initialValue))
            }}
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
