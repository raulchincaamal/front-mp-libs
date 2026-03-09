import type { Meta, StoryObj } from "@storybook/react"
import ToggleGroup from "./toggle-group.component"

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ToggleGroup component for managing multiple toggle states. Supports single and multiple selection modes with various layouts.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    spacing: {
      control: "number",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    disabled: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Single: Story = {
  args: {
    type: "single",
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
      <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
      <ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  args: {
    type: "multiple",
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
      <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
      <ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const Outline: Story = {
  args: {
    type: "single",
    variant: "outline",
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
      <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
      <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const WithSpacing: Story = {
  args: {
    type: "single",
    spacing: 4,
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
      <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
      <ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const Small: Story = {
  args: {
    type: "single",
    size: "sm",
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
      <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
      <ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const Large: Story = {
  args: {
    type: "single",
    size: "lg",
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
      <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
      <ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const Vertical: Story = {
  args: {
    type: "single",
    orientation: "vertical",
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
      <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
      <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const VerticalWithSpacing: Story = {
  args: {
    type: "single",
    orientation: "vertical",
    spacing: 4,
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
      <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
      <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const Disabled: Story = {
  args: {
    type: "single",
    disabled: true,
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
      <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
      <ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const OutlineVertical: Story = {
  args: {
    variant: "outline",
    type: "single",
    orientation: "vertical",
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="option1">Option 1</ToggleGroup.Item>
      <ToggleGroup.Item value="option2">Option 2</ToggleGroup.Item>
      <ToggleGroup.Item value="option3">Option 3</ToggleGroup.Item>
    </ToggleGroup>
  ),
}
