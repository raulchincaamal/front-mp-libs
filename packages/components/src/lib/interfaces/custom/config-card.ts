import type { ISwitchOptionProps } from "./switch-option"
import type { ITooltip } from "./tooltip"

export interface IConfigCardItem {
  id: string
  title: string
  options: Omit<ISwitchOptionProps, "onChange">[]
}

export interface IConfigCardProps extends ITooltip {
  options: IConfigCardItem[]
  isLoading?: boolean
  onChange?: (id: string, optionId: string, checked: boolean) => void
  childrenClassName?: string
  containerAccordionClassName?: string
}
