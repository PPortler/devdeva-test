import type { InputProps } from 'antd'
import { Input } from 'antd'
import type { LucideIcon } from 'lucide-react'
import { theme } from '@/constants/theme/theme'

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