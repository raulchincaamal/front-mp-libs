import { motion } from "motion/react"
import type { CardProps } from "./card.types"
import { classNames } from "@/utils/classNames"

/**
 * Card component to display content in a styled container.
 *
 * @component
 * @param {CardProps} props - Card component properties
 * @param {ReactNode} props.children - Card content
 * @param {'horizontal' | 'vertical'} [props.align='horizontal'] - Content alignment direction
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {boolean} [props.shadow=true] - Whether to show shadow
 * @param {boolean} [props.rounded=true] - Whether to have rounded corners
 * @param {boolean} [props.bordered=true] - Whether to have border
 * @returns {JSX.Element} Rendered Card component
 *
 * @example
 * ```tsx
 * <Card align="horizontal">
 *   <h3>Card Title</h3>
 *   <p>Card content...</p>
 * </Card>
 * ```
 *
 * @example
 * ```tsx
 * <Card align="vertical" shadow={false}>
 *   <img src="image.jpg" alt="Image" />
 *   <div>
 *     <h4>Title</h4>
 *     <p>Description</p>
 *   </div>
 * </Card>
 * ```
 */
const Card = ({
  children,
  className = "",
  align = "horizontal",
  shadow = true,
  rounded = true,
  bordered = true,
  ...props
}: CardProps) => {
  const { ...restProps } = props as Record<string, unknown>
  const cardClasses = classNames(
    // Base classes
    "bg-white p-4",
    // Flex layout based on alignment
    {
      "flex flex-col": align === "horizontal",
      "flex flex-col md:flex-row md:max-w-xl": align === "vertical",
    },
    // Shadow
    {
      "shadow-lg": shadow,
    },
    // Rounded corners
    {
      "rounded-2xl": rounded,
    },
    // Border
    {
      "border border-gray-200": bordered,
    },
    // Custom class
    {
      [className]: className,
    }
  )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cardClasses}
      {...restProps}
    >
      {children}
    </motion.div>
  )
}

export default Card
