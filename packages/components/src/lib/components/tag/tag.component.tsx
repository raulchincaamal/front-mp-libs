import type { TagProps } from "./tag.types"
import { CloseIcon } from "@/assets/icons"
import { classNames } from "@/utils/classNames"
import { tagColors } from "@/constants/tag"

/**
 * Tag component for displaying labels with different types, icons, and customization options.
 *
 * Uses the same color scheme and icons as the Alert component for consistency.
 *
 * @component
 * @param {TagProps} props - Tag component properties
 * @returns {JSX.Element} Rendered Tag component
 *
 * @example
 * ```tsx
 * // Basic tag
 * <Tag type="success">Success</Tag>
 * ```
 *
 * @example
 * ```tsx
 * // Tag with icon
 * <Tag type="error" showIcon>Error occurred</Tag>
 * ```
 *
 * @example
 * ```tsx
 * // Closable tag
 * <Tag type="warning" closable onClose={() => console.log('Closed')}>
 *   Warning
 * </Tag>
 * ```
 *
 * @example
 * ```tsx
 * // Custom colors
 * <Tag
 *   bgColor="#E0F2FE"
 *   textColor="#0369A1"
 *   borderColor="#7DD3FC"
 * >
 *   Custom Tag
 * </Tag>
 * ```
 */
const Tag = ({
  children,
  type = "info",
  showIcon = false,
  closable = false,
  onClose,
  className = "",
  icon,
  bgColor,
  textColor,
  borderColor,
  ...props
}: TagProps) => {
  // Determine if custom colors are provided
  const hasCustomColors = !!(bgColor || textColor || borderColor)

  // Get default colors based on type
  const colors = tagColors[type]

  // Get the icon component
  const iconElement = icon || (showIcon ? colors.icon : null)

  const tagClasses = classNames(
    "inline-flex items-center gap-2 px-2 py-2 rounded border text-sm font-medium leading-none rounded-sm",
    {
      [colors.bgColor]: !hasCustomColors,
      [colors.textColor]: !hasCustomColors,
      [colors.borderColor]: !hasCustomColors,
      [className]: className,
    }
  )

  const customStyles = hasCustomColors
    ? {
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
      }
    : undefined

  const closeButtonClasses = classNames(
    "rounded transition-colors cursor-pointer text-black/[0.45]",
    {
      [colors.closeButtonColor]: !hasCustomColors,
    }
  )

  return (
    <span className={tagClasses} style={customStyles} {...props}>
      {iconElement && (
        <span className="inline-flex shrink-0">{iconElement}</span>
      )}
      <span className="inline-flex items-center">{children}</span>
      {closable && (
        <button
          onClick={onClose}
          className={closeButtonClasses}
          aria-label="Remove tag"
          type="button"
        >
          <CloseIcon width={16} height={16} />
        </button>
      )}
    </span>
  )
}
export default Tag
