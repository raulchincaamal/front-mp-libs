import type { Size } from "@/types/common"

export const HEIGHTS: Record<Size, string> = {
  sm: "12rem",
  md: "16rem",
  lg: "20rem",
  xl: "24rem",
}

/**
 * Clases de tamaño para el contenedor
 */
export const CONTAINER_SIZE_CLASSES: Record<Size, string> = {
  sm: "w-56",
  md: "w-64",
  lg: "w-80",
  xl: "w-96",
}

/**
 * Clases de padding para cada item
 */
export const ITEM_PADDING_CLASSES: Record<Size, string> = {
  sm: "px-2 py-1.5",
  md: "px-3 py-2",
  lg: "px-4 py-2.5",
  xl: "px-5 py-3",
}

/**
 * Clases de tipografía para cada tamaño
 */
export const TYPOGRAPHY_CLASSES: Record<Size, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
}

/**
 * Clases de título para cada tamaño
 */
export const TITLE_CLASSES: Record<Size, string> = {
  sm: "text-base font-semibold mb-2",
  md: "text-lg font-semibold mb-3",
  lg: "text-xl font-semibold mb-3",
  xl: "text-2xl font-semibold mb-4",
}
