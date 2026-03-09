"use client"

import type { VariantProps } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"
import { cn } from "@/utils"
import type { ComponentProps } from "react"
import { toggleVariants } from "@/components/toggle/constants/variants"

/**
 * Componente Toggle que permite alternar entre estados activado/desactivado.
 * Basado en Radix UI Toggle con variantes de estilo personalizables.
 *
 * @param {ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>} props - Propiedades del componente
 * @param {string} props.className - Clases CSS adicionales para personalizar el estilo
 * @param {"default" | "outline"} props.variant - Variante de estilo del toggle (default: "default")
 * @param {"default" | "sm" | "lg"} props.size - Tamaño del toggle (default: "default")
 *
 * @returns {JSX.Element} Elemento Toggle renderizado
 *
 * @example
 * ```tsx
 * import { Toggle } from 'mp-ui-components'
 *
 * <Toggle variant="outline" size="sm">
 *   <IconBold />
 * </Toggle>
 * ```
 */
const Toggle = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) => {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export default Toggle
