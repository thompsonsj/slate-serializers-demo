"use client"
import React, { FC, useMemo, useState } from 'react'
import stringifyObject from 'stringify-object'
import { slateToMarkdown } from '@slate-serializers/markdown'

import { ConfigLinks, PageHeadingBasic } from '../PageHeadingBasic'
import { DemoGrid, DemoPanel } from '../DemoLayout'
import { Select } from '../PageHeading/Select'
import RichTextEditor from '../RichTextEditor/default'
import PayloadRichTextEditor from '../RichTextEditor/payload'
import SlateDemoRichTextEditor from '../RichTextEditor/slate-demo'
import { SlateValueContext } from '../../contexts/SlateValueContext'
import { MarkdownDemoConfig, publishingOptions } from './configs'

export const SlateToMarkdownDemo: FC = () => {
  const [slateConfig, setSlateConfig] = useState<MarkdownDemoConfig>(publishingOptions[0].config)
  const [slateValue, setSlateValue] = useState(JSON.stringify(slateConfig.initialValue))

  const markdown = useMemo(
    () => (slateValue ? slateToMarkdown(JSON.parse(slateValue), slateConfig.slateToMarkdownConfig) : ''),
    [slateValue, slateConfig],
  )

  return (
    <SlateValueContext.Provider value={{ slateValue, setSlateValue }}>
      <PageHeadingBasic
        title="Convert Slate JSON to Markdown"
        description={<ConfigLinks links={[{ label: slateConfig.configName, href: slateConfig.configUrl }]} />}
        rightContent={
          <Select
            options={publishingOptions}
            onChange={(event) => {
              setSlateConfig(event.config)
              setSlateValue(JSON.stringify(event.config.initialValue))
            }}
          />
        }
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
        <DemoPanel title="slateToMarkdown output">
          <pre><code>{markdown}</code></pre>
        </DemoPanel>
        <DemoPanel title="Slate value">
          <pre><code>{slateValue && JSON.parse(slateValue).map((node: any) => stringifyObject(node)).join('\n')}</code></pre>
        </DemoPanel>
      </DemoGrid>
    </SlateValueContext.Provider>
  )
}
