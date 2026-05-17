export type LineChartData = {
  time: string
  green: number
  orange: number
  blue: number
}

export const CHART_LABELS = {
  green: 'สีเขียว',
  orange: 'สีส้ม',
  blue: 'สีน้ำเงิน',
} as const