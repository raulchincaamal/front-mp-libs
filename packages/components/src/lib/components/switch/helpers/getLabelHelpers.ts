import { classNames } from "@/utils"

export type LabelConfig = string | { text: string; position: "left" | "right" }

export const getLabelConfig = (label: LabelConfig) => {
  const labelText = typeof label === "string" ? label : label.text
  const labelPosition = typeof label === "string" ? "right" : label.position

  return { labelText, labelPosition }
}

export const getLabelStyles = (disabled: boolean) => {
  return classNames("text-sm text-foreground", disabled && "opacity-50")
}

export const getContainerStyles = (disabled: boolean) => {
  return classNames("flex items-center gap-2", disabled && "cursor-not-allowed")
}
