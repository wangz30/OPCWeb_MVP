import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'default' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'default', ...props }, ref) => {
    const baseStyle = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed gap-2"

    const variantStyles = {
      primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-md hover:-translate-y-px",
      secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400",
      ghost: "hover:bg-gray-100 text-gray-600",
      outline: "border-2 border-primary text-primary hover:bg-primary-bg",
    }

    const sizeStyles = {
      sm: "h-8 px-3 text-sm",
      default: "h-9 px-4 text-sm",
      lg: "h-10 px-6 text-base",
    }

    const style = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

    return (
      <button className={style} ref={ref} {...props} />
    )
  }
)
Button.displayName = "Button"

export { Button }
