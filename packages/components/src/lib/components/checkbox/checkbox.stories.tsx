import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "@/components"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Unchecked",
  },
}

export const Checked: Story = {
  args: {
    children: "Checked",
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
}

export const CheckedDisabled: Story = {
  args: {
    children: "Checked disabled",
    checked: true,
    disabled: true,
  },
}

export const Indeterminate: Story = {
  args: {
    children: "Indeterminate",
    indeterminate: true,
  },
}

export const Small: Story = {
  args: {
    children: "Small checkbox",
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    children: "Medium checkbox",
    size: "md",
  },
}
