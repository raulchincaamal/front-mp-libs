import { getContext } from "@/utils/context"
import type { PopoverContext } from "./popover.types"

export const [PopoverProvider, usePopover] =
  getContext<PopoverContext>("PopoverContext")
