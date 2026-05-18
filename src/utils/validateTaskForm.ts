type TaskFormData = {
  title: string
  tags: string[]
  assignees: string[]
}

export function validateTaskForm(form: TaskFormData) {
  if (!form.title.trim()) {
    return 'Please enter task title'
  }

  if (!form.tags.length) {
    return 'Please add at least one tag'
  }

  if (!form.assignees.length) {
    return 'Please select at least one assignee'
  }

  return null
}