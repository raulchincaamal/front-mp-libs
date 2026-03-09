import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { AnimatePresence } from "motion/react"
import { Notification } from "@/components"
import type { NotificationProps } from "./notification.types"

// Componente de utilidad para stories dinámicas
const DynamicNotificationStory = ({
  type,
  title,
  message,
  showIcon = true,
  closable = true,
  duration = 4000,
  placement = "top-right",
  children,
  borderColor,
  iconColor,
}: Partial<NotificationProps>) => {
  const [notifications, setNotifications] = useState<
    Array<NotificationProps & { id: string }>
  >([])

  const addNotification = () => {
    const id = Date.now().toString()
    const notification = {
      id,
      type,
      title,
      message,
      showIcon,
      closable,
      duration,
      placement,
      children,
      borderColor,
      iconColor,
      onClose: (notificationId?: string) => {
        setNotifications(prev => prev.filter(n => n.id !== notificationId))
      },
    }
    setNotifications(prev => [
      ...prev,
      notification as NotificationProps & { id: string },
    ])
  }

  const getContainerStyle = (placement: string) => {
    const base = "fixed z-50 flex flex-col gap-3 max-w-96"
    switch (placement) {
      case "top-left":
        return `${base} top-4 left-4`
      case "top-center":
        return `${base} top-4 left-1/2 transform -translate-x-1/2`
      case "top-right":
        return `${base} top-4 right-4`
      case "bottom-left":
        return `${base} bottom-4 left-4`
      case "bottom-center":
        return `${base} bottom-4 left-1/2 transform -translate-x-1/2`
      case "bottom-right":
      default:
        return `${base} bottom-4 right-4`
    }
  }

  const getButtonColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-600 hover:bg-green-700"
      case "error":
        return "bg-red-600 hover:bg-red-700"
      case "warning":
        return "bg-orange-600 hover:bg-orange-700"
      case "info":
        return "bg-blue-600 hover:bg-blue-700"
      default:
        return "bg-gray-600 hover:bg-gray-700"
    }
  }

  return (
    <div className="relative min-h-screen bg-gray-1">
      <div className="p-6">
        <button
          onClick={addNotification}
          className={`px-4 py-2 text-white text-sm font-medium rounded-md transition-colors ${getButtonColor(type || "info")}`}
        >
          Mostrar{" "}
          {type ? type.charAt(0).toUpperCase() + type.slice(1) : "Notification"}
        </button>
      </div>

      <AnimatePresence mode="popLayout">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={getContainerStyle(notification.placement || "top-right")}
          >
            <Notification {...notification} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}

const meta: Meta<typeof DynamicNotificationStory> = {
  title: "Components/Notification",
  component: DynamicNotificationStory,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Notification component to display informative, success, warning, or error messages with auto-close functionality. Click buttons to trigger notifications. Supports different placements, custom icons, closable option, and animated transitions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "info", "warning"],
    },
    placement: {
      control: "select",
      options: [
        "top-left",
        "top-right",
        "top-center",
        "bottom-left",
        "bottom-right",
        "bottom-center",
      ],
    },
    showIcon: {
      control: "boolean",
    },
    closable: {
      control: "boolean",
    },
    duration: {
      control: { type: "number", min: 0, step: 1000 },
    },
    borderColor: {
      control: "text",
    },
    iconColor: {
      control: "text",
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

// Story con botones dinámicos como en la imagen (PRIMERA STORY)
export const MultipleTypes: Story = {
  render: () => {
    const [notifications, setNotifications] = useState<
      Array<NotificationProps & { id: string }>
    >([])

    const addNotification = (
      type: "success" | "error" | "warning" | "info" | "default"
    ) => {
      const id = Date.now().toString()
      const messages = {
        default: {
          title: "Notification Title",
          message:
            "Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.",
        },
        success: {
          title: "Notification Title",
          message:
            "Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.",
        },
        error: {
          title: "Error Notification",
          message:
            "Something went wrong! Please try again or contact support if the problem persists.",
        },
        warning: {
          title: "Warning Notification",
          message:
            "Please review your settings before continuing. This action might have consequences.",
        },
        info: {
          title: "Info Notification",
          message:
            "Here's some helpful information about this feature that you might find useful.",
        },
      }

      const notification = {
        id,
        type,
        ...messages[type],
        showIcon: true,
        closable: true,
        duration: 4000,
        placement: "top-right" as const,
        onClose: (notificationId?: string) => {
          setNotifications(prev => prev.filter(n => n.id !== notificationId))
        },
      }
      setNotifications(prev => [...prev, notification])
    }

    return (
      <div className="relative min-h-screen bg-gray-1">
        <div className="p-6">
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => addNotification("default")}
              className="px-4 py-2 bg-gray-6 text-gray-11 text-sm font-medium rounded-md hover:bg-gray-7 transition-colors"
            >
              Default
            </button>
            <button
              onClick={() => addNotification("error")}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors"
            >
              Error
            </button>
            <button
              onClick={() => addNotification("warning")}
              className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors"
            >
              Warning
            </button>
            <button
              onClick={() => addNotification("success")}
              className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
            >
              Success
            </button>
            <button
              onClick={() => addNotification("info")}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Info
            </button>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {notifications.map(notification => (
            <div
              key={notification.id}
              className="fixed top-4 right-4 z-50 flex flex-col gap-3 max-w-96"
            >
              <Notification {...notification} />
            </div>
          ))}
        </AnimatePresence>
      </div>
    )
  },
}

