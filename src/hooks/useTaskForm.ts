import { useState } from 'react'
import dayjs from 'dayjs'
import type { Task } from '@/types/task/Task'
import type { TaskPriority } from '@/types/task/TaskPriority'
import type { TaskStatus } from '@/types/task/TaskStatus'

const INITIAL_FORM = {
  title: '',
  description: '',
  tags: [] as string[],
  status: 'todo' as TaskStatus,
  priority: 'low' as TaskPriority,
  assignees: [] as string[],
  dueDate: null as dayjs.Dayjs | null,
  progress: 0,
}

export function useTaskForm() {
  const [form, setForm] = useState(INITIAL_FORM)

  const resetForm = () => {
    setForm(INITIAL_FORM)
  }

  const fillForm = (data?: Partial<Task>) => {
    if (!data) return

    setForm({
      title: data.title || '',
      description: data.description || '',
      tags: data.tags || [],
      status: data.status || 'todo',
      priority: data.priority || 'low',
      assignees: data.assignees?.map((u) => u.id) || [],
      dueDate: data.dueDate ? dayjs(data.dueDate) : null,
      progress: data.progress || 0,
    })
  }

  return {
    form,
    setForm,
    resetForm,
    fillForm,
  }
}