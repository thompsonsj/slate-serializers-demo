import { createContext } from "react";
import { Descendant } from "slate";
import { SlateToTemplateConfig } from "@slate-serializers/template";

export interface IConfigContext {
  configName: string
  configSlug: string
  configUrlDom: string
  configUrl: string
  slateToTemplateConfig: SlateToTemplateConfig
  initialValue: Descendant[]
}

const defaultValue = {
  configName: "",
  configSlug: "",
  configUrlDom: "",
  configUrl: "",
  slateToTemplateConfig: {} as any,
  initialValue: [],
}

export const SlateToTemplateConfigContext = createContext<IConfigContext>(defaultValue);