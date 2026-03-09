import type { PropsWithChildren } from "react"
import { memo, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const Portal = ({
  children,
  id,
  className = "",
}: PropsWithChildren<{ id: string; className?: string }>) => {
  const el = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const selector =
      document.getElementById(id) || document.createElement("div")
    el.current = selector
    el.current.id = id
    if (className) el.current.className = className
    document.body.appendChild(el.current)
    setMounted(true)
    return () => {
      if (el.current?.parentElement) {
        el.current.parentElement.removeChild(el.current)
      }
    }
  }, [id])

  return mounted ? createPortal(children, el.current!) : null
}

export default memo(Portal)
