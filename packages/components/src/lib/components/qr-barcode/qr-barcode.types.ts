import type { HTMLAttributes } from "react"

/**
 * Supported barcode formats for the QRBarcode component
 *
 * @typedef BarcodeFormat
 */
export type BarcodeFormat =
  | "CODE128"
  | "CODE39"
  | "EAN13"
  | "EAN8"
  | "UPC"
  | "ITF14"
  | "MSI"
  | "pharmacode"

/**
 * Image settings for QR code center logo
 *
 * @interface QRImageSettings
 */
export interface QRImageSettings {
  /**
   * Image source URL
   */
  src: string

  /**
   * Image height in pixels
   *
   * @default 24
   */
  height: number

  /**
   * Image width in pixels
   *
   * @default 24
   */
  width: number

  /**
   * Whether to excavate the QR code behind the image
   *
   * @default true
   */
  excavate: boolean

  /**
   * X position of the image (centered by default)
   */
  x?: number

  /**
   * Y position of the image (centered by default)
   */
  y?: number

  opacity?: number
  crossOrigin?: "anonymous" | "use-credentials" | ""
}

/**
 * Base properties shared by both QR and Barcode variants
 *
 * @interface QRBarcodeBaseProps
 */
export interface QRBarcodeBaseProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  /**
   * Value to encode in the code
   */
  value: string

  /**
   * Additional CSS classes
   *
   * @default ""
   */
  className?: string
}

/**
 * Properties specific to QR code variant
 *
 * @interface QRCodeProps
 */
export interface QRCodeProps extends QRBarcodeBaseProps {
  /**
   * Type of code to display
   */
  variant: "qr"

  /**
   * Size of the QR code in pixels
   *
   * @default 200
   */
  size?: number

  /**
   * Background color
   *
   * @default "#FFFFFF"
   */
  bgColor?: string

  /**
   * Foreground color
   *
   * @default "#000000"
   */
  fgColor?: string

  /**
   * Error correction level
   *
   * @default "M"
   */
  level?: "L" | "M" | "Q" | "H"

  /**
   * Margin size around the QR code
   *
   * @default 4
   */
  marginSize?: number

  /**
   * Image settings to display a logo/image in the center of the QR code
   */
  imageSettings?: QRImageSettings
}

/**
 * Properties specific to Barcode variant
 *
 * @interface BarcodeProps
 */
export interface BarcodeProps extends QRBarcodeBaseProps {
  /**
   * Type of code to display
   */
  variant: "barcode"

  /**
   * Barcode format
   *
   * @default "CODE128"
   */
  format?: BarcodeFormat

  /**
   * Width of the barcode
   *
   * @default 2
   */
  width?: number

  /**
   * Height of the barcode in pixels
   *
   * @default 100
   */
  height?: number

  /**
   * Display the value as text below the barcode
   *
   * @default true
   */
  displayValue?: boolean

  /**
   * Font size of the text
   *
   * @default 20
   */
  fontSize?: number

  /**
   * Background color
   *
   * @default "#FFFFFF"
   */
  background?: string

  /**
   * Line color
   *
   * @default "#000000"
   */
  lineColor?: string

  /**
   * Margin around the barcode
   *
   * @default 10
   */
  margin?: number
}

/**
 * Union type for QRBarcode component props
 *
 * @typedef QRBarcodeProps
 */
export type QRBarcodeProps = QRCodeProps | BarcodeProps
