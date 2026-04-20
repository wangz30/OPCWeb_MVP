import { ArrowRight } from 'lucide-react'
import { Footer } from '@/components/Footer'

export function DataAPIsPage() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 50%, #0F1729 100%)', 
      minHeight: '100vh', 
      paddingBottom: '4rem'
    }}>
      {/* 顶部 Banner */}
      <div style={{
        position: 'relative',
        background: 'url(/Pic4DataAPI/1.png) center/cover no-repeat',
        borderBottom: '1px solid rgba(108, 99, 255, 0.2)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        {/* 蓝紫色渐变遮罩层 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.5) 0%, rgba(108, 99, 255, 0.4) 100%)',
        }} />
        
        {/* 内容 */}
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            color: '#FFFFFF',
            marginBottom: '1rem',
            letterSpacing: '2px',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
          }}>
            数据 API 服务
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#E2E8F0',
            marginBottom: '2.5rem',
            fontWeight: 300,
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
          }}>
            国家级数据接口，海量数据支撑，赋能 AI 应用开发
          </p>
          
          {/* 介绍卡片 */}
          <div style={{ 
            maxWidth: '750px', 
            margin: '0 auto',
            padding: '2rem 2.5rem',
            background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
            borderRadius: '16px',
            border: '1px solid rgba(108, 99, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <p style={{ 
              fontSize: '1.05rem', 
              color: '#CBD5E1',
              lineHeight: 1.9,
              margin: 0,
              letterSpacing: '0.5px'
            }}>
              平台为OPC创业者提供国家级产业数据接口，快速获取知识产权、政策融资等关键要素信息。
              以精准数据洞察辅助决策，降低开发门槛，加速应用落地进程。
            </p>
          </div>
        </div>
      </div>

      {/* 核心数据服务 */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 700, 
            color: '#F1F5F9',
            marginBottom: '0.5rem'
          }}>
            核心数据服务
          </h2>
          <div style={{ 
            width: '80px', 
            height: '3px', 
            background: 'linear-gradient(90deg, #6C63FF, #8A84FF)',
            margin: '0 auto'
          }} />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem'
        }}>
          {/* 要素数据 */}
          <div style={{ 
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(71, 85, 105, 0.5)',
            borderRadius: '16px',
            padding: '2.5rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)'
            e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              color: '#F1F5F9',
              marginBottom: '1rem'
            }}>
              要素数据
            </h3>
            <p style={{ 
              color: '#94A3B8', 
              fontSize: '0.95rem', 
              lineHeight: 1.8,
              margin: 0
            }}>
              涵盖产业发展所需的核心要素信息 API 服务，包括知识产权、市场主体、政策法规、投融资等关键领域，为产业分析、决策支持提供数据支撑。
            </p>
          </div>

          {/* 场景数据 */}
          <div style={{ 
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(71, 85, 105, 0.5)',
            borderRadius: '16px',
            padding: '2.5rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)'
            e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              color: '#F1F5F9',
              marginBottom: '1rem'
            }}>
              场景数据
            </h3>
            <p style={{ 
              color: '#94A3B8', 
              fontSize: '0.95rem', 
              lineHeight: 1.8,
              margin: 0
            }}>
              提供面向具体业务场景的综合数据服务 API，支持招商引资、企业服务、产业治理等各类应用场景的深度数据融合与智能分析。
            </p>
          </div>

          {/* 主题数据 */}
          <div style={{ 
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(71, 85, 105, 0.5)',
            borderRadius: '16px',
            padding: '2.5rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)'
            e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'linear-gradient(135deg, #10B981, #059669)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.5-6.5l-4.5 4.5m-4 4L7.5 16.5m9 0l-4.5-4.5m-4 4L3.5 7.5"/>
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              color: '#F1F5F9',
              marginBottom: '1rem'
            }}>
              主题数据
            </h3>
            <p style={{ 
              color: '#94A3B8', 
              fontSize: '0.95rem', 
              lineHeight: 1.8,
              margin: 0
            }}>
              围绕战略性新兴产业集群和未来产业产业链与特定领域策划的深度专题包，如人工智能、半导体与集成电路、生物医药等。
            </p>
          </div>
        </div>
      </section>

      {/* 立即申请按钮 */}
      <section style={{ textAlign: 'center', padding: '2rem' }}>
        <a 
          href="https://ucn19uuu5wk8.feishu.cn/share/base/form/shrcnxTEftyaGTXZmW8RXqnyv0f"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button style={{
            background: 'linear-gradient(135deg, #FF6584, #6C63FF)',
            border: 'none',
            color: 'white',
            padding: '16px 64px',
            borderRadius: '16px',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 30px rgba(255, 101, 132, 0.4)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 101, 132, 0.5)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 101, 132, 0.4)'
          }}>
            立即咨询，获取支持 <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
        </a>
      </section>

      <Footer />
    </div>
  )
}
