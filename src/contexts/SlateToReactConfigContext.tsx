import { createContext } from "react";
import { SlateToReactConfig } from "slate-serializers/lib/react";
import { Descendant } from "slate";
import { SlateToDomConfig } from "slate-serializers";

export interface IConfigContext {
  configName: string
  configSlug: string
  configUrlDom: string
  configUrl: string
  slateToDomConfig: SlateToDomConfig
  slateToReactConfig: SlateToReactConfig
  initialValue: Descendant[]
}

const defaultValue = {
  configName: "",
  configSlug: "",
  configUrlDom: "",
  configUrl: "",
  slateToDomConfig: null,
  slateToReactConfig: null,
  initialValue: [],
}

export const SlateToReactConfigContext = createContext<IConfigContext>(defaultValue);