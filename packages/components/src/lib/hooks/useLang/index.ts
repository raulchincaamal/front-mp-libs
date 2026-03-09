import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export const useLang = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation()

  const setLang = (lang: string) => {
    changeLanguage(lang)
    localStorage.setItem("lang", lang)
  }

  useEffect(() => {
    const langLocalStorage = localStorage.getItem("lang")
    changeLanguage(langLocalStorage ? langLocalStorage : language)
  }, [])

  return { language, setLang }
}
