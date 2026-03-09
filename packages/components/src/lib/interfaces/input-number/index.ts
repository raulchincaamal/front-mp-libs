import type { ReactNode } from "react"
import type { Size } from "../common"
import type { NumericFormatProps } from "react-number-format"

interface InputNumberCommon {
  size?: Size
  name?: string
  disabled?: boolean
  defaultValue?: number
  value?: number
  readOnly?: boolean
  required?: boolean
  className?: string
  placeholder?: string
  label?: string
  clearOnFocus?: boolean
  error?: string | ReactNode
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void
}

export interface InputNumberInterface extends InputNumberCommon {
  icon?: ReactNode
}

export interface InputNumberCurrencyInterface extends InputNumberCommon {
  currency?: string | ReactNode
  symbolCurrency?: string | ReactNode
}
export type InputSizeCustom = "sm" | "md" | "lg" | "xl"
export interface IInputNumberCustom extends NumericFormatProps {
  inputSize?: InputSizeCustom
  name?: string
  disabled?: boolean
  defaultValue?: number
  value?: number
  readOnly?: boolean
  required?: boolean
  className?: string
  placeholder?: string
  label?: string
  clearOnFocus?: boolean
  error?: string | ReactNode
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void
}
