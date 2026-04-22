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
            云上 AI OPC 社区
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
          
          {/* 介绍卡片 */}
          <div style={{ 
            maxWidth: '900px', 
            margin: '1.5rem auto 0',
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
              letterSpacing: '0.5px',
              textAlign: 'center'
            }}>
              为头部企业解数据之锁，为产业园区开智慧之窗，为小微创客搭起步之桥。
              <br/>
              聚合资源、智能匹配、陪伴成长，让创新更简单。
            </p>
          </div>
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
                云上 AI OPC 社区是由深圳国家高技术产业创新中心依托粤港澳大湾区大数据中心技术与资源优势发起设立的，以 AI 协同、云服务、数据资源、创业孵化为核心能力的一站式线上综合服务赋能平台。
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
                src="/Pic4AboutUs/2222.png" 
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
                粤港澳大湾区大数据中心按照“1+1+N”模式，建设1大算力调度平台，1大可信数据流通平台，打造N个数据应用场景示范工程，构建数据要素创新综合服务体，提供算力按需调度、数据可信流通、应用开箱即用的“数算用一体化”服务，成为湾区数字经济发展践行者，国家“东数西算”工程探索者，为全国一体化大数据中心协同创新体系建设提供“先行方案”和“深圳力量”。
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { icon: Cpu, text: 'AI 大模型服务' },
                  { icon: Database, text: '数据要素赋能' },
                  { icon: Zap, text: '算力基础设施' },
                  { icon: Award, text: '创业孵化运营' }
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
                创业交流
              </h3>
              <p style={{ 
                color: '#94A3B8', 
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                专业创业课程 + 活动沙龙
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
            立即申请内测席位 <ArrowRight style={{ width: '16px', height: '16px' }} />
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
