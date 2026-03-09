import type { PropsWithChildren } from "react"

export type ToastType = "default" | "success" | "error" | "warning" | "info"

export interface ToastConfig {
  /**
   * Titulo del toast
   * @type {string}
   */
  title?: string
  /**
   * Si el toast tiene botón de cerrar, deshabilita el tiempo de duración
   * @type {boolean}
   */
  isClosable?: boolean
  /**
   * Tiempo de duración del toast, en segundos
   * @type {number}
   */
  timeOut?: number
}

export interface ToastProps extends PropsWithChildren {
  isOpen: boolean
  type?: ToastType
  isClosable?: boolean
  title?: string
  onClose?: () => void
  position?: number
}
