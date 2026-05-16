import TaskListSection from '@/components/Dashboard/Task/TaskListSection'
import { theme } from '@/constants/theme/theme'
import type { Task } from '@/types/task/Task'
import { TASK_STATUS } from '@/types/task/TaskStatus'

type TaskListProps = {
  tasks?: Task[]
}

function TaskList({ tasks = [] }: TaskListProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      <TaskListSection bgPrimary={theme.colors.todoPrimary} bgSecondary={theme.colors.todoSecondary} status={TASK_STATUS.TODO} tasks={tasks} />
      <TaskListSection bgPrimary={theme.colors.doingPrimary} bgSecondary={theme.colors.doingSecondary} status={TASK_STATUS.DOING} tasks={tasks} />
      <TaskListSection bgPrimary={theme.colors.donePrimary} bgSecondary={theme.colors.doneSecondary} status={TASK_STATUS.DONE} tasks={tasks} />
    </div>
  )
}

export default TaskList
