import Barcode from "react-barcode"
import type { BarcodeProps } from "./qr-barcode.types"
import { classNames } from "@/utils/classNames"

/**
 * Barcode subcomponent for displaying barcodes.
 *
 * @component
 * @param {BarcodeProps} props - Barcode component properties
 * @returns {JSX.Element} Rendered barcode
 *
 * @example
 * ```tsx
 * <BarcodeDisplay
 *   value="1234567890128"
 *   format="EAN13"
 *   displayValue={true}
 * />
 * ```
 */
export const BarcodeDisplay = (props: BarcodeProps) => {
  const {
    value,
    className = "",
    format = "CODE128",
    width = 2,
    height = 100,
    displayValue = true,
    fontSize = 20,
    background = "#FFFFFF",
    lineColor = "#000000",
    margin = 10,
    ...restProps
  } = props

  const containerClasses = classNames(
    "flex items-center justify-center",
    className
  )

  return (
    <div className={containerClasses} {...restProps}>
      <Barcode
        value={value}
        format={format}
        width={width}
        height={height}
        displayValue={displayValue}
        fontSize={fontSize}
        background={background}
        lineColor={lineColor}
        margin={margin}
      />
    </div>
  )
}
