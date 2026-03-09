"use client"

import { cn } from "@/utils"
import { Fragment } from "react"
import { Separator } from "radix-ui"
import type { RightSideProps } from "@/layout/header/header.types"
import { Flex } from "@/components"

/**
 * Componente del lado derecho del header.
 * Renderiza elementos hijos con separadores verticales entre ellos.
 * Retorna null si el array de hijos está vacío.
 *
 * @param {RightSideProps} props - Propiedades del componente
 * @param {string} [props.className] - Clases CSS adicionales
 * @param {ReactNode[]} props.children - Array de elementos a renderizar
 * @returns {JSX.Element | null} Contenedor con elementos separados o null
 *
 * @example
 * ```tsx
 * import { RightSide } from '@/layout/header'
 *
 * <RightSide>
 *   <Store>Tienda 001</Store>
 *   <User name="Juan" />
 * </RightSide>
 * ```
 */
const RightSide = ({ className, children }: RightSideProps) => {
  if (Array.isArray(children) && children.length === 0) {
    return null
  }

  const nodes = children.filter(child => child !== null)
  const isLastIndex = (index: number) => index === nodes.length - 1

  return (
    <Flex align="center" gap={4} className={cn(className)}>
      {nodes.map((child, index) => (
        <Fragment key={index}>
          {child}
          {isLastIndex(index) ? null : (
            <Separator.Root
              data-slot="separator"
              orientation="vertical"
              decorative
              className={cn(
                "shrink-0 bg-grays-macropay-05 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"
              )}
            />
          )}
        </Fragment>
      ))}
    </Flex>
  )
}

RightSide.disPlayName = "Layout.Header.RightSide"
export { RightSide }
