import { useEffect, useState } from 'react'
import {
  Avatar,
  DatePicker,
  Modal,
} from 'antd'
import dayjs from 'dayjs'

import AppButton from '@/components/Form/AppButton/AppButton'
import AppInput from '@/components/Form/AppInput/AppInput'
import AppSelect from '@/components/Form/AppSelect/AppSelect'
import { PRIORITY_OPTIONS } from '@/constants/options/priority-options'
import { STATUS_OPTIONS } from '@/constants/options/status-options'
import type { Task } from '@/types/task/Task'
import type { TaskPriority } from '@/types/task/TaskPriority'
import type { TaskStatus } from '@/types/task/TaskStatus'
import type { User } from '@/types/user/User'
import { theme } from '@/constants/theme/theme'

const INITIAL_FORM = {
  title: '',
  description: '',
  tags: [] as string[],
  status: 'todo' as TaskStatus,
  priority: 'medium' as TaskPriority,
  assignees: [] as string[],
  dueDate: null as dayjs.Dayjs | null,
}

type TaskModalProps = {
  open: boolean
  mode?: 'create' | 'edit'
  onClose: () => void
  onSubmit?: (data: typeof INITIAL_FORM) => void
  assignees: User[]
  initialData?: Partial<Task>
}

function TaskModal({
  open,
  mode = 'create',
  onClose,
  onSubmit,
  assignees,
  initialData,
}: TaskModalProps) {
  const [form, setForm] = useState(INITIAL_FORM)

  useEffect(() => {
    if (open && initialData) {
      // แก้ไข task ที่มีอยู่
      setForm({
        title: initialData.title || '',
        description: initialData.description || '',
        tags: initialData.tags || [],
        status: (initialData.status as TaskStatus) || 'todo',
        priority: (initialData.priority as TaskPriority) || 'medium',
        assignees: initialData.assignees?.map((u) => u.id) || [],
        dueDate: initialData.dueDate
          ? dayjs(initialData.dueDate)
          : null,
      })
    } else if (!open) {
      // รีเซ็ตฟอร์มเมื่อปิด
      setForm(INITIAL_FORM)
    }
  }, [open, initialData])

  const handleSubmit = () => {
    // TODO: เพิ่ม validation
    if (!form.title.trim()) {
      alert('Please enter task title')
      return
    }

    onSubmit?.(form)
  }

  const handleClose = () => {
    setForm(INITIAL_FORM)
    onClose()
  }

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      width={700}
      centered
      title={
        <h1 className="text-xl font-semibold">
          {mode === 'create'
            ? 'Create Task'
            : 'Edit Task'}
        </h1>
      }
    >
      <div className="mt-5 flex flex-col gap-4">
        {/* TITLE */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Task Title *
          </label>

          <AppInput
            placeholder="Enter task title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <textarea
            placeholder="Enter task description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            rows={4}
            className="
              w-full
              rounded-lg
              border
              border-zinc-200
              p-3
              outline-none
              transition-all

              focus:border-blue-500
            "
          />
        </div>

        {/* TAGS */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Tags
          </label>

          <AppSelect
            mode="tags"
            placeholder="Add tags"
            value={form.tags}
            onChange={(value) =>
              setForm({ ...form, tags: value })
            }
          />
        </div>

        {/* STATUS & PRIORITY */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Status
            </label>

            <AppSelect
              value={form.status}
              onChange={(value) =>
                setForm({ ...form, status: value })
              }
              options={STATUS_OPTIONS.filter(
                (item) =>
                  item.value !== 'all',
              )}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Priority
            </label>

            <AppSelect
              value={form.priority}
              onChange={(value) =>
                setForm({ ...form, priority: value })
              }
              options={PRIORITY_OPTIONS.filter(
                (item) =>
                  item.value !== 'all',
              )}
            />
          </div>
        </div>

        {/* DUE DATE */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Due Date
          </label>

          <DatePicker
            className="!h-10 !w-full"
            value={form.dueDate}
            onChange={(date) =>
              setForm({ ...form, dueDate: date })
            }
          />
        </div>

        {/* ASSIGNEES */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Assignees
          </label>

          <AppSelect
            mode="multiple"
            value={form.assignees}
            onChange={(value) =>
              setForm({ ...form, assignees: value })
            }
            placeholder="Select assignees"
            options={assignees?.map(
              (user) => ({
                value: user.id,
                label: (
                  <div className="flex items-center gap-2">
                    <Avatar
                      size={26}
                      src={user.avatar}
                    >
                      {user.name.charAt(0)}
                    </Avatar>
                    <span>{user.name}</span>
                  </div>
                ),
              }),
            )}
          />
        </div>

        {/* ACTIONS */}
        <div className="mt-4 flex justify-end gap-2">
          <AppButton
            onClick={handleClose}
            backgroundColor={theme.colors.textSecondary}
          >
            Cancel
          </AppButton>

          <AppButton
            onClick={handleSubmit}
          >
            {mode === 'create'
              ? 'Create Task'
              : 'Save Changes'}
          </AppButton>
        </div>
      </div>
    </Modal>
  )
}

export default TaskModal