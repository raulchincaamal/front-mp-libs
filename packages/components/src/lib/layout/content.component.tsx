"use client"

import { cn } from "@/utils"
import type { ComponentProps } from "react"

/**
 * Componente de contenido principal del layout.
 * Proporciona un contenedor con estilos predefinidos para el área de contenido principal.
 *
 * @param {ComponentProps<"div">} props - Propiedades estándar de un elemento div
 * @returns {JSX.Element} Contenedor de contenido con estilos aplicados
 *
 * @example
 * ```tsx
 * import { Content } from '@/layout'
 *
 * <Content>
 *   <h1>Mi contenido</h1>
 * </Content>
 * ```
 */
export const Content = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col px-0 md:px-4 pt-5 [&>div]:flex [&>div]:items-start [&>div]:justify-center [&>div>div]:w-full [&>div>div]:max-w-243",
        className
      )}
      {...props}
    >
      <div className="flex-1 rounded-lg bg-white p-4">{children}</div>
    </div>
  )
}
