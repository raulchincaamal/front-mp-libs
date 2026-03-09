import * as Dialog from "@radix-ui/react-dialog"
import { AnimatePresence } from "framer-motion"
import DialogOverlay from "./dialog.overlay"
import ModalContent from "./modal.content"
import ModalHeader from "./modal.header"
import { ModalFooter } from "./modal.footer"
import type { IModalProps } from "@/interfaces"

/**
 * Componente Modal principal que gestiona la visualización y comportamiento del modal.
 *
 * @component
 * @param {IModalProps} props - Props del componente Modal
 * @param {boolean} props.isOpen - Si el modal está abierto
 * @param {() => void} [props.onClose] - Función para cerrar el modal
 * @param {React.ReactNode} [props.children] - Contenido adicional del modal
 * @param {React.ReactNode} [props.header] - Encabezado personalizado
 * @param {string} [props.title] - Título del modal
 * @param {string} [props.message] - Mensaje del modal
 * @param {string} [props.type] - Tipo de modal
 * @param {string} [props.titleAlign] - Alineación del título
 * @param {React.ReactNode} [props.buttonOk] - Botón de confirmación
 * @param {React.ReactNode} [props.buttonCancel] - Botón de cancelación
 * @param {boolean} [props.isCloseAble] - Si el modal se puede cerrar
 * @param {string} [props.className] - Clase personalizada para el panel
 * @param {boolean} [props.blur] - Si es true aplica desenfoque (por defecto true)
 * @returns {JSX.Element} El componente Modal renderizado
 *
 * @example
 * ```tsx
 * <Modal isOpen={true} title="Título" blur={false} />
 * ```
 */
const Modal = ({
  isOpen,
  onClose = () => {},
  children,
  header,
  title,
  message,
  type,
  titleAlign,
  buttonOk,
  buttonCancel,
  isCloseAble,
  overlay,
  className: panelClassName = "",
  blur = true,
}: IModalProps) => {
  return (
    <Dialog.Root open={isOpen}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {overlay ?? <DialogOverlay blur={blur} />}
            <ModalContent
              panelClassName={panelClassName}
              isCloseAble={isCloseAble}
              onClose={onClose}
            >
              {header}
              <ModalHeader
                type={type}
                title={title}
                message={message}
                titleAlign={titleAlign}
                children={children}
              />
              {children && <div {...{ children }} className="w-full" />}
              <ModalFooter buttonOk={buttonOk} buttonCancel={buttonCancel} />
            </ModalContent>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

Modal.Overlay = DialogOverlay

export default Modal
