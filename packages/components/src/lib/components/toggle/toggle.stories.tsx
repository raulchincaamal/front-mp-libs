import type { Meta, StoryObj } from "@storybook/react"
import Toggle from "./toggle.component"

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Toggle component for binary on/off states. Supports multiple variants and sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Toggle",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Toggle",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
}

export const OutlineSmall: Story = {
  args: {
    variant: "outline",
    size: "sm",
    children: "Small",
  },
}

export const OutlineLarge: Story = {
  args: {
    variant: "outline",
    size: "lg",
    children: "Large",
  },
}

export const Group: Story = {
  render: () => (
    <div className="flex gap-1">
      <Toggle>Bold</Toggle>
      <Toggle>Italic</Toggle>
      <Toggle>Underline</Toggle>
    </div>
  ),
}

export const OutlineGroup: Story = {
  render: () => (
    <div className="flex gap-1">
      <Toggle variant="outline">Bold</Toggle>
      <Toggle variant="outline">Italic</Toggle>
      <Toggle variant="outline">Underline</Toggle>
    </div>
  ),
}
