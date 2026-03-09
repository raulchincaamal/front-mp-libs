import type { ReactElement, ReactNode } from "react"

export type NotificationType =
  | "success"
  | "info"
  | "warning"
  | "error"
  | "default"

export type NotificationPlacement =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center"

/**
 * Interface for notification close button properties.
 *
 * @interface NotificationCloseButtonProps
 * @property {(id?: string) => void} [onClose] - Callback function that executes when clicking close
 * @property {string} [id] - Unique ID of the notification to identify which one is being closed
 */
export interface NotificationCloseButtonProps {
  onClose?: (id?: string) => void
  id?: string
}

/**
 * Interface for notification icon component properties.
 *
 * @interface NotificationIconProps
 * @property {ReactElement} [IconComponent] - React element of the icon to display
 * @property {string} [iconColor] - CSS class for icon color (takes priority over defaultIconColor)
 * @property {string} [defaultIconColor] - CSS class for default icon color
 */
export interface NotificationIconProps {
  IconComponent?: ReactElement
  iconColor?: string
  defaultIconColor?: string
}

/**
 * Interface for notification content component properties.
 *
 * @interface NotificationContentProps
 * @property {string} [title] - Main title displayed with Typography.Title
 * @property {string} [message] - Descriptive message displayed with Typography.Text
 * @property {ReactNode} [children] - Additional React elements to render
 */
export interface NotificationContentProps {
  title?: string
  message?: string
  children?: ReactNode
}

/**
 * Main notification component interface.
 *
 * @interface Notification
 * @property {NotificationType} [type] - Notification type that determines color and icon
 * @property {string} [title] - Main title of the notification
 * @property {string} [message] - Descriptive message of the notification
 * @property {number} [duration] - Duration in milliseconds before auto-close
 * @property {string} [id] - Unique identifier of the notification
 * @property {NotificationPlacement} [placement] - Position where the notification appears
 * @property {boolean} [showIcon] - Whether to show the icon based on type
 * @property {boolean} [closable] - Whether to show the close button
 * @property {(id?: string) => void} [onClose] - Function that executes when closing the notification
 * @property {string} [className] - Additional CSS classes for the container
 * @property {ReactNode} [children] - Custom content within the notification
 * @property {string} [borderColor] - Custom border color (overrides type color)
 * @property {string} [iconColor] - Custom icon color (overrides type color)
 */

export interface NotificationProps {
  /**
   * Notification type that determines color and icon
   */
  type?: NotificationType

  /**
   * Main title of the notification
   */
  title?: string

  /**
   * Descriptive message of the notification
   */
  message?: string

  /**
   * Duration in milliseconds before auto-close
   */
  duration?: number

  /**
   * Unique identifier of the notification
   */
  id?: string

  /**
   * Position where the notification appears
   */
  placement?: NotificationPlacement

  /**
   * Whether to show the icon based on type
   */
  showIcon?: boolean

  /**
   * Whether to show the close button
   */
  closable?: boolean

  /**
   * Function that executes when closing the notification
   */
  onClose?: (id?: string) => void

  /**
   * Additional CSS classes for the container
   */
  className?: string

  /**
   * Custom content within the notification
   */
  children?: ReactNode

  /**
   * Custom border color (overrides type color)
   */
  borderColor?: string

  /**
   * Custom icon color (overrides type color)
   */
  iconColor?: string
}
