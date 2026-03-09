import type { HTMLAttributes, ReactNode } from "react"

/**
 * Alignment types for the Card component.
 *
 * @typedef {('horizontal' | 'vertical')} AlignCard
 */
export type AlignCard = "horizontal" | "vertical"

/**
 * Card component properties.
 *
 * @interface CardProps
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Card content
   */
  children: ReactNode

  /**
   * Additional CSS classes to customize the style
   *
   * @default ""
   */
  className?: string

  /**
   * Content alignment direction inside the card
   *
   * @default "horizontal"
   */
  align?: AlignCard

  /**
   * Whether the card should have shadow
   *
   * @default true
   */
  shadow?: boolean

  /**
   * Whether the card should have rounded corners
   *
   * @default true
   */
  rounded?: boolean

  /**
   * Whether the card should have border
   *
   * @default true
   */
  bordered?: boolean
}
