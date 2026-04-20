import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Logo } from './Logo'
import {
  Home,
  Database,
  Cloud,
  Building,
  Info
} from 'lucide-react'

const navItems = [
  { path: '/', label: '首页', icon: Home },
  { path: '/data-apis', label: '数据 API 服务', icon: Database },
  { path: '/cloud-resources', label: '云资源服务', icon: Cloud },
  { path: '/space', label: '创客空间入驻', icon: Building },
  { path: '/about', label: '关于我们', icon: Info },
]

export function Navigation() {
  const location = useLocation()

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
          {/* Logo */}
          <Link to="/" className="flex items-center" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', minWidth: '280px', flexShrink: 0, marginRight: '1rem' }}>
            <Logo size="lg" showText={true} variant="dark" />
          </Link>

          {/* 桌面端导航 - 靠右显示 */}
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
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
