import type { Meta, StoryObj } from "@storybook/react"
import { Tag } from "@/components"
import { InfoCircleIcon } from "@/assets/icons"

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Tag component for displaying labels with different types and states. Uses the same color scheme as the Alert component for consistency.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "info", "warning", "error"],
      description: "Tag type that determines color and icon",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the icon based on the type",
    },
    closable: {
      control: "boolean",
      description: "Whether to show the close button",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default tag without icon
 */
export const Default: Story = {
  args: {
    children: "Default",
    type: "info",
  },
}

/**
 * Success tag
 */
export const Success: Story = {
  args: {
    children: "Default",
    type: "success",
  },
}

/**
 * Success tag with icon
 */
export const SuccessWithIcon: Story = {
  args: {
    children: "Default",
    type: "success",
    showIcon: true,
  },
}

/**
 * Error tag
 */
export const ErrorTag: Story = {
  args: {
    children: "Default",
    type: "error",
  },
}

/**
 * Error tag with icon
 */
export const ErrorWithIcon: Story = {
  args: {
    children: "Default",
    type: "error",
    showIcon: true,
  },
}

/**
 * Warning tag
 */
export const Warning: Story = {
  args: {
    children: "Default",
    type: "warning",
  },
}

/**
 * Warning tag with icon
 */
export const WarningWithIcon: Story = {
  args: {
    children: "Default",
    type: "warning",
    showIcon: true,
  },
}

/**
 * Info tag
 */
export const Info: Story = {
  args: {
    children: "Default",
    type: "info",
  },
}

/**
 * Info tag with icon
 */
export const InfoWithIcon: Story = {
  args: {
    children: "Default",
    type: "info",
    showIcon: true,
  },
}

/**
 * Closable success tag
 */
export const ClosableSuccess: Story = {
  args: {
    children: "Default",
    type: "success",
    closable: true,
    onClose: () => alert("Tag closed!"),
  },
}

/**
 * Closable success tag with icon
 */
export const ClosableSuccessWithIcon: Story = {
  args: {
    children: "Default",
    type: "success",
    showIcon: true,
    closable: true,
    onClose: () => alert("Tag closed!"),
  },
}

/**
 * Closable error tag
 */
export const ClosableError: Story = {
  args: {
    children: "Default",
    type: "error",
    closable: true,
    onClose: () => alert("Tag closed!"),
  },
}

/**
 * Closable error tag with icon
 */
export const ClosableErrorWithIcon: Story = {
  args: {
    children: "Default",
    type: "error",
    showIcon: true,
    closable: true,
    onClose: () => alert("Tag closed!"),
  },
}

/**
 * Closable warning tag
 */
export const ClosableWarning: Story = {
  args: {
    children: "Default",
    type: "warning",
    closable: true,
    onClose: () => alert("Tag closed!"),
  },
}

/**
 * Closable warning tag with icon
 */
export const ClosableWarningWithIcon: Story = {
  args: {
    children: "Default",
    type: "warning",
    showIcon: true,
    closable: true,
    onClose: () => alert("Tag closed!"),
  },
}

/**
 * Closable info tag
 */
export const ClosableInfo: Story = {
  args: {
    children: "Default",
    type: "info",
    closable: true,
    onClose: () => alert("Tag closed!"),
  },
}

/**
 * Closable info tag with icon
 */
export const ClosableInfoWithIcon: Story = {
  args: {
    children: "Default",
    type: "info",
    showIcon: true,
    closable: true,
    onClose: () => alert("Tag closed!"),
  },
}

/**
 * Tag with custom icon
 */
export const CustomIcon: Story = {
  args: {
    children: "Default",
    type: "info",
    icon: <InfoCircleIcon width={16} height={16} />,
  },
}

/**
 * Tag with custom colors
 */
export const CustomColors: Story = {
  args: {
    children: "Custom",
    bgColor: "#E0F2FE",
    textColor: "#0369A1",
    borderColor: "#7DD3FC",
  },
}

/**
 * Tag with custom colors and icon
 */
export const CustomColorsWithIcon: Story = {
  args: {
    children: "Custom",
    showIcon: true,
    type: "info",
    bgColor: "#E0F2FE",
    textColor: "#0369A1",
    borderColor: "#7DD3FC",
  },
}

/**
 * All tag types showcase
 */
export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag type="success">Success</Tag>
      <Tag type="success" showIcon>
        Success
      </Tag>
      <Tag type="error">Error</Tag>
      <Tag type="error" showIcon>
        Error
      </Tag>
      <Tag type="warning">Warning</Tag>
      <Tag type="warning" showIcon>
        Warning
      </Tag>
      <Tag type="info">Info</Tag>
      <Tag type="info" showIcon>
        Info
      </Tag>
    </div>
  ),
}

/**
 * All closable tags
 */
export const AllClosable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag type="success" closable>
        Success
      </Tag>
      <Tag type="success" showIcon closable>
        Success
      </Tag>
      <Tag type="error" closable>
        Error
      </Tag>
      <Tag type="error" showIcon closable>
        Error
      </Tag>
      <Tag type="warning" closable>
        Warning
      </Tag>
      <Tag type="warning" showIcon closable>
        Warning
      </Tag>
      <Tag type="info" closable>
        Info
      </Tag>
      <Tag type="info" showIcon closable>
        Info
      </Tag>
    </div>
  ),
}

/**
 * Tag usage example
 */
export const UsageExample: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Status Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Tag type="success" showIcon>
            Completed
          </Tag>
          <Tag type="info" showIcon>
            In Progress
          </Tag>
          <Tag type="warning" showIcon>
            Pending
          </Tag>
          <Tag type="error" showIcon>
            Failed
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Filter Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Tag type="info" closable>
            Category: Electronics
          </Tag>
          <Tag type="info" closable>
            Price: $100-$500
          </Tag>
          <Tag type="info" closable>
            Brand: Apple
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Custom Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Tag bgColor="#FEF3C7" textColor="#92400E" borderColor="#FCD34D">
            Premium
          </Tag>
          <Tag bgColor="#DBEAFE" textColor="#1E40AF" borderColor="#93C5FD">
            New
          </Tag>
          <Tag bgColor="#FCE7F3" textColor="#BE185D" borderColor="#F9A8D4">
            Featured
          </Tag>
        </div>
      </div>
    </div>
  ),
}
