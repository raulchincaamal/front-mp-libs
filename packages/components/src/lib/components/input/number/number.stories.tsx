import type { Meta, StoryObj } from "@storybook/react"
import { SearchIcon } from "@/assets/icons"
import { Input } from "@/components"

const meta: Meta<typeof Input.Number> = {
  title: "Components/Form/InputNumber",
  component: Input.Number,
  parameters: {
    docs: {
      description: {
        component:
          "A number input component with formatting, currency support, and locale-specific display. Built with PrimeReact-like API for enterprise applications.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "underline"],
      description: "Visual style variant",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["md", "lg", "xl"],
      description: "Input size",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    mode: {
      control: "select",
      options: ["decimal", "currency"],
      description: "Number formatting mode",
      table: {
        defaultValue: { summary: "decimal" },
      },
    },
    currency: {
      control: "select",
      options: ["USD", "EUR", "GBP", "JPY", "MXN"],
      description: "Currency code for currency mode",
      table: {
        defaultValue: { summary: "USD" },
      },
    },
    locale: {
      control: "select",
      options: ["en-US", "es-MX", "de-DE", "fr-FR"],
      description: "Locale for number formatting",
      table: {
        defaultValue: { summary: "en-US" },
      },
    },
    format: {
      control: "boolean",
      description: "Enable number formatting",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    useGrouping: {
      control: "boolean",
      description: "Use thousand separators",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    error: {
      control: "boolean",
      description: "Error state styling",
    },
    check: {
      control: "boolean",
      description: "Success state styling",
    },
    clear: {
      control: "boolean",
      description: "Show clear button",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    prefix: {
      control: "text",
      description: "Text prefix",
    },
    suffix: {
      control: "text",
      description: "Text suffix",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
  },
}

export default meta
type Story = StoryObj<typeof Input.Number>

export const Default: Story = {
  args: {
    placeholder: "Enter number...",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic number input with default formatting.",
      },
    },
  },
}

export const Currency: Story = {
  args: {
    mode: "currency",
    currency: "USD",
    placeholder: "0.00",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Number input with currency formatting. Automatically displays currency symbol and proper formatting.",
      },
    },
  },
}

export const WithIcon: Story = {
  args: {
    placeholder: "Amount",
    icon: <SearchIcon />,
    mode: "currency",
  },
  parameters: {
    docs: {
      description: {
        story: "Number input with left icon and currency formatting.",
      },
    },
  },
}

export const Underline: Story = {
  args: {
    placeholder: "Underline variant",
    variant: "underline",
  },
  parameters: {
    docs: {
      description: {
        story: "Minimalist underline variant without borders or background.",
      },
    },
  },
}

export const ErrorState: Story = {
  args: {
    placeholder: "Invalid number",
    error: true,
  },
}

export const CheckState: Story = {
  args: {
    placeholder: "Valid number",
    check: true,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: "$",
    placeholder: "Amount",
  },
}

export const WithSuffix: Story = {
  args: {
    suffix: "%",
    placeholder: "Percentage",
  },
}

export const Sizes: Story = {
  render: args => (
    <div className="flex flex-col gap-4">
      <Input.Number {...args} size="md" placeholder="Medium size" />
      <Input.Number {...args} size="lg" placeholder="Large size" />
      <Input.Number {...args} size="xl" placeholder="Extra large size" />
    </div>
  ),
  args: {},
}

export const Locales: Story = {
  render: args => (
    <div className="flex flex-col gap-4">
      <Input.Number
        {...args}
        locale="en-US"
        currency="USD"
        mode="currency"
        placeholder="US Dollar"
      />
      <Input.Number
        {...args}
        locale="es-MX"
        currency="MXN"
        mode="currency"
        placeholder="Mexican Peso"
      />
      <Input.Number
        {...args}
        locale="de-DE"
        currency="EUR"
        mode="currency"
        placeholder="Euro"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates locale-specific formatting for different currencies and regions.",
      },
    },
  },
}

export const AllStates: Story = {
  render: args => (
    <div className="flex flex-col gap-4">
      <Input.Number {...args} placeholder="Default state" />
      <Input.Number {...args} placeholder="With icon" icon={<SearchIcon />} />
      <Input.Number {...args} placeholder="Error state" error />
      <Input.Number {...args} placeholder="Check state" check />
      <Input.Number {...args} placeholder="Disabled state" disabled />
      <Input.Number {...args} placeholder="Currency mode" mode="currency" />
    </div>
  ),
  args: {
    size: "md",
  },
}
