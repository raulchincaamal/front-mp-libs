import type { Size } from "@/types/common"

/**
 * Button size classes for pagination
 */
export const BUTTON_SIZE_CLASSES: Record<Size, string> = {
  sm: "min-w-8 h-8",
  md: "min-w-9 h-9",
  lg: "min-w-10 h-10",
  xl: "min-w-12 h-12",
}

/**
 * Maximum number of visible page buttons
 */
export const MAX_VISIBLE_PAGES = 5
