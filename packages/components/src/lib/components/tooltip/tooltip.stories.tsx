import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip } from "@/components"

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: "This is a tooltip",
    className: "bg-gray-800 text-white rounded shadow-lg px-4 py-2",
    children: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Hover me
      </button>
    ),
  },
}

export const WithCustomColors: Story = {
  args: {
    content: "Red tooltip",
    className: "bg-red-500 text-white rounded shadow-lg px-4 py-2 fill-red-500",
    children: (
      <button className="px-4 py-2 bg-red-500 text-white rounded ">
        Red tooltip
      </button>
    ),
  },
}

export const WithGreenColor: Story = {
  args: {
    content: "Green tooltip",
    className:
      "bg-green-500 text-white rounded shadow-lg px-4 py-2 fill-green-500",
    children: (
      <button className="px-4 py-2 bg-green-500 text-white rounded">
        Green tooltip
      </button>
    ),
  },
}

export const WithLongText: Story = {
  args: {
    content:
      "This is a longer tooltip text that demonstrates how the tooltip handles more content",
    className:
      "bg-purple-500 text-white rounded shadow-lg px-4 py-2 max-w-xs fill-purple-500",
    children: (
      <button className="px-4 py-2 bg-purple-500 text-white rounded">
        Long tooltip
      </button>
    ),
  },
}

export const WithIcon: Story = {
  args: {
    content: "Help information",
    className:
      "bg-blue-500 text-white rounded shadow-lg px-4 py-2 fill-blue-500",
    children: <span className="cursor-help text-blue-500">ℹ️</span>,
  },
}

export const OnText: Story = {
  args: {
    content: "Additional information about this text",
    children: <span className="underline cursor-help">Hover this text</span>,
  },
}
