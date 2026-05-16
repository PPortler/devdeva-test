import { theme } from '@/constants/theme/theme'

type TagProps = {
  label: string
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
}

const variantColors = {
  default: theme.colors.borderSidebar,
  primary: theme.colors.primary,
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
}

const sizeClasses = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
}

function Tag({ label, variant = 'default', size = 'md' }: TagProps) {
  return (
    <span
      className={`rounded-full font-medium flex items-center w-fit ${sizeClasses[size]}`}
      style={{
        backgroundColor: variantColors[variant],
        color: variant === 'default' ? theme.colors.textSecondary : theme.colors.textPrimary,
      }}
    >
      {label}
    </span>
  )
}

export default Tag
