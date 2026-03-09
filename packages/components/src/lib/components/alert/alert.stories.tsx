import type { Meta, StoryObj } from "@storybook/react"
import { Alert } from "@/components"

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Alert component to display informative, success, warning, or error messages. Supports custom icons, closable option, and animated transitions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "info", "warning"],
    },
    showIcon: {
      control: "boolean",
    },
    closable: {
      control: "boolean",
    },
    onClose: { action: "closed" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    type: "success",
    title: "Operation successful!",
    description:
      "Your payment has been processed successfully. You will receive a confirmation email in the next few minutes.",
    showIcon: true,
    closable: false,
  },
}

export const ErrorAlert: Story = {
  args: {
    type: "error",
    title: "Processing error",
    description:
      "The transaction could not be processed. Please verify the entered data and try again.",
    showIcon: true,
    closable: false,
  },
}

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Attention required",
    description:
      "Your session will expire in 5 minutes. Please save your changes before continuing.",
    showIcon: true,
    closable: false,
  },
}

export const Info: Story = {
  args: {
    type: "info",
    title: "Important information",
    description:
      "The system will be updated next Sunday from 2:00 to 4:00 AM. The service will not be available during this period.",
    showIcon: true,
    closable: false,
  },
}

export const WithoutCloseButton: Story = {
  args: {
    type: "success",
    title: "Registration completed",
    description:
      "Your account has been successfully created. You can now access all platform functionalities.",
    showIcon: true,
    closable: false,
  },
}

export const WithCloseButton: Story = {
  args: {
    type: "success",
    title: "File saved",
    description: "Changes have been successfully saved to your document.",
    showIcon: true,
    closable: true,
  },
}

export const WithoutIcon: Story = {
  args: {
    type: "info",
    title: "Update available",
    description:
      "A new version of the application is available. Update to get the latest improvements.",
    showIcon: false,
    closable: false,
  },
}

export const TitleOnly: Story = {
  args: {
    type: "success",
    title: "Welcome to MacroPay!",
    showIcon: true,
    closable: false,
  },
}

export const DescriptionOnly: Story = {
  args: {
    type: "error",
    description:
      "Internet connection has been lost. Please check your connectivity and try again.",
    showIcon: true,
    closable: false,
  },
}

export const WithCustomContent: Story = {
  args: {
    type: "info",
    title: "Info Text",
    showIcon: true,
    closable: true,
    children: "Custom content inside the alert component",
  },
}
