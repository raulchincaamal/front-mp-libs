import type { Meta, StoryObj } from "@storybook/react"
import { Popover } from "@/components"
import { PopoverTrigger, PopoverContent } from "./index"
import { useState } from "react"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Open Popover
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-white border rounded-lg shadow-lg">
        <h3 className="font-semibold mb-2">Popover Content</h3>
        <p className="text-sm text-gray-600">
          This is the content inside the popover.
        </p>
      </PopoverContent>
    </Popover>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="space-y-4">
        <button
          onClick={() => setOpen(!open)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {open ? "Close" : "Open"} Popover
        </button>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Trigger
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4 bg-white border rounded-lg shadow-lg">
            <h3 className="font-semibold mb-2">Controlled Popover</h3>
            <p className="text-sm text-gray-600">
              This popover is controlled externally.
            </p>
          </PopoverContent>
        </Popover>
      </div>
    )
  },
}

export const WithDefaultOpen: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Trigger
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-white border rounded-lg shadow-lg">
        <h3 className="font-semibold mb-2">Default Open</h3>
        <p className="text-sm text-gray-600">This popover opens by default.</p>
      </PopoverContent>
    </Popover>
  ),
}

export const DifferentSides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      {(["top", "right", "bottom", "left"] as const).map(side => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
              {side}
            </button>
          </PopoverTrigger>
          <PopoverContent
            side={side}
            className="w-60 p-3 bg-white border rounded-lg shadow-lg"
          >
            <p className="text-sm">Popover on {side}</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}

export const WithCustomAnimation: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Custom Animation
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-4 bg-white border rounded-lg shadow-lg"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <h3 className="font-semibold mb-2">Custom Animation</h3>
        <p className="text-sm text-gray-600">
          This popover has a custom spring animation.
        </p>
      </PopoverContent>
    </Popover>
  ),
}
