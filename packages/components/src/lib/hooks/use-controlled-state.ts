import { useCallback, useEffect, useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useControlledState = <T, S extends any[]>(props: {
  value?: T
  defaultValue?: T
  onChange?: (value: T, ...args: S) => void
}) => {
  const { value, defaultValue, onChange } = props

  const [internalValue, setInternalValue] = useState<T>(
    value !== undefined ? value : (defaultValue as T)
  )

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  const handleChange = useCallback(
    (newValue: T, ...args: S) => {
      setInternalValue(newValue)
      onChange?.(newValue, ...args)
    },
    [onChange]
  )

  return [internalValue, handleChange] as const
}
