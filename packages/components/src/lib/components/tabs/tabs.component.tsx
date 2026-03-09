import * as RadixTabs from "@radix-ui/react-tabs"
import type { ITabsProps } from "./tabs.types"
import TabsContent from "./tabsContent"
import TabsList from "./tabsList"

const Tabs = ({
  currentActiveKey,
  type = "default",
  items,
  onChange,
  className,
  contentClassName,
  activeColorTabs = "primary-blue",
}: ITabsProps) => {
  return (
    <RadixTabs.Root
      value={currentActiveKey}
      onValueChange={onChange}
      className="flex flex-col gap-4"
    >
      <TabsList
        type={type}
        items={items}
        currentActiveKey={currentActiveKey}
        activeColorTabs={activeColorTabs}
        className={className}
      />
      <TabsContent
        type={type}
        items={items}
        currentActiveKey={currentActiveKey}
        contentClassName={contentClassName}
      />
    </RadixTabs.Root>
  )
}
export default Tabs
