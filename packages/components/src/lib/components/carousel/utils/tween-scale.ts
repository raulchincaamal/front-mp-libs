import type { TweenScaleFn } from "../carousel.types"
import { numberWithinRange } from "./number-with-range"

export const tweenScaleFn = ({
  isScale,
  emblaApi,
  eventName,
  tweenFactor,
  tweenNodes,
}: TweenScaleFn) => {
  if (!isScale) return
  const engine = emblaApi.internalEngine()
  const scrollProgress = emblaApi.scrollProgress()
  const slidesInView = emblaApi.slidesInView()
  const isScrollEvent = eventName === "scroll"

  emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
    let diffToTarget = scrollSnap - scrollProgress
    const slidesInSnap = engine.slideRegistry[snapIndex]

    slidesInSnap.forEach(slideIndex => {
      if (isScrollEvent && !slidesInView.includes(slideIndex)) return

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach(loopItem => {
          const target = loopItem.target()
          if (slideIndex === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) {
              diffToTarget = scrollSnap - (1 + scrollProgress)
            }
            if (sign === 1) {
              diffToTarget = scrollSnap + (1 - scrollProgress)
            }
          }
        })
      }

      const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
      const scale = numberWithinRange(tweenValue, 0, 1).toString()
      const tweenNode = tweenNodes.current[slideIndex]
      if (tweenNode) {
        tweenNode.style.transform = `scale(${scale})`
      }
    })
  })
}
