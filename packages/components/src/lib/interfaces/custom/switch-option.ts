import type { ITooltip } from "./tooltip"

export interface ISwitchOptionProps extends ITooltip {
  id: string
  label: string
  icon?: React.ReactNode
  tooltip?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (id: string, checked: boolean) => void
  component?: React.ReactNode | null
}
