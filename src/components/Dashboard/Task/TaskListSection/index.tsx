import { Skeleton } from 'antd'
import type { Task } from '@/types/task/Task'
import {
  TASK_STATUS_LABEL,
  type TaskStatus,
} from '@/types/task/TaskStatus'
import TaskCard from '../TaskCard'
import { theme } from '@/constants/theme/theme'

type TaskListSectionProps = {
  bgPrimary?: string
  bgSecondary?: string
  status: TaskStatus
  tasks: Task[]
  isLoading?: boolean
}

function TaskListSection({
  bgPrimary,
  bgSecondary,
  status,
  tasks,
  isLoading = false,
}: TaskListSectionProps) {
  const filteredTasks = tasks.filter(
    (task) => task.status === status,
  )

  return (
    <div
      className="
        min-h-[500px]
        min-w-56
        flex-1
        shadow-sm
        form-rounded
      "
      style={{
        backgroundColor: bgSecondary,
      }}
    >
      {/* HEADER */}
      <div
        className="form-rounded py-1"
        style={{
          backgroundColor: bgPrimary,
        }}
      >
        <h2 className="text-center text-lg">
          {TASK_STATUS_LABEL[status]}
        </h2>
      </div>

      {/* TASKS */}
      <div className="space-y-2 p-2">
        {isLoading ? (
          // Skeleton loaders for loading state
          <>
            {Array.from({ length: 2 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="
                    h-45
                    form-rounded
                    p-4
                    shadow-sm
                  "
                  style={{
                    backgroundColor: theme.colors.header,
                  }}
                >
                  <Skeleton
                    active
                    paragraph={{
                      rows: 3,
                    }}
                    title={{
                      width: '70%',
                    }}
                  />
                </div>
              ),
            )}
          </>
        ) : filteredTasks.length > 0 ? (
          // TaskCards
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))
        ) : (
          <div
            className="p-3 form-rounded flex flex-col gap-3 h-40 font-normal justify-center items-center"
            style={{
              backgroundColor: theme.colors.header,
              border: `1px solid ${theme.colors.borderSidebar}`,
            }}
          >
            <p className="text-sm text-zinc-400">
              No tasks found
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TaskListSection