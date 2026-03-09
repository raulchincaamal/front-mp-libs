import type { BaseInputProps } from "../common"

export interface InputNumberProps extends BaseInputProps {
  onChange?: (value: number | null) => void
  onValueChange?: (e: { originalEvent: Event; value: number | null }) => void
  format?: boolean
  locale?: string
  mode?: "decimal" | "currency"
  currency?: string
  currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "name"
  useGrouping?: boolean
  minFractionDigits?: number
  maxFractionDigits?: number
  min?: number
  max?: number
  step?: number
  allowEmpty?: boolean
  prefix?: string
  suffix?: string
}
