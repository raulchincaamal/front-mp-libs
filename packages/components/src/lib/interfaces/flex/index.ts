import type { ReactNode } from "react"
import type { HTMLMotionProps } from "motion/react"
import type { Direction, Generic, TGapAllowed } from "../common"

export type JustifyContent =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly"
export type AlignItems = "start" | "center" | "end" | "baseline"

export interface IFlex extends HTMLMotionProps<"div"> {
  children: ReactNode
  justify?: Generic<JustifyContent>
  align?: Generic<AlignItems>
  gap?: Generic<TGapAllowed>
  direction?: Direction
  isReverse?: boolean
  wrap?: boolean
}

export const EPrefixFlex = {
  justify: "justify",
  align: "items",
  gap: "gap",
} as const
