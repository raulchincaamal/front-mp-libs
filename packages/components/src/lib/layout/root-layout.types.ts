import type { ComponentProps } from "react"

/**
 * Propiedades para el componente RootLayout.
 * Extiende las propiedades estándar del elemento main.
 */
export interface RootLayoutProps extends ComponentProps<"main"> {
  /** Estado de carga que muestra un overlay sobre el contenido */
  loading?: boolean
}
