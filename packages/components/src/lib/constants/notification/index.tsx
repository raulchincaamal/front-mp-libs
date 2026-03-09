import {
  CheckDoneIcon,
  WarningIcon,
  InfoAlertIcon,
  CloseCircleIcon,
} from "@/assets/icons"
import type {
  NotificationPlacement,
  NotificationType,
} from "@/components/notification/notification.types"
import type { ReactElement } from "react"

/**
 * Notification color configuration interface
 */
interface NotificationColors {
  icon: ReactElement
  borderColor: string
  iconColor: string
}

/**
 * Unified configuration for each notification type (colors and icon)
 */
export const notificationColors: Record<NotificationType, NotificationColors> =
  {
    success: {
      icon: <CheckDoneIcon className="size-6" />,
      borderColor: "border-green-6",
      iconColor: "text-green-6",
    },
    error: {
      icon: <CloseCircleIcon className="size-6" />,
      borderColor: "border-primary-red",
      iconColor: "text-primary-red",
    },
    warning: {
      icon: <WarningIcon className="size-6" />,
      borderColor: "border-gold-6",
      iconColor: "text-gold-6",
    },
    info: {
      icon: <InfoAlertIcon className="size-6" />,
      borderColor: "border-blue-500",
      iconColor: "text-blue-500",
    },
    default: {
      icon: <CloseCircleIcon className="size-6" />,
      borderColor: "border-gray-300",
      iconColor: "text-primary-blue",
    },
  }

/**
 * Configuraciones de animación basadas en la posición
 */
export const getAnimation = (placement?: NotificationPlacement) => {
  const animations = {
    "top-left": {
      initial: { opacity: 0, x: -100, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: -100, scale: 0.95 },
    },
    "top-right": {
      initial: { opacity: 0, x: 100, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: 100, scale: 0.95 },
    },
    "top-center": {
      initial: { opacity: 0, y: -50, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -50, scale: 0.95 },
    },
    "bottom-left": {
      initial: { opacity: 0, x: -100, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: -100, scale: 0.95 },
    },
    "bottom-right": {
      initial: { opacity: 0, x: 100, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: 100, scale: 0.95 },
    },
    "bottom-center": {
      initial: { opacity: 0, y: 50, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 50, scale: 0.95 },
    },
  }

  return animations[placement || "top-right"]
}
