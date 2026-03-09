import { classNames } from "@/utils/classNames"
import { CONTAINER_SIZE_CLASSES } from "@/constants/list"
import type { ListContainerProps } from "./list.types"
import { ListItemComponent } from "./list.item"
import { EmptyState } from "./list.empty"

/**
 * Container component for the list items
 */
export const ListContainer = ({
  paginatedItems,
  containerHeight,
  size,
  withPagination,
  showBorder,
  showShadow,
  emptyMessage,
  itemClassName = "",
}: ListContainerProps) => {
  return (
    <ul
      style={{ height: withPagination ? "auto" : containerHeight }}
      className={classNames(CONTAINER_SIZE_CLASSES[size], "rounded-lg", {
        "border border-gray-6": showBorder,
        "shadow-md": showShadow,
        "overflow-y-auto scroll-smooth": !withPagination,
      })}
    >
      {paginatedItems.length === 0 ? (
        <EmptyState message={emptyMessage} size={size} />
      ) : (
        paginatedItems.map((item, index) => (
          <ListItemComponent
            key={item.id}
            item={item}
            index={index}
            isLast={index === paginatedItems.length - 1}
            size={size}
            itemClassName={itemClassName}
          />
        ))
      )}
    </ul>
  )
}
