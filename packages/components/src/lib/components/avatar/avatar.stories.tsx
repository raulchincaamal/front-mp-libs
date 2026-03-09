import type { Meta, StoryObj } from "@storybook/react"

import { UserIcon } from "@/assets/icons"
import { Avatar } from "@/components"

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  args: {
    size: "md",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    src: {
      control: "text",
    },
    icon: {
      control: false,
    },
    onClick: {
      action: "clicked",
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => <Avatar />,
}

export const WithImage: Story = {
  args: {
    src: "https://i.pinimg.com/236x/33/ec/6f/33ec6fa3c116ac7aad624c0b3db5b677.jpg",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
      <Avatar size="xl" />
    </div>
  ),
}

export const CustomIcon: Story = {
  render: () => <Avatar icon={<UserIcon />} />,
}

export const Clickable: Story = {
  args: {
    src: "https://i.pinimg.com/236x/33/ec/6f/33ec6fa3c116ac7aad624c0b3db5b677.jpg",
    onClick: () => {},
  },
}
