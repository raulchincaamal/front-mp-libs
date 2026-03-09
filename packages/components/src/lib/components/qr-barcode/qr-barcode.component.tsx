import type { QRBarcodeProps } from "./qr-barcode.types"
import { QRCode } from "./qr"
import { BarcodeDisplay } from "./barcode"

/**
 * QRBarcode component to display QR codes or barcodes based on the variant prop.
 *
 * This is a wrapper component that renders the appropriate subcomponent
 * (QRCode or BarcodeDisplay) based on the variant prop.
 *
 * @component
 * @param {QRBarcodeProps} props - QRBarcode component properties
 * @returns {JSX.Element} Rendered QRBarcode component
 *
 * @example
 * ```tsx
 * // QR Code
 * <QRBarcode
 *   variant="qr"
 *   value="https://macropay.mx"
 *   size={300}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Barcode
 * <QRBarcode
 *   variant="barcode"
 *   value="1234567890128"
 *   format="EAN13"
 *   displayValue={true}
 * />
 * ```
 */
const QRBarcode = (props: QRBarcodeProps) => {
  const { variant } = props

  if (variant === "qr") {
    return <QRCode {...props} />
  }

  if (variant === "barcode") {
    return <BarcodeDisplay {...props} />
  }

  return null
}

export default QRBarcode
