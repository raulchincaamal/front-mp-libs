import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const initialStateDarkMode =
    typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark"
      : "light"

  const [darkMode, setDarkMode] = useState(initialStateDarkMode)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return { darkMode, setDarkMode }
}
