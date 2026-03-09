import { classNames } from "@/utils/classNames"
import type { NotificationIconProps } from "./notification.types"
import { Flex } from "@/components"

/**
 * Component for rendering the notification icon.
 *
 * Handles the display of the icon corresponding to the notification type,
 * applying appropriate colors and responsive design. The component
 * uses conditional rendering - if no IconComponent is provided,
 * returns null without rendering anything.
 *
 * Technical features:
 * - Responsive size: 28x28px (mobile) / 24x24px (desktop)
 * - Internal icon: 16x16px fixed
 * - Support for custom colors with automatic fallback
 * - Centered flexbox for perfect alignment
 * - Integration with the project's icon system
 *
 * @component
 * @param {NotificationIconProps} props - The component properties
 * @param {React.ComponentType<{ className?: string }>} [props.IconComponent] - Icon component to render (e.g: CheckCircleIcon)
 * @param {string} [props.iconColor] - Custom color for the icon (e.g: "text-purple-600")
 * @param {string} [props.defaultIconColor] - Default color based on notification type
 * @returns {JSX.Element | null} The icon component or null if no IconComponent
 *
 * @example
 * ```tsx
 * // With success icon and default color
 * <NotificationIcon
 *   IconComponent={CheckCircleIcon}
 *   defaultIconColor="text-green-500"
 * />
 *
 * // With custom color (overrides default)
 * <NotificationIcon
 *   IconComponent={WarningIcon}
 *   iconColor="text-orange-600"
 *   defaultIconColor="text-yellow-500"
 * />
 *
 * // No icon (returns null)
 * <NotificationIcon />
 * ```
 */

const NotificationIcon = ({
  IconComponent,
  iconColor,
  defaultIconColor,
}: NotificationIconProps) => {
  if (!IconComponent) return null

  return (
    <Flex
      align="center"
      justify="center"
      className={classNames(
        "w-7 h-7 shrink-0 sm:w-6 sm:h-6",
        iconColor || defaultIconColor
      )}
    >
      {IconComponent}
    </Flex>
  )
}

export default NotificationIcon
