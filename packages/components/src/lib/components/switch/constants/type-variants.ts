export type SwitchType = "default" | "success" | "danger"

export const typeStyles: Record<SwitchType, string> = {
  default: "data-[state=checked]:bg-[#0047BA]",
  success: "data-[state=checked]:bg-green-500",
  danger: "data-[state=checked]:bg-red-500",
}
