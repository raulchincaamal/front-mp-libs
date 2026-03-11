import type { Preview } from "@storybook/react"
import { I18nextProvider } from "react-i18next"
import i18n from "../src/lib/lang/i18n"
import { viewports } from "./viewports"

import "../src/styles/globals.css"
import "../src/styles/storybook-fonts.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { options: viewports },
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#262626" },
        light: { name: "Light", value: "#F0F0F0" },
      },
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "light" },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === "dark"
      const root = document.documentElement

      if (isDark) {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
      return (
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      )
    },
  ],
}

export default preview
