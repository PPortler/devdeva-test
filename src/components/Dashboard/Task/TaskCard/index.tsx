import type { Task } from "@/types/task/Task"

type TaskCardProps = {
  task: Task
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <div
      className="p-3 rounded-lg border"
    >
      <p>{task.title}</p>
    </div>
  )
}

export default TaskCard
