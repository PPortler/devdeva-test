import type { Task } from '@/types/task/Task'
import { Progress } from 'antd'
import { Calendar } from 'lucide-react'
import Tag from '@/components/UI/Tag/Tag'
import UserAvatarGroup from '@/components/UI/UserAvatarGroup/UserAvatarGroup'
import { TASK_PRIORITY_LABEL } from '@/types/task/TaskPriority'
import { TASK_STATUS_LABEL } from '@/types/task/TaskStatus'
import { useThemeStore } from '@/stores/app/themeStore'

type TaskCardProps = {
  task: Task
  onEdit?: (task: Task) => void
}

function TaskCard({
  task,
  onEdit,
}: TaskCardProps) {
  const { theme } = useThemeStore()

  return (
    <div
      className="p-3 rounded-lg flex flex-col gap-3 font-normal cursor-pointer border border-gray-300 shadow-sm"
      style={{
        backgroundColor: theme.colors.header,
      }}
      onClick={() => onEdit && onEdit(task)}
    >
      {/* TITLE & DESCRIPTION */}
      <div>
        <h1 className="text-xl font-semibold">{task.title}</h1>
        <h2 className="text-sm text-gray-500 line-clamp-2">{task.description}</h2>
      </div>

      {/* TAGS & PRIORITY */}
      <div className="flex gap-1 flex-wrap items-center">
        {task.tags.map((tag) => (
          <Tag key={tag} label={tag} variant="feature" size="sm" />
        ))}
        <Tag
          label={TASK_PRIORITY_LABEL[task.priority]}
          variant={task.priority}
          size="sm"
        />
      </div>

      {/* STATUS & DATE */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <p className="text-sm">{task.dueDate}</p>
        </div>
        <Tag label={TASK_STATUS_LABEL[task.status]} variant={task.status} size="sm" />
      </div>

      {/* PROGRESS & ASSIGNEES */}
      <div className="flex gap-3 items-end">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs font-medium">Progress</label>
          <Progress percent={task.progress} showInfo={false} size="small" />
        </div>
        <UserAvatarGroup users={task.assignees} size={28} />
      </div>
    </div>
  )
}

export default TaskCard
