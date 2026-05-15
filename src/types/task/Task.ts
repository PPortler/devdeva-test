import type { TaskStatus } from "./TaskStatus";

export type Task = {
  id: string
  title: string
  status: TaskStatus
}
