import TaskListSection from '@/components/Dashboard/Task/TaskListSection'
import type { Task } from '@/types/task/Task'
import { TASK_STATUS } from '@/types/task/TaskStatus'

type TaskListProps = {
  tasks?: Task[]
}

function TaskList({ tasks = [] }: TaskListProps) {
  return (
    <div className="flex gap-4">
      <TaskListSection status={TASK_STATUS.TODO} tasks={tasks} />
      <TaskListSection status={TASK_STATUS.DOING} tasks={tasks} />
      <TaskListSection status={TASK_STATUS.DONE} tasks={tasks} />
    </div>
  )
}

export default TaskList
