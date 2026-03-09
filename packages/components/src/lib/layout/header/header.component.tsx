"use client"

import type { ComponentProps } from "react"
import { cn } from "@/utils"
import { LeftSide } from "./left-side.component"
import { Store } from "./store.component"
import { User } from "./user.component"
import { RightSide } from "./right-side.component"

/**
 * Componente de encabezado del layout.
 * Componente compuesto que incluye subcomponentes: LeftSide, Store, User y RightSide.
 *
 * @param {ComponentProps<"header">} props - Propiedades estándar de un elemento header
 * @returns {JSX.Element} Elemento header con estilos sticky y subcomponentes adjuntos
 *
 * @example
 * ```tsx
 * import { Header } from '@/layout'
 *
 * <Header>
 *   <Header.LeftSide>Logo</Header.LeftSide>
 *   <Header.RightSide>
 *     <Header.Store>Tienda 001</Header.Store>
 *     <Header.User name="Juan" role="Admin" />
 *   </Header.RightSide>
 * </Header>
 * ```
 */
const Header = ({ className, ...props }: ComponentProps<"header">) => {
  return (
    <header
      className={cn(
        "sticky top-0 flex h-17 shrink-0 items-center justify-between gap-2 border-b border-gray-200 bg-white px-4 shadow-lg z-1",
        className
      )}
      {...props}
    />
  )
}

Header.LeftSide = LeftSide
Header.Store = Store
Header.User = User
Header.RightSide = RightSide

export { Header }
