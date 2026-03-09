import { createContext, useContext } from "react"
import type { CarouselContextType } from "./carousel.types"

export const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
)

export const useCarousel = () => {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel component")
  }
  return context
}
