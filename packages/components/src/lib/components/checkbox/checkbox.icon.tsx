import type { ReactNode } from "react"
import { classNames as cn } from "@/utils"
import type { CheckboxVisualState, IconMapProps } from "./checkbox.types"
import {
  checkboxIconSizeStyles,
  checkboxIndeterminateSizeStyles,
} from "./checkbox.types"
import { CheckBoxIcon, IndeterminateIcon } from "@/assets/icons"

export const iconMap = ({
  size,
  disabled,
}: IconMapProps): Record<Exclude<CheckboxVisualState, "none">, ReactNode> => ({
  checked: (
    <CheckBoxIcon
      className={cn(
        checkboxIconSizeStyles[size],
        disabled ? "text-stone-300 fill-stone-300" : "text-white"
      )}
    />
  ),

  indeterminate: (
    <IndeterminateIcon
      className={cn(
        checkboxIndeterminateSizeStyles[size],
        disabled ? "text-stone-300 fill-stone-300" : "text-blue-800"
      )}
    />
  ),
})
