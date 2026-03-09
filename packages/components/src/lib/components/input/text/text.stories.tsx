import type { Meta, StoryObj } from "@storybook/react"
import { SearchIcon, UserIcon } from "@/assets/icons"
import { Input } from "@/components"

const meta: Meta<typeof Input.Text> = {
  title: "Components/Form/InputText",
  component: Input.Text,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["md", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: ["default", "underline"],
    },
    error: {
      control: "boolean",
    },
    check: {
      control: "boolean",
    },
    clear: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
}

export default meta
type Story = StoryObj<typeof Input.Text>

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
}

export const WithIcon: Story = {
  args: {
    placeholder: "Search...",
    icon: <SearchIcon />,
  },
}

export const WithRightIcon: Story = {
  args: {
    placeholder: "Username",
    leftIcon: <UserIcon />,
  },
}

export const Underline: Story = {
  args: {
    placeholder: "Underline variant",
    variant: "underline",
  },
}

export const ErrorState: Story = {
  args: {
    placeholder: "Invalid input",
    error: true,
  },
}

export const CheckState: Story = {
  args: {
    placeholder: "Valid input",
    check: true,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
}

export const WithoutClear: Story = {
  args: {
    placeholder: "No clear button",
    clear: false,
  },
}

export const Sizes: Story = {
  render: args => (
    <div className="flex flex-col gap-4">
      <Input.Text {...args} size="md" placeholder="Medium size" />
      <Input.Text {...args} size="lg" placeholder="Large size" />
      <Input.Text {...args} size="xl" placeholder="Extra large size" />
    </div>
  ),
  args: {},
}

export const Variants: Story = {
  render: args => (
    <div className="flex flex-col gap-4">
      <Input.Text {...args} variant="default" placeholder="Default variant" />
      <Input.Text
        {...args}
        variant="underline"
        placeholder="Underline variant"
      />
    </div>
  ),
  args: {},
}

export const AllStates: Story = {
  render: args => (
    <div className="flex flex-col gap-4">
      <Input.Text {...args} placeholder="Default state" />
      <Input.Text {...args} placeholder="With icon" icon={<SearchIcon />} />
      <Input.Text {...args} placeholder="Error state" error />
      <Input.Text {...args} placeholder="Check state" check />
      <Input.Text {...args} placeholder="Disabled state" disabled />
      <Input.Text
        {...args}
        placeholder="With right icon"
        leftIcon={<UserIcon />}
      />
    </div>
  ),
  args: {
    size: "md",
  },
}
