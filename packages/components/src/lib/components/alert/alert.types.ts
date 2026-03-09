import type { ReactNode } from "react"

/**
 * Tipos de alerta disponibles
 */
export type Type = "success" | "info" | "warning" | "error"

/**
 * Props para el componente Alert
 */
export interface AlertProps {
  /**
   * Tipo de alerta que determina el color y el icono
   * @default 'info'
   */
  type?: Type

  /**
   * Título de la alerta
   */
  title?: string

  /**
   * Descripción o mensaje de la alerta
   */
  description?: string

  /**
   * Si debe mostrar el icono según el tipo
   * @default true
   */
  showIcon?: boolean

  /**
   * Si debe mostrar el botón de cerrar
   * @default false
   */
  closable?: boolean

  /**
   * Función que se ejecuta al cerrar la alerta
   */
  onClose?: () => void

  /**
   * Clases CSS adicionales
   */
  className?: string

  /**
   * Contenido personalizado dentro de la alerta
   */
  children?: ReactNode
}
