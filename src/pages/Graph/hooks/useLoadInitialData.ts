import { useEffect, useState } from 'react'
import type { LineChartData } from '@/types/chart/ChartData'

// TODO: delete when connecting to real API
import { useMockData } from './useMockData'

export const useLoadInitialData = () => {
  const [isLoadingInitialData, setIsLoadingInitialData] = useState(false)
  const [chartData, setChartData] = useState<LineChartData[]>([])

  // TODO: deleted when connecting to real API
  const { getChartData } = useMockData()

  // Call Chart Data
  const callChartData = async () => {
    setChartData([])
    // TODO: replace with real API call
    const response = await getChartData()

    if (!response.ok) return false

    setChartData(response.data.chartData)
    return true
  }

  const loadInitialData = async (): Promise<void> => {
    setIsLoadingInitialData(true)

    const results = await callChartData()
    setIsLoadingInitialData(false)

    if (!results) {
      // TODO: เพิ่ม alert error
      console.error('Error loading chart data')
    }
  }

  // Load initial data on component mount
  useEffect(() => {
    (async () => {
      await loadInitialData()
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isLoadingInitialData,
    chartData,
  }
}
