import type { HandleKeyDownFn } from "../carousel.types"

export const handleKeyDownFc = ({
  event,
  emblaApi,
  orientation,
  direction,
  onNext,
  onPrev,
}: HandleKeyDownFn) => {
  if (!emblaApi) return
  switch (event.key) {
    case "ArrowLeft":
      event.preventDefault()

      if (orientation === "vertical") return

      if (direction === "rtl") {
        onNext()
        return
      }
      onPrev()

      break
    case "ArrowRight":
      event.preventDefault()

      if (orientation === "vertical") return

      if (direction === "rtl") {
        onPrev()
        return
      }
      onNext()
      break
    case "ArrowUp":
      event.preventDefault()
      if (orientation === "vertical") onPrev()
      break
    case "ArrowDown":
      event.preventDefault()
      if (orientation === "vertical") onNext()
      break
  }
}
