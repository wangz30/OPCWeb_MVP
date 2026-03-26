import { useState } from 'react'
import { Zap, Gift, Check, Code, GraduationCap, Rocket, Cloud, BookOpen, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FormError } from '@/components/ui/form-error'
import { PasswordStrength } from './password-strength'

interface RegisterFormProps {
  onRegister: (name: string, email: string, password: string, role: string) => void
  onBackToLogin: () => void
}

const roleOptions = [
  { value: 'developer', label: '开发者', icon: Code, desc: '技术驱动' },
  { value: 'student', label: '学生', icon: GraduationCap, desc: '学习成长' },
  { value: 'entrepreneur', label: '创业者', icon: Rocket, desc: '事业起航' },
]

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function RegisterForm({ onRegister, onBackToLogin }: RegisterFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('developer')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return '请输入您的姓名'
        if (value.length < 2) return '姓名至少 2 个字符'
        return null
      case 'email':
        if (!value) return '请输入邮箱地址'
        if (!isValidEmail(value)) return '请输入有效的邮箱地址'
        return null
      case 'password':
        if (!value) return '请设置密码'
        if (value.length < 8) return '密码至少需要 8 个字符'
        return null
      default:
        return null
    }
  }

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    const value = field === 'name' ? name : field === 'email' ? email : password
    const error = validateField(field, value)
    setErrors(prev => ({ ...prev, [field]: error || '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    const newErrors: Record<string, string> = {}
    const nameErr = validateField('name', name)
    const emailErr = validateField('email', email)
    const passwordErr = validateField('password', password)
    
    if (nameErr) newErrors.name = nameErr
    if (emailErr) newErrors.email = emailErr
    if (passwordErr) newErrors.password = passwordErr
    
    if (!agreedToTerms) {
      newErrors.terms = '请阅读并同意服务条款和隐私政策'
    }
    
    setErrors(newErrors)
    setTouched({ name: true, email: true, password: true, terms: true })
    
    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 800))
    onRegister(name, email, password, role)
    setIsLoading(false)
  }

  const benefits = [
    { icon: Gift, text: 'AI 模型免费额度', color: 'text-purple-400', bgColor: 'bg-purple-500/20' },
    { icon: Cloud, text: '云资源体验券', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
    { icon: BookOpen, text: '免费培训课程', color: 'text-green-400', bgColor: 'bg-green-500/20' },
    { icon: Users, text: '专属技术社群', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
  ]

  return (
    <div className="login-page-bg relative overflow-hidden">
      <div className="glow-orb glow-orb-primary" style={{ right: '-100px', left: 'auto' }} />
      <div className="glow-orb glow-orb-secondary" style={{ left: '-50px', right: 'auto' }} />
      <div className="absolute inset-0 subtle-grid" />
      
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center relative z-10 py-12">
        <div className="w-full max-w-lg">
          <div className="login-card form-field-enter" style={{ animationDelay: '0ms' }}>
            <div className="gradient-bar" />
            <div className="p-8">
              <div className="space-y-2 pb-6">
                <h2 className="text-2xl font-bold text-gray-50">创建您的账户</h2>
                <p className="text-gray-400 text-sm">填写信息，开启您的 OPC 创业之旅</p>
              </div>
              
              <div className="space-y-5">
                {error && <FormError message={error} onDismiss={() => setError(null)} />}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="form-field-enter" style={{ animationDelay: '100ms' }}>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">您的姓名</label>
                    <input
                      type="text"
                      placeholder="  请输入您的姓名"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={`w-full h-12 px-4 rounded-xl border text-base transition-all duration-200 bg-gray-900/80 border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      required
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-400 text-xs mt-2 bg-red-500/10 px-3 py-1.5 rounded-lg inline-block">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="form-field-enter" style={{ animationDelay: '200ms' }}>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">邮箱地址</label>
                    <input
                      type="email"
                      placeholder="  your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={`w-full h-12 px-4 rounded-xl border text-base transition-all duration-200 bg-gray-900/80 border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      required
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-400 text-xs mt-2 bg-red-500/10 px-3 py-1.5 rounded-lg inline-block">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="form-field-enter" style={{ animationDelay: '300ms' }}>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">密码</label>
                    <input
                      type="password"
                      placeholder="  至少 8 个字符"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => handleBlur('password')}
                      className={`w-full h-12 px-4 rounded-xl border text-base transition-all duration-200 bg-gray-900/80 border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      required
                    />
                    {errors.password && touched.password && (
                      <p className="text-red-400 text-xs mt-2 bg-red-500/10 px-3 py-1.5 rounded-lg inline-block">{errors.password}</p>
                    )}
                    {password && <PasswordStrength password={password} />}
                  </div>
                  
                  <div className="form-field-enter" style={{ animationDelay: '400ms' }}>
                    <label className="block text-sm font-medium text-gray-300 mb-3">您的身份 <span className="text-red-400">*</span></label>
                    <div className="grid grid-cols-3 gap-3">
                      {roleOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setRole(option.value)}
                          className={`relative p-3 rounded-xl border-2 transition-all duration-200 text-center ${role === option.value ? 'border-indigo-500 bg-indigo-500/10' : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'}`}
                        >
                          <option.icon className={`w-5 h-5 mx-auto mb-1.5 transition-transform ${role === option.value ? 'text-indigo-400' : 'text-gray-400'}`} />
                          <div className={`text-sm font-medium ${role === option.value ? 'text-indigo-300' : 'text-gray-300'}`}>{option.label}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{option.desc}</div>
                          {role === option.value && (
                            <div className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-field-enter" style={{ animationDelay: '500ms' }}>
                    <label className="flex items-start gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-indigo-500 focus:ring-indigo-500/20 focus:ring-offset-0 mt-0.5"
                      />
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        我已阅读并同意{' '}
                        <Link to="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">《服务条款》</Link>
                        和{' '}
                        <Link to="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">《隐私政策》</Link>
                      </span>
                    </label>
                    {errors.terms && touched.terms && (
                      <p className="text-red-400 text-xs mt-2 bg-red-500/10 px-3 py-1.5 rounded-lg inline-block">{errors.terms}</p>
                    )}
                  </div>

                  <div className="form-field-enter" style={{ animationDelay: '600ms' }}>
                    <button 
                      type="submit" 
                      className="w-full h-12 rounded-xl font-bold text-white transition-all duration-200 bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-lg shadow-blue-500/30"
                      disabled={isLoading}
                      style={{ opacity: isLoading ? 0.5 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          注册中...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5" />
                          立即注册 →
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="pt-4 border-t border-white/10 form-field-enter" style={{ animationDelay: '700ms' }}>
                  <div className="text-center text-sm">
                    <span className="text-gray-500">已有账号？ </span>
                    <Link to="/login" className="ml-1 text-gray-500 hover:text-gray-300 transition-colors">立即登录</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>© 2024 云上 OPC 社区 · 一人成军 · AI 赋能</p>
          </div>
        </div>
      </div>
    </div>
  )
}
