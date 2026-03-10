import type { Meta, StoryObj } from "@storybook/react"
import { Segmented } from "@/components"

const meta: Meta<typeof Segmented> = {
  title: "Components/Segmented",
  component: Segmented,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"],
    defaultValue: "Daily",
  },
}

export const WithIcons: Story = {
  args: {
    options: [
      { label: "List", value: "list", icon: "📋" },
      { label: "Grid", value: "grid", icon: "⊞" },
      { label: "Card", value: "card", icon: "🃏" },
    ],
    defaultValue: "list",
  },
}

export const IconOnly: Story = {
  args: {
    options: [
      { label: "", value: "list", icon: "📋" },
      { label: "", value: "grid", icon: "⊞" },
      { label: "", value: "card", icon: "🃏" },
    ],
    defaultValue: "list",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Segmented size="sm" options={["Small", "Size"]} defaultValue="Small" />
      <Segmented size="md" options={["Medium", "Size"]} defaultValue="Medium" />
      <Segmented size="lg" options={["Large", "Size"]} defaultValue="Large" />
      <Segmented size="xl" options={["Extra", "Large"]} defaultValue="Extra" />
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    options: ["Top", "Middle", "Bottom"],
    defaultValue: "Top",
    vertical: true,
  },
}

export const Disabled: Story = {
  args: {
    options: ["Disabled", "Component"],
    defaultValue: "Disabled",
    disabled: true,
  },
}

export const DisabledOptions: Story = {
  args: {
    options: [
      "Active",
      { label: "Disabled", value: "disabled", disabled: true },
      "Another Active",
    ],
    defaultValue: "Active",
  },
}
