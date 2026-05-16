export const TASK_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const

export type TaskPriority = (typeof TASK_PRIORITY)[keyof typeof TASK_PRIORITY]

export const TASK_PRIORITY_LABEL: Record<TaskPriority, string> = {
  [TASK_PRIORITY.LOW]: 'Low Priority',
  [TASK_PRIORITY.MEDIUM]: 'Medium Priority',
  [TASK_PRIORITY.HIGH]: 'High Priority',
}
