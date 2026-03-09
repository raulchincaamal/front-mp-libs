import type { Meta, StoryObj } from "@storybook/react"
import { CountUp } from "./count-up.component"

const meta: Meta<typeof CountUp> = {
  title: "Animation/CountUp",
  component: CountUp,
  parameters: {
    docs: {
      description: {
        component:
          "CountUp is an animated counter component that smoothly transitions from one number to another with customizable formatting options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    to: { control: "number" },
    from: { control: "number" },
    duration: { control: { type: "range", min: 0.1, max: 5, step: 0.1 } },
    rounded: { control: "boolean" },
    style: { control: "select", options: ["decimal", "currency"] },
    className: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    to: 1000,
  },
}

export const WithStartValue: Story = {
  args: {
    from: 500,
    to: 1000,
  },
}

export const Currency: Story = {
  args: {
    to: 5000,
    style: "currency",
  },
}

export const Rounded: Story = {
  args: {
    to: 1234.56,
    rounded: true,
  },
}

export const SlowAnimation: Story = {
  args: {
    to: 1000,
    duration: 3,
  },
}

export const LargeNumber: Story = {
  args: {
    to: 1000000,
    duration: 2,
  },
}

export const CurrencyRounded: Story = {
  args: {
    to: 9999.99,
    style: "currency",
    rounded: true,
  },
}

export const CustomStyle: Story = {
  args: {
    to: 5000,
    className: "text-4xl font-bold text-blue-600",
  },
}

export const FastAnimation: Story = {
  args: {
    to: 100,
    duration: 0.5,
  },
}
