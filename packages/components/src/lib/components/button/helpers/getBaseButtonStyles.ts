import { classNames as classMerge } from "@/utils/classNames"
import type { CursorType } from "../button.types"
import { cursorStyles } from "../constants/cursor-variants"

export const getBaseButtonStyles = (cursor: CursorType) =>
  classMerge(
    "flex items-center justify-center gap-2 border active:scale-95",
    cursorStyles[cursor],
    "disabled:bg-gray-3 disabled:text-gray-6 disabled:border-gray-5 disabled:cursor-not-allowed",
    "transition-all duration-300 ease-in-out",
    "shadow-button"
  )
