import * as RadixTabs from "@radix-ui/react-tabs"
import { motion } from "framer-motion"
import {
  getActiveClasses,
  getContainerClasses,
  getListClasses,
  getTriggerBaseClasses,
} from "./tabs.utils"
import { classNames } from "@/utils/classNames"
import type { ITabItem, TypeTabs } from "./tabs.types"

interface TabsListProps {
  type: TypeTabs
  items: ITabItem[]
  currentActiveKey: string
  activeColorTabs: string
  className?: string
}

const TabsList = ({
  type,
  items,
  currentActiveKey,
  activeColorTabs,
  className,
}: TabsListProps) => {
  return (
    <div className={getContainerClasses(type, className)}>
      <RadixTabs.List className={getListClasses(type)}>
        {items.map(({ key, label, disabled }) => (
          <RadixTabs.Trigger
            key={key}
            value={key}
            disabled={disabled}
            className={classNames(
              "h-full relative",
              getTriggerBaseClasses(type),
              key === currentActiveKey &&
                getActiveClasses(type, activeColorTabs),
              disabled && "text-gray-300 cursor-not-allowed"
            )}
          >
            {type === "segmented" && key === currentActiveKey && (
              <motion.div
                layoutId="segmented-indicator"
                className="absolute inset-0 bg-white rounded-lg z-0"
                data-testid="tab-indicator"
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
    </div>
  )
}
export default TabsList
