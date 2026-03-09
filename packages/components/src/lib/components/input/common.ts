import type { HTMLMotionProps } from "motion/react"
import type { Size } from "@/interfaces/common"

export interface BaseInputProps extends Omit<
  HTMLMotionProps<"input">,
  "onChange" | "size"
> {
  size?: Size
  icon?: React.ReactNode
  leftIcon?: React.ReactNode
  error?: boolean
  check?: boolean
  clear?: boolean
  variant?: "default" | "underline"
}

export const sizeStyles: Record<Exclude<Size, "sm">, string> = {
  md: "py-[5px] min-h-8 rounded-md",
  lg: "py-2 text-base min-h-10 rounded-lg",
  xl: "py-3 text-base min-h-12 rounded-lg",
}

export const getInputStyles = (
  variant: "default" | "underline",
  size: Size,
  error?: boolean,
  check?: boolean,
  icon?: boolean
) => {
  const baseStyles = [
    "px-3 py-px min-h-6 text-sm leading-[22px] w-full",
    "transition-all ease-out duration-300",
    "placeholder:text-gray-6 text-gray-10 outline-none appearance-none",
    "disabled:bg-gray-3 disabled:text-gray-6 disabled:border-gray-5",
  ]

  const variantStyles =
    variant === "default"
      ? [
          "rounded border shadow-button border-gray-7",
          "focus:border-light-blue-30 focus:ring-light-blue-30 focus:shadow-[0_0_0_2px_#E6EDF8]",
        ]
      : [
          "border-0 border-b border-gray-7 rounded-none! bg-transparent",
          "focus:border-light-blue-30",
        ]

  const stateStyles = {
    "pl-8": icon,
    [variant === "default"
      ? "border-red text-red focus:border-red focus:ring-red focus:shadow-[0_0_0_2px_#FFCCC7]"
      : "border-b-red text-red focus:border-b-red"]: error,
    [variant === "default"
      ? "border-green text-green focus:border-green focus:ring-green focus:shadow-[0_0_0_2px_#D4F0E0]"
      : "border-b-green text-green focus:border-b-green"]: check,
  }

  return {
    sizeStyles: sizeStyles[size as Exclude<Size, "sm">],
    stateStyles,
    baseStyles,
    variantStyles,
  }
}
