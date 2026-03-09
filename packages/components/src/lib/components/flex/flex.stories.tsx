import type { Meta, StoryObj } from "@storybook/react"
import type { TGapAllowed } from "@/interfaces/common"
import { Flex } from "@/components"

const GAP_OPTIONS = [
  0, 0.5, 1, 2, 3, 4, 6, 8, 12,
] satisfies readonly TGapAllowed[]

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
    },
    gap: {
      control: "select",
      options: GAP_OPTIONS,
    },
    isReverse: {
      control: "boolean",
    },
    wrap: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof Flex>

const Box = ({ children }: { children: string }) => (
  <div className="px-4 py-2 bg-primary-blue text-white rounded-md text-sm">
    {children}
  </div>
)

export const Default: Story = {
  args: {
    gap: 2,
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
}

export const Vertical: Story = {
  args: {
    direction: "vertical",
    gap: 2,
    children: (
      <>
        <Box>Item A</Box>
        <Box>Item B</Box>
        <Box>Item C</Box>
      </>
    ),
  },
}

export const JustifyCenter: Story = {
  args: {
    justify: "center",
    gap: 2,
    children: (
      <>
        <Box>Center 1</Box>
        <Box>Center 2</Box>
      </>
    ),
  },
}

export const AlignCenter: Story = {
  args: {
    align: "center",
    gap: 2,
    className: "h-32 bg-gray-1",
    children: (
      <>
        <Box>Item</Box>
        <Box>Item</Box>
      </>
    ),
  },
}

export const Reverse: Story = {
  args: {
    isReverse: true,
    gap: 2,
    children: (
      <>
        <Box>First</Box>
        <Box>Second</Box>
        <Box>Third</Box>
      </>
    ),
  },
}

export const WithWrap: Story = {
  args: {
    wrap: true,
    gap: 1,
    className: "max-w-xs",
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
        <Box>Item 4</Box>
        <Box>Item 5</Box>
      </>
    ),
  },
}

export const Playground: Story = {
  args: {
    direction: "horizontal",
    justify: "start",
    align: "start",
    gap: 2,
    isReverse: false,
    wrap: false,
    children: (
      <>
        <Box>Play</Box>
        <Box>With</Box>
        <Box>Flex</Box>
      </>
    ),
  },
}
