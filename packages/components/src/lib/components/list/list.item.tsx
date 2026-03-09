import { motion } from "motion/react"
import { classNames } from "@/utils/classNames"
import { ITEM_PADDING_CLASSES, TYPOGRAPHY_CLASSES } from "@/constants/list"
import type { ListItemComponentProps } from "./list.types"

/**
 * Individual list item component
 */
export const ListItemComponent = ({
  item,
  index,
  isLast,
  size,
  itemClassName = "",
}: ListItemComponentProps) => {
  const ItemWrapper = item.href ? "a" : "button"
  const itemProps = item.href
    ? { href: item.href }
    : { onClick: item.onClick, type: "button" as const }

  return (
    <motion.li
      key={item.id}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className={classNames("border-gray-5 transition-colors duration-200", {
        "border-b": !isLast,
        "hover:bg-gray-3": !item.disabled,
        "opacity-50 cursor-not-allowed": item.disabled,
      })}
    >
      <ItemWrapper
        {...itemProps}
        disabled={item.disabled}
        className={classNames(
          "w-full text-left block",
          ITEM_PADDING_CLASSES[size],
          TYPOGRAPHY_CLASSES[size],
          "text-gray-12 no-underline",
          "focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-inset",
          {
            "cursor-pointer": !item.disabled,
            "cursor-not-allowed": item.disabled,
            [itemClassName]: itemClassName,
          }
        )}
      >
        {item.content}
      </ItemWrapper>
    </motion.li>
  )
}
