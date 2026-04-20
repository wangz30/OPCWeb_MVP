import { useState, useEffect } from 'react'
import { 
  Cloud, 
  Database, 
  Cpu, 
  Zap, 
  Globe, 
  Users, 
  Target, 
  Award,
  Sparkles,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  FileText,
  Rocket
} from 'lucide-react'
import { Footer } from '@/components/Footer'

export function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: '1000+', label: '目标服务创业者', icon: Users },
    { number: '50+', label: '目标合作伙伴', icon: Globe },
    { number: '100+', label: '目标举办活动', icon: Sparkles },
    { number: '200+', label: '目标孵化项目', icon: Target },
  ]

  const partners = [
    { name: '合作伙伴 1', placeholder: true },
    { name: '合作伙伴 2', placeholder: true },
    { name: '合作伙伴 3', placeholder: true },
    { name: '合作伙伴 4', placeholder: true },
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 50%, #0F1729 100%)',
      paddingBottom: '4rem'
    }}>
      {/* Hero Banner */}
      <div style={{
        position: 'relative',
        background: 'url(/Pic4AboutUs/3.jpeg) center/cover no-repeat',
        borderBottom: '1px solid rgba(108, 99, 255, 0.2)',
        padding: '5rem 2rem',
        textAlign: 'center',
        overflow: 'hidden',
        minHeight: '400px'
      }}>
        {/* 紫色渐变遮罩层 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.65) 0%, rgba(138, 132, 255, 0.55) 100%)',
        }} />
        
        {/* 内容 */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            color: '#FFFFFF',
            marginBottom: '1rem',
            letterSpacing: '2px',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
          }}>
            云上 OPC 社区
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#E2E8F0',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8,
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
          }}>
            一站式线上综合服务赋能平台
          </p>
        </div>
      </div>

      {/* 愿景目标 */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 2rem',
        marginTop: '-9rem',
        position: 'relative',
        zIndex: 20
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1.5rem' 
        }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(71, 85, 105, 0.5)',
                  borderRadius: '16px',
                  padding: '2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  animationDelay: `${0.6 + index * 0.1}s`,
                  animation: isVisible ? 'fadeInUp 0.8s ease-out both' : 'none'
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
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  margin: '0 auto 1rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.2), rgba(16, 185, 129, 0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon style={{ width: '24px', height: '24px', color: '#A5B4FC' }} />
                </div>
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 700, 
                  color: '#F1F5F9',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 社区介绍 */}
      <section style={{ padding: '6rem 2rem', marginTop: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* 左侧内容 */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                background: 'rgba(108, 99, 255, 0.1)',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                borderRadius: '20px',
                marginBottom: '1rem'
              }}>
                <Cloud style={{ width: '16px', height: '16px', color: '#A5B4FC' }} />
                <span style={{ color: '#A5B4FC', fontSize: '0.85rem', fontWeight: 600 }}>社区介绍</span>
              </div>
              
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 700, 
                color: '#F1F5F9',
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}>
                云上 AI OPC 社区
              </h2>
              
              <p style={{ 
                color: '#94A3B8', 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: '2rem'
              }}>
                云上 AI OPC 社区由深圳国家高技术产业创新中心依托粤港澳大湾区大数据中心技术与资源优势发起设立的以 AI 协同、云服务、数据资源、创业孵化为核心能力的一站式线上综合服务赋能平台。
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { icon: Cpu, text: 'AI 协同' },
                  { icon: Cloud, text: '云服务' },
                  { icon: Database, text: '数据资源' },
                  { icon: Zap, text: '创业孵化' }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      background: 'rgba(108, 99, 255, 0.1)',
                      border: '1px solid rgba(108, 99, 255, 0.2)',
                      borderRadius: '12px'
                    }}>
                      <Icon style={{ width: '18px', height: '18px', color: '#A5B4FC' }} />
                      <span style={{ color: '#CBD5E1', fontSize: '0.9rem', fontWeight: 500 }}>{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* 右侧图片 */}
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}>
              <img 
                src="/Pic4AboutUs/1.png" 
                alt="云上 AI OPC 社区"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 大数据中心介绍 */}
      <section style={{ 
        padding: '6rem 2rem', 
        background: 'linear-gradient(180deg, transparent 0%, rgba(30, 41, 59, 0.3) 50%, transparent 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* 左侧图片 */}
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
              order: 1
            }}>
              <img 
                src="/Pic4AboutUs/2.png" 
                alt="粤港澳大湾区大数据中心"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
            
            {/* 右侧内容 */}
            <div style={{ order: 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '20px',
                marginBottom: '1rem'
              }}>
                <Database style={{ width: '16px', height: '16px', color: '#6EE7B7' }} />
                <span style={{ color: '#6EE7B7', fontSize: '0.85rem', fontWeight: 600 }}>大数据中心</span>
              </div>
              
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 700, 
                color: '#F1F5F9',
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}>
                粤港澳大湾区大数据中心
              </h2>
              
              <p style={{ 
                color: '#94A3B8', 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: '2rem'
              }}>
                粤港澳大湾区大数据中心基于全国一体化大数据中心协同创新体系，提出构建"数算用一体化"发展模式，通过打造数据要素创新综合服务体，为湾区企业提供算力资源、数据工具、可信数据流通支撑等公共技术服务。
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { icon: Cpu, text: '算力资源' },
                  { icon: Database, text: '数据工具' },
                  { icon: Zap, text: '可信流通' },
                  { icon: Award, text: '公共服务' }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      borderRadius: '12px'
                    }}>
                      <Icon style={{ width: '18px', height: '18px', color: '#6EE7B7' }} />
                      <span style={{ color: '#CBD5E1', fontSize: '0.9rem', fontWeight: 500 }}>{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 即将上线的服务 */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              background: 'rgba(108, 99, 255, 0.1)',
              border: '1px solid rgba(108, 99, 255, 0.2)',
              borderRadius: '20px',
              marginBottom: '1rem'
            }}>
              <Rocket style={{ width: '16px', height: '16px', color: '#A5B4FC' }} />
              <span style={{ color: '#A5B4FC', fontSize: '0.85rem', fontWeight: 600 }}>即将上线</span>
            </div>
            
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              color: '#F1F5F9',
              marginBottom: '1rem'
            }}>
              即将上线的服务
            </h2>
            
            <p style={{ 
              color: '#94A3B8', 
              fontSize: '1.1rem'
            }}>
              持续扩展服务生态，助力创业成长
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            {/* 创业培训活动 */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.2), rgba(138, 132, 255, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <GraduationCap style={{ width: '40px', height: '40px', color: '#A5B4FC' }} />
              </div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: '#F1F5F9',
                marginBottom: '0.75rem'
              }}>
                创业培训
              </h3>
              <p style={{ 
                color: '#94A3B8', 
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                专业创业课程 + 导师陪跑
              </p>
              <div style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: 'rgba(108, 99, 255, 0.1)',
                borderRadius: '20px',
                border: '1px solid rgba(108, 99, 255, 0.2)'
              }}>
                <span style={{ color: '#A5B4FC', fontSize: '0.85rem', fontWeight: 500 }}>敬请期待</span>
              </div>
            </div>

            {/* AI 模型调用服务 */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Cpu style={{ width: '40px', height: '40px', color: '#60A5FA' }} />
              </div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: '#F1F5F9',
                marginBottom: '0.75rem'
              }}>
                AI 模型服务
              </h3>
              <p style={{ 
                color: '#94A3B8', 
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                主流 AI 模型一键调用
              </p>
              <div style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '20px',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}>
                <span style={{ color: '#60A5FA', fontSize: '0.85rem', fontWeight: 500 }}>敬请期待</span>
              </div>
            </div>

            {/* 政策咨询服务 */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FileText style={{ width: '40px', height: '40px', color: '#6EE7B7' }} />
              </div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: '#F1F5F9',
                marginBottom: '0.75rem'
              }}>
                政策咨询
              </h3>
              <p style={{ 
                color: '#94A3B8', 
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                最新政策解读 + 申报指导
              </p>
              <div style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '20px',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <span style={{ color: '#6EE7B7', fontSize: '0.85rem', fontWeight: 500 }}>敬请期待</span>
              </div>
            </div>

            {/* 更多服务 */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(234, 88, 12, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles style={{ width: '40px', height: '40px', color: '#FBBF24' }} />
              </div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: '#F1F5F9',
                marginBottom: '0.75rem'
              }}>
                更多服务
              </h3>
              <p style={{ 
                color: '#94A3B8', 
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                持续更新中...
              </p>
              <div style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: 'rgba(245, 158, 11, 0.1)',
                borderRadius: '20px',
                border: '1px solid rgba(245, 158, 11, 0.2)'
              }}>
                <span style={{ color: '#FBBF24', fontSize: '0.85rem', fontWeight: 500 }}>敬请期待</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - 内测申请 */}
      <section style={{ 
        padding: '3rem 2rem',
        background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(78, 205, 196, 0.1))',
        borderRadius: '16px',
        border: '1px solid rgba(108, 99, 255, 0.2)',
        margin: '4rem 2rem'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#F1F5F9',
            marginBottom: '1rem'
          }}>
            🔥 抢先锁定创始会员席位
          </h2>
          <p style={{ 
            color: '#94A3B8', 
            fontSize: '1rem',
            marginBottom: '2.5rem'
          }}>
            限时开放 1000 个内测名额，审核制加入
          </p>
          
          <a 
            href="https://ucn19uuu5wk8.feishu.cn/share/base/form/shrcniKkFNUVlQC7YpA5fyg103d"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button style={{
              background: 'linear-gradient(135deg, #FF6584, #6C63FF)',
              border: 'none',
              color: 'white',
              padding: '14px 48px',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 101, 132, 0.3)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 101, 132, 0.4)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 101, 132, 0.3)'
            }}>
              🚀 立即申请内测席位 <ArrowRight style={{ width: '16px', height: '16px' }} />
            </button>
          </a>
        </div>
      </section>

      <Footer />
      
      {/* 全局样式 */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  )
}
