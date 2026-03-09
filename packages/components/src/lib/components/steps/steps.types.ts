import type { MouseEventHandler } from "react"
import type { Size } from "@/types/common"

/**
 * Step status types.
 *
 * Defines the possible states a step can be in during the workflow.
 *
 * @typedef {string} StepStatus
 * @property {'COMPLETE'} COMPLETE - Step has been completed
 * @property {'CURRENT'} CURRENT - Step is currently active
 * @property {'PENDING'} PENDING - Step is waiting to be started
 * @property {'UPCOMING'} UPCOMING - Step is scheduled for the future
 */
export type StepStatus = "COMPLETE" | "CURRENT" | "PENDING" | "UPCOMING"

/**
 * Arrow direction types for navigation buttons.
 *
 * Defines the arrow icons used in step navigation buttons.
 *
 * @typedef {string} Arrow
 * @property {'left'} LEFT - Left arrow for previous navigation
 * @property {'right'} RIGHT - Right arrow for next navigation
 */
export type Arrow = "left" | "right"

/**
 * Alignment options for the Steps component container.
 *
 * @typedef {string} StepsAlign
 * @property {'start'} start - Align to the start of the container
 * @property {'center'} center - Align to the center of the container
 * @property {'end'} end - Align to the end of the container
 */
export type StepsAlign = "start" | "center" | "end"

/**
 * Step button navigation properties.
 *
 * Props for the navigation buttons that allow users to move between steps.
 *
 * @interface StepButtonProps
 * @property {boolean} [disabled] - Whether the button is disabled
 * @property {MouseEventHandler<HTMLButtonElement>} [onClick] - Click event handler
 * @property {Arrow} arrow - Arrow direction for the button
 * @property {Size} size - Button size ('sm' | 'md' | 'lg')
 *
 * @example
 * ```tsx
 * const buttonProps: StepButtonProps = {
 *   disabled: false,
 *   onClick: () => console.log('clicked'),
 *   arrow: "right",
 *   size: "md"
 * }
 * ```
 */
export interface StepButtonProps {
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  arrow: Arrow
  size: Size
}

/**
 * Individual step content properties.
 *
 * Defines the structure and data for each step in the workflow.
 *
 * @interface StepContent
 * @property {string} id - Unique identifier for the step
 * @property {string} name - Descriptive name of the step displayed to users
 * @property {StepStatus} status - Current status of the step
 * @property {string} [href] - Optional URL to make the step clickable
 * @property {Size} [size] - Step size for internal use
 *
 * @example
 * ```tsx
 * const step: StepContent = {
 *   id: "1",
 *   name: "Initial Setup",
 *   status: "COMPLETE",
 *   href: "/setup"
 * }
 * ```
 */
export interface StepContent {
  id: string
  name: string
  status: StepStatus
  href?: string
  size?: Size
}

/**
 * Steps component properties.
 *
 * Props for the main Steps component that displays the navigable step flow.
 *
 * @interface StepsProps
 * @property {StepContent[]} steps - Array of steps to display in the flow
 * @property {Size} [size='md'] - Component size ('sm' | 'md' | 'lg')
 * @property {string} [className=''] - Additional CSS classes for customization
 * @property {boolean} [withNavigation=true] - Show/hide navigation buttons
 *
 * @example
 * ```tsx
 * const stepsProps: StepsProps = {
 *   steps: [step1, step2, step3],
 *   size: "lg",
 *   className: "my-4"
 * }
 * ```
 */
export interface StepsProps {
  steps: StepContent[]
  size?: Size
  className?: string
  withNavigation?: boolean
  align?: StepsAlign
}
