import { classNames as classMerge } from "@/utils/classNames"
import { baseItemStyles, disabledStyles } from "../constants/base-styles"
import { itemPaddingStyles } from "../constants/size-variants"

export const getItemStyles = (
  size: string,
  disabled: boolean,
  vertical: boolean
) => {
  return classMerge(
    baseItemStyles,
    itemPaddingStyles[size],
    disabled && disabledStyles,
    vertical ? "w-full" : "flex-shrink-0"
  )
}
