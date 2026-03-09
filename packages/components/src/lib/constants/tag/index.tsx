import type { ReactElement } from "react"
import type { TagType } from "@/components/tag/tag.types"
import {
  CheckCircleIcon,
  InfoCircleIcon,
  WarningCircleIcon,
  ErrorCircleIcon,
} from "@/assets/icons"

/**
 * Tag color configuration interface
 */
interface TagColors {
  icon: ReactElement
  bgColor: string
  textColor: string
  borderColor: string
  closeButtonColor: string
}

/**
 * Unified configuration for each tag type (colors and icon)
 */
export const tagColors: Record<TagType, TagColors> = {
  success: {
    icon: <CheckCircleIcon width={16} height={16} />,
    bgColor: "bg-green-1",
    textColor: "text-green-6",
    borderColor: "border-green-3",
    closeButtonColor: "hover:bg-green-2",
  },
  info: {
    icon: <InfoCircleIcon width={16} height={16} />,
    bgColor: "bg-blue-1",
    textColor: "text-blue-6",
    borderColor: "border-blue-3",
    closeButtonColor: "hover:bg-blue-2",
  },
  warning: {
    icon: <WarningCircleIcon width={16} height={16} />,
    bgColor: "bg-gold-1",
    textColor: "text-gold-6",
    borderColor: "border-gold-3",
    closeButtonColor: "hover:bg-gold-2",
  },
  error: {
    icon: <ErrorCircleIcon width={16} height={16} />,
    bgColor: "bg-red-1",
    textColor: "text-red-6",
    borderColor: "border-red-3",
    closeButtonColor: "hover:bg-red-2",
  },
}
