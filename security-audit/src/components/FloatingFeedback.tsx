import { useState } from 'react'
import { X, QrCode, Headphones } from 'lucide-react'

// 联系我们组件
function ContactPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        width: '320px',
        background: '#1E293B',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        border: '1px solid #334155',
        overflow: 'hidden',
      }}
    >
      {/* 头部 */}
      <div
        style={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 600, margin: 0 }}>
            联系我们
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', margin: '4px 0 0 0' }}>
            获取更多帮助
          </p>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            borderRadius: '8px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X style={{ width: '18px', height: '18px', color: 'white' }} />
        </button>
      </div>

      {/* 内容区域 */}
      <div style={{ padding: '20px' }}>
        {/* 联系邮箱 */}
        <div
          style={{
            background: '#0F172A',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#10B98120',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <p style={{ color: '#94A3B8', fontSize: '0.75rem', margin: 0 }}>联系邮箱</p>
              <a 
                href="mailto:gbanexus@hiic.com.cn" 
                style={{ 
                  color: '#F1F5F9', 
                  fontSize: '0.95rem', 
                  fontWeight: 500, 
                  margin: '2px 0 0',
                  textDecoration: 'none'
                }}
              >
                gbanexus@hiic.com.cn
              </a>
            </div>
          </div>
        </div>

        {/* 公众号二维码 */}
        <div
          style={{
            background: '#0F172A',
            borderRadius: '12px',
            padding: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#6C63FF20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <QrCode style={{ width: '18px', height: '18px', color: '#6C63FF' }} />
            </div>
            <div>
              <p style={{ color: '#F1F5F9', fontSize: '0.9rem', fontWeight: 500, margin: 0 }}>
                微信公众号
              </p>
              <p style={{ color: '#94A3B8', fontSize: '0.75rem', margin: '2px 0 0' }}>
                AGBnexus
              </p>
            </div>
          </div>
          <img
            src="/Pic4Wechet/1.jpg"
            alt="微信公众号二维码"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '10px',
              margin: '0 auto',
              display: 'block',
            }}
          />
          <p style={{ color: '#64748B', fontSize: '0.7rem', textAlign: 'center', marginTop: '8px' }}>
            扫码关注公众号
          </p>
        </div>
      </div>
    </div>
  )
}

export function FloatingFeedback({ currentPath }: { currentPath: string }) {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {!contactOpen && (
        <button
          onClick={() => setContactOpen(true)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            border: 'none',
            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)'
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(16, 185, 129, 0.5)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.4)'
          }}
        >
          <Headphones style={{ width: '26px', height: '26px', color: 'white' }} />
        </button>
      )}
      {contactOpen && <ContactPanel onClose={() => setContactOpen(false)} />}
    </div>
  )
}
