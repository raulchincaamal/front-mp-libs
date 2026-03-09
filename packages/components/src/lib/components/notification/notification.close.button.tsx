import { CloseIcon } from "@/assets/icons"
import type { NotificationCloseButtonProps } from "./notification.types"

/**
 * Close button for notifications.
 *
 * Specialized component that renders an accessible button to close notifications.
 * It's positioned absolutely in the top-right corner of the notification
 * and includes hover, focus states with smooth transitions.
 *
 * Features:
 * - Absolute positioning (top-2 right-2)
 * - Interactive states with smooth transitions
 * - Full accessibility with ARIA labels
 * - Consistent styles with design system
 * - Automatic integration with onClose callback
 *
 * @component
 * @param {NotificationCloseButtonProps} props - The component properties
 * @param {(id?: string) => void} [props.onClose] - Function that executes when closing the notification
 * @param {string} [props.id] - Unique identifier passed to the onClose callback
 * @returns {JSX.Element} The rendered close button
 *
 * @example
 * ```tsx
 * // Basic usage
 * <NotificationCloseButton
 *   onClose={(id) => removeNotification(id)}
 *   id="notification-123"
 * />
 *
 * // With local state handling
 * <NotificationCloseButton
 *   onClose={() => setIsVisible(false)}
 * />
 * ```
 */
const NotificationCloseButton = ({
  onClose,
  id,
}: NotificationCloseButtonProps) => {
  return (
    <button
      type="button"
      onClick={() => onClose?.(id)}
      className="absolute top-2 right-2 shrink-0 p-1 rounded-md transition-colors text-gray-10 hover:text-gray-12 hover:bg-gray-4 focus:outline-none focus:ring-2 focus:ring-gray-7 cursor-pointer"
      aria-label="Close notification"
    >
      <CloseIcon className="size-6" />
    </button>
  )
}

export default NotificationCloseButton
