import { createContext } from "react"

export const SlateValueContext = createContext({
  slateValue: {},
  setSlateValue: (value: any) => {}
})
