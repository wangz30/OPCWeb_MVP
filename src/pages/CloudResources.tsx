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
      description: '灵活可调配的云端计算资源，助力业务快速上线',
      icon: Server,
      specs: ['2 核 | 4G', '4 核 | 16G', '弹性伸缩'],
      price: '按需选择',
      color: '#6C63FF'
    },
    {
      category: '云存储',
      name: '对象存储服务 OBS',
      description: '海量安全的云端存储，支持图片视频等非结构化数据',
      icon: Cloud,
      specs: ['无限容量', '99.99% 可靠性', 'CDN 加速'],
      price: '按量计费',
      color: '#3B82F6'
    },
    {
      category: '云存储',
      name: '弹性文件服务 SFS',
      description: '高性能共享文件存储，满足企业级应用需求',
      icon: Zap,
      specs: ['高 IOPS', '低延迟', '多机共享'],
      price: '经济实惠',
      color: '#10B981'
    },
    {
      category: '云数据库',
      name: 'RDS for MySQL',
      description: '稳定可靠的关系型数据库，开箱即用免运维',
      icon: Database,
      specs: ['自动备份', '主从架构', '读写分离'],
      price: '58 元起/月',
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
        background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.2) 0%, rgba(138, 132, 255, 0.1) 100%)',
        borderBottom: '1px solid rgba(108, 99, 255, 0.2)',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 700, 
            color: '#F1F5F9',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #F1F5F9 0%, #A5B4FC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            云资源
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#94A3B8',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            汇聚顶尖硬件，一键云部署，助力您的 AI 创业之路
          </p>
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
                <Link to="/cloud-resources" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px',
                  marginTop: '1.5rem',
                  color: '#6C63FF',
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}>
                  立即选购 <ArrowRight style={{ width: '14px', height: '14px' }} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
