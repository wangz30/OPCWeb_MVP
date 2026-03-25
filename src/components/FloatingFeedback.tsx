import { useState } from 'react'
import { MessageCircle, X, Star, Phone, QrCode, Send, Headphones } from 'lucide-react'

interface FloatingFeedbackProps {
  currentPath: string
}

const pageNames: Record<string, string> = {
  '/': '首页',
  '/models': 'AI模型',
  '/data-apis': '数据API',
  '/cloud-resources': 'AI技术与云资源',
  '/policies': '信息与政策赋能',
  '/resources': '全维度资源与能力升级',
  '/space': '创客空间',
  '/courses': '培训提升',
  '/demands': '企业AI需求大厅',
  '/marketplace': '应用集市',
  '/events': '即将开展活动',
  '/events/review': '活动回顾',
  '/community': 'OPC创业情报社群',
  '/data-community': '创新情报可信数据开放社区',
  '/about': '关于我们',
}

// 评价反馈组件
function FeedbackPanel({ currentPath, onClose }: { currentPath: string; onClose: () => void }) {
  const [rating, setRating] = useState(0)
  const [feedbackText, setFeedbackText] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const pageName = pageNames[currentPath] || '当前页面'

  const handleSubmit = () => {
    if (rating > 0 || feedbackText.trim()) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setRating(0)
        setFeedbackText('')
        onClose()
      }, 1500)
    }
  }

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
          background: 'linear-gradient(135deg, #6C63FF 0%, #5B52E0 100%)',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 600, margin: 0 }}>
            评价反馈
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', margin: '4px 0 0 0' }}>
            对{pageName}评分和建议
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
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#10B98120',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px',
              }}
            >
              <Star style={{ width: '30px', height: '30px', color: '#10B981' }} />
            </div>
            <p style={{ color: '#10B981', fontSize: '1rem', fontWeight: 500 }}>感谢您的反馈！</p>
          </div>
        ) : (
          <>
            {/* 评分 */}
            <div style={{ marginBottom: '20px' }}>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '10px' }}>
                您对{pageName}的满意度（0-10分）
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {[...Array(11)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setRating(i)}
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '6px',
                      border: i <= rating ? '2px solid #6C63FF' : '1px solid #475569',
                      background: i <= rating ? '#6C63FF20' : '#1E293B',
                      color: i <= rating ? '#A5B4FC' : '#64748B',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>

            {/* 建议反馈 */}
            <div style={{ marginBottom: '16px' }}>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '8px' }}>
                您的建议（选填）
              </p>
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="请写下您的建议..."
                style={{
                  width: '100%',
                  height: '80px',
                  background: '#0F172A',
                  border: '1px solid #334155',
                  borderRadius: '10px',
                  padding: '12px',
                  color: '#F1F5F9',
                  fontSize: '0.85rem',
                  resize: 'none',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={rating === 0 && !feedbackText.trim()}
              style={{
                width: '100%',
                padding: '12px',
                background: rating > 0 || feedbackText.trim() 
                  ? 'linear-gradient(135deg, #6C63FF 0%, #5B52E0 100%)' 
                  : '#334155',
                border: 'none',
                borderRadius: '10px',
                color: rating > 0 || feedbackText.trim() ? 'white' : '#64748B',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: rating > 0 || feedbackText.trim() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s',
              }}
            >
              <Send style={{ width: '16px', height: '16px' }} />
              提交反馈
            </button>
          </>
        )}
      </div>
    </div>
  )
}

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
        {/* 联系电话 */}
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
              <Phone style={{ width: '18px', height: '18px', color: '#10B981' }} />
            </div>
            <div>
              <p style={{ color: '#94A3B8', fontSize: '0.75rem', margin: 0 }}>咨询热线</p>
              <p style={{ color: '#F1F5F9', fontSize: '0.95rem', fontWeight: 500, margin: '2px 0 0' }}>
                400-888-8888
              </p>
            </div>
          </div>
          <p style={{ color: '#64748B', fontSize: '0.75rem', margin: 0 }}>
            工作日 9:00-18:00
          </p>
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
                BDC新知
              </p>
            </div>
          </div>
          <div
            style={{
              width: '120px',
              height: '120px',
              background: 'white',
              borderRadius: '10px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <QrCode style={{ width: '100px', height: '100px', color: '#1E293B' }} />
          </div>
          <p style={{ color: '#64748B', fontSize: '0.7rem', textAlign: 'center', marginTop: '8px' }}>
            扫码关注公众号
          </p>
        </div>
      </div>
    </div>
  )
}

export function FloatingFeedback({ currentPath }: FloatingFeedbackProps) {
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const closeAll = () => {
    setFeedbackOpen(false)
    setContactOpen(false)
  }

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999, display: 'flex', gap: '12px' }}>
      {/* 评价反馈按钮 */}
      <div>
        {!feedbackOpen && (
          <button
            onClick={() => { closeAll(); setFeedbackOpen(true) }}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6C63FF 0%, #5B52E0 100%)',
              border: 'none',
              boxShadow: '0 4px 20px rgba(108, 99, 255, 0.4)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(108, 99, 255, 0.5)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(108, 99, 255, 0.4)'
            }}
          >
            <MessageCircle style={{ width: '26px', height: '26px', color: 'white' }} />
          </button>
        )}
        {feedbackOpen && <FeedbackPanel currentPath={currentPath} onClose={() => setFeedbackOpen(false)} />}
      </div>

      {/* 联系我们按钮 */}
      <div>
        {!contactOpen && (
          <button
            onClick={() => { closeAll(); setContactOpen(true) }}
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
    </div>
  )
}
