import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Drawer } from "@/components"

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
    },
    position: {
      control: "select",
      options: ["left", "right"],
    },
    onClose: { action: "drawer closed" },
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: args => {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="p-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setOpen(true)}
        >
          Open Default Drawer
        </button>

        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Drawer Content</h2>
            <p className="text-gray-600 mb-4">
              This is the default drawer content. You can put any React
              components here.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Action Button
            </button>
          </div>
        </Drawer>
      </div>
    )
  },
  args: {
    position: "right",
  },
}

export const LeftPosition: Story = {
  render: args => {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="p-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setOpen(true)}
        >
          Open Left Drawer
        </button>

        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Left Drawer</h2>
            <p className="text-gray-600">
              This drawer opens from the left side.
            </p>
          </div>
        </Drawer>
      </div>
    )
  },
  args: {
    position: "left",
  },
}

export const RightPosition: Story = {
  render: args => {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="p-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setOpen(true)}
        >
          Open Right Drawer
        </button>

        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Right Drawer</h2>
            <p className="text-gray-600">
              This drawer opens from the right side.
            </p>
          </div>
        </Drawer>
      </div>
    )
  },
  args: {
    position: "right",
  },
}

export const WithForm: Story = {
  render: args => {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="p-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setOpen(true)}
        >
          Open Form Drawer
        </button>

        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">User Settings</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Drawer>
      </div>
    )
  },
  args: {
    position: "right",
  },
}

export const WithLongContent: Story = {
  render: args => {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="p-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setOpen(true)}
        >
          Open Long Content Drawer
        </button>

        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Long Content</h2>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="mb-4 p-4 bg-gray-50 rounded">
                <h3 className="font-medium">Item {i + 1}</h3>
                <p className="text-gray-600 text-sm">
                  This is a sample content item to demonstrate scrolling
                  behavior when the drawer content exceeds the available height.
                </p>
              </div>
            ))}
          </div>
        </Drawer>
      </div>
    )
  },
  args: {
    position: "right",
  },
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    const [position, setPosition] = React.useState<"left" | "right">("right")

    return (
      <div className="p-6">
        <div className="flex gap-4 mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setOpen(true)}
          >
            Open Drawer
          </button>
          <select
            value={position}
            onChange={e => setPosition(e.target.value as "left" | "right")}
            className="px-3 py-2 border border-gray-300 rounded"
          >
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </div>
        <p className="text-sm text-gray-600">
          Current state: {open ? "OPEN" : "CLOSED"} | Position:{" "}
          {position.toUpperCase()}
        </p>

        <Drawer open={open} onClose={() => setOpen(false)} position={position}>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Controlled Drawer</h2>
            <p className="text-gray-600 mb-4">
              This drawer is controlled by external state. Position: {position}
            </p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => setOpen(false)}
            >
              Close Drawer
            </button>
          </div>
        </Drawer>
      </div>
    )
  },
}
