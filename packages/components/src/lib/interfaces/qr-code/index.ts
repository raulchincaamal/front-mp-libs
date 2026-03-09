import type { CSSProperties } from "react"

type QRCodeType = "canvas" | "svg"
type QRCodeErrorLevel = "L" | "M" | "Q" | "H"

interface IQRCodeIconConfig {
  src: string
  size?: number
}

interface IQRCodeConfig {
  type?: QRCodeType
  color?: string
  bgColor?: string
  isBordered?: boolean
}

export interface IQRCode {
  value: string
  size?: number
  config?: IQRCodeConfig
  iconConfig?: IQRCodeIconConfig
  errorLevel?: QRCodeErrorLevel
  isLoading?: boolean
  className?: string
}

interface ImageSettings {
  src: string
  height: number
  width: number
  excavate: boolean
  x?: number
  y?: number
}

export interface ICommonQRCodeProps {
  value: string
  size?: number
  level?: QRCodeErrorLevel
  bgColor?: string
  fgColor?: string
  style?: CSSProperties
  includeMargin?: boolean
  imageSettings?: ImageSettings
}
