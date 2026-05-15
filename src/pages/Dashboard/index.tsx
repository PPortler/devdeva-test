import DashboardLayout from "@/components/Dashboard/Layout/Layout"
import SearchFilter from "@/components/SearchFilter/SearchFilter"
import TaskList from "@/components/Dashboard/Task/TaskList"
import AppButton from "@/components/Form/AppButton/AppButton"
import { Plus } from "lucide-react"
import { useState } from "react"
import type { Task } from "@/types/task/Task"
import { TASK_STATUS } from "@/types/task/TaskStatus"

const MOCK_TASKS: Task[] = [
  { id: '1', title: 'Design homepage', status: TASK_STATUS.TODO },
  { id: '2', title: 'Setup database', status: TASK_STATUS.TODO },
  { id: '3', title: 'Build authentication', status: TASK_STATUS.DOING },
  { id: '4', title: 'API integration', status: TASK_STATUS.DOING },
  { id: '5', title: 'Deploy to production', status: TASK_STATUS.DONE },
  { id: '6', title: 'User testing', status: TASK_STATUS.DONE },
]

function DashboardPage() {
  const [search, setSearch] = useState('')
  const [status1, setStatus1] = useState<string | undefined>()
  const [status2, setStatus2] = useState<string | undefined>()

  const handleClear = () => {
    setSearch('')
    setStatus1(undefined)
    setStatus2(undefined)
  }

  return (
    <DashboardLayout>
      <div className="text-2xl font-bold">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Dashboard</h1>
          <AppButton icon={<Plus size={18} />}>
            Create Task
          </AppButton>
        </div>

        {/* Search Filter */}
        <div className="mt-5">
          <SearchFilter
            search={search}
            onSearchChange={setSearch}
            onClear={handleClear}
            selectedStatus1={status1}
            onStatusChange1={setStatus1}
            selectedStatus2={status2}
            onStatusChange2={setStatus2}
          />
        </div>

        {/* Task List */}
        <div className="mt-5">
          <TaskList tasks={MOCK_TASKS} />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage