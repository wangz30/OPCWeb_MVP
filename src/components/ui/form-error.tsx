import { AlertCircle, X } from 'lucide-react'
import { useState } from 'react'

interface FormErrorProps {
  message: string
  type?: 'error' | 'warning' | 'info'
  dismissible?: boolean
  onDismiss?: () => void
}

export function FormError({ 
  message, 
  type = 'error', 
  dismissible = true,
  onDismiss 
}: FormErrorProps) {
  const [isVisible, setIsVisible] = useState(true)

  const styles = {
    error: {
      container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      icon: 'text-red-500',
      text: 'text-red-700 dark:text-red-400',
    },
    warning: {
      container: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
      icon: 'text-amber-500',
      text: 'text-amber-700 dark:text-amber-400',
    },
    info: {
      container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      icon: 'text-blue-500',
      text: 'text-blue-700 dark:text-blue-400',
    },
  }

  const style = styles[type]

  if (!isVisible) return null

  return (
    <div
      className={`
        flex items-start gap-2 p-3 rounded-lg border
        ${style.container}
      `}
    >
      <AlertCircle className={`w-4 h-4 mt-0.5 ${style.icon}`} />
      <p className={`flex-1 text-sm ${style.text}`}>{message}</p>
      {dismissible && (
        <button
          onClick={() => {
            setIsVisible(false)
            onDismiss?.()
          }}
          className={`${style.icon} hover:opacity-70 transition-opacity`}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
