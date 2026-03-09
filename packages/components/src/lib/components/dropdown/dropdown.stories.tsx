import type { Meta, StoryObj } from "@storybook/react"
import { Dropdown } from "@/components"
import {
  AccountBoxIcon,
  LogoutIcon,
  EditPrIcon,
  DeleteIcon,
} from "@/assets/icons"

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Dropdown component that displays a customizable menu with actions, options, or navigation items. Supports icons, separators, keyboard navigation, and flexible positioning.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    sideOffset: {
      control: "number",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic dropdown with simple items
 */
export const Default: Story = {
  args: {
    trigger: <button>Open Menu</button>,
    items: [
      {
        id: "profile",
        label: "Profile",
        onSelect: () => alert("Profile clicked"),
      },
      {
        id: "settings",
        label: "Settings",
        onSelect: () => alert("Settings clicked"),
      },
      {
        id: "sep-1",
        type: "separator",
      },
      {
        id: "logout",
        label: "Logout",
        onSelect: () => alert("Logout clicked"),
      },
    ],
  },
}

/**
 * Dropdown with icons
 */
export const WithIcons: Story = {
  args: {
    trigger: <button>Actions</button>,
    items: [
      {
        id: "profile",
        label: "Profile",
        icon: <AccountBoxIcon width={16} height={16} />,
        onSelect: () => alert("Profile clicked"),
      },
      {
        id: "settings",
        label: "Settings",
        onSelect: () => alert("Settings clicked"),
      },
      {
        id: "sep-1",
        type: "separator",
      },
      {
        id: "logout",
        label: "Logout",
        icon: <LogoutIcon width={16} height={16} />,
        onSelect: () => alert("Logout clicked"),
      },
    ],
  },
}

/**
 * Dropdown with keyboard shortcuts
 */
export const WithShortcuts: Story = {
  args: {
    trigger: <button>File</button>,
    items: [
      {
        id: "new",
        label: "New File",
        shortcut: "⌘N",
        onSelect: () => alert("New file"),
      },
      {
        id: "open",
        label: "Open",
        shortcut: "⌘O",
        onSelect: () => alert("Open"),
      },
      {
        id: "save",
        label: "Save",
        shortcut: "⌘S",
        onSelect: () => alert("Save"),
      },
      {
        id: "sep-1",
        type: "separator",
      },
      {
        id: "print",
        label: "Print",
        shortcut: "⌘P",
        onSelect: () => alert("Print"),
      },
    ],
  },
}

/**
 * Dropdown with labels and sections
 */
export const WithLabels: Story = {
  args: {
    trigger: <button>Edit</button>,
    items: [
      {
        id: "label-1",
        type: "label",
        label: "Basic Actions",
      },
      {
        id: "edit",
        label: "Edit",
        icon: <EditPrIcon width={16} height={16} />,
        shortcut: "⌘E",
        onSelect: () => alert("Edit"),
      },
      {
        id: "delete",
        label: "Delete",
        icon: <DeleteIcon width={16} height={16} />,
        shortcut: "⌘D",
        onSelect: () => alert("Delete"),
      },
      {
        id: "sep-1",
        type: "separator",
      },
      {
        id: "label-2",
        type: "label",
        label: "Advanced",
      },
      {
        id: "settings",
        label: "Settings",
        onSelect: () => alert("Settings"),
      },
    ],
  },
}

/**
 * Dropdown with disabled items
 */
export const WithDisabledItems: Story = {
  args: {
    trigger: <button>Options</button>,
    items: [
      {
        id: "enabled",
        label: "Enabled Item",
        onSelect: () => alert("Enabled clicked"),
      },
      {
        id: "disabled",
        label: "Disabled Item",
        disabled: true,
        onSelect: () => alert("This should not fire"),
      },
      {
        id: "also-enabled",
        label: "Also Enabled",
        onSelect: () => alert("Also enabled clicked"),
      },
    ],
  },
}

/**
 * Dropdown with icon as trigger button
 */
export const IconButton: Story = {
  args: {
    trigger: (
      <button
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="More options"
      >
        <AccountBoxIcon width={24} height={24} />
      </button>
    ),
    align: "end",
    items: [
      {
        id: "profile",
        label: "View Profile",
        icon: <AccountBoxIcon width={16} height={16} />,
        onSelect: () => alert("View Profile"),
      },
      {
        id: "edit",
        label: "Edit Profile",
        icon: <EditPrIcon width={16} height={16} />,
        onSelect: () => alert("Edit Profile"),
      },
      {
        id: "sep-1",
        type: "separator",
      },
      {
        id: "delete",
        label: "Delete Account",
        icon: <DeleteIcon width={16} height={16} />,
        onSelect: () => alert("Delete Account"),
      },
    ],
  },
}

/**
 * Dropdown aligned to the end
 */
export const AlignEnd: Story = {
  args: {
    trigger: <button>Align End</button>,
    align: "end",
    items: [
      {
        id: "1",
        label: "Item 1",
        onSelect: () => alert("Item 1 selected"),
      },
      {
        id: "2",
        label: "Item 2",
        onSelect: () => alert("Item 2 selected"),
      },
      {
        id: "3",
        label: "Item 3",
        onSelect: () => alert("Item 3 selected"),
      },
    ],
  },
}

/**
 * Dropdown aligned to the center
 */
export const AlignCenter: Story = {
  args: {
    trigger: <button>Align Center</button>,
    align: "center",
    items: [
      {
        id: "1",
        label: "Item 1",
        onSelect: () => alert("Item 1 selected"),
      },
      {
        id: "2",
        label: "Item 2",
        onSelect: () => alert("Item 2 selected"),
      },
      {
        id: "3",
        label: "Item 3",
        onSelect: () => alert("Item 3 selected"),
      },
    ],
  },
}

/**
 * Complex dropdown with all features
 */
export const ComplexExample: Story = {
  args: {
    trigger: (
      <button className="px-4 py-2 bg-primary-blue text-white rounded">
        User Menu
      </button>
    ),
    align: "end",
    sideOffset: 8,
    items: [
      {
        id: "label-account",
        type: "label",
        label: "Account",
      },
      {
        id: "profile",
        label: "My Profile",
        icon: <AccountBoxIcon width={16} height={16} />,
        shortcut: "⌘P",
        onSelect: () => alert("Profile selected"),
      },
      {
        id: "settings",
        label: "Settings",
        shortcut: "⌘,",
        onSelect: () => alert("Settings selected"),
      },
      {
        id: "sep-1",
        type: "separator",
      },
      {
        id: "label-actions",
        type: "label",
        label: "Actions",
      },
      {
        id: "edit",
        label: "Edit Profile",
        icon: <EditPrIcon width={16} height={16} />,
        onSelect: () => alert("Edit Profile selected"),
      },
      {
        id: "sep-2",
        type: "separator",
      },
      {
        id: "logout",
        label: "Logout",
        icon: <LogoutIcon width={16} height={16} />,
        shortcut: "⇧⌘Q",
        onSelect: () => alert("Logout selected"),
      },
    ],
  },
}
