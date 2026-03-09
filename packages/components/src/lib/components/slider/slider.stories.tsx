import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "@/components"
import { useState } from "react"

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Slider component to allow users to select a value from a range. Supports different sizes, colors, and optional labels.",
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
    defaultValue: {
      control: { type: "object" },
      description: "Default value when uncontrolled (array format)",
    },
    min: {
      control: { type: "number" },
      description: "Minimum value",
    },
    max: {
      control: { type: "number" },
      description: "Maximum value",
    },
    step: {
      control: { type: "number" },
      description: "Step increment",
    },
    rangeColor: {
      control: "select",
      options: ["primary", "success", "warning", "error", "info"],
      description: "Range color",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Slider size",
    },
    showLabels: {
      control: "boolean",
      description: "Show min/max labels",
    },
    disabled: {
      control: "boolean",
      description: "Disable the slider",
    },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

/**
 * Default slider with primary blue color
 */
export const Default: Story = {
  args: {
    defaultValue: [50],
  },
}

/**
 * Slider with different values
 */
export const DifferentValues: Story = {
  render: () => (
    <div className="space-y-8 w-80">
      <div>
        <p className="mb-2 text-sm font-medium">Value: 0</p>
        <Slider defaultValue={[0]} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Value: 25</p>
        <Slider defaultValue={[25]} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Value: 50</p>
        <Slider defaultValue={[50]} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Value: 75</p>
        <Slider defaultValue={[75]} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Value: 100</p>
        <Slider defaultValue={[100]} />
      </div>
    </div>
  ),
}

/**
 * Available colors
 */
export const Colors: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <p className="mb-2 text-sm font-medium">Primary (Default)</p>
        <Slider defaultValue={[60]} rangeColor="primary" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Success</p>
        <Slider defaultValue={[60]} rangeColor="success" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Warning</p>
        <Slider defaultValue={[60]} rangeColor="warning" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Error</p>
        <Slider defaultValue={[60]} rangeColor="error" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Info</p>
        <Slider defaultValue={[60]} rangeColor="info" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">
          Custom (Purple) - customRangeClass takes priority
        </p>
        <Slider defaultValue={[60]} customRangeClass="bg-purple-500" />
      </div>
    </div>
  ),
}

/**
 * Different sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <p className="mb-2 text-sm font-medium">Small</p>
        <Slider defaultValue={[60]} size="sm" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Medium (Default)</p>
        <Slider defaultValue={[60]} size="md" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Large</p>
        <Slider defaultValue={[60]} size="lg" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Extra Large</p>
        <Slider defaultValue={[60]} size="xl" />
      </div>
    </div>
  ),
}

/**
 * With labels - similar to the reference image
 */
export const WithLabels: Story = {
  render: () => {
    const formatCustomLabel = (value: number): string => {
      if (value === 0) return "Min"
      if (value === 100) return "Max"
      return value.toString()
    }

    return (
      <div className="space-y-6 w-80">
        <div>
          <p className="mb-4 text-sm font-medium">Basic labels (min/max)</p>
          <Slider defaultValue={[50]} showLabels />
        </div>
        <div>
          <p className="mb-4 text-sm font-medium">
            Custom range with formatted labels ($1,000 - $3,000)
          </p>
          <Slider
            defaultValue={[2000]}
            min={1000}
            max={3000}
            step={100}
            showLabels
            formatLabel={value => `$${value.toLocaleString()}`}
          />
        </div>
        <div>
          <p className="mb-4 text-sm font-medium">Custom label text</p>
          <Slider
            defaultValue={[50]}
            showLabels
            formatLabel={formatCustomLabel}
          />
        </div>
      </div>
    )
  },
}

/**
 * Controlled slider connected to state
 */
const ControlledWithStateComponent = () => {
  const [value, setValue] = useState([50])

  return (
    <div className="w-80 space-y-4">
      <div>
        <div className="block mb-2 text-sm font-medium">
          Current Value: {value[0]}
        </div>
        <Slider value={value} onValueChange={setValue} />
      </div>
      <div>
        <div className="block mb-2 text-sm font-medium">
          Input (connected to slider)
        </div>
        <input
          type="number"
          value={value[0]}
          onChange={e => setValue([Number(e.target.value)])}
          className="w-full px-3 py-2 border rounded-md"
          min={0}
          max={100}
        />
      </div>
    </div>
  )
}

