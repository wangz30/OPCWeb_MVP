import { useState } from 'react'
import { X } from 'lucide-react'

export function Footer() {
  const [showWechatModal, setShowWechatModal] = useState(false)

  return (
    <>
      <footer style={{ 
        background: 'rgba(15, 23, 41, 0.95)', 
        borderTop: '1px solid #475569', 
        padding: '3rem 0', 
        marginTop: '4rem' 
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {/* 社区信息 */}
            <div>
              <h4 style={{ color: '#F1F5F9', marginBottom: '1rem' }}>云上 OPC 社区</h4>
              <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>AI 驱动的一人公司创业平台</p>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>深圳国家高技术产业创新中心</p>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>粤港澳大湾区大数据中心</p>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>© 2026 云上 OPC 社区 版权所有</p>
            </div>
            
            {/* 服务支持 */}
            <div>
              <h4 style={{ color: '#F1F5F9', marginBottom: '1rem' }}>服务支持</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                如有任何问题或合作意向，欢迎随时联系我们。我们将尽快为您解答并提供支持。
              </p>
              <a 
                href="mailto:contact@opc-cloud.com" 
                style={{ 
                  color: '#A5B4FC', 
                  fontSize: '1rem', 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 500,
                  padding: '10px 16px',
                  background: 'rgba(108, 99, 255, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(108, 99, 255, 0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(108, 99, 255, 0.2)'
                  e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(108, 99, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.2)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                contact@opc-cloud.com
              </a>
            </div>
            
            {/* 快速链接 */}
            <div>
              <h4 style={{ color: '#F1F5F9', marginBottom: '1rem' }}>快速链接</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/data-apis" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>数据 API 服务</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/cloud-resources" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>云资源服务</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/space" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>创客空间入驻</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/about" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>关于我们</a>
                </li>
              </ul>
            </div>
            
            {/* 关注我们 */}
            <div>
              <h4 style={{ color: '#F1F5F9', marginBottom: '1rem' }}>关注我们</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {/* 微信公众号 - 点击弹窗 */}
                <div 
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(255, 101, 132, 0.1))',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setShowWechatModal(true)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(108, 99, 255, 0.2), rgba(255, 101, 132, 0.15))'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(255, 101, 132, 0.1))'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                  <div style={{ fontSize: '2rem' }}>📱</div>
                  <span style={{ color: '#CBD5E1', fontSize: '0.75rem', textAlign: 'center', marginTop: '0.25rem' }}>微信公众号</span>
                </div>
                
                {/* 官方网站 - 跳转首页 */}
                <a href="/" style={{ textDecoration: 'none' }}>
                  <div style={{ 
                    width: '100px', 
                    height: '100px', 
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.15))'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                    <div style={{ fontSize: '2rem' }}>💻</div>
                    <span style={{ color: '#CBD5E1', fontSize: '0.75rem', textAlign: 'center', marginTop: '0.25rem' }}>官方网站</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 微信公众号弹窗 */}
      {showWechatModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1E293B 0%, #0F1729 100%)',
            borderRadius: '16px',
            padding: '2.5rem',
            textAlign: 'center',
            border: '1px solid rgba(108, 99, 255, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            maxWidth: '400px',
            margin: '20px',
            position: 'relative'
          }}>
            {/* 关闭按钮 */}
            <button
              onClick={() => setShowWechatModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#94A3B8',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.color = '#F1F5F9'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.color = '#94A3B8'
              }}>
              <X style={{ width: '20px', height: '20px' }} />
            </button>

            {/* 弹窗内容 */}
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📱</div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 700, 
              color: '#F1F5F9', 
              marginBottom: '1rem' 
            }}>
              关注官方微信公众号
            </h3>
            <p style={{ 
              color: '#94A3B8', 
              fontSize: '1.1rem',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              微信搜索 <span style={{ color: '#A5B4FC', fontWeight: 600 }}>GBAnexus</span><br />关注官方微信公众号
            </p>
            <button
              onClick={() => setShowWechatModal(false)}
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #8A84FF 100%)',
                border: 'none',
                color: 'white',
                padding: '12px 48px',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(108, 99, 255, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(108, 99, 255, 0.4)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(108, 99, 255, 0.3)'
              }}>
              我知道了
            </button>
          </div>
        </div>
      )}
    </>
  )
}
