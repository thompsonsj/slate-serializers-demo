"use client"
import React, { FC, useEffect, useState } from 'react'
import stringifyObject from 'stringify-object'
import { Descendant } from 'slate'

import RichTextEditor from '../RichTextEditor/default'
import PayloadRichTextEditor from '../RichTextEditor/payload'
import { SlateValueContext } from '../../contexts/SlateValueContext'
import { PageHeadingBasic } from '../PageHeadingBasic'
import { DemoGrid, DemoPanel } from '../DemoLayout'

import { htmlToSlate, slateToHtml } from "@slate-serializers/html"
import type { HtmlToSlateConfig, SlateToHtmlConfig } from "@slate-serializers/html"


interface IHtmlToSlateDemo {
  slateToDomConfig: SlateToHtmlConfig
  htmlToSlateConfig: HtmlToSlateConfig
  initialValue: string
  editorConfig?: "slate" | "payload"
}

export const HtmlToSlateDemo: FC<IHtmlToSlateDemo> = ({
  slateToDomConfig,
  htmlToSlateConfig,
  initialValue,
  editorConfig = "slate"
}) => {
  const [ htmlValue, setHtmlValue ] = useState(initialValue)
  const [ slateValue, setSlateValue ] = useState<string>('')
  const [ serializedSlateValue, setSerializedSlateValue ] = useState<unknown[]>([])
  const [ reserializedHtml, setReserializedHtml ] = useState('')

  useEffect(() => {
    setSerializedSlateValue(htmlValue ? htmlToSlate(htmlValue, htmlToSlateConfig): [])
  }, [htmlValue])

  useEffect(() => {
    setReserializedHtml(slateValue ? slateToHtml(JSON.parse(slateValue), slateToDomConfig): '')
  }, [slateValue])

  return (
    <>
    <SlateValueContext.Provider value={{slateValue, setSlateValue}}>
      <PageHeadingBasic title="Convert HTML to Slate JSON" />
      <DemoGrid>
        <DemoPanel title={<label htmlFor="html-input">Edit HTML content</label>}>
          <textarea
            id="html-input"
            className="block h-96 w-full rounded-md border border-gray-300 p-3 font-mono text-sm shadow-xs focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={initialValue}
            onChange={ev => setHtmlValue(ev.target.value)}
          ></textarea>
        </DemoPanel>
        <DemoPanel title="htmlToSlate output">
          {editorConfig === "slate" && (
          <RichTextEditor value={htmlToSlate(initialValue, htmlToSlateConfig) as any} dynamicValue={serializedSlateValue as any} />
          )}
          {editorConfig === "payload" && (
          <PayloadRichTextEditor value={htmlToSlate(initialValue, htmlToSlateConfig) as any} dynamicValue={serializedSlateValue as any} />
          )}
        </DemoPanel>
        <DemoPanel title="Slate value">
          <pre><code>{slateValue && JSON.parse(slateValue).map((node: any) => stringifyObject(node)).join('\n')}</code></pre>
        </DemoPanel>
        <DemoPanel title="Reserialized with slateToHtml">
          <pre><code>{reserializedHtml}</code></pre>
        </DemoPanel>
      </DemoGrid>
      </SlateValueContext.Provider>
    </>
  )
}
