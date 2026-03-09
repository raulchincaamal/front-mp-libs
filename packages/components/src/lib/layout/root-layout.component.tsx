"use client"

import { Header } from "@/layout/header/header.component"
import { Content } from "@/layout/content.component"
import { Footer } from "@/layout/footer.component"
import type { RootLayoutProps } from "@/layout/root-layout.types"
import { Portal } from "radix-ui"
import i18n from "@/lang/i18n"
import { I18nextProvider as I18nextProviderBase } from "react-i18next"
import { motion, AnimatePresence } from "motion/react"

/**
 * Root layout component that provides the main structure for the application.
 * This is a compound component that includes Header, Content, and Footer subcomponents.
 * It supports loading state with an animated overlay using Portal and Framer Motion.
 *
 * @component
 * @param {RootLayoutProps} props - Component properties
 * @param {ReactNode} props.children - Child elements to render within the layout
 * @param {boolean} [props.loading] - Loading state that displays an animated overlay with three dots
 * @returns {JSX.Element} Main layout container with attached subcomponents
 *
 * @example
 * ```tsx
 * import { RootLayout } from '@/layout'
 *
 * <RootLayout loading={false}>
 *   <RootLayout.Header>
 *     <div>Header</div>
 *   </RootLayout.Header>
 *   <RootLayout.Content>
 *     <h1>Content</h1>
 *   </RootLayout.Content>
 *   <RootLayout.Footer>
 *     © 2026
 *   </RootLayout.Footer>
 * </RootLayout>
 * ```
 *
 * @example
 * ```tsx
 * // With loading state
 * <RootLayout loading={true}>
 *   <RootLayout.Content>
 *     <p>Loading content...</p>
 *   </RootLayout.Content>
 * </RootLayout>
 * ```
 */
const RootLayout = ({ children, loading, ...props }: RootLayoutProps) => {
  /**
   * Calculates the horizontal animation values for loading dots.
   * The left dot (index 0) moves right, the right dot (index 2) moves left,
   * and the center dot (index 1) remains horizontally static.
   *
   * @param {number} i - Index of the dot (0, 1, or 2)
   * @returns {number | number[]} Animation values for x-axis movement
   *
   * @example
   * getXAnimation(0) // Returns [0, 6, 0] - moves right
   * getXAnimation(1) // Returns 0 - no horizontal movement
   * getXAnimation(2) // Returns [0, -6, 0] - moves left
   */
  const getXAnimation = (i: number) => {
    if (i === 0) return [0, 6, 0]
    if (i === 2) return [0, -6, 0]
    return 0
  }

  return (
    <I18nextProviderBase i18n={i18n}>
      <main
        data-slot="sidebar-inset"
        className="relative flex min-h-svh w-full flex-1 flex-col bg-grays-macropay-02"
        {...props}
      >
        {children}
        <AnimatePresence>
          {loading && (
            <Portal.Root asChild>
              <motion.div
                className="position backdrop-blur-sm bg-white/30 absolute top-0 left-0 z-50 flex h-full w-full items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex gap-3">
                  {[0, 1, 2].map(i => {
                    return (
                      <motion.div
                        key={i}
                        className={`w-3 h-3 rounded-full ${i === 1 ? "bg-primary-blue" : "bg-grays-macropay-05"}`}
                        animate={{
                          y: i === 1 ? [0, -8, 0] : 0,
                          x: getXAnimation(i),
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )
                  })}
                </div>
              </motion.div>
            </Portal.Root>
          )}
        </AnimatePresence>
      </main>
    </I18nextProviderBase>
  )
}

/**
 * Header subcomponent for the RootLayout.
 * @see {@link Header}
 */
RootLayout.Header = Header

/**
 * Content subcomponent for the RootLayout.
 * @see {@link Content}
 */
RootLayout.Content = Content

/**
 * Footer subcomponent for the RootLayout.
 * @see {@link Footer}
 */
RootLayout.Footer = Footer

export { RootLayout }
