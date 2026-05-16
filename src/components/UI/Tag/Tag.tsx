import { theme } from '@/constants/theme/theme'

type TagProps = {
  label: string
  variant?: 'default' | 'todo' | 'feature' | 'low' | 'medium' | 'high' | 'doing' | 'done' | 'all'
  size?: 'sm' | 'md' | 'lg'
}

const variantColors = {
  default: theme.colors.primary,
  todo: theme.colors.todoTag,
  feature: theme.colors.featureTag,
  low: theme.colors.lowPriorityTag,
  medium: theme.colors.mediumPriorityTag,
  high: theme.colors.highPriorityTag,
  doing: theme.colors.doingTag,
  done: theme.colors.doneTag,
  all: theme.colors.primary,
}

const variantTextColors = {
  default: theme.colors.textPrimary,
  todo: theme.colors.todoTagText,
  feature: theme.colors.featureTagText,
  low: theme.colors.lowPriorityTagText,
  medium: theme.colors.mediumPriorityTagText,
  high: theme.colors.highPriorityTagText,
  doing: theme.colors.doingTagText,
  done: theme.colors.doneTagText,
  all: theme.colors.textPrimary,
}

const sizeClasses = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
}

function Tag({ label, variant = 'default', size = 'md' }: TagProps) {
  return (
    <span
      className={`rounded-full font-medium flex items-center w-fit ${sizeClasses[size]} px-2`}
      style={{
        backgroundColor: variantColors[variant],
        color: variantTextColors[variant],
      }}
    >
      {label}
    </span>
  )
}

export default Tag
