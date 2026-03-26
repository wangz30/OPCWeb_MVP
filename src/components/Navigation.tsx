import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Logo } from './Logo'
import {
  Home,
  Cpu,
  Database,
  Cloud,
  Building,
  FileText,
  BookOpen,
  Briefcase,
  Calendar,
  User,
  LogOut,
  Search,
  Settings,
  Store,
  Users,
  Info,
  Sparkles,
  GraduationCap,
  Video,
  MessageSquare,
  History,
  QrCode,
  Lightbulb
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { path: '/', label: '首页', icon: Home },
  { 
    path: '/products', 
    label: '产品', 
    icon: Sparkles,
    children: [
      { path: '/models', label: 'AI模型', icon: Cpu },
      { path: '/data-apis', label: '数据API', icon: Database },
      { path: '/cloud-resources', label: '云资源', icon: Cloud },
    ],
    isLandingPage: true
  },
  { 
    path: '/solutions', 
    label: '解决方案', 
    icon: Lightbulb,
    children: [
      { path: '/policies', label: '信息与政策赋能', icon: FileText },
      { path: '/ai-cloud-resources', label: 'AI 技术与云资源', icon: Cloud },
      { path: '/resources', label: '全维度资源与能力升级', icon: Briefcase },
    ],
    isLandingPage: true
  },
  { path: '/marketplace', label: '应用集市', icon: Store },
  { 
    path: '/activities', 
    label: '培训活动', 
    icon: Calendar,
    children: [
      { path: '/events/review', label: '活动回顾', icon: History },
    ]
  },
  { path: '/about', label: '关于我们', icon: Info },
]

interface NavigationProps {
  isAuthenticated: boolean
  user?: { name: string }
  onLogout: () => void
}

export function Navigation({ isAuthenticated, user, onLogout }: NavigationProps) {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery)
    }
  }

  return (
    <nav style={{
      background: 'rgba(15, 23, 41, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(71, 85, 105, 0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '0.75rem 0',
      width: '100%',
      left: 0,
      right: 0
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 20px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: '100%'
        }}>
          {/* Logo - 固定宽度 */}
          <Link to="/" className="flex items-center" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', minWidth: '240px', flexShrink: 0, marginRight: '1rem' }}>
            <Logo size="md" showText={true} variant="dark" />
          </Link>

          {/* 桌面端导航 - 居中显示 */}
          <div className="hidden lg:flex items-center justify-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', flex: '1', maxWidth: '720px', margin: '0 1rem' }}>
            {navItems.slice(0, 6).map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              const hasChildren = item.children && item.children.length > 0
              
              return (
                <div 
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.path)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={item.path}>
                    <Button
                      variant="ghost"
                      size="sm"
                      style={{ 
                        color: isActive ? '#6C63FF' : '#CBD5E1',
                        background: isActive ? 'rgba(108, 99, 255, 0.1)' : 'transparent',
                        fontWeight: 500,
                        padding: '10px 12px',
                        minWidth: '96px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <Icon style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                      {item.label}
                      {hasChildren && (
                        <svg style={{ width: '14px', height: '14px', marginLeft: '2px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Button>
                  </Link>
                  
                  {/* 下拉菜单 */}
                  {hasChildren && activeDropdown === item.path && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      minWidth: '180px',
                      background: '#1E293B',
                      border: '1px solid #475569',
                      borderRadius: '8px',
                      padding: '8px 0',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                      zIndex: 100
                    }}>
                      {item.children.map((child) => (
                        <Link 
                          key={child.path} 
                          to={child.path}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 16px',
                            color: '#CBD5E1',
                            textDecoration: 'none',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background = 'rgba(108, 99, 255, 0.1)'
                            e.currentTarget.style.color = '#6C63FF'
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.color = '#CBD5E1'
                          }}
                        >
                          <child.icon className="w-4 h-4" style={{ width: '16px', height: '16px' }} />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* 右侧区域：搜索框 + 登录注册 */}
          <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            {/* 搜索框 */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center" style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '4px 12px', border: '1px solid #475569' }}>
              <Search className="w-4 h-4" style={{ width: '16px', height: '16px', color: '#94A3B8' }} />
              <input 
                type="text" 
                placeholder="搜索资源、话题、活动、AI 工具" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  outline: 'none',
                  color: '#F1F5F9',
                  padding: '4px 8px',
                  width: '240px',
                  fontSize: '13px'
                }}
              />
            </form>

            {/* 用户操作区 */}
            <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {isAuthenticated ? (
                <>
                  <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full" 
                    style={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      padding: '6px 16px', 
                      borderRadius: '9999px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 700
                    }}>
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#F1F5F9' }}>{user?.name}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={onLogout} className="gap-2" style={{ color: '#CBD5E1' }}>
                    <LogOut className="w-4 h-4" style={{ width: '16px', height: '16px' }} />
                    <span className="hidden sm:inline">退出</span>
                  </Button>
                </>
              ) : (
                // 在所有前端页面都显示登录/注册按钮
                <Link to="/login">
                  <Button size="sm" variant="ghost" style={{ color: '#CBD5E1' }}>
                    登录/注册
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
