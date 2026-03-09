import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "@/components"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Card component to display content in a customizable styled container.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Content alignment direction",
    },
    shadow: {
      control: "boolean",
      description: "Whether to show shadow",
    },
    rounded: {
      control: "boolean",
      description: "Whether to have rounded corners",
    },
    bordered: {
      control: "boolean",
      description: "Whether to have border",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic card with simple content
 */
export const Default: Story = {
  args: {
    align: "horizontal",
    shadow: true,
    rounded: true,
    bordered: true,
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
        <p className="text-gray-600">
          This is the card content. It can include any type of React element.
        </p>
      </div>
    ),
  },
}

/**
 * Card with horizontal alignment (default)
 */
export const Horizontal: Story = {
  args: {
    align: "horizontal",
    children: (
      <div className="space-y-4">
        <div className="w-full h-32 bg-linear-to-r from-blue-400 to-purple-500 rounded-lg"></div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Horizontal Card
          </h3>
          <p className="text-gray-600 mb-4">
            In horizontal alignment, elements are stacked vertically inside the
            card.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Action
          </button>
        </div>
      </div>
    ),
  },
}

/**
 * Card with vertical alignment
 */
export const Vertical: Story = {
  args: {
    align: "vertical",
    children: (
      <>
        <div className="w-full md:w-48 h-32 bg-linear-to-r from-green-400 to-blue-500 rounded-lg md:rounded-r-none md:rounded-l-lg shrink-0"></div>
        <div className="p-4 md:p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Vertical Card
          </h3>
          <p className="text-gray-600 mb-4">
            On large devices, elements are aligned horizontally. On mobile they
            stack vertically.
          </p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
              Primary
            </button>
            <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
              Secondary
            </button>
          </div>
        </div>
      </>
    ),
  },
}

/**
 * Card without shadow
 */
export const NoShadow: Story = {
  args: {
    ...Default.args,
    shadow: false,
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Card Without Shadow
        </h3>
        <p className="text-gray-600">This card has no shadow applied.</p>
      </div>
    ),
  },
}

/**
 * Card without rounded corners
 */
export const NoRounded: Story = {
  args: {
    ...Default.args,
    rounded: false,
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Card Without Rounded Corners
        </h3>
        <p className="text-gray-600">This card has straight corners.</p>
      </div>
    ),
  },
}

/**
 * Card without border
 */
export const NoBorder: Story = {
  args: {
    ...Default.args,
    bordered: false,
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Card Without Border
        </h3>
        <p className="text-gray-600">This card has no visible border.</p>
      </div>
    ),
  },
}

/**
 * Minimal card
 */
export const Minimal: Story = {
  args: {
    shadow: false,
    rounded: false,
    bordered: false,
    className: "bg-gray-50",
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Minimal Card
        </h3>
        <p className="text-gray-600">
          Simpler version of the card without shadow, border or rounded corners.
        </p>
      </div>
    ),
  },
}

/**
 * Card with complex content
 */
export const Complex: Story = {
  args: {
    align: "horizontal",
    children: (
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">MP</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Macropay</h3>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <p className="text-gray-700">
          This is an example of a card with more complex content that includes
          avatars, time information and multiple elements.
        </p>
        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
          <div className="flex space-x-4 text-sm text-gray-500">
            <button className="hover:text-blue-600 transition-colors">
              👍 12 Likes
            </button>
            <button className="hover:text-blue-600 transition-colors">
              💬 3 Comments
            </button>
          </div>
          <button className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
            See more
          </button>
        </div>
      </div>
    ),
  },
}
