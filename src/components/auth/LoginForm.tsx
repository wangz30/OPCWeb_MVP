import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { User, Lock, Zap, ArrowRight } from 'lucide-react'
import { Logo } from '../Logo'

interface LoginFormProps {
  onLogin: (email: string, password: string) => void
  onRegister: () => void
}

export function LoginForm({ onLogin, onRegister }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(email, password)
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo 和标题 */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="inline-flex items-center justify-center mb-6">
            <Logo size="md" showText={true} variant="light" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">欢迎回到云上OPC社区</h1>
          <p className="text-gray-300 text-lg">一人成军 · AI赋能 · 创业无限</p>
        </div>

        {/* 登录表单卡片 */}
        <Card className="bg-white/98 backdrop-blur-sm shadow-2xl animate-fadeIn">
          <CardHeader className="space-y-2 pb-4">
            <CardTitle className="text-2xl font-semibold">登录您的账户</CardTitle>
            <CardDescription>使用邮箱和密码登录,开启OPC创业之旅</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">邮箱地址</Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
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
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <span className="text-gray-600">记住我</span>
                </label>
                <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                  忘记密码?
                </a>
              </div>
              <Button type="submit" className="w-full h-11 text-base font-semibold">
                <Zap className="w-4 h-4 mr-2" />
                立即登录
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center text-sm">
                <span className="text-gray-500">还没有账号? </span>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary" onClick={onRegister}>
                  免费注册
                </Button>
              </div>
            </div>

            {/* 统计信息 */}
            <div className="mt-6 p-4 bg-gradient-primary rounded-lg text-white text-center">
              <div className="text-2xl font-bold mb-1">10,000+</div>
              <div className="text-sm text-white/90">开发者和学生已加入</div>
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
