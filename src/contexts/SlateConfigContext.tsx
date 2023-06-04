import { createContext } from "react";
import { SlateToDomConfig } from "slate-serializers";
import { Descendant } from "slate";

export interface IConfigContext {
  configName: string
  configSlug: string
  configUrl: string
  config: SlateToDomConfig
  initialValue: Descendant[]
}

const defaultValue = {
  configName: "",
  configSlug: "",
  configUrl: "",
  config: null,
  initialValue: [],
}

export const SlateConfigContext = createContext<IConfigContext>(defaultValue);