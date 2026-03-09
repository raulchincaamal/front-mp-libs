export type TypeInput = "text" | "email" | "number" | "password"
export type TypeLabelPosition = "row" | "col"

export interface IInputPrimary {
  placeholder?: string
  isDisabled?: boolean
  type: TypeInput
  labelPosition?: TypeLabelPosition
  readOnly?: boolean
  label?: string
  icon?: React.ReactNode
}
