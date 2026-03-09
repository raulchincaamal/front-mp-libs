import type { ISwitchOptionProps } from "./switch-option"
import type { ITooltip } from "./tooltip"

export interface ISwitchOptionListProps extends ITooltip {
  options: Omit<ISwitchOptionProps, "onChange">[]
  onChange?: ISwitchOptionProps["onChange"]
  icon?: React.ReactNode
}
