import { cva } from "class-variance-authority"

/**
 * Variantes de estilos para el componente Toggle.
 * Define las clases CSS y variantes disponibles para personalizar la apariencia del toggle.
 *
 * @returns {VariantProps} Función CVA con variantes de tamaño y estilo
 *
 * @example
 * ```tsx
 * import { toggleVariants } from 'mp-ui-components'
 *
 * const className = toggleVariants({ variant: 'outline', size: 'sm' })
 * ```
 */
export const toggleVariants = cva(
  "hover:text-white cursor-pointer aria-pressed:bg-primary-blue data-[state=on]:text-white focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[state=on]:bg-primary-blue gap-1 rounded-lg text-sm font-medium transition-all [&_svg:not([class*='size-'])]:size-4 group/toggle hover:bg-primary-blue inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-gray-5 hover:bg-primary-blue border bg-transparent",
      },
      size: {
        default: "h-8 min-w-8 px-2",
        sm: "h-7 min-w-7 rounded-md px-1.5 text-[0.8rem]",
        lg: "h-9 min-w-9 px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
