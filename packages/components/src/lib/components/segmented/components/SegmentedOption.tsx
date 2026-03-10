import { classNames as classMerge } from "@/utils/classNames"
import { getItemStyles } from "../helpers/getItemStyles"
import { activeItemStyles } from "../constants/base-styles"
import type { SegmentedOptionProps } from "../segmented.types"

export const SegmentedOption = ({
  option,
  index,
  isActive,
  disabled,
  vertical,
  size,
  onClick,
}: SegmentedOptionProps) => {
  const itemStyles = getItemStyles(size, option.disabled || disabled, vertical)

  return (
    <button
      type="button"
      key={`${option.value}-${index}`}
      className={classMerge(itemStyles, isActive && activeItemStyles)}
      onClick={() => onClick(option, index)}
      disabled={disabled || option.disabled}
    >
      {option.icon && <span className="text-base">{option.icon}</span>}
      {option.label}
    </button>
  )
}
