import type { Key, ReactNode } from "react"
import type { HeightSpacing, ICommonProps, Size } from "../common"
import type { InputType } from "../input-text"
import type { Props } from "react-select"

export type TOption = {
  value: Key
  label: string
  disabled?: boolean
  extra?: ReactNode
}

export interface ISelect extends ICommonProps {
  label?: string
  options: TOption[]
  defaultValue?: TOption
  placeholder?: string
  size?: Size
  type?: InputType
  error?: string | ReactNode
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  listHeight?: HeightSpacing
  onChange?(value: TOption): void
  onSearch?(value: string): void
}

export interface ISelectOpt<T = TOption> extends Props<T> {
  label?: string
  error?: string | ReactNode
  type?: InputType
  size?: Size
  readOnly?: boolean
  className?: string
  required?: boolean
  iconRight?: ReactNode
  iconLeft?: ReactNode
  isLoading?: boolean
  noOptionsMessageCustom?: string
}
export interface ISelected {
  selected: string | number | readonly string[] | undefined
}
