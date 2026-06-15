import { useState } from 'react'
import { Zap, Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FormError } from '@/components/ui/form-error'

interface LoginFormProps {
  onLogin: (email: string, password: string) => void
  onRegister: () => void
}

export function LoginForm({ onLogin, onRegister }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [touched, setTouched] = useState({ email: false, password: false })

  const validateEmail = (value: string) => {
    if (!value) return '请输入邮箱地址'
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!pattern.test(value)) return '请输入有效的邮箱地址'
    return null
  }

  const validatePassword = (value: string) => {
    if (!value) return '请输入密码'
    if (value.length < 6) return '密码至少需要 6 个字符'
    return null
  }

  const handleBlur = (field: 'email' | 'password') => {
    setTouched(prev => ({ ...prev, [field]: true }))
    if (field === 'email') {
      setEmailError(validateEmail(email))
    } else {
      setPasswordError(validatePassword(password))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    const emailErr = validateEmail(email)
    const passwordErr = validatePassword(password)
    
    setEmailError(emailErr)
    setPasswordError(passwordErr)
    setTouched({ email: true, password: true })
    
    if (emailErr || passwordErr) {
      return
    }

    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 800))
    onLogin(email, password)
    setIsLoading(false)
  }

  return (
    <div className="login-page-bg relative overflow-hidden">
      <div className="glow-orb glow-orb-primary" />
      <div className="glow-orb glow-orb-secondary" />
      <div className="absolute inset-0 subtle-grid" />
      
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center relative z-10 py-12">
        <div className="w-full max-w-lg">
          <div className="login-card form-field-enter" style={{ animationDelay: '0ms' }}>
            <div className="gradient-bar" />
            <div className="p-8">
              <div className="space-y-2 pb-6">
                <h2 className="text-2xl font-bold text-gray-50">登录您的账户</h2>
                <p className="text-gray-400 text-sm">使用邮箱和密码登录，开启 OPC 创业之旅</p>
              </div>
              
              <div className="space-y-5">
                {error && <FormError message={error} onDismiss={() => setError(null)} />}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="form-field-enter" style={{ animationDelay: '100ms' }}>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">邮箱地址</label>
                    <input
                      type="email"
                      placeholder="  your@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (touched.email) setEmailError(validateEmail(e.target.value))
                      }}
                      onBlur={() => handleBlur('email')}
                      className={`w-full h-12 px-4 rounded-xl border text-base transition-all duration-200 bg-gray-900/80 border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      required
                    />
                    {emailError && (
                      <p className="text-red-400 text-xs mt-2 bg-red-500/10 px-3 py-1.5 rounded-lg inline-block">{emailError}</p>
                    )}
                  </div>
                  
                  <div className="form-field-enter" style={{ animationDelay: '200ms' }}>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">密码</label>
                    <input
                      type="password"
                      placeholder="  请输入密码"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        if (touched.password) setPasswordError(validatePassword(e.target.value))
                      }}
                      onBlur={() => handleBlur('password')}
                      className={`w-full h-12 px-4 rounded-xl border text-base transition-all duration-200 bg-gray-900/80 border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${passwordError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      required
                    />
                    {passwordError && (
                      <p className="text-red-400 text-xs mt-2 bg-red-500/10 px-3 py-1.5 rounded-lg inline-block">{passwordError}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between form-field-enter" style={{ animationDelay: '300ms' }}>
                    <label className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-indigo-500 focus:ring-indigo-500/20 focus:ring-offset-0"
                      />
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">记住我</span>
                    </label>
                    <Link to="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">忘记密码？</Link>
                  </div>

                  <div className="form-field-enter" style={{ animationDelay: '400ms' }}>
                    <button 
                      type="submit" 
                      className="w-full h-12 rounded-xl font-bold text-white transition-all duration-200 bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-lg shadow-blue-500/30"
                      disabled={isLoading}
                      style={{ opacity: isLoading ? 0.5 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          登录中...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5" />
                          立即登录 →
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="pt-4 border-t border-white/10 form-field-enter" style={{ animationDelay: '500ms' }}>
                  <div className="text-center text-sm">
                    <span className="text-gray-500">还没有账号？ </span>
                    <Link to="/register" className="ml-1 text-gray-500 hover:text-gray-300 transition-colors">免费注册</Link>
                  </div>
                </div>

                <div className="form-field-enter" style={{ animationDelay: '600ms' }}>
                  <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <Gift className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-200 text-sm">新用户注册即享</div>
                        <div className="text-xs text-gray-500 mt-1">AI 模型免费额度 + 云资源体验券</div>
                      </div>
                    </div>
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
