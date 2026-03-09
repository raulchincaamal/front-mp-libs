import { forwardRef } from "react"
import { useCarousel } from "./carousel.context"
import type { CarouselItemProps } from "./carousel.types"
import { cn } from "@/utils"

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, className, ...props }, ref) => {
    const { isScale } = useCarousel()

    return (
      <div
        ref={ref}
        className={cn("min-w-0 shrink-0 grow-0", className)}
        {...props}
      >
        {isScale ? <div className="slider_content">{children}</div> : children}
      </div>
    )
  }
)
