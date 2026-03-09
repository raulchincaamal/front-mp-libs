import type { Meta, StoryObj } from "@storybook/react"
import { Divider } from "@/components"

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Divider>

export const Example: Story = {
  args: {
    children: "Text",
  },
}
