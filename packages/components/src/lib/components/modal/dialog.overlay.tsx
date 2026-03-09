import * as Dialog from "@radix-ui/react-dialog"
import { motion } from "motion/react"
import { overlayMotion } from "@/components/modal/modal.motion"
import type { DialogOverlayProps } from "@/components/modal/dialog.types"
import { cn } from "@/utils"

/**
 * Componente de overlay para el modal, permite activar o desactivar el desenfoque del fondo.
 *
 * @component
 * @param {object} props - Props del componente
 * @param {boolean} [props.blur=true] - Si es true aplica desenfoque (backdrop-blur-sm), si es false no aplica desenfoque
 * @returns {JSX.Element} Overlay animado del modal
 *
 * @example
 * ```tsx
 * <DialogOverlay blur={false} />
 * ```
 */
const DialogOverlay = ({ blur = true, className }: DialogOverlayProps) => {
  return (
    <Dialog.Overlay asChild>
      <motion.div
        className={cn(
          "fixed inset-0 z-10 bg-opacity-75 transition-opacity",
          className,
          {
            "backdrop-blur-sm backdrop-filter": blur,
          }
        )}
        variants={overlayMotion}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={e => e.stopPropagation()}
      />
    </Dialog.Overlay>
  )
}

export default DialogOverlay
