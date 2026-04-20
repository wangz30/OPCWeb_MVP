import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Footer } from '@/components/Footer'
import { 
  Building, 
  Wifi, 
  Coffee, 
  Users, 
  CheckCircle, 
  Monitor, 
  Phone, 
  Briefcase,
  Lightbulb,
  TrendingUp,
  ArrowRight
} from 'lucide-react'

export function SpacePage() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 50%, #0F1729 100%)', 
      minHeight: '100vh', 
      paddingBottom: '4rem'
    }}>
      
      {/* 顶部 Banner */}
      <div style={{
        position: 'relative',
        background: 'url(/Pic4Space/1.png) center/cover no-repeat',
        borderBottom: '1px solid rgba(108, 99, 255, 0.2)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        {/* 深蓝色渐变遮罩层 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.6) 0%, rgba(59, 130, 246, 0.45) 100%)',
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
            创客空间入驻
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#E2E8F0',
            marginBottom: '2.5rem',
            fontWeight: 300,
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
          }}>
            为 OPC 创业者提供全周期孵化服务
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
              为AI一人公司及初创团队提供灵活办公空间与配套基础设施，有效降低运营成本。依托平台AI能力与全周期孵化服务，助力创业者专注核心研发，加速创新成果转化。
            </p>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 20px' }}>
        
        {/* 入驻专属权益 */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 700, 
            color: '#F1F5F9',
            marginBottom: '2rem'
          }}>
            入驻专属权益
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem'
          }}>
            {/* 办公空间 */}
            <div style={{ 
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#6C63FF'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(108, 99, 255, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                background: 'linear-gradient(135deg, #A78BFA, #7C3AED)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <Monitor style={{ width: '32px', height: '32px', color: 'white' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>办公空间</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
                灵活工位 + 独立办公室<br />
                降低初创期场地成本
              </p>
            </div>

            {/* 基础设施 */}
            <div style={{ 
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#6C63FF'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(108, 99, 255, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                background: 'linear-gradient(135deg, #60A5FA, #2563EB)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <Wifi style={{ width: '32px', height: '32px', color: 'white' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>基础设施</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
                千兆网络、会议室及文印配套<br />
                实现拎包入驻办公
              </p>
            </div>

            {/* AI 能力服务 */}
            <div style={{ 
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#6C63FF'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(108, 99, 255, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                background: 'linear-gradient(135deg, #34D399, #059669)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <Lightbulb style={{ width: '32px', height: '32px', color: 'white' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>AI 能力服务</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
                海量 API 调用额度及技术支持<br />
                加速产品开发验证
              </p>
            </div>

            {/* 资源对接 */}
            <div style={{ 
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#6C63FF'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(108, 99, 255, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                background: 'linear-gradient(135deg, #FB923C, #EA580C)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <Briefcase style={{ width: '32px', height: '32px', color: 'white' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>资源对接</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
                精准链接产业资源与投资机构<br />
                拓宽市场融资渠道
              </p>
            </div>
          </div>
        </section>

        {/* 入驻条件 */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 700, 
            color: '#F1F5F9',
            marginBottom: '2rem'
          }}>
            入驻条件
          </h2>
          
          <div style={{ 
            background: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid rgba(71, 85, 105, 0.5)',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem'
            }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle style={{ width: '24px', height: '24px', color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ color: '#F1F5F9', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>OPC 项目</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0 }}>一人公司或小型团队</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle style={{ width: '24px', height: '24px', color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ color: '#F1F5F9', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>技术驱动</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0 }}>AI、大数据、互联网相关领域</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle style={{ width: '24px', height: '24px', color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ color: '#F1F5F9', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>成长潜力</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0 }}>有明确商业模式和发展规划</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 立即申请 */}
        <section style={{ textAlign: 'center' }}>
          <p style={{ 
            color: '#94A3B8', 
            fontSize: '0.9rem', 
            marginBottom: '1.5rem'
          }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px',
              color: '#F59E0B',
              fontWeight: 500,
              marginRight: '8px'
            }}>
              <span style={{ 
                width: '6px', 
                height: '6px', 
                background: '#F59E0B', 
                borderRadius: '50%'
              }} />
              限量空间开放中
            </span>
            <span style={{ color: '#64748B', margin: '0 8px' }}>|</span>
            <span>申请预计耗时 2 分钟</span>
          </p>
          
          <a 
            href="https://ucn19uuu5wk8.feishu.cn/share/base/form/shrcnWI6li4GHTwsSu9IN4RdSvd"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button style={{
              padding: '16px 64px',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'white',
              background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 30px rgba(108, 99, 255, 0.4)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(108, 99, 255, 0.5)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(108, 99, 255, 0.4)'
            }}>
            立即咨询，获取支持 <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
          </a>
        </section>
      </div>

      <Footer />
    </div>
  )
}
