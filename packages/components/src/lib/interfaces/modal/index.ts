import type { ComponentProps, PropsWithChildren, ReactNode } from "react"
import { type Position } from "../common"

export type ModalType = "default" | "success" | "error" | "warning" | "info"
export type ModalTitleAlign = Extract<Position, "left" | "right" | "center">
export type DrawerPosition = Extract<
  Position,
  "left" | "right" | "top" | "bottom"
>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TButton = ComponentProps<any>

export interface IModalFooterProps {
  buttonOk?: TButton
  buttonCancel?: TButton
}

export interface DialogProps extends PropsWithChildren, IModalFooterProps {
  isOpen: boolean
  title?: ReactNode | string
  onClose?: () => void
  slideOver?: DrawerPosition
  sizeHeightCustom?: string
  isCloseAble?: boolean
}

export interface IModalProps extends DialogProps {
  header?: ReactNode
  message?: ReactNode | string
  type?: ModalType
  titleAlign?: ModalTitleAlign
  className?: string
  blur?: boolean
  overlay?: React.ReactNode
}
