import { forwardRef } from "react"
import { useCarousel } from "./carousel.context"
import { cn } from "@/utils"

export const CarouseContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { emblaRef, orientation } = useCarousel()

  return (
    <div ref={emblaRef} className="overflow-hidden" {...props}>
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "vertical" ? "flex-col" : "flex-row",
          className
        )}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        {children}
      </div>
    </div>
  )
})
