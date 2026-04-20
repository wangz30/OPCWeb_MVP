import { useState } from 'react'
import { 
  Cloud, 
  Zap, 
  Server, 
  Database,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from '@/components/Footer'

export function CloudResourcesPage() {
  // 云资源数据
  const cloudResources = [
    {
      category: '云计算',
      name: '弹性云服务器 ECS',
      description: '灵活可调配的云端计算资源，支持弹性伸缩，助力业务快速上线。提供 2 核 4G 等多种配置，按需付费，经济实惠',
      icon: Server,
      specs: ['2 核 | 4G 起', '弹性伸缩', '按需付费'],
      price: '按需选择',
      color: '#6C63FF'
    },
    {
      category: '云存储',
      name: '对象存储服务 OBS',
      description: '海量安全的云端存储，超高数据可靠性，支持图片视频等非结构化数据存储，CDN 加速全球访问',
      icon: Cloud,
      specs: ['海量存储', '高可靠性', 'CDN 加速'],
      price: '按量计费',
      color: '#3B82F6'
    },
    {
      category: '云存储',
      name: '弹性文件服务 SFS',
      description: '高性能共享文件存储，百万级 IOPS，毫秒级低时延，支持多机共享访问，满足企业级应用需求',
      icon: Zap,
      specs: ['高 IOPS', '低延迟', '多机共享'],
      price: '经济实惠',
      color: '#10B981'
    },
    {
      category: '云数据库',
      name: 'RDS 云数据库',
      description: '稳定可靠的关系型数据库，开箱即用免运维。支持自动备份、主从架构、读写分离，助力业务快速发展',
      icon: Database,
      specs: ['自动备份', '主从架构', '读写分离'],
      price: '按需选择',
      color: '#F59E0B'
    }
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 50%, #0F1729 100%)',
      paddingBottom: '4rem'
    }}>
      {/* 顶部 Banner */}
      <div style={{
        position: 'relative',
        background: 'url(/Pic4CloudResource/1.png) center/cover no-repeat',
        borderBottom: '1px solid rgba(108, 99, 255, 0.2)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        {/* 青绿色渐变遮罩层 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.45) 0%, rgba(59, 130, 246, 0.4) 100%)',
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
            云资源
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#E2E8F0',
            marginBottom: '2.5rem',
            fontWeight: 300,
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
          }}>
            汇聚顶尖硬件，一键云部署，助力您的 AI 创业之路
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
              平台提供从云计算、云存储到云数据库的全方位服务，
              无需自建机房，无需专业运维，按需选择，弹性付费。
              让您专注于产品开发，基础设施交给我们。
            </p>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', paddingTop: '3rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '2rem' 
        }}>
          {cloudResources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <div
                key={index}
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(71, 85, 105, 0.5)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = resource.color
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: `${resource.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon style={{ width: '28px', height: '28px', color: resource.color }} />
                  </div>
                  <div>
                    <span style={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      background: `${resource.color}15`,
                      color: resource.color,
                      fontWeight: 500,
                      marginBottom: '4px'
                    }}>
                      {resource.category}
                    </span>
                    <h3 style={{ 
                      color: '#F1F5F9', 
                      fontSize: '1.2rem', 
                      fontWeight: 600
                    }}>
                      {resource.name}
                    </h3>
                    <p style={{ 
                      color: resource.color, 
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {resource.price}
                    </p>
                  </div>
                </div>
                <p style={{ 
                  color: '#94A3B8', 
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  {resource.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px' 
                }}>
                  {resource.specs.map((spec, i) => (
                    <span key={i} style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      color: '#94A3B8',
                      border: '1px solid rgba(71, 85, 105, 0.3)'
                    }}>
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        
        {/* 立即咨询按钮 */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a 
            href="https://ucn19uuu5wk8.feishu.cn/share/base/form/shrcnSWvBN7ELrfauXERmg1kLMh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button style={{
              padding: '16px 48px',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'white',
              background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
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
              立即咨询，获取支持 <ArrowRight style={{ width: '20px', height: '20px' }} />
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
