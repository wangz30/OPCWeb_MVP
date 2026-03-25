import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { User, Lock, Mail, Zap, ArrowRight, Check } from 'lucide-react'
import { Logo } from '../Logo'

interface RegisterFormProps {
  onRegister: (name: string, email: string, password: string, role: string) => void
  onBackToLogin: () => void
}

export function RegisterForm({ onRegister, onBackToLogin }: RegisterFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('developer')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onRegister(name, email, password, role)
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo 和标题 */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="inline-flex items-center justify-center mb-6">
            <Logo size="md" showText={true} variant="light" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">加入云上OPC社区</h1>
          <p className="text-gray-300 text-lg">一人成军 · AI赋能 · 创业无限</p>
        </div>

        {/* 注册表单卡片 */}
        <Card className="bg-white/98 backdrop-blur-sm shadow-2xl animate-fadeIn">
          <CardHeader className="space-y-2 pb-4">
            <CardTitle className="text-2xl font-semibold">创建您的账户</CardTitle>
            <CardDescription>填写信息,开启您的OPC创业之旅</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">您的姓名</Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="请输入您的姓名"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">邮箱地址</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">密码</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="至少6位字符"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-11"
                    required
                    minLength={6}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">您的身份</Label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'developer', label: '开发者', icon: '💻', desc: '技术驱动' },
                    { value: 'student', label: '学生', icon: '🎓', desc: '学习成长' },
                    { value: 'other', label: '其他', icon: '🚀', desc: '创业者' }
                  ].map((r) => (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => setRole(r.value)}
                      className={`relative p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                        role === r.value
                          ? 'border-primary bg-primary-bg'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="text-2xl mb-1">{r.icon}</div>
                      <div className="text-sm font-medium">{r.label}</div>
                      <div className="text-xs text-gray-500">{r.desc}</div>
                      {role === r.value && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>注册即表示您同意我们的《服务条款》和《隐私政策》</span>
              </div>
              <Button type="submit" className="w-full h-11 text-base font-semibold">
                <Zap className="w-4 h-4 mr-2" />
                立即注册
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center text-sm">
                <span className="text-gray-500">已有账号? </span>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary" onClick={onBackToLogin}>
                  立即登录
                </Button>
              </div>
            </div>

            {/* 优势说明 */}
            <div className="mt-6 p-4 bg-gradient-primary rounded-lg text-white">
              <div className="text-sm font-semibold mb-2">加入即可享受</div>
              <div className="space-y-1 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <Check className="w-3 h-3" />
                  AI模型免费额度
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3 h-3" />
                  云资源体验券
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3 h-3" />
                  免费培训课程
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 底部信息 */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© 2024 云上OPC社区 · 一人成军 · AI赋能</p>
        </div>
      </div>
    </div>
  )
}
