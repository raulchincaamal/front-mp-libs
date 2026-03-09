import { motion } from "motion/react"
import type { ListProps } from "./list.types"
import { Pagination } from "@/components"
import { classNames } from "@/utils/classNames"
import { ListTitle } from "./list.title"
import { ListContainer } from "./list.container"
import {
  usePaginatedItems,
  useTotalPages,
  getContainerHeight,
  createPageChangeHandler,
} from "./list.functions"

/**
 * Componente de lista para mostrar elementos con opciones de paginación, estilos personalizables y soporte para interactividad.
 *
 * Este componente permite renderizar listas de elementos con características avanzadas como:
 * - Paginación opcional para manejar grandes cantidades de datos
 * - Tamaños predefinidos (sm, md, lg, xl)
 * - Estilos personalizables (bordes, sombras, altura)
 * - Soporte para elementos clickeables y enlaces
 * - Mensaje personalizable cuando la lista está vacía
 * - Animaciones de entrada usando Framer Motion
 *
 * @component
 * @param {ListProps} props - Las propiedades del componente
 * @param {ListItem[]} props.items - Array de elementos a mostrar en la lista
 * @param {string} [props.title] - Título opcional que se muestra encima de la lista
 * @param {'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - Tamaño del componente
 * @param {boolean} [props.withPagination=false] - Indica si se debe mostrar paginación
 * @param {number} [props.currentPage=1] - Página actual (base 1)
 * @param {number} [props.itemsPerPage=10] - Cantidad de elementos por página
 * @param {(page: number) => void} [props.onPageChange] - Callback ejecutado cuando cambia la página
 * @param {boolean} [props.showBorder=true] - Indica si se muestra el borde del contenedor
 * @param {boolean} [props.showShadow=true] - Indica si se muestra la sombra del contenedor
 * @param {string} [props.height] - Altura personalizada del contenedor (ej: '20rem', '400px')
 * @param {string} [props.className=''] - Clases CSS adicionales para el contenedor principal
 * @param {string} [props.titleClassName=''] - Clases CSS adicionales para el título
 * @param {string} [props.itemClassName=''] - Clases CSS adicionales para cada elemento de la lista
 * @param {string} [props.emptyMessage='No items to display'] - Mensaje mostrado cuando no hay elementos
 * @param {(event: React.AnimationEvent) => void} [props.onAnimationStart] - Callback cuando inicia la animación CSS
 * @param {(event: React.AnimationEvent) => void} [props.onAnimationEnd] - Callback cuando termina la animación CSS
 * @param {(event: React.AnimationEvent) => void} [props.onAnimationIteration] - Callback en cada iteración de animación CSS
 * @returns {JSX.Element} El componente List renderizado
 *
 * @example
 * ```tsx
 * // Lista básica
 * <List items={[
 *   { id: 1, content: 'Item 1' },
 *   { id: 2, content: 'Item 2' }
 * ]} />
 * ```
 *
 * @example
 * ```tsx
 * // Lista con título y paginación
 * <List
 *   title="My List"
 *   items={items}
 *   size="md"
 *   withPagination
 *   itemsPerPage={5}
 *   currentPage={1}
 *   onPageChange={(page) => setCurrentPage(page)}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Lista con enlaces y elementos clickeables
 * <List items={[
 *   { id: 1, content: 'Link Item', href: '/page' },
 *   { id: 2, content: 'Button Item', onClick: () => alert('clicked') }
 * ]} />
 * ```
 */
const List = ({
  items,
  title,
  size = "md",
  withPagination = false,
  currentPage = 1,
  itemsPerPage = 10,
  onPageChange,
  showBorder = true,
  showShadow = true,
  height,
  className = "",
  titleClassName = "",
  itemClassName = "",
  emptyMessage = "No items to display",
  onAnimationStart,
  onAnimationEnd,
  onAnimationIteration,
  ...props
}: ListProps) => {
  const paginatedItems = usePaginatedItems(
    items,
    withPagination,
    currentPage,
    itemsPerPage
  )
  const totalPages = useTotalPages(items.length, itemsPerPage)
  const containerHeight = getContainerHeight(size, height)
  const handlePageChange = createPageChangeHandler(onPageChange)

  return (
    <div
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
      onAnimationIteration={onAnimationIteration}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={classNames("flex flex-col", { [className]: className })}
      >
        {title && (
          <ListTitle title={title} size={size} className={titleClassName} />
        )}
        <ListContainer
          paginatedItems={paginatedItems}
          containerHeight={containerHeight}
          size={size}
          withPagination={withPagination}
          showBorder={showBorder}
          showShadow={showShadow}
          emptyMessage={emptyMessage}
          itemClassName={itemClassName}
        />
        {withPagination && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            size={size}
          />
        )}
      </motion.div>
    </div>
  )
}

export default List
