import { TASK_STATUS } from "@/types/task/TaskStatus";

export const STATUS_OPTIONS = [
  { value: TASK_STATUS.ALL, label: 'All Status' },
  { value: TASK_STATUS.TODO, label: 'To Do' },
  { value: TASK_STATUS.DOING, label: 'In Progress' },
  { value: TASK_STATUS.DONE, label: 'Done' },

] as const