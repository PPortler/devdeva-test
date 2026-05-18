import type { TaskStatus } from './TaskStatus'
import type { TaskPriority } from './TaskPriority'
import type { User } from '@/types/user/User'

export type Task = {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  dueDate: string
  progress: number
  tags: string[]
  assignees: User[]
}

