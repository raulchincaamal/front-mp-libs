"use client"

import type { ComponentProps } from "react"
import { cn } from "@/utils"

/**
 * Componente de pie de página del layout.
 * Renderiza un footer con estilos predefinidos para información de copyright o enlaces.
 *
 * @param {ComponentProps<"footer">} props - Propiedades estándar de un elemento footer
 * @returns {JSX.Element} Elemento footer con estilos aplicados
 *
 * @example
 * ```tsx
 * import { Footer } from '@/layout'
 *
 * <Footer>© 2024 MacroPay</Footer>
 * ```
 */
export const Footer = ({ className, ...props }: ComponentProps<"footer">) => {
  return (
    <footer
      className={cn(
        "bottom-0 w-full px-6 py-4 text-center text-xs text-grays-macropay-05",
        className
      )}
      {...props}
    />
  )
}
