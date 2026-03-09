import type { ReactNode } from "react"
import type { SwitchType } from "./constants/type-variants"
import type { SwitchSize } from "./constants/size-variants"

export interface SwitchProps {
  className?: string
  label?: string | { text: string; position: "left" | "right" }
  type?: SwitchType
  size?: SwitchSize
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
  checkedChildren?: ReactNode
  unCheckedChildren?: ReactNode
}
