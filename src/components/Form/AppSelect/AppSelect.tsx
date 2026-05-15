import { Select } from 'antd'
import type { SelectProps } from 'antd'
import type { ReactNode } from 'react'
import { dashboardTheme } from '@/constants/dashboard/dashboard-theme'

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

  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {/* SELECT */}
      <Select
        {...props}
        className={`
          form-select
          hover:[&_.ant-select-selector]:!border-[${dashboardTheme.colors.primary}]
          focus:[&_.ant-select-selector]:!border-[${dashboardTheme.colors.primary}]
          ${className}
        `}
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