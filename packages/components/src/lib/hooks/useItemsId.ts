import { useMemo } from "react"

export const useItemsId = <T>(items: T[] = []) =>
  useMemo(
    () => items.map(item => ({ id: crypto.randomUUID(), ...item })),
    [items]
  )
