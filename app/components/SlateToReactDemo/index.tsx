import React, { FC, useEffect, useState } from 'react'
import stringifyObject from 'stringify-object'

import { PageHeading } from '../PageHeading/react'
import { DemoGrid, DemoPanel, RenderedOutput } from '../DemoLayout'
import RichTextEditor from '../RichTextEditor/default'
import PayloadRichTextEditor from '../RichTextEditor/payload'
import SlateDemoRichTextEditor from '../RichTextEditor/slate-demo'

import { SlateValueContext } from '../../contexts/SlateValueContext'
import { IConfigContext, SlateToReactConfigContext } from '../../contexts/SlateToReactConfigContext'
import { Select } from '../PageHeading/Select'
import { publishingOptions } from './configs'

import { SlateToReact } from "@slate-serializers/react"

export const SlateToReactDemo: FC = () => {
  const [slateConfig, setSlateConfig] = useState<IConfigContext>(publishingOptions[0].config)
  const [slateValue, setSlateValue] = useState(JSON.stringify(slateConfig.initialValue))
  const [ jsx, setJsx ] = useState(slateValue ? <SlateToReact node={JSON.parse(slateValue)} config={slateConfig.slateToReactConfig} />: <></>)

  useEffect(() => {
    setJsx(slateValue ? <SlateToReact node={JSON.parse(slateValue)} config={slateConfig.slateToReactConfig} />: <></>)
  }, [slateValue, slateConfig])

  return (
    <>
    <SlateToReactConfigContext.Provider value={slateConfig}>
      <SlateValueContext.Provider value={{
        slateValue, setSlateValue
      }}>
        <PageHeading
          title="Convert Slate JSON to React JSX"
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
          <DemoPanel title="SlateToReact output">
            <RenderedOutput>{jsx}</RenderedOutput>
          </DemoPanel>
          <DemoPanel title="Slate value">
            <pre><code>{slateValue && JSON.parse(slateValue).map((node: any) => stringifyObject(node)).join('\n')}</code></pre>
          </DemoPanel>
        </DemoGrid>
      </SlateValueContext.Provider>
      </SlateToReactConfigContext.Provider>
    </>
  )
}
