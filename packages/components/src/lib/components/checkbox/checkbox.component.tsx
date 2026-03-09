/* eslint-disable max-lines */

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { classNames as cn } from "@/utils"
import {
  checkboxSizeStyles,
  type CheckboxProps,
  type CheckedState,
  type CheckboxVisualState,
} from "./checkbox.types"
import { type ComponentRef, forwardRef, useId } from "react"
import { iconMap } from "./checkbox.icon"
import Label from "./checkbox.label"

const Checkbox = forwardRef<
  ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      size = "md",
      checked,
      indeterminate = false,
      disabled = false,
      onCheckedChange,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const checkboxId = useId()

    const visualState: CheckboxVisualState = indeterminate
      ? "indeterminate"
      : checked
        ? "checked"
        : "none"

    const handleCheckedChange = (value: CheckedState) => {
      if (disabled) return
      onCheckedChange?.(value === true)
    }

    return (
      <div
        className={cn(
          "flex gap-2 items-start sm:items-center select-none",
          disabled ? "pointer-events-none" : "cursor-pointer",
          className
        )}
      >
        <CheckboxPrimitive.Root
          id={checkboxId}
          ref={ref}
          checked={checked}
          aria-checked={indeterminate ? "mixed" : checked}
          disabled={disabled}
          onCheckedChange={handleCheckedChange}
          className={cn(
            "flex justify-center items-center rounded-sm border relative transition-[background-color] cursor-pointer",
            checkboxSizeStyles[size],
            {
              "bg-white border-gray-300 hover:border-blue-800":
                !checked && !disabled,
              "bg-blue-800 border-blue-800":
                (checked && !indeterminate && !disabled) ||
                (indeterminate && !disabled),
              "bg-neutral-100 border-stone-300": disabled,
            }
          )}
          {...props}
        >
          {visualState !== "none" && iconMap({ size, disabled })[visualState]}
        </CheckboxPrimitive.Root>

        <Label
          size={size}
          disabled={disabled}
          children={children}
          checkboxId={checkboxId}
        />
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"

export default Checkbox
