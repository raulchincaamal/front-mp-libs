import { Flex } from "@/components"
import Typography from "../typography"
import type { NotificationContentProps } from "./notification.types"

const { Title, Text } = Typography

/**
 * Component for rendering the textual content of the notification.
 *
 * Handles the structured display of title, message and custom content
 * of the notification. Uses the project's Typography system and conditional
 * rendering to show only elements that have content.
 *
 * Visual structure:
 * - Vertical layout with 8px gap between elements
 * - Title: Typography.Title level 5, medium weight
 * - Message: Typography.Text size sm with leading-5
 * - Children: Direct rendering after textual content
 * - Full width with center justification
 *
 * @component
 * @param {NotificationContentProps} props - The component properties
 * @param {string} [props.title] - Main title of the notification
 * @param {string} [props.message] - Descriptive message of the notification
 * @param {ReactNode} [props.children] - Additional custom content (buttons, links, etc.)
 * @returns {JSX.Element} The notification content component
 *
 * @example
 * ```tsx
 * // Title only
 * <NotificationContent
 *   title="Operation completed"
 * />
 *
 * // Title and message
 * <NotificationContent
 *   title="Connection error"
 *   message="Could not connect to server. Please try again."
 * />
 *
 * // With custom content
 * <NotificationContent
 *   title="Update available"
 *   message="New version of the application available"
 * >
 *   <div className="flex gap-2 mt-2">
 *     <button className="btn-primary">Update</button>
 *     <button className="btn-secondary">Later</button>
 *   </div>
 * </NotificationContent>
 *
 * // Custom content only
 * <NotificationContent>
 *   <div className="custom-notification-content">
 *     <img src="/icon.png" alt="Custom" />
 *     <p>Completely custom content</p>
 *   </div>
 * </NotificationContent>
 * ```
 */

const NotificationContent = ({
  title,
  message,
  children,
}: NotificationContentProps) => {
  return (
    <Flex gap={2} direction="vertical" justify="center" className="w-full">
      {title && (
        <Title level={6} weight="medium">
          {title}
        </Title>
      )}

      {message && (
        <Text className="leading-5" size="sm">
          {message}
        </Text>
      )}

      {children}
    </Flex>
  )
}

export default NotificationContent
