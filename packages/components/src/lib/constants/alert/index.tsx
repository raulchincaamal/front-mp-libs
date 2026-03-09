import type { ReactElement } from "react"
import type { Type } from "@/components/alert/alert.types"
import {
  CheckCircleIcon,
  InfoCircleIcon,
  WarningCircleIcon,
  ErrorCircleIcon,
} from "@/assets/icons"

export const iconComponents: Record<Type, ReactElement> = {
  success: <CheckCircleIcon width={24} height={24} />,
  info: <InfoCircleIcon width={24} height={24} />,
  warning: <WarningCircleIcon width={24} height={24} />,
  error: <ErrorCircleIcon width={24} height={24} />,
}

export const iconColors: Record<Type, string> = {
  success: "text-green-6",
  info: "text-blue-6",
  warning: "text-gold-6",
  error: "text-red-6",
}

export const closeButtonColors: Record<Type, string> = {
  success: "text-gray-6 hover:bg-gray-100 cursor-pointer",
  error: "text-gray-6 hover:bg-gray-100 cursor-pointer",
  warning: "text-gray-6 hover:bg-gray-100 cursor-pointer",
  info: "text-gray-6 hover:bg-gray-100 cursor-pointer",
}

export const bgAlert: Record<Type, string> = {
  success: "bg-green-1 border border-green-3",
  info: "bg-blue-1 border border-blue-3",
  warning: "bg-gold-1 border border-gold-3",
  error: "bg-red-1 border border-red-3",
}
