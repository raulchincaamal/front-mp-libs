import { forwardRef } from "react"
import { useCarousel } from "./carousel.context"

export const CarousePrevButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  const { onPrevButtonClick, prevBtnDisabled } = useCarousel()

  return (
    <button
      ref={ref}
      type="button"
      onClick={onPrevButtonClick}
      disabled={prevBtnDisabled}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
})
