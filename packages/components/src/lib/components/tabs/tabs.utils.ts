import { classNames } from "@/utils/classNames"
import type { TypeTabs } from "./tabs.types"

export const getContainerClasses = (type: TypeTabs, className?: string) =>
  classNames(
    {
      "text-sm font-normal":
        type === "default" || type === "underline" || type === "pills",
      "border-b border-gray-200": type === "underline",
      "border-b border-gray-200 text-lg font-semibold": type === "with-icon",
      "bg-gray-100 rounded-xl p-1 text-lg text-grays-Macropay-07 font-normal":
        type === "segmented",
    },
    className
  )

export const getListClasses = (type: TypeTabs) =>
  classNames("select-none", {
    "flex flex-wrap text-center text-gray-500 border-b border-gray-200 font-normal":
      type === "default" || type === "pills",
    "-mb-px": type === "underline",
    "flex flex-wrap -mb-px font-normal text-sm text-center text-gray-500":
      type === "with-icon",
    "grid grid-flow-col justify-stretch items-center text-lg font-normal text-center text-lg sm:w-full":
      type === "segmented",
  })

export const getTriggerBaseClasses = (type: TypeTabs) =>
  classNames({
    "inline-block p-3 py-3 rounded-t-lg active:text-gray-500 active:bg-gray-50":
      type === "default" || type === "pills",
    "inline-block p-3 py-3 border-b-2 rounded-t-lg active:border-primary-blue":
      type === "underline",
    "inline-flex items-center justify-center p-3 border-b-2 rounded-t-lg  active:border-gray-300":
      type === "with-icon",
    "md:inline-block px-2 py-3 rounded-lg min-w-full h-full items-center text-center flex justify-center text-sm":
      type === "segmented",
  })

export const getActiveClasses = (type: TypeTabs, activeColorTabs: string) =>
  classNames({
    [`font-bold text-${activeColorTabs} bg-white`]:
      type === "default" || type === "pills",
    [`text-${activeColorTabs} border-b-2 border-primary-blue`]:
      type === "underline" || type === "with-icon",
    [`font-bold text-${activeColorTabs} active:text-${activeColorTabs}`]:
      type === "segmented",
  })