export const Success: Story = {
  args: {
    type: "success",
    title: "Notification Title",
    message:
      "Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.",
    showIcon: true,
    closable: true,
    duration: 4000,
    placement: "top-right",
  },
}

export const ErrorAlert: Story = {
  args: {
    type: "error",
    title: "Error Notification",
    message:
      "Something went wrong! Please try again or contact support if the problem persists.",
    showIcon: true,
    closable: true,
    duration: 4000,
    placement: "top-right",
  },
}

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Warning Notification",
    message:
      "Please review your settings before continuing. This action might have consequences.",
    showIcon: true,
    closable: true,
    duration: 4000,
    placement: "top-right",
  },
}

export const Info: Story = {
  args: {
    type: "info",
    title: "Info Notification",
    message:
      "Here's some helpful information about this feature that you might find useful.",
    showIcon: true,
    closable: true,
    duration: 4000,
    placement: "top-right",
  },
}

export const WithCloseButton: Story = {
  args: {
    type: "success",
    title: "Closable Notification",
    message: "This notification can be closed manually using the close button.",
    showIcon: true,
    closable: true,
    duration: 0,
    placement: "top-right",
  },
}

export const WithoutCloseButton: Story = {
  args: {
    type: "info",
    title: "Without Close Button",
    message: "This notification doesn't have a manual close button.",
    showIcon: true,
    closable: false,
    duration: 4000,
    placement: "top-right",
  },
}

export const WithoutIcon: Story = {
  args: {
    type: "info",
    title: "No Icon Notification",
    message:
      "This notification appears without an icon to show a cleaner look.",
    showIcon: false,
    closable: true,
    duration: 4000,
    placement: "top-right",
  },
}

export const TitleOnly: Story = {
  args: {
    type: "success",
    title: "Welcome to MacroPay!",
    showIcon: true,
    closable: true,
    duration: 4000,
    placement: "top-right",
  },
}

export const DescriptionOnly: Story = {
  args: {
    type: "error",
    message:
      "Internet connection lost. Please check your connectivity and try again.",
    showIcon: true,
    closable: true,
    duration: 4000,
    placement: "top-right",
  },
}

export const TopLeft: Story = {
  args: {
    type: "info",
    title: "Top Left Notification",
    message: "This notification appears in the top-left corner.",
    showIcon: true,
    closable: true,
    duration: 4000,
    placement: "top-left",
  },
}

export const TopCenter: Story = {
  args: {
    type: "warning",
    title: "Top Center Notification",
    message: "This notification appears centered at the top.",
    showIcon: true,
    closable: true,
    duration: 4000,
    placement: "top-center",
  },
}

export const BottomRight: Story = {
  args: {
    type: "success",
    title: "Bottom Right Notification",
    message: "This notification appears in the bottom-right corner.",
    showIcon: true,
    closable: true,
    duration: 4000,
    placement: "bottom-right",
  },
}

export const BottomCenter: Story = {
  args: {
    type: "error",
    title: "Bottom Center Notification",
    message: "This notification appears centered at the bottom.",
    showIcon: true,
    closable: true,
    duration: 4000,
    placement: "bottom-center",
  },
}

export const WithCustomContent: Story = {
  args: {
    type: "info",
    title: "Custom Content Notification",
    message: "This notification includes additional custom content.",
    showIcon: true,
    closable: true,
    duration: 6000,
    placement: "top-right",
    children: (
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 bg-info text-white text-sm rounded hover:bg-info/90 transition-colors">
          Accept
        </button>
        <button className="px-3 py-1 border border-gray-6 text-gray-11 text-sm rounded hover:bg-gray-3 transition-colors">
          Cancel
        </button>
      </div>
    ),
  },
}

export const WithCustomColors: Story = {
  args: {
    type: "info",
    title: "Custom Colors Notification",
    message:
      "This notification uses custom border and icon colors while keeping the info type.",
    showIcon: true,
    closable: true,
    duration: 6000,
    placement: "top-right",
    borderColor: "border-pink-400",
    iconColor: "text-pink-600",
  },
}
