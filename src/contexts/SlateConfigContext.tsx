import { createContext } from "react";
import { HtmlToSlateConfig, SlateToDomConfig } from "slate-serializers";
import { Descendant } from "slate";

export interface IConfigContext {
  configName: string
  configSlug: string
  configUrl: string
  slateToDomConfig: SlateToDomConfig
  htmlToSlateConfig: HtmlToSlateConfig
  initialValue: Descendant[]
}

const defaultValue = {
  configName: "",
  configSlug: "",
  configUrl: "",
  slateToDomConfig: null,
  htmlToSlateConfig: null,
  initialValue: [],
}

export const SlateConfigContext = createContext<IConfigContext>(defaultValue);