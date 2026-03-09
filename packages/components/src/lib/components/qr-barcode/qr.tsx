import { QRCodeSVG } from "qrcode.react"
import type { QRCodeProps } from "./qr-barcode.types"
import { classNames } from "@/utils/classNames"

/**
 * QR Code subcomponent for displaying QR codes.
 *
 * @component
 * @param {QRCodeProps} props - QR code component properties
 * @returns {JSX.Element} Rendered QR code
 *
 * @example
 * ```tsx
 * <QRCode
 *   value="https://macropay.mx"
 *   size={300}
 *   bgColor="#FFFFFF"
 *   fgColor="#000000"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // QR Code with center image
 * <QRCode
 *   value="https://macropay.mx"
 *   size={300}
 *   imageSettings={{
 *     src: "/logo.png",
 *     height: 40,
 *     width: 40,
 *     excavate: true
 *   }}
 * />
 * ```
 */
export const QRCode = (props: QRCodeProps) => {
  const {
    value,
    className = "",
    size = 200,
    bgColor = "#FFFFFF",
    fgColor = "#000000",
    level = "M",
    marginSize = 4,
    imageSettings,
    ...restProps
  } = props

  const containerClasses = classNames(
    "flex items-center justify-center",
    className
  )

  return (
    <div className={containerClasses} {...restProps}>
      <QRCodeSVG
        value={value}
        size={size}
        bgColor={bgColor}
        fgColor={fgColor}
        level={level}
        marginSize={marginSize}
        imageSettings={imageSettings}
      />
    </div>
  )
}
