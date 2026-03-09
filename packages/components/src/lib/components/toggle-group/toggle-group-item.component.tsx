"use client"

import type { ComponentProps } from "react"
import { useContext } from "react"
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui"
import { ToggleGroupContext } from "@/components/toggle-group/toggle-group-context"
import { toggleVariants } from "@/components/toggle"
import type { VariantProps } from "class-variance-authority"
import { cn } from "@/utils"

/**
 * Item individual dentro de un ToggleGroup.
 * Hereda automáticamente las variantes y configuración del grupo padre mediante contexto.
 *
 * @param {ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>} props - Propiedades del componente
 * @param {string} props.className - Clases CSS adicionales
 * @param {React.ReactNode} props.children - Contenido del item
 * @param {"default" | "outline"} props.variant - Variante de estilo (default: "default", heredado del grupo si existe)
 * @param {"default" | "sm" | "lg"} props.size - Tamaño del item (default: "default", heredado del grupo si existe)
 *
 * @returns {JSX.Element} Elemento ToggleGroupItem renderizado
 *
 * @example
 * ```tsx
 * import { ToggleGroup } from 'mp-ui-components'
 *
 * <ToggleGroup.Item value="bold">
 *   <IconBold />
 * </ToggleGroup.Item>
 * ```
 */
const ToggleGroupItem = ({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) => {
  const context = useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        "group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg shrink-0 focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t",
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export default ToggleGroupItem
