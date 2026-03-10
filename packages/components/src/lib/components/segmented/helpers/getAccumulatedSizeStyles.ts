import type { Size } from "@/interfaces/common"
import { sizeStyles, verticalSizeStyles } from "../constants/size-variants"

export const getAccumulatedSizeStyles = (
  size: Size,
  vertical = false
): string => {
  const styles = vertical ? verticalSizeStyles : sizeStyles
  return styles[size] || ""
}
