/* eslint-disable max-lines */
import { useState, useEffect, useMemo, useCallback } from "react"
import {
  formatNumber,
  parseNumber,
  validateNumberRange,
} from "./number.functions"
import type { InputNumberProps } from "./number.types"

export const useInputNumber = (props: InputNumberProps) => {
  const {
    onChange,
    onValueChange,
    format = true,
    locale = "es-MX",
    mode = "decimal",
    currency = "MXN",
    currencyDisplay = "symbol",
    useGrouping = true,
    minFractionDigits,
    maxFractionDigits,
    min,
    max,
    allowEmpty = true,
    prefix,
    suffix,
    ...restProps
  } = props

  const [internalValue, setInternalValue] = useState<number | null>(
    Number(restProps?.value ?? null)
  )
  const [displayValue, setDisplayValue] = useState<string>("")
  const [focused, setFocused] = useState(false)

  const formatOptions = useMemo(
    () => ({
      format,
      useGrouping,
      minFractionDigits,
      maxFractionDigits,
      mode,
      currency,
      currencyDisplay,
      locale,
      prefix,
      suffix,
    }),
    [
      format,
      useGrouping,
      minFractionDigits,
      maxFractionDigits,
      mode,
      currency,
      currencyDisplay,
      locale,
      prefix,
      suffix,
    ]
  )

  const formatValue = useCallback(
    (num: number | null) => formatNumber({ num, ...formatOptions }),
    [formatOptions]
  )
  const parseValue = useCallback(
    (str: string) => parseNumber(str, prefix, suffix, allowEmpty),
    [prefix, suffix, allowEmpty]
  )

  useEffect(() => {
    if (!focused) setDisplayValue(formatValue(internalValue))
  }, [internalValue, formatValue, focused])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      setDisplayValue(inputValue)
      const numValue = parseValue(inputValue)
      if (!validateNumberRange(numValue, min, max)) return
      setInternalValue(numValue)
      onChange?.(numValue)
      onValueChange?.({ originalEvent: e.nativeEvent, value: numValue })
    },
    [parseValue, min, max, onChange, onValueChange]
  )

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true)
      if (internalValue !== null && internalValue !== undefined)
        setDisplayValue(internalValue.toString())
      restProps.onFocus?.(e)
    },
    [internalValue, restProps]
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false)
      setDisplayValue(formatValue(internalValue))
      restProps.onBlur?.(e)
    },
    [formatValue, internalValue, restProps]
  )

  const handleClear = useCallback(() => {
    setDisplayValue("")
    setInternalValue(null)
    onChange?.(null)
  }, [onChange])

  return {
    displayValue,
    handleChange,
    handleFocus,
    handleBlur,
    handleClear,
    ...restProps,
  }
}
