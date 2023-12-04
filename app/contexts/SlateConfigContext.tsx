import { createContext } from "react";
import { HtmlToSlateConfig, SlateToHtmlConfig } from "@slate-serializers/html";
import { Descendant } from "slate";

export interface IConfigContext {
  configName: string
  configSlug: string
  configUrl: string
  slateToHtmlConfig: SlateToHtmlConfig
  htmlToSlateConfig: HtmlToSlateConfig
  initialValue: Descendant[]
}

const defaultValue = {
  configName: "",
  configSlug: "",
  configUrl: "",
  slateToHtmlConfig: null,
  htmlToSlateConfig: null,
  initialValue: [],
}

export const SlateConfigContext = createContext<IConfigContext>(defaultValue);