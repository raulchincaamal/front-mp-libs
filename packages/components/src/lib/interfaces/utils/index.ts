export interface IColorHexRange {
  colorStart: string
  colorEnd: string
}

export type InterpolateColorsFunc = (
  dataLength: number,
  colorRange: IColorHexRange
) => string[]
