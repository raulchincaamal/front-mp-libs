import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"
import DropdownTrigger from "./dropdown.trigger"
import DropdownContent from "./dropdown.content"
import type { DropdownProps } from "./dropdown.types"
import { renderDropdownItem } from "./dropdown.renderers"

/**
 * Dropdown menu component built with Radix UI.
 *
 * Provides a composable dropdown menu with items, separators, and labels.
 * Items are dynamically rendered using a renderer pattern for better maintainability
 * and separation of concerns.
 *
 * @component
 * @param {DropdownProps} props - Dropdown component properties
 * @param {ReactNode} props.trigger - The element that triggers the dropdown menu
 * @param {DropdownItem[]} props.items - Array of menu items to display (items, separators, or labels)
 * @param {"start" | "center" | "end"} [props.align="start"] - Horizontal alignment of the dropdown relative to the trigger
 * @param {number} [props.sideOffset=4] - Vertical offset in pixels from the trigger element
 * @param {Object} [props.classNames] - Custom class names for styling different dropdown parts
 * @param {string} [props.classNames.content] - Class name for the dropdown content container
 * @param {string} [props.classNames.item] - Class name for dropdown items
 * @param {string} [props.classNames.separator] - Class name for separator elements
 * @param {string} [props.classNames.label] - Class name for label elements
 * @returns {JSX.Element} The rendered dropdown menu component
 *
 * @example
 * ```tsx
 * <Dropdown
 *   trigger={<button>Open Menu</button>}
 *   items={[
 *     { id: "1", label: "Profile", onSelect: () => console.log('Profile') },
 *     { id: "2", type: "separator" },
 *     { id: "3", type: "label", label: "Actions" },
 *     { id: "4", label: "Logout", icon: <LogoutIcon />, onSelect: () => console.log('Logout') }
 *   ]}
 *   align="end"
 *   sideOffset={8}
 * />
 * ```
 *
 * @see {@link renderDropdownItem} for item rendering implementation
 */
const Dropdown = ({
  trigger,
  items = [],
  align = "start",
  sideOffset = 4,
  classNames,
}: DropdownProps) => (
  <DropdownMenuPrimitive.Root>
    <DropdownTrigger className={classNames?.trigger}>{trigger}</DropdownTrigger>
    <DropdownContent
      align={align}
      sideOffset={sideOffset}
      className={classNames?.content}
    >
      {items.map(item => (
        <div key={item.id}>{renderDropdownItem(item, classNames)}</div>
      ))}
    </DropdownContent>
  </DropdownMenuPrimitive.Root>
)

export default Dropdown
