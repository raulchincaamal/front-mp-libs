import i18n from "i18next"
import es from "./es_MX"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  resources: { es },
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
