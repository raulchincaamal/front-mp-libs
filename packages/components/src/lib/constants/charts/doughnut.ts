import type { ChartOptions } from "chart.js"

export const doughnutOptions: ChartOptions<"doughnut"> = {
  layout: {
    padding: 10,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}
