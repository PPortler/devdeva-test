import type { ButtonProps } from 'antd'
import { Button } from 'antd'
import type { ReactNode } from 'react'
import { theme } from '@/constants/theme/theme'

type AppButtonProps = {
  icon?: ReactNode
  loading?: boolean
  fullWidth?: boolean
  backgroundColor?: string
  textColor?: string
  disabled?: boolean
} & ButtonProps

function AppButton({
  icon,
  loading,
  fullWidth,
  backgroundColor,
  textColor,
  className = '',
  children,
  disabled,
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
        ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:opacity-95'}
      `}
      style={{
        background: backgroundColor || theme.colors.primary,
        color: textColor || theme.colors.textPrimary,
      }}
      disabled={disabled}
      {...props}
    >
      {loading ? '' : icon}
      {children}
    </Button>
  )
}

export default AppButton