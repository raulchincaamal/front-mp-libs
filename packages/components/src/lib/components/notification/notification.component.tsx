import { useEffect } from "react"
import { motion } from "motion/react"
import type { NotificationProps } from "./notification.types"
import { classNames } from "@/utils/classNames"
import { notificationColors, getAnimation } from "@/constants/notification"
import NotificationCloseButton from "./notification.close.button"
import NotificationIcon from "./notification.icon"
import NotificationContent from "./notification.content"
/**
 * Notification component for displaying informative, success, warning, or error messages.
 *
 * This is the main component of the notification system that uses Motion
 * for smooth entry/exit animations and provides a consistent visual interface
 * for communicating different types of messages to users.
 *
 * It's composed of three modular subcomponents:
 * - NotificationCloseButton: Button to close the notification
 * - NotificationIcon: Visual icon based on notification type
 * - NotificationContent: Textual content and custom elements
 *
 * @component
 * @param {NotificationProps} props - The component properties
 * @param {'success' | 'info' | 'warning' | 'error' | 'default'} [props.type='default'] - Notification type that determines color and icon
 * @param {string} [props.title] - Main title of the notification
 * @param {string} [props.message] - Descriptive message of the notification
 * @param {number} [props.duration=4000] - Duration in milliseconds before auto-close (0 = no auto-close)
 * @param {string} [props.id] - Unique identifier of the notification for callbacks
 * @param {'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'} [props.placement='top-right'] - Position where the notification appears
 * @param {boolean} [props.showIcon=true] - Whether to show the icon based on type
 * @param {boolean} [props.closable=false] - Whether to show the close button
 * @param {(id?: string) => void} [props.onClose] - Function that executes when closing the notification
 * @param {string} [props.className=''] - Additional CSS classes for the container
 * @param {string} [props.borderColor] - Custom border color (overrides type color)
 * @param {string} [props.iconColor] - Custom icon color (overrides type color)
 * @param {ReactNode} [props.children] - Additional custom content within the notification
 * @returns {JSX.Element} The Notification component rendered with animation
 *
 * @example
 * ```tsx
 * // Simple success notification
 * <Notification
 *   type="success"
 *   title="Operation successful!"
 *   message="Changes were saved successfully"
 *   duration={5000}
 * />
 *
 * // Error notification with close button
 * <Notification
 *   type="error"
 *   title="Server error"
 *   message="Could not connect to server"
 *   closable={true}
 *   placement="bottom-right"
 *   onClose={(id) => console.log('Closed notification:', id)}
 * />
 *
 * // Persistent notification with custom content
 * <Notification
 *   type="warning"
 *   title="Important warning"
 *   message="This action cannot be undone"
 *   duration={0}
 *   closable={true}
 * >
 *   <button onClick={handleRetry}>Retry</button>
 *   <button onClick={handleCancel}>Cancel</button>
 * </Notification>
 *
 * // Notification with custom colors
 * <Notification
 *   title="Custom notification"
 *   message="With specific brand colors"
 *   borderColor="border-purple-500"
 *   iconColor="text-purple-600"
 * />
 * ```
 */
const Notification = ({
  type = "default",
  title,
  message,
  duration = 4000,
  id,
  placement = "top-right",
  showIcon = true,
  closable = false,
  onClose,
  className = "",
  children,
  borderColor,
  iconColor,
  ...props
}: NotificationProps) => {
  const { initial, animate, exit } = getAnimation(placement)

  // Auto-remove notification after duration
  useEffect(() => {
    if (duration > 0) {
      const timeoutRef = setTimeout(() => {
        onClose?.(id)
      }, duration)

      return () => clearTimeout(timeoutRef)
    }
  }, [duration, id, onClose])
  // Get colors based on type or use defaults
  const colors = type ? notificationColors[type] : null
  const IconComponent = colors?.icon

  const notificationClasses = classNames(
    "px-6 py-4 rounded flex gap-4 max-w-96 shadow-md relative border bg-white",
    borderColor || colors?.borderColor,
    className
  )

  return (
    <motion.div
      layout
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={notificationClasses}
      role="alert"
      aria-live="polite"
      {...props}
    >
      {/* Close button */}
      {closable && <NotificationCloseButton onClose={onClose} id={id} />}

      {/* Icon */}
      {showIcon && (
        <NotificationIcon
          IconComponent={IconComponent}
          iconColor={iconColor}
          defaultIconColor={colors?.iconColor}
        />
      )}

      {/* Content */}
      <NotificationContent title={title} message={message}>
        {children}
      </NotificationContent>
    </motion.div>
  )
}

export default Notification
