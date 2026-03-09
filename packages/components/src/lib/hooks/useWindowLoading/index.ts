import { useState, useEffect } from "react"

export const useWindowLoading = (loadingWindow: boolean) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loadingWindow) {
      const handleLoad = () => setLoading(false)
      const handleUnload = () => setLoading(true)

      window.addEventListener("load", handleLoad)
      window.addEventListener("beforeunload", handleUnload)

      return () => {
        window.removeEventListener("load", handleLoad)
        window.removeEventListener("beforeunload", handleUnload)
      }
    }
  }, [])

  return loading
}
