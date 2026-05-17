import { CHART_LABELS } from "@/types/chart/ChartData"

export const CHART_CONFIG = [
  {
    key: 'green',
    label: CHART_LABELS.green,
    stroke: '#22c55e',
    gradientId: 'greenGradient',
    domain: [0, 100],
  },
  {
    key: 'orange',
    label: CHART_LABELS.orange,
    stroke: '#f59e0b',
    gradientId: 'orangeGradient',
    domain: [-100, 100],
  },
  {
    key: 'blue',
    label: CHART_LABELS.blue,
    stroke: '#3b82f6',
    gradientId: 'blueGradient',
    domain: [0, 10],
  },
] as const

export type ChartKey =
  (typeof CHART_CONFIG)[number]['key']