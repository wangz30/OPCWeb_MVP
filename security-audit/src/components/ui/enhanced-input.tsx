import { forwardRef, useState } from 'react'
import { Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface EnhancedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  showPasswordToggle?: boolean
  isValid?: boolean
}

const EnhancedInput = forwardRef<HTMLInputElement, EnhancedInputProps>(
  ({ 
    className, 
    label, 
    error, 
    helperText, 
    leftIcon, 
    rightIcon, 
    showPasswordToggle,
    isValid,
    type,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'
    const inputType = isPassword && showPassword ? 'text' : type

    return (
      <div className="space-y-1.5">
        {label && (
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              {leftIcon}
            </div>
          )}

          <input
            type={inputType}
            className={cn(
              "flex h-11 w-full rounded-lg",
              "border bg-white dark:bg-slate-800",
              "px-4 py-2 text-sm",
              "transition-all duration-200",
              "placeholder:text-slate-400",
              "border-slate-200 dark:border-slate-700",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              isValid && !error && "border-green-500 focus:border-green-500 focus:ring-green-500/20",
              !error && !isValid && "focus:border-purple-500 focus:ring-purple-500/20",
              leftIcon && "pl-10",
              (rightIcon || showPasswordToggle) && "pr-10",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {isValid && !error && (
              <CheckCircle className="w-4 h-4 text-green-500" />
            )}
            {error && (
              <AlertCircle className="w-4 h-4 text-red-500" />
            )}
            {showPasswordToggle && isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>

        {(error || helperText) && (
          <p className={cn(
            "text-xs",
            error ? "text-red-500" : "text-slate-500"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

EnhancedInput.displayName = "EnhancedInput"

export { EnhancedInput }
