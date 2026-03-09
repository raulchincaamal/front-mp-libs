import type { TGapAllowed } from "@/components"
import type { Size } from "@/types/common"

/**
 * Step button size classes
 */
export const STEP_BUTTON_SIZE_CLASSES: Record<Size, string> = {
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
  xl: "size-12",
}

/**
 * Step indicator size classes
 */
export const STEP_INDICATOR_SIZE_CLASSES: Record<Size, string> = {
  sm: "size-5",
  md: "size-6",
  lg: "size-7",
  xl: "size-8",
}

/**
 * Step text size classes
 */
export const STEP_TEXT_SIZE_CLASSES: Record<Size, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
}

/**
 * Step icon size classes
 */
export const STEP_ICON_SIZE_CLASSES: Record<Size, string> = {
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
  xl: "size-12",
}

/**
 * Step gap size classes
 */
export const STEP_GAP_SIZE_CLASSES: Record<Size, TGapAllowed> = {
  sm: 2,
  md: 4,
  lg: 6,
  xl: 8,
}
