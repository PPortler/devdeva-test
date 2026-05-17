import {
  useRef,
  useState,
} from 'react'
import { message } from 'antd'
import {
  ArrowLeft,
  FileDown,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import LineCharts from '@/components/Charts/LineCharts/LineCharts'
import AppButton from '@/components/Form/AppButton/AppButton'
import { exportChartToPDF } from '@/utils/exportChartToPDF'
import { useLoadInitialData } from './hooks/useLoadInitialData'

function GraphPage() {

  const [isExportingPDF, setIsExportingPDF] = useState(false)

  const navigate = useNavigate()
  const { isLoadingInitialData, chartData } = useLoadInitialData()

  const chartRef =
    useRef<HTMLDivElement>(null)

  // Export Chart as PDF
  const handleExportPDF = async () => {
    try {
      setIsExportingPDF(true)

      // Simulate delay for mock export process
      await new Promise((resolve) => setTimeout(resolve, 500))

      const result = await exportChartToPDF({
        element:
          chartRef.current,
        fileName:
          'daily-graph.pdf',
      })

      if (result.ok) {
        message.success('Export PDF successfully')
      } else {
        message.error(result.error || 'Failed to export PDF')
      }
    } finally {
      setIsExportingPDF(false)
    }
  }

  return (
    <div className="min-h-screen w-[1400px] mx-auto mt-10 p-10">

      {/* Navigation Back */}
      <div>
        <AppButton
          backgroundColor="#a680ba"
          icon={<ArrowLeft />}
          onClick={() => navigate(-1)}
        />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center pl-40 mt-10 mb-5">
        <p className="text-gray-500 font-medium">
          Daily Graph
        </p>

        <AppButton
          onClick={handleExportPDF}
          backgroundColor="none"
          textColor="#a680ba"
          icon={<FileDown size={22} />}
          loading={isExportingPDF}
        >
          Export PDF
        </AppButton>
      </div>
      
      {/* Charts */}
      {isLoadingInitialData ? (
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-400">Loading chart data...</p>
        </div>
      ) : (
        <div ref={chartRef}
          className="h-[520px] "
        >
          <LineCharts
            data={chartData}
          />
        </div>
      )}
    </div>
  )
}

export default GraphPage