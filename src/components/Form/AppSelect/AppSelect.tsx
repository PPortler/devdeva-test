import { Select } from 'antd'
import type { SelectProps } from 'antd'
import type { ReactNode } from 'react'
import { useThemeStore } from '@/stores/app/themeStore'

type AppSelectProps = {
  icon?: ReactNode
  containerClassName?: string
} & SelectProps

function AppSelect({
  icon,
  containerClassName = '',
  className = '',
  ...props
}: AppSelectProps) {
  const { theme } = useThemeStore()

  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {/* SELECT */}
      <Select
        {...props}
        className={`
          form-select
          hover:[&_.ant-select-selector]:!border-[${theme.colors.primary}]
          focus:[&_.ant-select-selector]:!border-[${theme.colors.primary}]
          ${className}
        `}
        style={{
          backgroundColor: theme.colors.header
        }}
        suffixIcon={
          icon ? (
            <div>{icon}</div>
          ) : undefined
        }
      />
    </div>
  )
}

export default AppSelect