import { classNames } from "@/utils/classNames"

import type { Size } from "@/interfaces/common"
import { sizeOrder, sizeStyles } from "../constants/size-variants"

export const getAccumulatedSizeStyles = (size: Size): string => {
  const index = sizeOrder.indexOf(size)
  if (index === -1) return ""
  return classNames(sizeOrder.slice(0, index + 1).map(key => sizeStyles[key]))
}
