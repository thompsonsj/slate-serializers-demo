"use client"
import React, { FC, useMemo, useState } from 'react'
import stringifyObject from 'stringify-object'
import { CogIcon } from '@heroicons/react/20/solid'
import { slateToMarkdown } from '@slate-serializers/markdown'

import { PageHeadingBasic } from '../PageHeadingBasic'
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
        description={
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CogIcon className="mr-1.5 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
            <strong>Config:&nbsp;&nbsp;</strong>
            <a target="_blank" className="underline" href={slateConfig.configUrl}>{slateConfig.configName}</a>.
          </div>
        }
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
            slateToMarkdown output
          </label>
          <pre className="whitespace-pre-wrap"><code>{markdown}</code></pre>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 py-12">
        <div className="col-span-6">
          <label className="block font-bold text-gray-700 mb-6">
            Slate value
          </label>
          <pre><code>{slateValue && JSON.parse(slateValue).map((node: any) => stringifyObject(node)).join('\n')}</code></pre>
        </div>
      </div>
    </SlateValueContext.Provider>
  )
}
