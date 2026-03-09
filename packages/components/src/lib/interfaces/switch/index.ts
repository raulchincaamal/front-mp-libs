export type Type = "default" | "success" | "danger"
export interface ISwitchProps {
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (isChecked: boolean) => void
  type?: Type
}
