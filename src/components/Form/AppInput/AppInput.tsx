import type { InputProps } from 'antd'
import { Input } from 'antd'
import type { LucideIcon } from 'lucide-react'
import { dashboardTheme } from '@/constants/dashboard/dashboard-theme'

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
        gap-2
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
                  dashboardTheme.colors
                    .textSecondary,
              }}
            />
          ) : null
        }
        className={`
          !h-8
          !rounded-md
          !border
          !shadow-none
          !transition-all
          !duration-200
          ${className}
        `}
        style={{
          color:
            dashboardTheme.colors
              .textHeader,

          borderColor: dashboardTheme.colors.textHeader,
        }}
      />
    </div>
  )
}

export default AppInput