import { classNames as classMerge } from "@/utils/classNames"
import type { Size } from "@/interfaces/common"
import { baseContainerStyles, verticalStyles } from "../constants/base-styles"
import { getAccumulatedSizeStyles } from "./getAccumulatedSizeStyles"

export const getContainerStyles = (
  size: Size,
  vertical: boolean,
  disabled: boolean,
  className?: string
) => {
  return classMerge(
    baseContainerStyles,
    getAccumulatedSizeStyles(size, vertical),
    vertical && verticalStyles,
    disabled && "opacity-50 cursor-not-allowed",
    className
  )
}
