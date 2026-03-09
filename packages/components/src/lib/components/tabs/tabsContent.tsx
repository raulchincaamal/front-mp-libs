import * as RadixTabs from "@radix-ui/react-tabs"
import { AnimatePresence, motion } from "framer-motion"
import type { ITabItem, TypeTabs } from "./tabs.types"
import { classNames } from "@/utils/classNames"
import { contentMotionVariants } from "./tabs.styles"

interface TabsContentProps {
  type: TypeTabs
  items: ITabItem[]
  currentActiveKey: string
  contentClassName?: string
}

const TabsContent = ({
  type,
  items,
  currentActiveKey,
  contentClassName,
}: TabsContentProps) => {
  if (type === "segmented") {
    const content = items.find(i => i.key === currentActiveKey)?.content

    return (
      <RadixTabs.Content value={currentActiveKey} forceMount asChild>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentActiveKey}
            className={classNames("min-w-full", contentClassName)}
            variants={contentMotionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </RadixTabs.Content>
    )
  }

  return (
    <>
      {items.map(item => (
        <RadixTabs.Content
          key={item.key}
          value={item.key}
          className={classNames("min-w-full", contentClassName)}
        >
          {item.content}
        </RadixTabs.Content>
      ))}
    </>
  )
}
export default TabsContent
