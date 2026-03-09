"use client"

import type { ComponentProps } from "react"
import { cn } from "@/utils"

/**
 * Componente del lado izquierdo del header.
 * Contenedor para elementos como logos o navegación principal.
 *
 * @param {ComponentProps<"div">} props - Propiedades estándar de un elemento div
 * @returns {JSX.Element} Contenedor con estilos para SVG de ancho fijo
 *
 * @example
 * ```tsx
 * import { LeftSide } from '@/layout/header'
 *
 * <LeftSide>
 *   <Logo />
 * </LeftSide>
 * ```
 */
export const LeftSide = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("[&_svg]:w-40", className)} {...props} />
}
