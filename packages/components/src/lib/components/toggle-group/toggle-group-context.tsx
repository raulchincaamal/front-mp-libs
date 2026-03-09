import type { VariantProps } from "class-variance-authority"
import { createContext } from "react"
import type { toggleVariants } from "@/components/toggle"

/**
 * Contexto para compartir configuración entre componentes ToggleGroup y ToggleGroupItem.
 * Proporciona variantes de estilo, espaciado y orientación a todos los items del grupo.
 *
 * @type {React.Context<VariantProps<typeof toggleVariants> & { spacing?: number; orientation?: "horizontal" | "vertical" }>}
 *
 * @example
 * ```tsx
 * import { ToggleGroupContext } from '@/components/toggle-group/toggle-group-context'
 *
 * const context = useContext(ToggleGroupContext)
 * ```
 */
export const ToggleGroupContext = createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }
>({
  size: "default",
  variant: "default",
  spacing: 0,
  orientation: "horizontal",
})
