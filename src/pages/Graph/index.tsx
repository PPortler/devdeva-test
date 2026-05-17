import LineCharts from "@/components/Charts/LineCharts/LineCharts"
import AppButton from "@/components/Form/AppButton/AppButton"
import { ArrowLeft, FileDown } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useLoadInitialData } from "./hooks/useLoadInitialData"

function GraphPage() {
  const navigate = useNavigate()
  const { isLoadingInitialData, chartData } = useLoadInitialData()
  
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
      <div className="flex justify-between items-center pl-40 mt-10">
        <p className="text-gray-500 font-medium">
          Daily Graph
        </p>

        <AppButton
          backgroundColor="none"
          textColor="#a680ba"
          icon={<FileDown size={22} />}
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
        <LineCharts data={chartData} />
      )}
    </div>
  )
}

export default GraphPage