// TODO: ลบไฟล์นี้เมื่อ integrate API จริงแล้ว
import type { LineChartData } from '@/types/chart/ChartData'

// Mock Chart Data
const MOCK_CHART_DATA: LineChartData[] = Array.from(
  { length: 24 },
  (_, index) => ({
    time: `${String(index + 1).padStart(2, '0')}:00`,
    // 0 - 100
    green: Math.floor(Math.random() * 100),
    // -100 ถึง 100
    orange: Math.floor(Math.random() * 200) - 100,
    // 0 - 10
    blue: Number((Math.random() * 10).toFixed(1)),
  })
)

interface GetChartDataResponse {
  ok: boolean
  data: {
    chartData: LineChartData[]
  }
}

export const useMockData = () => {
  const getChartData = async (): Promise<GetChartDataResponse> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return {
      ok: true,
      data: {
        chartData: MOCK_CHART_DATA,
      },
    }
  }

  return { getChartData }
}
