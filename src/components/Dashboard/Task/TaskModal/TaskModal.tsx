import { useEffect, useState } from 'react'
import {
  Avatar,
  DatePicker,
  Modal,
  Slider,
  message,
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
import TextArea from 'antd/es/input/TextArea'
import { useMockData } from '@/pages/Dashboard/hooks/useMockData'
import AppLabel from '@/components/Form/AppLabel/AppLabel'

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

type TaskModalProps = {
  open: boolean
  mode?: 'create' | 'edit' | 'null'
  onClose: () => void
  assignees: User[]
  onSuccess: () => void
  initialData?: Partial<Task>
}

function TaskModal({
  open,
  mode = 'null',
  onClose,
  assignees,
  onSuccess,
  initialData,
}: TaskModalProps) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const { addTask, updateTask } = useMockData()

  useEffect(() => {
    if (!open) {
      setForm(INITIAL_FORM)
      return
    }

    if (mode === 'edit' && initialData) {
      setForm({
        title: initialData.title || '',
        description:
          initialData.description || '',
        tags: initialData.tags || [],
        status:
          initialData.status || 'todo',
        priority:
          initialData.priority ||
          'medium',
        assignees:
          initialData.assignees?.map(
            (u) => u.id
          ) || [],
        dueDate: initialData.dueDate
          ? dayjs(initialData.dueDate)
          : null,
        progress: initialData.progress || 0,
      })
    }
  }, [open, mode, initialData])

  const handleSubmit = async () => {
    // Validation
    if (!form.title.trim()) {
      message.error('Please enter task title')
      return
    }

    if (form.tags.length === 0) {
      message.error('Please add at least one tag')
      return
    }

    if (form.assignees.length === 0) {
      message.error('Please select at least one assignee')
      return
    }

    const selectedAssignees = assignees.filter((user) =>
      form.assignees.includes(user.id)
    )

    setLoading(true)

    // Payload
    const taskPayload = {
      title: form.title,
      description: form.description,
      tags: form.tags,
      status: form.status,
      priority: form.priority,
      assignees: selectedAssignees,
      dueDate: form.dueDate?.format('MMM DD') || '',
      progress: form.progress || 0,
    }

    // Create
    if (mode === 'create') {
      const response = await addTask(taskPayload as Omit<Task, 'id'>)

      if (!response.ok) {
        message.error(response.message || 'Failed to create task')
        setLoading(false)
        return
      }

      message.success('Task created successfully')
    }

    // Update
    if (mode === 'edit' && initialData?.id) {
      const response = await updateTask(
        initialData.id,
        taskPayload as Partial<Omit<Task, 'id'>>
      )
      if (!response.ok) {
        message.error(response.message || 'Failed to update task')
        setLoading(false)
        return
      }

      message.success('Task updated successfully')
    }

    onSuccess()
    handleClose()
    setLoading(false)
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
          <AppLabel label="Task Title" isRequire={true} />
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
          <AppLabel label="Task Description" isRequire={true} />
          <TextArea
            placeholder="Enter task description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            rows={4}
            className="
              form-textarea
            "
          />
        </div>

        {/* TAGS */}
        <div>
          <AppLabel label="Tags" isRequire={true} />
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
            <AppLabel label="Status" isRequire={true} />
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
            <AppLabel label="Priority" isRequire={true} />
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

        {/* PROGRESS */}
        <div>
          <div className="flex items-center justify-between">
            <AppLabel
              label="Progress"
              isRequire={true}
            />
            <span
              className="text-sm font-medium"
              style={{
                color: theme.colors.primary,
              }}
            >
              {form.progress}%
            </span>
          </div>
          <Slider
            min={0}
            max={100}
            value={form.progress}
            onChange={(value) =>
              setForm({
                ...form,
                progress: value,
              })
            }
            tooltip={{
              formatter: (value) =>
                `${value}%`,
            }}
          />
        </div>

        {/* DUE DATE */}
        <div>
          <AppLabel label="Due Date" isRequire={true} />
          <DatePicker
            className="form-input w-full"
            value={form.dueDate}
            onChange={(date) =>
              setForm({ ...form, dueDate: date })
            }
          />
        </div>

        {/* ASSIGNEES */}
        <div>
          <AppLabel label="Assignees" isRequire={true} />
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
            disabled={loading}
          >
            Cancel
          </AppButton>

          <AppButton
            onClick={handleSubmit}
            loading={loading}
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