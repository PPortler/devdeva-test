import TaskListSection from '@/components/Dashboard/Task/TaskListSection'
import { useThemeStore } from '@/stores/app/themeStore'
import type { Task } from '@/types/task/Task'
import { TASK_STATUS } from '@/types/task/TaskStatus'

type TaskListProps = {
  tasks?: Task[]
  isLoading?: boolean
  onEditTask?: (task: Task) => void
}

function TaskList({ tasks = [], isLoading, onEditTask }: TaskListProps) {
  const { theme } = useThemeStore()

  return (
    <div className="flex gap-4 flex-wrap">
      <TaskListSection isLoading={isLoading} bgPrimary={theme.colors.todoPrimary} bgSecondary={theme.colors.todoSecondary} status={TASK_STATUS.TODO} tasks={tasks} onEditTask={onEditTask} />
      <TaskListSection isLoading={isLoading} bgPrimary={theme.colors.doingPrimary} bgSecondary={theme.colors.doingSecondary} status={TASK_STATUS.DOING} tasks={tasks} onEditTask={onEditTask} />
      <TaskListSection isLoading={isLoading} bgPrimary={theme.colors.donePrimary} bgSecondary={theme.colors.doneSecondary} status={TASK_STATUS.DONE} tasks={tasks} onEditTask={onEditTask} />
    </div>
  )
}

export default TaskList
