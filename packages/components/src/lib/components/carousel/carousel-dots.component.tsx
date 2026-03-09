import { forwardRef } from "react"
import { useCarousel } from "./carousel.context"
import type { CarouselDotsProps } from "./carousel.types"
import { cn } from "@/utils"
import { AnimatePresence, motion } from "motion/react"

export const CarouselDots = forwardRef<HTMLDivElement, CarouselDotsProps>(
  ({ className, activeClass, ...props }, ref) => {
    const {
      selectedIndex,
      scrollSnaps,
      orientation,
      onDotButtonClick,
      carouselId,
    } = useCarousel()

    return (
      <div ref={ref} className={cn("flex gap-2", className)} {...props}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "relative m-0 inline-flex p-0",
              orientation === "vertical" ? "h-6 w-1" : "h-1 w-6"
            )}
          >
            <div
              className={cn(
                "rounded-full bg-neutral-500/40",
                orientation === "vertical" ? "h-6 w-1" : "h-1 w-6"
              )}
            />
            {index === selectedIndex && (
              <AnimatePresence mode="wait">
                <motion.div
                  transition={{
                    layout: {
                      duration: 0.4,
                      ease: "easeInOut",
                      delay: 0.04,
                    },
                  }}
                  layoutId={`hover-${carouselId}`}
                  className={cn(
                    "absolute top-0 left-0 z-3 h-full w-full rounded-full bg-black dark:bg-white",
                    orientation === "vertical" ? "h-6 w-1" : "h-1 w-6",
                    activeClass
                  )}
                />
              </AnimatePresence>
            )}
          </button>
        ))}
      </div>
    )
  }
)
