import { forwardRef } from "react"
import { useCarousel } from "./carousel.context"

export const CarouseNextButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  const { onNextButtonClick, nextBtnDisabled } = useCarousel()

  return (
    <button
      ref={ref}
      type="button"
      onClick={onNextButtonClick}
      disabled={nextBtnDisabled}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
})
