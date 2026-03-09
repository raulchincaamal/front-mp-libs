import type { Meta, StoryObj } from "@storybook/react"
import { Steps } from "@/components"
import type { StepContent } from "./steps.types"

const meta: Meta<typeof Steps> = {
  title: "Components/Steps",
  component: Steps,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Steps component that displays a navigable flow map of steps. Presents a sequence of steps with arrow button navigation, adapting responsively to screen size.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    steps: {
      control: "object",
      description: "Array of steps to display",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Component size",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    withNavigation: {
      control: "boolean",
      description: "Show/hide navigation buttons",
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description:
        "Alignment of the component within its container (only applies when withNavigation is false)",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample steps data
const sampleSteps: StepContent[] = [
  { id: "1", name: "Account", status: "COMPLETE", href: "/step/1" },
  { id: "2", name: "Profile", status: "COMPLETE", href: "/step/2" },
  { id: "3", name: "Preferences", status: "CURRENT", href: "/step/3" },
  { id: "4", name: "Security", status: "PENDING", href: "/step/4" },
  { id: "5", name: "Notifications", status: "PENDING", href: "/step/5" },
]

/**
 * Default Steps with navigation
 */
export const Default: Story = {
  args: {
    steps: sampleSteps,
    size: "md",
  },
}

/**
 * Small size
 */
export const SmallSize: Story = {
  args: {
    steps: sampleSteps,
    size: "sm",
  },
}

/**
 * Large size
 */
export const LargeSize: Story = {
  args: {
    steps: sampleSteps,
    size: "lg",
  },
}

/**
 * Extra large size
 */
export const ExtraLargeSize: Story = {
  args: {
    steps: sampleSteps,
    size: "xl",
  },
}

/**
 * Steps with many items
 */
export const ManySteps: Story = {
  args: {
    steps: [
      { id: "1", name: "Step 1", status: "COMPLETE", href: "/step/1" },
      { id: "2", name: "Step 2", status: "COMPLETE", href: "/step/2" },
      { id: "3", name: "Step 3", status: "COMPLETE", href: "/step/3" },
      { id: "4", name: "Step 4", status: "CURRENT", href: "/step/4" },
      { id: "5", name: "Step 5", status: "PENDING", href: "/step/5" },
      { id: "6", name: "Step 6", status: "PENDING", href: "/step/6" },
      { id: "7", name: "Step 7", status: "PENDING", href: "/step/7" },
      { id: "8", name: "Step 8", status: "PENDING", href: "/step/8" },
    ],
  },
}

/**
 * Steps at the beginning
 */
export const FirstStep: Story = {
  args: {
    steps: [
      { id: "1", name: "Start", status: "CURRENT", href: "/step/1" },
      { id: "2", name: "Process", status: "PENDING", href: "/step/2" },
      { id: "3", name: "Review", status: "PENDING", href: "/step/3" },
      { id: "4", name: "Complete", status: "PENDING", href: "/step/4" },
    ],
  },
}

/**
 * Steps at the end
 */
export const LastStep: Story = {
  args: {
    steps: [
      { id: "1", name: "Start", status: "COMPLETE", href: "/step/1" },
      { id: "2", name: "Process", status: "COMPLETE", href: "/step/2" },
      { id: "3", name: "Review", status: "COMPLETE", href: "/step/3" },
      { id: "4", name: "Complete", status: "CURRENT", href: "/step/4" },
    ],
  },
}

/**
 * Steps in the middle
 */
export const MiddleStep: Story = {
  args: {
    steps: [
      { id: "1", name: "Personal Info", status: "COMPLETE", href: "/step/1" },
      { id: "2", name: "Address", status: "COMPLETE", href: "/step/2" },
      { id: "3", name: "Payment", status: "CURRENT", href: "/step/3" },
      { id: "4", name: "Confirmation", status: "PENDING", href: "/step/4" },
      { id: "5", name: "Done", status: "PENDING", href: "/step/5" },
    ],
  },
}

/**
 * Only three steps
 */
export const ThreeSteps: Story = {
  args: {
    steps: [
      { id: "1", name: "Setup", status: "COMPLETE", href: "/step/1" },
      { id: "2", name: "Configure", status: "CURRENT", href: "/step/2" },
      { id: "3", name: "Finish", status: "PENDING", href: "/step/3" },
    ],
  },
}

/**
 * Steps without links
 */
export const WithoutLinks: Story = {
  args: {
    steps: [
      { id: "1", name: "Account", status: "COMPLETE" },
      { id: "2", name: "Profile", status: "COMPLETE" },
      { id: "3", name: "Preferences", status: "CURRENT" },
      { id: "4", name: "Security", status: "PENDING" },
      { id: "5", name: "Notifications", status: "PENDING" },
    ],
  },
}

/**
 * Custom styling example
 */
export const CustomStyling: Story = {
  args: {
    steps: sampleSteps,
    className: "bg-gray-50 p-4 rounded-lg",
  },
}

/**
 * Without navigation buttons
 */
export const WithoutNavigation: Story = {
  args: {
    steps: sampleSteps,
    withNavigation: false,
  },
}

/**
 * Align start - steps aligned to the left of the container
 */
export const AlignStart: Story = {
  decorators: [
    Story => (
      <div className="w-[800px] border border-dashed border-gray-300 p-4">
        <Story />
      </div>
    ),
  ],
  args: {
    steps: sampleSteps,
    withNavigation: false,
    align: "start",
  },
}

/**
 * Align center - steps centered in the container (default)
 */
export const AlignCenter: Story = {
  decorators: [
    Story => (
      <div className="w-[800px] border border-dashed border-gray-300 p-4">
        <Story />
      </div>
    ),
  ],
  args: {
    steps: sampleSteps,
    withNavigation: false,
    align: "center",
  },
}

/**
 * Align end - steps aligned to the right of the container
 */
export const AlignEnd: Story = {
  decorators: [
    Story => (
      <div className="w-[800px] border border-dashed border-gray-300 p-4">
        <Story />
      </div>
    ),
  ],
  args: {
    steps: sampleSteps,
    withNavigation: false,
    align: "end",
  },
}
