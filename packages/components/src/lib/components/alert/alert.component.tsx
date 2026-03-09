/* eslint-disable max-lines */
import { motion } from "motion/react"
import type { AlertProps } from "./alert.types"
import { CloseIcon } from "@/assets/icons"
import { classNames } from "@/utils/classNames"
import {
  bgAlert,
  iconComponents,
  iconColors,
  closeButtonColors,
} from "@/constants/alert"
import { Flex } from "@/components"

/**
 * Componente Alert para mostrar mensajes informativos, de éxito, advertencia o error.
 *
 * Utiliza Framer Motion para animaciones de entrada/salida y proporciona una interfaz
 * visual consistente para comunicar diferentes tipos de mensajes al usuario. Soporta
 * iconos contextuales, contenido personalizado y la opción de cerrar la alerta.
 *
 * Características principales:
 * - Cuatro tipos de alerta: success, info, warning, error
 * - Animaciones suaves de entrada y salida
 * - Iconos contextuales según el tipo de alerta
 * - Opción de cerrar la alerta
 * - Diseño adaptable según el contenido (horizontal o vertical)
 * - Soporte para contenido personalizado mediante children
 * - Totalmente personalizable con clases CSS
 *
 * El componente ajusta automáticamente su layout:
 * - Horizontal: cuando solo tiene título O descripción (sin ambos)
 * - Vertical: cuando tiene título Y descripción, o incluye children
 *
 * @component
 * @param {AlertProps} props - Las propiedades del componente
 * @param {'success' | 'info' | 'warning' | 'error'} [props.type='info'] - Tipo de alerta que determina el color y el icono
 * @param {string} [props.title] - Título de la alerta
 * @param {string} [props.description] - Descripción o mensaje de la alerta
 * @param {boolean} [props.showIcon=true] - Si debe mostrar el icono según el tipo
 * @param {boolean} [props.closable=false] - Si debe mostrar el botón de cerrar
 * @param {() => void} [props.onClose] - Función que se ejecuta al cerrar la alerta
 * @param {string} [props.className=''] - Clases CSS adicionales para el contenedor
 * @param {ReactNode} [props.children] - Contenido personalizado dentro de la alerta
 * @returns {JSX.Element} El componente Alert renderizado con animación
 *
 * @example
 * ```tsx
 * // Alerta simple de éxito
 * <Alert
 *   type="success"
 *   title="Operación exitosa"
 *   description="Los cambios se guardaron correctamente"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Alerta de error cerrable
 * <Alert
 *   type="error"
 *   title="Error al procesar"
 *   description="No se pudo completar la operación"
 *   closable={true}
 *   onClose={() => console.log('Alerta cerrada')}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Alerta con contenido personalizado
 * <Alert
 *   type="warning"
 *   title="Advertencia importante"
 *   showIcon={true}
 * >
 *   <p>Este es un contenido personalizado.</p>
 *   <button>Acción requerida</button>
 * </Alert>
 * ```
 *
 * @example
 * ```tsx
 * // Alerta sin icono
 * <Alert
 *   type="info"
 *   description="Mensaje informativo sin icono"
 *   showIcon={false}
 *   className="custom-alert-class"
 * />
 * ```
 *
 * @see {@link Flex} para el componente de layout usado internamente
 */
const Alert = ({
  type = "info",
  title,
  description,
  showIcon = true,
  closable = false,
  onClose,
  className = "",
  children,
  ...props
}: AlertProps) => {
  // Determinar si solo hay un elemento de contenido principal (título o descripción, pero no ambos)
  const hasSingleContent =
    (!!title && !description && !children) ||
    (!title && !!description && !children)

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={classNames("relative border rounded-lg p-4", bgAlert[type], {
        [className]: className,
      })}
      {...props}
    >
      <Flex gap={4} align={hasSingleContent ? "center" : "start"}>
        {showIcon && (
          <div className={classNames("shrink-0", iconColors[type])}>
            {iconComponents[type]}
          </div>
        )}

        <Flex
          direction={hasSingleContent ? "horizontal" : "vertical"}
          gap={0}
          className="flex-1 min-w-0"
          align={hasSingleContent ? "center" : "start"}
        >
          {title && (
            <h4 className="text-base font-medium leading-tight text-gray-12">
              {title}
            </h4>
          )}

          {description && (
            <p
              className={classNames(
                "text-sm font-medium leading-tight text-gray-12",
                { "mt-2": !!title && !hasSingleContent }
              )}
            >
              {description}
            </p>
          )}

          {children && <div className="mt-2">{children}</div>}
        </Flex>
      </Flex>

      {closable && (
        <button
          onClick={onClose}
          className={classNames(
            "absolute top-4 right-4 p-1 rounded transition-colors",
            closeButtonColors[type]
          )}
          aria-label="Cerrar alerta"
        >
          <CloseIcon width={16} height={16} />
        </button>
      )}
    </motion.div>
  )
}

export default Alert
