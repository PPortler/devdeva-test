import type { Task } from '@/types/task/Task'
import TaskCard from '../TaskCard'
import { TASK_STATUS_LABEL, type TaskStatus } from '@/types/task/TaskStatus'

type TaskListSectionProps = {
  bgPrimary?: string
  bgSecondary?: string
  status: TaskStatus
  tasks: Task[]
}

function TaskListSection({ bgPrimary, bgSecondary, status, tasks }: TaskListSectionProps) {
  const filteredTasks = tasks.filter((task) => task.status === status)

  return (
    <div className="flex-1 form-rounded shadow-sm min-w-56"
      style={{
        backgroundColor: bgSecondary
      }}
    >
      {/* Header */}
      <div className='py-1 form-rounded'
        style={{
          backgroundColor: bgPrimary,
        }}
      >
        <h2
          className="text-lg text-center"
        >
          {TASK_STATUS_LABEL[status]}
        </h2>
      </div>

      {/* Tasks */}
      <div className="space-y-2 p-2">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskListSection
