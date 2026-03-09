/* eslint-disable max-lines */
import type {
  BarChartBgColor,
  GetTitleFunction,
  ICanvasPoints,
} from "@/interfaces/charts"
import type {
  BarChartColor,
  Direction,
  RadialGradient,
} from "@/interfaces/common"
import type {
  Chart,
  ChartOptions,
  ChartDataset,
  Plugin,
  ScriptableContext,
  GridLineOptions,
  BorderOptions,
  TickOptions,
  AnyObject,
} from "chart.js"

export const borderRadius = 6

const gridColor: {
  grid: Partial<GridLineOptions>
  border: Partial<BorderOptions>
} = {
  grid: {
    tickColor: "rgba(0, 0, 0, 0)",
    color: "#B0B0B0",
  },
  border: {
    display: false,
    dash: [6, 6],
  },
}

const displayNone: { grid: Partial<GridLineOptions> } = {
  grid: {
    display: false,
  },
}

export const commonBarChartOptions: ChartOptions<"bar"> = {
  elements: {
    bar: {
      borderWidth: 0,
      borderRadius,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
}

const barChartColor: Record<BarChartColor, string> = {
  gray: "#E9EEF2",
  black: "#1D2226",
}

export const barChartDirections: Record<
  Direction,
  ChartOptions<"bar">["indexAxis"]
> = {
  vertical: "x",
  horizontal: "y",
}

export const commonDatasetValue: ChartDataset<"bar", number[]> = {
  barPercentage: 0.8,
  categoryPercentage: 0.8,
  data: [],
}

export const barChartAppearances: Record<
  BarChartBgColor,
  RadialGradient | string
> = {
  default: "#0047ba",
  orange: {
    start: "#FFA756",
    end: "#D27838",
  },
  teal: {
    start: "#77D3D9",
    end: "#589CA1",
  },
  red: {
    start: "#D27474",
    end: "#995555",
  },
  green: {
    start: "#4ECB8E",
    end: "#33885E",
  },
  blue: {
    start: "#7ABFFF",
    end: "#367CBC",
  },
  purple: {
    start: "#CD8BDD",
    end: "#9753A7",
  },
  pink: {
    start: "#CE6AAC",
    end: "#AB588F",
  },
  yellow: {
    start: "#E0C742",
    end: "#D4A13D",
  },
}

export const getScalesByDirection = (
  direction: Direction,
  textColor: BarChartColor,
  isActiveGrid: boolean
) => {
  const commonFontObject: TickOptions["font"] = {
    size: 12,
    family: "'AvenirNextLTPro', 'Poppins'",
  }

  const internalFontLabel: Partial<TickOptions> = {
    font: {
      ...commonFontObject,
      weight: 700,
    },
  }

  const internalFontValue: Partial<TickOptions> = {
    font: {
      ...commonFontObject,
    },
  }

  if (!isActiveGrid) {
    return {
      x: {
        ...internalFontValue,
        ...displayNone,
      },
      y: {
        beginAtZero: true,
        ...displayNone,
      },
    }
  }

  if (direction === "vertical") {
    return {
      x: {
        ticks: {
          color: barChartColor[textColor],
          ...internalFontLabel,
        },
        border: {
          display: true,
          color: "#B0B0B0",
        },
        ...displayNone,
      },
      y: {
        ticks: {
          color: barChartColor[textColor],
          ...internalFontValue,
        },

        ...gridColor,
      },
    }
  }

  return {
    x: {
      color: barChartColor[textColor],
      ticks: {
        ...internalFontValue,
      },
      ...gridColor,
    },
    y: {
      color: barChartColor[textColor],
      beginAtZero: true,
      ticks: {
        ...internalFontLabel,
      },
      border: {
        display: true,
        color: "#B0B0B0",
      },
      ...displayNone,
    },
  }
}

const drawProgressBackground = (
  ctx: CanvasRenderingContext2D,
  points: ICanvasPoints
) => {
  const { x, y, w, h, radius } = points
  ctx.beginPath()
  ctx.fillStyle = "#EDF2F7"
  ctx.roundRect(x, y, w, h, radius)
  ctx.fill()
}

const isHorizontalChart = (chartInstance: Chart) => {
  return chartInstance.options.indexAxis === "y"
}

export const createRadialGradient = (
  context: ScriptableContext<"bar">,
  bgColor: BarChartBgColor
) => {
  const chart = context.chart
  const { chartArea, ctx } = chart
  if (!chartArea) {
    // This case happens on initial chart load
    return
  }

  const internalBgColor = barChartAppearances[bgColor]

  if (typeof internalBgColor === "string") return internalBgColor

  const { start, end } = internalBgColor
  // Create the gradient because this is either the first render
  // or the size of the chart has changed
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  )
  gradient.addColorStop(0, start)
  gradient.addColorStop(1, end)

  return gradient
}

export const getTitle: GetTitleFunction = (
  value: string,
  { align, textColor, size, weight }
) => {
  return {
    display: value.length > 0,
    text: value,
    align,
    color: barChartColor[textColor],
    font: {
      size,
      family: "'AvenirNextLTPro', 'Poppins'",
      weight,
    },
    padding: {
      top: 0,
      bottom: 22,
    },
  }
}

export const progressBar: Plugin<"bar", AnyObject> = {
  id: "progressBar",
  beforeDatasetsDraw(
    chart: Chart<"bar", (number | [number, number] | null)[], unknown>
  ) {
    const {
      ctx,
      data,
      chartArea: { width, height, left, top },
      scales: { x, y },
    } = chart
    ctx.save()

    const currentData = data.datasets[0]
    const barPercentage = currentData?.barPercentage ?? 0
    const categoryPercentage = currentData?.categoryPercentage ?? 0

    const isDefaultAppearance =
      "bgColor" in currentData && currentData.bgColor === "default"

    const barWidth =
      (width / x.ticks.length) * barPercentage * categoryPercentage
    const barHeight =
      (height / y.ticks.length) * barPercentage * categoryPercentage

    if (isDefaultAppearance) {
      data.datasets[0].data.forEach((_, index) => {
        if (isHorizontalChart(chart)) {
          drawProgressBackground(ctx, {
            x: left,
            y: y.getPixelForValue(index) - barHeight / 2,
            w: width,
            h: barHeight,
            radius: [0, borderRadius, borderRadius, 0],
          })
          return
        }
        drawProgressBackground(ctx, {
          x: x.getPixelForValue(index) - barWidth / 2,
          y: top,
          w: barWidth,
          h: height,
          radius: [borderRadius, borderRadius, 0, 0],
        })
      })
    }
  },
}

export const topBarChartLabel: Plugin<"bar", AnyObject> = {
  id: "topBarChartLabel",
  afterDatasetsDraw(
    chart: Chart<"bar", (number | [number, number] | null)[], unknown>
  ) {
    const {
      ctx,
      scales: { y, x },
      config: { options },
      data,
    } = chart

    const datasetMeta = chart.getDatasetMeta(0)
    const dataset = data.datasets.at(0)

    const isEnabled =
      dataset && "showTopLabel" in dataset && dataset.showTopLabel

    const internalCanvas = (
      fillTextAxisX: number,
      fillTextAxisY: number,
      pixelValue?: number
    ) => {
      ctx.save()
      ctx.font = "500 14px 'AvenirNextLTPro' 'Poppins'"
      ctx.textAlign = "center"
      ctx.fillStyle = "#E6F392"
      ctx.fillText(pixelValue?.toFixed(0) ?? "", fillTextAxisX, fillTextAxisY)
      ctx.restore()
    }

    if (isEnabled) {
      datasetMeta.data.forEach((dataPoint, index) => {
        const value = datasetMeta.data[index].y
        if (options?.indexAxis === "x") {
          internalCanvas(dataPoint.x, value - 12, y.getValueForPixel(value))
          return
        }
        internalCanvas(
          dataPoint.x + 12,
          value + 3,
          x.getValueForPixel(datasetMeta.data[index].x)
        )
      })
    }
  },
}
