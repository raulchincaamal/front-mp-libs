import type { HTMLAttributes, ReactNode } from "react"
import type { Size } from "@/types/common"

/**
 * Individual list item element
 */
export interface ListItem {
  /**
   * Unique item identifier
   */
  id: string | number
  /**
   * Item content (text or React component)
   */
  content: ReactNode
  /**
   * Optional URL to make the item clickable
   */
  href?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Whether the item is disabled
   */
  disabled?: boolean
}

/**
 * Props for the List component
 */
export interface ListProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  /**
   * Array of items to display in the list
   */
  items: ListItem[]
  /**
   * Optional list title
   */
  title?: string
  /**
   * Component size
   * @default 'md'
   */
  size?: Size
  /**
   * Whether to show pagination
   * @default false
   */
  withPagination?: boolean
  /**
   * Current page when using pagination
   * @default 1
   */
  currentPage?: number
  /**
   * Items per page
   * @default 10
   */
  itemsPerPage?: number
  /**
   * Callback when page changes
   */
  onPageChange?: (page: number) => void
  /**
   * Whether to show container border
   * @default true
   */
  showBorder?: boolean
  /**
   * Whether to show container shadow
   * @default true
   */
  showShadow?: boolean
  /**
   * Custom container height (overrides predefined size)
   */
  height?: string
  /**
   * Additional CSS class
   */
  className?: string
  /**
   * Additional CSS class for the title
   */
  titleClassName?: string
  /**
   * Additional CSS class for each item
   */
  itemClassName?: string
  /**
   * Message when there are no items
   */
  emptyMessage?: string
}

/**
 * Props for the ListContainer component
 */
export interface ListContainerProps {
  /**
   * Array de elementos paginados a mostrar
   */
  paginatedItems: ListItem[]
  /**
   * Altura del contenedor
   */
  containerHeight: string
  /**
   * Tamaño del componente
   */
  size: Size
  /**
   * Indica si la paginación está habilitada
   */
  withPagination: boolean
  /**
   * Indica si se muestra el borde
   */
  showBorder: boolean
  /**
   * Indica si se muestra la sombra
   */
  showShadow: boolean
  /**
   * Mensaje cuando no hay elementos
   */
  emptyMessage: string
  /**
   * Clases CSS adicionales para cada elemento
   */
  itemClassName?: string
}

/**
 * Props for the EmptyState component
 */
export interface EmptyStateProps {
  /**
   * Mensaje a mostrar cuando la lista está vacía
   */
  message: string
  /**
   * Tamaño del componente
   */
  size: Size
}

/**
 * Props for the ListItemComponent
 */
export interface ListItemComponentProps {
  /**
   * Elemento de la lista
   */
  item: ListItem
  /**
   * Índice del elemento en el array
   */
  index: number
  /**
   * Indica si es el último elemento
   */
  isLast: boolean
  /**
   * Tamaño del componente
   */
  size: Size
  /**
   * Clases CSS adicionales para el elemento
   */
  itemClassName?: string
}

/**
 * Props for the ListTitle component
 */
export interface ListTitleProps {
  /**
   * Título a mostrar
   */
  title: string
  /**
   * Tamaño del componente
   */
  size: Size
  /**
   * Clases CSS adicionales
   */
  className?: string
}
