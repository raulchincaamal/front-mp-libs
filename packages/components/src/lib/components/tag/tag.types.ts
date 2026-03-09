import type { HTMLAttributes, ReactNode } from "react"

/**
 * Tag types matching Alert component types
 *
 * @typedef TagType
 */
export type TagType = "success" | "info" | "warning" | "error"

/**
 * Tag component properties
 *
 * @interface TagProps
 * @extends {HTMLAttributes<HTMLSpanElement>}
 */
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Tag content/label
   */
  children: ReactNode

  /**
   * Tag type that determines color and icon
   *
   * @default "info"
   */
  type?: TagType

  /**
   * Whether to show the icon based on the type
   *
   * @default false
   */
  showIcon?: boolean

  /**
   * Whether to show the close button
   *
   * @default false
   */
  closable?: boolean

  /**
   * Function called when close button is clicked
   */
  onClose?: () => void

  /**
   * Additional CSS classes
   *
   * @default ""
   */
  className?: string

  /**
   * Custom icon to override the default type icon
   */
  icon?: ReactNode

  /**
   * Custom background color (overrides type color)
   */
  bgColor?: string

  /**
   * Custom text color (overrides type color)
   */
  textColor?: string

  /**
   * Custom border color (overrides type color)
   */
  borderColor?: string
}
