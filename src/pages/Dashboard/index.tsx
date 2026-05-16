import SearchFilter from "@/components/SearchFilter/SearchFilter"
import TaskList from "@/components/Dashboard/Task/TaskList"
import AppButton from "@/components/Form/AppButton/AppButton"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useLoadInitialData } from "./hooks/useLoadInitialData"
import type { TaskStatus } from "@/types/task/TaskStatus"
import type { TaskPriority } from "@/types/task/TaskPriority"
import AppPagination from "@/components/UI/AppPagination/AppPagination"

function DashboardPage() {
  const [page, setPage] = useState(1)
  const [limit] = useState(6)
  const [search, setSearch] = useState('')
  const [totalPage, setTotalPage] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [status, setStatus] = useState<TaskStatus>()
  const [priority, setPriority] = useState<TaskPriority>()

  const { isLoadingInitialData, tasks } = useLoadInitialData({
    page,
    limit,
    search,
    status,
    priority,
    setTotalPage,
    setTotalCount,
  })

  const handleClear = () => {
    setSearch('')
    setStatus(undefined)
    setPriority(undefined)
    setPage(1)
  }

  return (
    <div className="text-2xl font-bold">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Dashboard</h1>
        <AppButton icon={<Plus size={18} />} disabled={isLoadingInitialData}>
          Create Task
        </AppButton>
      </div>

      {/* Search Filter */}
      <div className="mt-5">
        <SearchFilter
          search={search}
          onSearchChange={setSearch}
          onClear={handleClear}
          selectedStatus={status}
          onStatusChange={setStatus}
          selectedPriority={priority}
          onPriorityChange={setPriority}
        />
      </div>

      {/* Task List */}
      <div className="mt-5">
          <TaskList tasks={tasks} isLoading={isLoadingInitialData} />
      </div>

      {/* Pagination */}
      <div className="mt-5">
        <AppPagination
          totalPage={totalPage}
          tasksLength={tasks.length}
          totalCount={totalCount}
          current={page}
          total={totalCount}
          pageSize={limit}
          onChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  )
}

export default DashboardPage