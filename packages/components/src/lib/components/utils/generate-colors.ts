import type { InterpolateColorsFunc } from "@/interfaces/utils"
import { quantize, interpolateHcl } from "d3"

export const interpolateColors: InterpolateColorsFunc = (
  length,
  colorRange
) => {
  const { colorStart, colorEnd } = colorRange
  const colors = quantize(interpolateHcl(colorStart, colorEnd), length)
  return colors
}
