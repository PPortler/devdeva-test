import SearchFilter from "@/components/SearchFilter/SearchFilter"
import TaskList from "@/components/Dashboard/Task/TaskList"
import AppButton from "@/components/Form/AppButton/AppButton"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useLoadInitialData } from "./hooks/useLoadInitialData"
import type { TaskStatus } from "@/types/task/TaskStatus"
import type { TaskPriority } from "@/types/task/TaskPriority"
import AppPagination from "@/components/UI/AppPagination/AppPagination"
import useDebounce from "@/hooks/useDebounce"
import useDashboardStore from "@/stores/dashboard/useDashboardStore"
import TaskModal from "@/components/Dashboard/Task/TaskModal/TaskModal"
import type { Task } from "@/types/task/Task"

function DashboardPage() {
  // state
  const [page, setPage] = useState(1)
  const [limit] = useState(6)
  const [totalPage, setTotalPage] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [status, setStatus] = useState<TaskStatus>()
  const [priority, setPriority] = useState<TaskPriority>()
  const [search, setSearch] = useState('')
  const [openTaskModal, setOpenTaskModal] = useState(false)
  const [taskModalState, setTaskModalState] = useState<{
    mode: 'create' | 'edit'
    initialData?: Partial<Task>
  }>({
    mode: 'create',
    initialData: undefined,
  })

  // store
  const { searchHeader } = useDashboardStore()

  // hooks
  const debouncedSearch = useDebounce({
    value: search,
  })
  const debouncedHeaderSearch = useDebounce({
    value: searchHeader,
  })

  // load initial data
  const { isLoadingInitialData, tasks, users, reloadTasks } = useLoadInitialData({
    page,
    limit,
    searchHeader: debouncedHeaderSearch,
    search: debouncedSearch,
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
        <AppButton
          icon={<Plus size={18} />}
          disabled={isLoadingInitialData}
          onClick={() => {
            setTaskModalState({
              mode: 'create',
              initialData: undefined,
            })
            setOpenTaskModal(true)
          }}
        >
          Create Task
        </AppButton>
      </div>

      {/* Search Filter */}
      <div className="mt-5">
        <SearchFilter
          search={search}
          placeholder="Search name task or description"
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
        <TaskList
          tasks={tasks}
          isLoading={isLoadingInitialData}
          onEditTask={(task) => {
            setTaskModalState({
              mode: 'edit',
              initialData: task,
            })
            setOpenTaskModal(true)
          }}
        />
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

      {/* Task Modal */}
      <TaskModal
        open={openTaskModal}
        onClose={() => {
          setOpenTaskModal(false)
          setTaskModalState({
            mode: 'create',
            initialData: undefined,
          })
        }}
        assignees={users}
        onSuccess={() => {
          reloadTasks()
        }}
        mode={taskModalState.mode}
        initialData={taskModalState.initialData}
      />
    </div>
  )
}

export default DashboardPage