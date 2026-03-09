import { classNames } from "@/utils"
import { baseStyles } from "../constants/base-styles"
import type { SwitchType } from "../constants/type-variants"
import { typeStyles } from "../constants/type-variants"
import type { SwitchSize } from "../constants/size-variants"
import { sizeStyles } from "../constants/size-variants"

export const getSwitchRootStyles = (
  type: SwitchType,
  size: SwitchSize,
  disabled: boolean,
  className?: string
) => {
  return classNames(
    baseStyles.root,
    typeStyles[type],
    sizeStyles[size].root,
    disabled && "cursor-not-allowed",
    className
  )
}
