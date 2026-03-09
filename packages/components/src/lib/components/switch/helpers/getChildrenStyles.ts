import { classNames } from "@/utils"
import { baseStyles } from "../constants/base-styles"
import type { SwitchSize } from "../constants/size-variants"
import { sizeStyles } from "../constants/size-variants"

export const getChildrenStyles = (size: SwitchSize, isChecked: boolean) => {
  const position = isChecked
    ? baseStyles.checkedChildren
    : baseStyles.unCheckedChildren

  return classNames(baseStyles.children, position, sizeStyles[size].children)
}
