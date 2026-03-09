import DropdownItem from "./dropdown.item"
import DropdownSeparator from "./dropdown.separator"
import DropdownLabel from "./dropdown.label"
import type {
  DropdownItem as DropdownItemType,
  DropdownProps,
} from "./dropdown.types"

/**
 * Renders the appropriate dropdown item component based on its type.
 *
 * @param {DropdownItemType} item - The dropdown item to render
 * @param {DropdownProps["classNames"]} classNames - Custom class names for styling
 * @returns {JSX.Element} The rendered dropdown item component
 */
export const renderDropdownItem = (
  item: DropdownItemType,
  classNames?: DropdownProps["classNames"]
) => {
  const itemRenderers = {
    separator: () => (
      <DropdownSeparator key={item.id} className={classNames?.separator} />
    ),
    label: () => (
      <DropdownLabel key={item.id} className={classNames?.label}>
        {item.label}
      </DropdownLabel>
    ),
    default: () => (
      <DropdownItem
        key={item.id}
        className={classNames?.item}
        icon={item.icon}
        shortcut={item.shortcut}
        disabled={item.disabled}
        onSelect={item.onSelect}
      >
        {item.label}
      </DropdownItem>
    ),
  }

  if (!item.type || item.type === "item") return itemRenderers.default()
  return itemRenderers[item.type]()
}
