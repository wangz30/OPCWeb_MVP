import { CheckCircle, XCircle } from 'lucide-react'

interface PasswordStrengthProps {
  password: string
}

const strengthRules = [
  { label: '至少 8 个字符', test: (p: string) => p.length >= 8 },
  { label: '包含大写字母', test: (p: string) => /[A-Z]/.test(p) },
  { label: '包含小写字母', test: (p: string) => /[a-z]/.test(p) },
  { label: '包含数字', test: (p: string) => /[0-9]/.test(p) },
  { label: '包含特殊字符', test: (p: string) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
]

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const passedRules = strengthRules.filter(rule => rule.test(password))
  const strength = passedRules.length
  
  const getStrengthColor = (level: number) => {
    if (level <= 1) return 'bg-red-500'
    if (level <= 2) return 'bg-orange-500'
    if (level <= 3) return 'bg-yellow-500'
    if (level <= 4) return 'bg-green-400'
    return 'bg-green-500'
  }

  const getStrengthText = (level: number) => {
    if (level <= 1) return '很弱'
    if (level <= 2) return '弱'
    if (level <= 3) return '中等'
    if (level <= 4) return '强'
    return '非常强'
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ${getStrengthColor(strength)}`}
            style={{ width: `${(strength / 5) * 100}%` }}
          />
        </div>
        <span className={`text-xs font-medium ${
          strength <= 1 ? 'text-red-500' :
          strength <= 2 ? 'text-orange-500' :
          strength <= 3 ? 'text-yellow-500' :
          'text-green-500'
        }`}>
          {getStrengthText(strength)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-1">
        {strengthRules.map((rule, index) => {
          const passed = rule.test(password)
          return (
            <div 
              key={index}
              className={`flex items-center gap-1 text-xs ${
                passed ? 'text-green-600 dark:text-green-400' : 'text-slate-400'
              }`}
            >
              {passed ? (
                <CheckCircle className="w-3 h-3" />
              ) : (
                <XCircle className="w-3 h-3" />
              )}
              <span>{rule.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
