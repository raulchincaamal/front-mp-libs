import type { DropdownItem } from "@/components/dropdown/dropdown.types"
import type { ReactNode, ComponentProps } from "react"

/**
 * Propiedades para el componente RightSide del header.
 */
export interface RightSideProps extends Pick<
  ComponentProps<"div">,
  "className"
> {
  /** Elementos hijos a renderizar con separadores entre ellos */
  children: ReactNode[]
}

/**
 * Propiedades para el componente Store del header.
 */
export interface StoreProps extends Pick<ComponentProps<"div">, "className"> {
  /** Nombre de la tienda a mostrar */
  children?: string
}

/**
 * Propiedades para el componente User del header.
 */
export interface UserProps {
  /** Nombre del usuario */
  name?: string
  /** Rol o cargo del usuario */
  role?: string
  /** URL de la imagen de avatar del usuario */
  imageUrl?: string
  /** Items del menú desplegable del usuario */
  items?: DropdownItem[]
}
