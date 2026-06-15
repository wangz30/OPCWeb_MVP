import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning'
}

function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  const variantStyles = {
    default: 'bg-primary-bg text-primary-dark border border-primary/20',
    secondary: 'bg-gray-100 text-gray-600',
    outline: 'text-gray-600 border border-gray-300',
    success: 'bg-green-50 text-green-700 border border-green-200',
    warning: 'bg-orange-50 text-orange-700 border border-orange-200',
  }

  const style = `inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none ${variantStyles[variant]} ${className}`

  return <div className={style} {...props} />
}

export { Badge }
