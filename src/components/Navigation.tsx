import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Logo } from './Logo'
import {
  Home,
  Database,
  Cloud,
  Building,
  Cpu,
  FileText,
  Info,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { path: '/', label: '首页', icon: Home },
  { path: '/cloud-resources', label: '云资源服务', icon: Cloud },
  { path: '/ai-models', label: 'AI 模型服务', icon: Cpu },
  { path: '/data-apis', label: '数据 API 服务', icon: Database },
  { path: '/space', label: '创客空间入驻', icon: Building },
  { path: '/policy', label: '新闻资讯', icon: FileText },
  { path: '/about', label: '关于我们', icon: Info },
]

export function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        padding: '0 1rem',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: '100%'
        }}>
          {/* Logo */}
          <Link to="/" className="flex items-center" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', minWidth: '200px', maxWidth: '280px', flexShrink: 0, marginRight: '0.5rem' }}>
            <Logo size="lg" showText={true} variant="dark" />
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden lg:flex items-center justify-end" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', flex: '1', marginLeft: 'auto' }}>
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link to={item.path} key={item.path}>
                  <Button
                    variant="ghost"
                    size="sm"
                    style={{ 
                      color: isActive ? '#6C63FF' : '#CBD5E1',
                      background: isActive ? 'rgba(108, 99, 255, 0.1)' : 'transparent',
                      fontWeight: 500,
                      padding: '8px 10px',
                      minWidth: 'auto',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <Icon style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* 移动端菜单按钮 */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            className="lg:hidden"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#CBD5E1',
              padding: '0.75rem',
              cursor: 'pointer',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              minWidth: '44px',
              minHeight: '44px'
            }}
            aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
            type="button"
          >
            {mobileMenuOpen ? (
              <X style={{ width: '24px', height: '24px' }} />
            ) : (
              <Menu style={{ width: '24px', height: '24px' }} />
            )}
          </button>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(15, 23, 41, 0.98)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(71, 85, 105, 0.3)',
            padding: '1rem',
            zIndex: 9998,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                
                return (
                  <Link 
                    to={item.path} 
                    key={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      background: isActive ? 'rgba(108, 99, 255, 0.1)' : 'transparent',
                      color: isActive ? '#6C63FF' : '#CBD5E1',
                      fontWeight: 500,
                      fontSize: '1rem',
                      minHeight: '44px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(108, 99, 255, 0.15)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = isActive ? 'rgba(108, 99, 255, 0.1)' : 'transparent'
                    }}
                  >
                    <Icon style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
