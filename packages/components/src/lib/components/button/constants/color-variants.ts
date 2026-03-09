import { classNames } from "@/utils/classNames"
import type { Variants } from "../button.types"

export const variantStyles: Record<Variants, string> = {
  default: classNames(
    "bg-primary-blue border-primary-blue text-white",
    "hover:bg-darks-blue-Macropay-30 hover:border-darks-blue-Macropay-30"
  ),
  primary: classNames(
    "bg-primary-yellow border-primary-yellow text-primary-blue",
    "hover:bg-shades-yellow-10 hover:border-shades-yellow-10"
  ),
  secondary: classNames(
    "bg-white text-primary-blue border-primary-blue",
    "hover:border-darks-blue-Macropay-30 hover:text-darks-blue-Macropay-30"
  ),
  text: classNames(
    "bg-transparent text-primary-blue border-transparent shadow-none",
    "hover:text-darks-blue-Macropay-30",
    "disabled:bg-transparent disabled:border-transparent"
  ),
  danger: classNames(
    "bg-primary-red border-primary-red text-white",
    "hover:bg-shades-red-10 hover:border-shades-red-10"
  ),
  withoutColor: "bg-transparent border-transparent shadow-none",
}
