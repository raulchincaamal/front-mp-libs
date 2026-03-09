import type { HTMLAttributes } from "react"

export type TypographyAs =
  | "p"
  | "span"
  | "div"
  | "article"
  | "label"
  | "strong"
  | "em"
  | "small"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"

export type TypographySize = "xs" | "sm" | "base" | "lg" | "xl"
export type TypographyWeight =
  | "light"
  | "normal"
  | "medium"
  | "bold"
  | "semibold"

export interface ITypographyProps extends HTMLAttributes<HTMLElement> {
  as?: TypographyAs
  asChild?: boolean
  size?: TypographySize
  weight?: TypographyWeight
  italic?: boolean
}

export interface ITitleProps extends Omit<ITypographyProps, "as"> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export type ITextProps = ITypographyProps
