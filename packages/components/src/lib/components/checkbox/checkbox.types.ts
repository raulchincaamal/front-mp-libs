import type * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import type { CheckedState } from "@radix-ui/react-checkbox"

export type CheckboxSize = "sm" | "md"

export type CheckboxVisualState = "checked" | "indeterminate" | "none"

export type CheckboxProps = {
  label?: string
  size?: CheckboxSize
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
} & Omit<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  "checked" | "onCheckedChange"
>

export const checkboxSizeStyles: Record<CheckboxSize, string> = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
}

export const checkboxIconSizeStyles: Record<CheckboxSize, string> = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
}

export const checkboxIndeterminateSizeStyles: Record<CheckboxSize, string> = {
  sm: "h-2 w-2",
  md: "h-4 w-4",
}

export const checkboxLabelSizeStyles: Record<CheckboxSize, string> = {
  sm: "text-sm",
  md: "text-base",
}

export type { CheckedState }

export interface IconMapProps {
  size: CheckboxSize
  disabled: boolean
}
