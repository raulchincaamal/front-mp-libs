import Typography from "../typography"
import type { ListTitleProps } from "./list.types"

/**
 * Componente de título para la lista
 *
 * Renderiza el título de la lista utilizando el componente Typography.Title
 * con nivel h3 y estilos personalizables.
 *
 * @component
 * @param {ListTitleProps} props - Las propiedades del componente
 * @param {string} props.title - Título a mostrar
 * @param {'sm' | 'md' | 'lg' | 'xl'} props.size - Tamaño del componente (actualmente no usado)
 * @param {string} [props.className=''] - Clases CSS adicionales
 * @returns {JSX.Element} El componente de título renderizado
 *
 * @example
 * ```tsx
 * <ListTitle title="My List" size="md" />
 * ```
 */
export const ListTitle = ({ title, className = "" }: ListTitleProps) => {
  return (
    <Typography.Title level={3} className={className}>
      {title}
    </Typography.Title>
  )
}
