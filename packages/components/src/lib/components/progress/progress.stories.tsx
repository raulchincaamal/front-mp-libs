import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "@/components"

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Progress component to display a visual representation of task completion. Supports different sizes, colors, and optional percentage labels.",
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Current progress value (0-100)",
    },
    indicatorColor: {
      control: "select",
      options: ["primary", "success", "warning", "error", "info"],
      description: "Progress indicator color",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Progress bar size",
    },
    showLabel: {
      control: "boolean",
      description: "Show percentage as label",
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

/**
 * Default progress bar with primary blue color
 */
export const Default: Story = {
  args: {
    value: 50,
  },
}

/**
 * Progress bar with different values
 */
export const DifferentValues: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <p className="mb-2 text-sm font-medium">0%</p>
        <Progress value={0} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">25%</p>
        <Progress value={25} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">50%</p>
        <Progress value={50} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">75%</p>
        <Progress value={75} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">100%</p>
        <Progress value={100} />
      </div>
    </div>
  ),
}

/**
 * Available colors
 */
export const Colors: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <p className="mb-2 text-sm font-medium">Primary (Default)</p>
        <Progress value={60} indicatorColor="primary" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Success</p>
        <Progress value={60} indicatorColor="success" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Warning</p>
        <Progress value={60} indicatorColor="warning" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Error</p>
        <Progress value={60} indicatorColor="error" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Info</p>
        <Progress value={60} indicatorColor="info" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">
          Custom (Purple) - customIndicatorClass takes priority
        </p>
        <Progress value={60} customIndicatorClass="bg-purple-500" />
      </div>
    </div>
  ),
}

/**
 * Different sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <p className="mb-2 text-sm font-medium">Small</p>
        <Progress value={60} size="sm" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Medium (Default)</p>
        <Progress value={60} size="md" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Large</p>
        <Progress value={60} size="lg" />
      </div>
    </div>
  ),
}

/**
 * With percentage label
 */
export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Progress value={25} showLabel />
      <Progress value={50} showLabel indicatorColor="success" />
      <Progress value={75} showLabel indicatorColor="warning" />
      <Progress value={100} showLabel indicatorColor="error" />
    </div>
  ),
}

/**
 * Full customization with CSS classes
 */
export const CustomStyles: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <p className="mb-2 text-sm font-medium">Bar with custom borders</p>
        <Progress
          value={70}
          classNames={{
            root: "bg-gray-300 rounded-none h-4",
            indicator: "bg-gradient-to-r from-blue-400 to-blue-600",
          }}
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">
          With gradient and custom label
        </p>
        <Progress
          value={85}
          showLabel
          classNames={{
            indicator:
              "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600",
          }}
          labelClassName="text-purple-600 font-bold text-lg"
        />
      </div>
    </div>
  ),
}

/**
 * Loading progress simulation
 */
const LoadingComponent = () => {
  const [progress, setProgress] = useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0
        }
        return prev + 10
      })
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-80">
      <p className="mb-2 text-sm font-medium">Automatic loading</p>
      <Progress value={progress} showLabel indicatorColor="primary" size="lg" />
    </div>
  )
}

export const Loading: Story = {
  render: () => <LoadingComponent />,
}

/**
 * Multi-step form usage example
 */
const MultiStepFormComponent = () => {
  const [step, setStep] = React.useState(1)
  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  return (
    <div className="w-96 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">
        Multi-Step Form (Step {step} of {totalSteps})
      </h3>
      <Progress
        value={progress}
        showLabel
        size="md"
        indicatorColor="primary"
        classNames={{
          indicator: "transition-all duration-500",
        }}
      />
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setStep(Math.min(totalSteps, step + 1))}
          disabled={step === totalSteps}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export const MultiStepForm: Story = {
  render: () => <MultiStepFormComponent />,
}
