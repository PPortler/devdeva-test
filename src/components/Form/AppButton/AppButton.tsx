import type { ButtonProps } from 'antd'
import { Button } from 'antd'
import type { ReactNode } from 'react'
import { dashboardTheme } from '@/constants/dashboard/dashboard-theme'

type AppButtonProps = {
  icon?: ReactNode
  loading?: boolean
  fullWidth?: boolean
  backgroundColor?: string
  textColor?: string
} & ButtonProps

function AppButton({
  icon,
  loading,
  fullWidth,
  backgroundColor,
  textColor,
  className = '',
  children,
  ...props
}: AppButtonProps) {
  return (
    <Button
      {...props}
      loading={loading}
      className={`
        form-button
        ${fullWidth ? '!w-full' : ''}
        ${className}
      `}
      style={{
        background: backgroundColor || dashboardTheme.colors.primary,
        color: textColor || dashboardTheme.colors.textPrimary,
      }}
      {...props}
    >
      {loading ? '' : icon}
      {children}
    </Button>
  )
}

export default AppButton