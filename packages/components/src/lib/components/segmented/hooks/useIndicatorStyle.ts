import type { RefObject } from "react"
import { useState, useEffect, useCallback } from "react"

export const useIndicatorStyle = (
  containerRef: RefObject<HTMLDivElement | null>,
  activeIndex: number,
  size: string,
  vertical: boolean
) => {
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  })

  const updateIndicatorStyle = useCallback(() => {
    if (containerRef.current) {
      const activeElement = containerRef.current.children[
        activeIndex + 1
      ] as HTMLElement
      if (activeElement) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const activeRect = activeElement.getBoundingClientRect()

        setIndicatorStyle({
          width: activeRect.width,
          height: activeRect.height,
          x: activeRect.left - containerRect.left,
          y: activeRect.top - containerRect.top,
        })
      }
    }
  }, [containerRef, activeIndex])

  useEffect(() => {
    updateIndicatorStyle()
  }, [updateIndicatorStyle, size, vertical])

  useEffect(() => {
    if (!containerRef.current) return

    const resizeObserver = new ResizeObserver(() => {
      updateIndicatorStyle()
    })

    resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [updateIndicatorStyle])

  return indicatorStyle
}
