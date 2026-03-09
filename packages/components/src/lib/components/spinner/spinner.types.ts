import type { Size } from "@/types/common"
import type { HTMLAttributes } from "react"

/**
 * Props for the Spinner component.
 *
 * @property {"sm" | "md" | "lg" | "xl"} [size] - Spinner size (small, medium, large, extra large)
 * @property {string} [text] - Optional text to display below the spinner
 * @property {string} [className] - Additional custom classes for the spinner element
 * @property {string} [color] - Tailwind class for the spinner's top border color (default: border-t-blue-500)
 *
 * @example
 * ```tsx
 * <Spinner size="lg" text="Loading..." color="border-t-green-500" />
 * ```
 *
 * @see {@link Spinner} for the component implementation
 */
export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Spinner size (small, medium, large, extra large)
   * @type {"sm" | "md" | "lg" | "xl"}
   */
  size?: Size
  /**
   * Optional text to display below the spinner
   * @type {string}
   */
  text?: string
  /**
   * Tailwind class for the spinner's top border color (default: border-t-blue-500)
   * @type {string}
   */
  color?: string
}

/**
 * Maps spinner sizes to Tailwind CSS classes for width and height.
 *
 * @type {Record<Size, string>}
 * @example
 * ```typescript
 * SpinnerSizeMap["md"] // "size-12"
 * ```
 */
export const SpinnerSizeMap: Record<Size, string> = {
  sm: "size-8",
  md: "size-12",
  lg: "size-16",
  xl: "size-20",
}
