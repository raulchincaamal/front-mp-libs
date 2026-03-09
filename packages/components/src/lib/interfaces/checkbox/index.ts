import type { ICommonProps } from "../common"

export interface ICheckboxProps extends Omit<
  ICommonProps,
  "onClick" | "style"
> {
  label?: string
  defaultChecked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  checked?: boolean
  onChange?: (isChecked: boolean) => void
}
