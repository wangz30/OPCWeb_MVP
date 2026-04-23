import { useState, useEffect } from 'react'

export function Footer() {
  const [isMobile, setIsMobile] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const AccordionHeader = ({ title, icon, section, defaultOpen = false }: { title: string; icon: string; section: string; defaultOpen?: boolean }) => {
    const isOpen = defaultOpen ? true : openSections[section]
    
    return (
      <button
        onClick={() => isMobile && toggleSection(section)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isMobile ? '12px 0' : '0',
          background: 'transparent',
          cursor: isMobile ? 'pointer' : 'default',
          pointerEvents: isMobile ? 'auto' : 'none',
          border: 'none',
          marginBottom: isMobile ? '0' : '0',
        }}
        aria-expanded={isMobile ? isOpen : undefined}
      >
        <h4 style={{ 
          color: '#F1F5F9', 
          marginBottom: isMobile ? '0' : '1rem', 
          fontSize: '1.1rem', 
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span>{icon}</span>
          <span>{title}</span>
        </h4>
        {isMobile && (
          <span style={{ 
            fontSize: '1.2rem', 
            color: '#94A3B8', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
            transition: 'transform 0.3s ease'
          }}>
            ▼
          </span>
        )}
      </button>
    )
  }

  const AccordionContent = ({ children, section, defaultOpen = false }: { children: React.ReactNode; section: string; defaultOpen?: boolean }) => {
    const isOpen = defaultOpen ? true : openSections[section]
    
    if (!isMobile) return <>{children}</>
    
    return (
      <div style={{
        maxHeight: isOpen ? '600px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out',
        opacity: isOpen ? 1 : 0,
      }}>
        <div style={{ paddingTop: '0.75rem', paddingBottom: '1rem' }}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <footer style={{ 
      background: 'rgba(15, 23, 41, 0.95)', 
      borderTop: '1px solid #475569', 
      padding: isMobile ? '2rem 0' : '3rem 0', 
      marginTop: '4rem',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', 
          gap: isMobile ? '0' : '1.5rem' 
        }}>
          
          {/* 社区信息 - 移动端始终展开 */}
          <div style={{ 
            paddingBottom: isMobile ? '1rem' : '0',
            borderBottom: isMobile ? '1px solid rgba(71, 85, 105, 0.3)' : 'none',
            marginBottom: isMobile ? '0.5rem' : '0'
          }}>
            <AccordionHeader title="云上 OPC 社区" icon="🏢" section="brand" defaultOpen={true} />
            <AccordionContent section="brand" defaultOpen={true}>
              <p style={{ color: '#CBD5E1', fontSize: isMobile ? '0.85rem' : '0.9rem', marginBottom: '0.3rem', lineHeight: '1.6' }}>
                AI 驱动的一人公司创业平台
              </p>
              <p style={{ color: '#CBD5E1', fontSize: isMobile ? '0.85rem' : '0.9rem', marginBottom: '0.3rem', lineHeight: '1.6' }}>
                深圳国家高技术产业创新中心
              </p>
              <p style={{ color: '#CBD5E1', fontSize: isMobile ? '0.85rem' : '0.9rem', marginBottom: isMobile ? '0.5rem' : '0.5rem', lineHeight: '1.6' }}>
                粤港澳大湾区大数据中心
              </p>
              <p style={{ color: '#94A3B8', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
                © 2026 云上 OPC 社区 版权所有
              </p>
            </AccordionContent>
          </div>
          
          {/* 服务支持 - 移动端可折叠 */}
          <div style={{ 
            borderTop: isMobile ? '1px solid rgba(71, 85, 105, 0.3)' : 'none', 
            paddingTop: isMobile ? '1rem' : '0',
            paddingBottom: isMobile ? '1rem' : '0',
            borderBottom: isMobile ? '1px solid rgba(71, 85, 105, 0.3)' : 'none',
            marginBottom: isMobile ? '0.5rem' : '0'
          }}>
            <AccordionHeader title="服务支持" icon="📞" section="support" />
            <AccordionContent section="support">
              {!isMobile && (
                <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                  工作时间：<br />
                  周一至周五 9:00 - 18:00
                </p>
              )}
              <a 
                href="mailto:gbanexus@hiic.com.cn" 
                style={{ 
                  color: '#A5B4FC', 
                  fontSize: isMobile ? '0.95rem' : '1rem', 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontWeight: 500,
                  padding: isMobile ? '12px 16px' : '10px 16px',
                  background: 'rgba(108, 99, 255, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(108, 99, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  minWidth: isMobile ? '100%' : 'auto',
                  minHeight: isMobile ? '48px' : 'auto',
                }}
                onMouseOver={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = 'rgba(108, 99, 255, 0.2)'
                    e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.4)'
                  }
                }}
                onMouseOut={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = 'rgba(108, 99, 255, 0.1)'
                    e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.2)'
                  }
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                gbanexus@hiic.com.cn
              </a>
            </AccordionContent>
          </div>
          
          {/* 快速链接 */}
          <div style={{ 
            borderTop: isMobile ? '1px solid rgba(71, 85, 105, 0.3)' : 'none', 
            paddingTop: isMobile ? '1rem' : '0',
            paddingBottom: isMobile ? '1rem' : '0',
            borderBottom: isMobile ? '1px solid rgba(71, 85, 105, 0.3)' : 'none',
            marginBottom: isMobile ? '0.5rem' : '0'
          }}>
            <AccordionHeader title="快速链接" icon="🔗" section="links" />
            <AccordionContent section="links">
              {isMobile ? (
                /* 移动端：单列显示 */
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="/cloud-resources" style={{ color: '#CBD5E1', fontSize: '1rem', textDecoration: 'none', display: 'block', padding: '10px 0', minHeight: '44px', lineHeight: '44px' }}>云资源服务</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="/ai-models" style={{ color: '#CBD5E1', fontSize: '1rem', textDecoration: 'none', display: 'block', padding: '10px 0', minHeight: '44px', lineHeight: '44px' }}>AI 模型服务</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="/data-apis" style={{ color: '#CBD5E1', fontSize: '1rem', textDecoration: 'none', display: 'block', padding: '10px 0', minHeight: '44px', lineHeight: '44px' }}>数据 API 服务</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="/" style={{ color: '#CBD5E1', fontSize: '1rem', textDecoration: 'none', display: 'block', padding: '10px 0', minHeight: '44px', lineHeight: '44px' }}>首页</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="/about" style={{ color: '#CBD5E1', fontSize: '1rem', textDecoration: 'none', display: 'block', padding: '10px 0', minHeight: '44px', lineHeight: '44px' }}>关于我们</a>
                  </li>
                </ul>
              ) : (
                /* 桌面端：双列显示 */
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <a href="/cloud-resources" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>云资源服务</a>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <a href="/ai-models" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>AI 模型服务</a>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <a href="/data-apis" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>数据 API 服务</a>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <a href="/space" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>创客空间入驻</a>
                    </li>
                  </ul>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <a href="/" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>首页</a>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <a href="/about" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>关于我们</a>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <a href="/policy" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>新闻资讯</a>
                    </li>
                  </ul>
                </div>
              )}
            </AccordionContent>
          </div>
          
          {/* 关注我们 - 移动端隐藏二维码 */}
          {!isMobile ? (
            <div style={{ textAlign: 'center' }}>
              <img
                src="/Pic4Wechet/1.jpg"
                alt="微信公众号二维码"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '12px',
                  display: 'block',
                  margin: '0 auto 0.5rem',
                  border: '2px solid rgba(108, 99, 255, 0.3)'
                }}
              />
              <p style={{ color: '#A5B4FC', fontSize: '0.9rem', fontWeight: 600 }}>
                GBAnexus 官方微信
              </p>
            </div>
          ) : (
            <div style={{ 
              textAlign: 'center',
              borderTop: '1px solid rgba(71, 85, 105, 0.3)',
              paddingTop: '1rem'
            }}>
              <h4 style={{ 
                color: '#F1F5F9', 
                marginBottom: '0.75rem', 
                fontSize: '1.1rem', 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <span>💬</span>
                <span>关注我们</span>
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: '1.6' }}>
                搜索微信公众号 <span style={{ color: '#A5B4FC', fontWeight: 500 }}>GBAnexus</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 回到顶部按钮 - 仅移动端显示 */}
      {isMobile && showBackToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(108, 99, 255, 0.4)',
            transition: 'all 0.3s ease',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease',
          }}
          aria-label="回到顶部"
        >
          ↑
        </button>
      )}

      {/* 添加动画样式 */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  )
}
