import type {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel"
import type useEmblaCarousel from "embla-carousel-react"
import type { RefObject } from "react"
import type { CarouselItem } from "./carousel-item.component"
import type { CarouseContainer } from "./carousel-container.component"
import type { CarouselDots } from "./carousel-dots.component"

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: EmblaOptionsType
  plugins?: Parameters<typeof useEmblaCarousel>[1]
  isScale?: boolean
}

export type CarouselComponent = React.ForwardRefExoticComponent<
  CarouselProps & React.RefAttributes<HTMLDivElement>
> & {
  Item: typeof CarouselItem
  Container: typeof CarouseContainer
  Dots: typeof CarouselDots
  useCarousel: () => CarouselContextType
}

export interface CarouselContextType {
  emblaApi: EmblaCarouselType | undefined
  emblaRef: ReturnType<typeof useEmblaCarousel>[0]
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
  scrollProgress: number
  selectedSnap: number
  snapCount: number
  isScale: boolean
  slidesArr: string[]
  setSlidesArr: React.Dispatch<React.SetStateAction<string[]>>
  carouselId: string
  orientation: "vertical" | "horizontal"
  direction: "ltr" | "rtl" | undefined
  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void
}

export type CarouselItemProps = React.HTMLAttributes<HTMLDivElement>

export interface CarouselDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  activeClass?: string
}

export interface HandleKeyDownFn {
  emblaApi?: EmblaCarouselType
  onNext: () => void
  onPrev: () => void
  orientation: "vertical" | "horizontal"
  direction?: "rtl" | "ltr"
  event: React.KeyboardEvent<HTMLDivElement>
}

export interface TweenScaleFn {
  emblaApi: EmblaCarouselType
  isScale: boolean
  tweenFactor: RefObject<number>
  eventName?: EmblaEventType
  tweenNodes: RefObject<HTMLElement[]>
}
