import type { Meta, StoryObj } from "@storybook/react"
import { Select } from "@/components"
import type { ItemProps } from "./select.types"
import { useState } from "react"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Select component is a customizable dropdown menu that allows users to select an option from a list. It supports features like search, disabled states, and different sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    disabled: {
      control: "boolean",
    },
    showSearch: {
      control: "boolean",
    },
  },
}

// Decorator para centrar horizontalmente y alinear arriba
meta.decorators = [
  Story => (
    <div className="flex justify-center items-start pt-8 ">
      <Story />
    </div>
  ),
]

export default meta
type Story = StoryObj<typeof meta>

// Sample data
const fruits: ItemProps[] = [
  { value: "apple", children: "🍎 Apple" },
  { value: "banana", children: "🍌 Banana" },
  { value: "orange", children: "🍊 Orange" },
  { value: "grape", children: "🍇 Grapes" },
  { value: "strawberry", children: "🍓 Strawberry" },
  { value: "watermelon", children: "🍉 Watermelon" },
  { value: "pineapple", children: "🍍 Pineapple" },
  { value: "mango", children: "🥭 Mango" },
]

const countries: ItemProps[] = [
  { value: "mx", children: "🇲🇽 Mexico" },
  { value: "us", children: "🇺🇸 United States" },
  { value: "ca", children: "🇨🇦 Canada" },
  { value: "es", children: "🇪🇸 Spain" },
  { value: "ar", children: "🇦🇷 Argentina" },
  { value: "br", children: "🇧🇷 Brazil" },
  { value: "co", children: "🇨🇴 Colombia" },
  { value: "cl", children: "🇨🇱 Chile" },
  { value: "pe", children: "🇵🇪 Peru" },
  { value: "ve", children: "🇻🇪 Venezuela" },
]

/**
 * Default select with basic configuration
 */
export const Default: Story = {
  args: {
    placeholder: "Select a fruit...",
    items: fruits,
  },
}

/**
 * Select with a default value pre-selected
 */
export const WithDefaultValue: Story = {
  args: {
    placeholder: "Select a country...",
    items: countries,
    defaultValue: "mx",
  },
}

/**
 * Select with search functionality enabled
 */
export const WithSearch: Story = {
  args: {
    placeholder: "Search for a country...",
    items: countries,
    showSearch: true,
    searchPlaceholder: "Type to search...",
  },
}

/**
 * Different size variants
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Select size="sm" placeholder="Small" items={fruits} />
      <Select size="md" placeholder="Medium" items={fruits} />
      <Select size="lg" placeholder="Large" items={fruits} />
      <Select size="xl" placeholder="Extra Large" items={fruits} />
    </div>
  ),
}

/**
 * Controlled select component with state management
 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>("banana")

    return (
      <div className="flex flex-col gap-4 w-80">
        <Select
          placeholder="Select a fruit..."
          items={fruits}
          value={value}
          onValueChange={setValue}
        />
        <p className="text-sm text-gray-600">
          Selected value: <strong>{value}</strong>
        </p>
        <button
          onClick={() => setValue("grape")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Set to Grapes
        </button>
      </div>
    )
  },
}

/**
 * Select with search and long list of items
 */
export const SearchLongList: Story = {
  args: {
    placeholder: "Search in long list...",
    items: Array.from({ length: 50 }, (_, i) => ({
      value: `item-${i}`,
      children: `Item number ${i + 1}`,
    })),
    showSearch: true,
    searchPlaceholder: "Filter items...",
  },
}

/**
 * Disabled select component
 */
export const Disabled: Story = {
  args: {
    placeholder: "Disabled select",
    items: fruits,
    disabled: true,
  },
}

/**
 * Select with some disabled items
 */
export const DisabledItems: Story = {
  args: {
    placeholder: "Some options disabled",
    items: [
      { value: "1", children: "Available option" },
      { value: "2", children: "Disabled option", disabled: true },
      { value: "3", children: "Available option" },
      { value: "4", children: "Disabled option", disabled: true },
      { value: "5", children: "Available option" },
    ],
  },
}

/**
 * Empty select without items
 */
export const Empty: Story = {
  args: {
    placeholder: "No options available",
    items: [],
    emptyMessage: "No items found",
  },
}

/**
 * Custom filter function for search
 */
export const SearchCustomFilter: Story = {
  args: {
    placeholder: "Search by word start...",
    items: fruits,
    showSearch: true,
    searchPlaceholder: "Must start with...",
    filterOption: (inputValue: string, item: ItemProps) => {
      const text = typeof item.children === "string" ? item.children : ""
      return text.toLowerCase().startsWith(inputValue.toLowerCase())
    },
  },
}

/**
 * Custom message when no results found
 */
export const SearchNotFound: Story = {
  args: {
    placeholder: "Search...",
    items: fruits,
    showSearch: true,
    searchPlaceholder: "Search for a fruit...",
    notFoundContent: "😕 We couldn't find that fruit",
  },
}

/**
 * Select with callbacks for search and value change
 */
export const WithCallbacks: Story = {
  args: {
    placeholder: "Search fruit...",
    items: fruits,
    showSearch: true,
    onSearch: (value: string) => {
      console.warn("Searching:", value)
    },
    onValueChange: (value: string) => {
      console.warn("Selected:", value)
    },
  },
}

export const SearchDisabled: Story = {
  args: {
    placeholder: "Búsqueda deshabilitada",
    items: countries,
    showSearch: true,
    disabled: true,
  },
}

export const SearchSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Select
        size="sm"
        placeholder="Pequeño con búsqueda"
        items={fruits}
        showSearch
      />
      <Select
        size="md"
        placeholder="Mediano con búsqueda"
        items={fruits}
        showSearch
      />
      <Select
        size="lg"
        placeholder="Grande con búsqueda"
        items={fruits}
        showSearch
      />
      <Select
        size="xl"
        placeholder="Extra grande con búsqueda"
        items={fruits}
        showSearch
      />
    </div>
  ),
}
