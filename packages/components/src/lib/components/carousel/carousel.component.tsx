/* eslint-disable max-lines */
"use client"

import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  forwardRef,
} from "react"
import type { EmblaCarouselType, EmblaEventType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/utils"
import type { CarouselComponent, CarouselProps } from "./carousel.types"
import { CarouselContext, useCarousel } from "./carousel.context"
import { TWEEN_FACTOR_BASE } from "./carousel.constants"
import { handleKeyDownFc } from "./utils/handle-key-down"
import { tweenScaleFn } from "./utils"
import { CarouseContainer } from "./carousel-container.component"
import { CarouselItem } from "./carousel-item.component"
import { CarouselDots } from "./carousel-dots.component"

const CarouselBase = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      options = {},
      plugins = [],
      className,
      isScale = false,
      dir,
      ...props
    },
    ref
  ) => {
    const carouselId = useId()
    const [slidesArr, setSlidesArr] = useState<string[]>([])

    const orientation = options.axis === "y" ? "vertical" : "horizontal"
    const direction = options.direction ?? (dir as "ltr" | "rtl" | undefined)

    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        ...options,
        axis: orientation === "vertical" ? "y" : "x",
        direction,
      },
      plugins
    )

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
    const [scrollProgress, setScrollProgress] = useState(0)
    const [snapCount, setSnapCount] = useState(0)

    const onPrevButtonClick = useCallback(() => {
      emblaApi?.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
      emblaApi?.scrollNext()
    }, [emblaApi])

    const onDotButtonClick = useCallback(
      (index: number) => {
        emblaApi?.scrollTo(index)
      },
      [emblaApi]
    )

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) =>
        handleKeyDownFc({
          event,
          emblaApi,
          orientation,
          direction,
          onPrev: onPrevButtonClick,
          onNext: onNextButtonClick,
        }),
      [emblaApi, orientation, direction, onPrevButtonClick, onNextButtonClick]
    )

    const onSelect = useCallback(() => {
      if (!emblaApi) return
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [emblaApi])

    const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
      setScrollProgress(progress * 100)
    }, [])

    const tweenFactor = useRef(0)
    const tweenNodes = useRef<HTMLElement[]>([])

    const setTweenNodes = useCallback(
      (emblaApi: EmblaCarouselType): void => {
        if (!isScale) return
        tweenNodes.current = emblaApi
          .slideNodes()
          .map(slideNode =>
            slideNode.querySelector(".slider_content")
          ) as HTMLElement[]
      },
      [isScale]
    )

    const setTweenFactor = useCallback(
      (emblaApi: EmblaCarouselType) => {
        if (!isScale) return
        tweenFactor.current =
          TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
      },
      [isScale]
    )

    const tweenScale = useCallback(
      (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) =>
        tweenScaleFn({ emblaApi, isScale, eventName, tweenFactor, tweenNodes }),
      [isScale]
    )

    useEffect(() => {
      if (!emblaApi) return
      setScrollSnaps(() => emblaApi.scrollSnapList())
      setSnapCount(emblaApi.scrollSnapList().length)
      onSelect()
      onScroll(emblaApi)

      emblaApi
        .on("reInit", onSelect)
        .on("select", onSelect)
        .on("reInit", onScroll)
        .on("scroll", onScroll)

      if (isScale) {
        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenScale(emblaApi)
        emblaApi
          .on("reInit", setTweenNodes)
          .on("reInit", setTweenFactor)
          .on("reInit", tweenScale)
          .on("scroll", tweenScale)
      }
    }, [
      emblaApi,
      onSelect,
      onScroll,
      isScale,
      setTweenNodes,
      setTweenFactor,
      tweenScale,
    ])

    return (
      <CarouselContext.Provider
        value={{
          emblaApi,
          emblaRef,
          prevBtnDisabled,
          nextBtnDisabled,
          onPrevButtonClick,
          onNextButtonClick,
          selectedIndex,
          scrollSnaps,
          onDotButtonClick,
          scrollProgress,
          selectedSnap: selectedIndex,
          snapCount,
          isScale,
          slidesArr,
          setSlidesArr,
          carouselId,
          orientation,
          direction,
          handleKeyDown,
        }}
      >
        <div
          ref={ref}
          tabIndex={0}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative w-full focus:outline-hidden", className)}
          dir={direction}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)

const Carousel = CarouselBase as CarouselComponent
Carousel.Item = CarouselItem
Carousel.Container = CarouseContainer
Carousel.Dots = CarouselDots
Carousel.useCarousel = useCarousel

export default Carousel
