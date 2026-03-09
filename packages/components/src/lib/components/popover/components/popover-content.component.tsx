import { motion, type HTMLMotionProps } from "motion/react"
import { Popover as PopoverPrimitive } from "radix-ui"
import { PopoverPortal } from "@/components/popover/components/popover-portal.component"
import { classNames as cn } from "@/utils"

export const PopoverContent = (
  props: Omit<
    React.ComponentProps<typeof PopoverPrimitive.Content>,
    "forceMount" | "asChild"
  > &
    HTMLMotionProps<"div">
) => {
  const {
    onOpenAutoFocus,
    onCloseAutoFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    align,
    alignOffset,
    side,
    sideOffset,
    avoidCollisions,
    collisionBoundary,
    collisionPadding,
    arrowPadding,
    sticky,
    hideWhenDetached,
    className,
    transition = { type: "spring", stiffness: 300, damping: 25 },
  } = props
  return (
    <PopoverPortal>
      <PopoverPrimitive.Content
        asChild
        forceMount
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        avoidCollisions={avoidCollisions}
        collisionBoundary={collisionBoundary}
        collisionPadding={collisionPadding}
        arrowPadding={arrowPadding}
        sticky={sticky}
        hideWhenDetached={hideWhenDetached}
        onOpenAutoFocus={onOpenAutoFocus}
        onCloseAutoFocus={onCloseAutoFocus}
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        onInteractOutside={onInteractOutside}
        onFocusOutside={onFocusOutside}
      >
        <motion.div
          key="popover-content"
          data-slot="popover-content"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={transition}
          className={cn(
            "bg-popover text-popover-foreground z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
            className
          )}
          {...props}
        />
      </PopoverPrimitive.Content>
    </PopoverPortal>
  )
}