export const ControlledWithState: Story = {
  render: () => <ControlledWithStateComponent />,
  parameters: {
    docs: {
      source: {
        code: `const ControlledWithStateComponent = () => {
  const [value, setValue] = useState([50])

  return (
    <div className="w-80 space-y-4">
      <div>
        <div className="block mb-2 text-sm font-medium">
          Current Value: {value[0]}
        </div>
        <Slider value={value} onValueChange={setValue} />
      </div>
      <div>
        <div className="block mb-2 text-sm font-medium">
          Input (connected to slider)
        </div>
        <input
          type="number"
          value={value[0]}
          onChange={e => setValue([Number(e.target.value)])}
          className="w-full px-3 py-2 border rounded-md"
          min={0}
          max={100}
        />
      </div>
    </div>
  )
}`,
      },
    },
  },
}

/**
 * Price range slider - replicating the reference image
 */
const PriceRangeComponent = () => {
  const [value, setValue] = useState([2000])

  return (
    <div className="w-96 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-6">Select Price</h3>
      <Slider
        value={value}
        onValueChange={setValue}
        min={1000}
        max={3000}
        step={100}
        showLabels
        formatLabel={v => `$${v.toLocaleString()}`}
        size="md"
      />
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">Selected price:</p>
        <p className="text-2xl font-bold text-primary-blue">
          ${value[0].toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export const PriceRange: Story = {
  render: () => <PriceRangeComponent />,
  parameters: {
    docs: {
      source: {
        code: `const PriceRangeComponent = () => {
  const [value, setValue] = useState([2000])

  return (
    <div className="w-96 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-6">Select Price</h3>
      <Slider
        value={value}
        onValueChange={setValue}
        min={1000}
        max={3000}
        step={100}
        showLabels
        formatLabel={v => \`$\${v.toLocaleString()}\`}
        size="md"
      />
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">Selected price:</p>
        <p className="text-2xl font-bold text-primary-blue">
          $\${value[0].toLocaleString()}
        </p>
      </div>
    </div>
  )
}`,
      },
    },
  },
}

/**
 * Disabled state
 */
export const Disabled: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <p className="mb-2 text-sm font-medium">Disabled slider</p>
        <Slider defaultValue={[50]} disabled showLabels />
      </div>
    </div>
  ),
}

/**
 * Different step values
 */
export const StepValues: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <p className="mb-2 text-sm font-medium">Step: 1 (default)</p>
        <Slider defaultValue={[50]} showLabels />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Step: 10</p>
        <Slider defaultValue={[50]} step={10} showLabels />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Step: 25</p>
        <Slider defaultValue={[50]} step={25} showLabels />
      </div>
    </div>
  ),
}

/**
 * Full customization with CSS classes
 */
export const CustomStyles: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <p className="mb-2 text-sm font-medium">Custom track and range</p>
        <Slider
          defaultValue={[70]}
          classNames={{
            track: "bg-gray-300 h-3",
            range: "bg-gradient-to-r from-blue-400 to-blue-600",
            thumb: "border-blue-600",
          }}
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">
          With gradient and custom labels
        </p>
        <Slider
          defaultValue={[85]}
          showLabels
          classNames={{
            range: "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600",
            labels: "text-purple-600 font-bold",
          }}
        />
      </div>
    </div>
  ),
}

/**
 * Volume control example
 */
const VolumeControlComponent = () => {
  const [volume, setVolume] = useState([50])

  return (
    <div className="w-80 p-6 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium">Volume</span>
        <span className="text-sm text-gray-500">{volume[0]}%</span>
      </div>
      <Slider
        value={volume}
        onValueChange={setVolume}
        size="sm"
        rangeColor="info"
      />
    </div>
  )
}

export const VolumeControl: Story = {
  render: () => <VolumeControlComponent />,
  parameters: {
    docs: {
      source: {
        code: `const VolumeControlComponent = () => {
  const [volume, setVolume] = useState([50])

  return (
    <div className="w-80 p-6 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium">Volume</span>
        <span className="text-sm text-gray-500">{volume[0]}%</span>
      </div>
      <Slider
        value={volume}
        onValueChange={setVolume}
        size="sm"
        rangeColor="info"
      />
    </div>
  )
}`,
      },
    },
  },
}

/**
 * Range slider with two thumbs
 */
const RangeSliderComponent = () => {
  const [range, setRange] = useState([25, 75])

  return (
    <div className="w-80 space-y-4">
      <div>
        <div className="block mb-2 text-sm font-medium">
          Range: {range[0]} - {range[1]}
        </div>
        <Slider value={range} onValueChange={setRange} showLabels />
      </div>
    </div>
  )
}

export const RangeSlider: Story = {
  render: () => <RangeSliderComponent />,
  parameters: {
    docs: {
      source: {
        code: `const RangeSliderComponent = () => {
  const [range, setRange] = useState([25, 75])

  return (
    <div className="w-80 space-y-4">
      <div>
        <div className="block mb-2 text-sm font-medium">
          Range: {range[0]} - {range[1]}
        </div>
        <Slider value={range} onValueChange={setRange} showLabels />
      </div>
    </div>
  )
}`,
      },
    },
  },
}
