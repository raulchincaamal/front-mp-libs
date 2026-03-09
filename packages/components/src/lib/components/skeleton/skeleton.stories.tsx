import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "@/components"

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "inline-radio",
      options: ["default", "avatar", "image", "image-description", "list"],
    },
  },
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Example: Story = {
  args: {},
}
