import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "@/components"

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["default", "success", "danger"],
    },
    size: {
      control: "select",
      options: ["md", "sm"],
    },
    checked: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    onCheckedChange: { action: "checked changed" },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    type: "default",
    size: "md",
    defaultChecked: false,
  },
}

export const Success: Story = {
  args: {
    type: "success",
    size: "md",
    defaultChecked: true,
  },
}

export const Danger: Story = {
  args: {
    type: "danger",
    size: "md",
    defaultChecked: true,
  },
}

export const WithLabel: Story = {
  args: {
    type: "default",
    label: "Enable notifications",
    defaultChecked: false,
  },
}

export const WithLabelLeft: Story = {
  args: {
    type: "success",
    label: { text: "Dark mode", position: "left" },
    defaultChecked: true,
  },
}

export const WithLabelRight: Story = {
  args: {
    type: "default",
    label: { text: "Auto-save", position: "right" },
    defaultChecked: false,
  },
}

export const WithChildren: Story = {
  args: {
    type: "success",
    checkedChildren: <span>✓</span>,
    unCheckedChildren: <span>✕</span>,
    defaultChecked: false,
  },
}

export const Disabled: Story = {
  args: {
    type: "default",
    label: "Disabled switch",
    disabled: true,
    defaultChecked: false,
  },
}

export const DisabledChecked: Story = {
  args: {
    type: "success",
    label: "Disabled checked",
    disabled: true,
    defaultChecked: true,
  },
}

export const Sizes: Story = {
  render: args => (
    <div className="flex gap-4 items-center flex-wrap">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-sm font-medium">Small</span>
        <Switch {...args} size="sm" />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-sm font-medium">Medium</span>
        <Switch {...args} size="md" />
      </div>
    </div>
  ),
  args: {
    type: "default",
    defaultChecked: true,
  },
}

export const TypeVariants: Story = {
  render: args => (
    <div className="flex gap-4 flex-wrap">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-sm font-medium">Default</span>
        <Switch {...args} type="default" />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-sm font-medium">Success</span>
        <Switch {...args} type="success" />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-sm font-medium">Danger</span>
        <Switch {...args} type="danger" />
      </div>
    </div>
  ),
  args: {
    size: "md",
    defaultChecked: true,
  },
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <div className="flex flex-col gap-4">
        <Switch
          type="success"
          label="Controlled switch"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <p className="text-sm text-gray-600">
          Current state: {checked ? "ON" : "OFF"}
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setChecked(!checked)}
        >
          Toggle programmatically
        </button>
      </div>
    )
  },
}
