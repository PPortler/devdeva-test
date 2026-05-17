import type { InputProps } from 'antd'
import { Input } from 'antd'
import type { LucideIcon } from 'lucide-react'
import { useThemeStore } from '@/stores/app/themeStore'

type AppInputProps = {
  icon?: LucideIcon
  containerClassName?: string
} & InputProps

function AppInput({
  icon: Icon,
  value,
  onChange,
  className = '',
  containerClassName = '',
  ...props
}: AppInputProps) {
  const { theme } = useThemeStore()

  return (
    <div
      className={`
        flex
        flex-col
        ${containerClassName}
      `}
    >
      {/* INPUT */}
      <Input
        {...props}
        value={value}
        onChange={onChange}
        prefix={
          Icon ? (
            <Icon
              size={18}
              style={{
                color:
                  theme.colors
                    .textSecondary,
              }}
            />
          ) : null
        }
        className={`
          form-input
          ${className}
        `}
      />
    </div>
  )
}

export default AppInput