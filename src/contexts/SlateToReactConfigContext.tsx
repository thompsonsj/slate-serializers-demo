import { createContext } from "react";
import { SlateToReactConfig } from "@slate-serializers/react";
import { Descendant } from "slate";
import { SlateToHtmlConfig } from "@slate-serializers/html";

export interface IConfigContext {
  configName: string
  configSlug: string
  configUrlDom: string
  configUrl: string
  slateToHtmlConfig: SlateToHtmlConfig
  slateToReactConfig: SlateToReactConfig
  initialValue: Descendant[]
}

const defaultValue = {
  configName: "",
  configSlug: "",
  configUrlDom: "",
  configUrl: "",
  slateToHtmlConfig: null,
  slateToReactConfig: null,
  initialValue: [],
}

export const SlateToReactConfigContext = createContext<IConfigContext>(defaultValue);