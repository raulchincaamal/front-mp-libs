import { createContext, useContext } from "react"
import type { ProviderProps } from "./types"

export const getContext = <T,>(contextName: string) => {
  const Context = createContext<T | undefined>(undefined)

  const Provider = ({ value, children }: ProviderProps<T>) => {
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  const useValue = () => {
    const contextValue = useContext(Context)
    if (contextValue === undefined) {
      throw new Error(`useContext must be used within a ${contextName}Provider`)
    }
    return contextValue
  }

  return [Provider, useValue] as const
}
