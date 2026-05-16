// ใช้สำหรับเก็บค่าคงที่ของ status ของ task
export const TASK_STATUS = {
    ALL: 'all',
    TODO: 'todo',
    DOING: 'doing',
    DONE: 'done',
} as const

// สร้าง type TaskStatus จากค่าคงที่ใน TASK_STATUS
export type TaskStatus =
    (typeof TASK_STATUS)[keyof typeof TASK_STATUS]

// สร้าง mapping สำหรับแสดง label ของแต่ละ status
export const TASK_STATUS_LABEL: Record<TaskStatus, string> = {
    [TASK_STATUS.ALL]: 'All Status',
    [TASK_STATUS.TODO]: 'To Do',
    [TASK_STATUS.DOING]: 'In Progress',
    [TASK_STATUS.DONE]: 'Done',
}
