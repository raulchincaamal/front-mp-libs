import { classNames as cn } from "@/utils"
import type { CheckboxSize } from "./checkbox.types"
import { checkboxLabelSizeStyles } from "./checkbox.types"
import type { ReactNode } from "react"

const Label = ({
  size,
  disabled,
  children,
  checkboxId,
}: {
  size: CheckboxSize
  disabled: boolean
  children: ReactNode
  checkboxId: string
}) => {
  if (!children) return null

  return (
    <label
      htmlFor={checkboxId}
      className={cn(
        checkboxLabelSizeStyles[size],
        disabled && "text-gray-400",
        "cursor-pointer"
      )}
    >
      {children}
    </label>
  )
}

export default Label
