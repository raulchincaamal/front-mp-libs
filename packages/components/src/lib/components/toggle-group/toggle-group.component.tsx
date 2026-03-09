"use client"

import { type VariantProps } from "class-variance-authority"
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui"
import { cn } from "@/utils"
import type { toggleVariants } from "@/components/toggle"
import ToggleGroupItem from "@/components/toggle-group/toggle-group-item.component"
import type { ComponentProps, CSSProperties } from "react"
import { ToggleGroupContext } from "@/components/toggle-group/toggle-group-context"

/**
 * Componente ToggleGroup que agrupa múltiples toggles con selección única o múltiple.
 * Basado en Radix UI ToggleGroup con soporte para orientación horizontal/vertical y espaciado personalizable.
 *
 * @param {ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>} props - Propiedades del componente
 * @param {string} props.className - Clases CSS adicionales
 * @param {"default" | "outline"} props.variant - Variante de estilo aplicada a todos los items
 * @param {"default" | "sm" | "lg"} props.size - Tamaño aplicado a todos los items
 * @param {number} props.spacing - Espaciado entre items en píxeles (default: 0)
 * @param {"horizontal" | "vertical"} props.orientation - Orientación del grupo (default: "horizontal")
 * @param {React.ReactNode} props.children - Items del grupo (ToggleGroup.Item)
 *
 * @returns {JSX.Element} Elemento ToggleGroup renderizado
 *
 * @example
 * ```tsx
 * import { ToggleGroup } from 'mp-ui-components'
 *
 * <ToggleGroup type="single" variant="outline" spacing={4}>
 *   <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
 *   <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
 * </ToggleGroup>
 * ```
 */
const ToggleGroup = ({
  className,
  variant,
  size,
  spacing = 0,
  orientation = "horizontal",
  children,
  ...props
}: ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }) => {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      style={{ "--gap": spacing } as CSSProperties}
      className={cn(
        "rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider
        value={{ variant, size, spacing, orientation }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

ToggleGroup.Item = ToggleGroupItem

export default ToggleGroup
