import { useState } from 'react'
import { 
  Cpu, 
  Cloud, 
  Database, 
  Zap, 
  Server, 
  Globe, 
  ArrowRight, 
  Check,
  Play,
  Search,
  Lock,
  Zap as Lightning
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from '@/components/Footer'

export function TechResourcesPage() {
  const [activeTab, setActiveTab] = useState('ai-models')

  // AI模型数据
  const aiModels = [
    {
      name: 'DeepSeek',
      description: '深度求索大模型，支持多轮对话、代码生成、数学推理',
      category: 'LLM',
      tags: ['免费', 'API'],
      color: '#6C63FF'
    },
    {
      name: '通义千问',
      description: '阿里云推出的大语言模型，支持多语言理解和生成',
      category: 'LLM',
      tags: ['免费', 'API'],
      color: '#3B82F6'
    },
    {
      name: '文心一言',
      description: '百度推出的生成式AI产品，支持文学创作、商业文案',
      category: 'LLM',
      tags: ['免费', 'API'],
      color: '#10B981'
    },
    {
      name: '智谱清言',
      description: '基于ChatGLM的中英双语对话模型，支持智能问答',
      category: 'LLM',
      tags: ['免费', 'API'],
      color: '#F59E0B'
    },
    {
      name: 'Stable Diffusion',
      description: '开源图像生成模型，支持文生图、图生图',
      category: '图像生成',
      tags: ['开源', '本地部署'],
      color: '#EC4899'
    },
    {
      name: 'Midjourney',
      description: 'AI图像生成工具，生成高质量艺术作品',
      category: '图像生成',
      tags: ['付费', 'API'],
      color: '#8B5CF6'
    },
    {
      name: 'Whisper',
      description: 'OpenAI语音识别模型，支持多语言转文字',
      category: '语音识别',
      tags: ['开源', '免费'],
      color: '#14B8A6'
    },
    {
      name: 'ElevenLabs',
      description: 'AI语音合成，支持28种语言 natural语音',
      category: '语音合成',
      tags: ['付费', 'API'],
      color: '#F97316'
    }
  ]

  // 云资源数据
  const cloudResources = [
    {
      name: 'GPU云服务器',
      description: '配备NVIDIA V100/A100 GPU，支持深度学习训练',
      icon: Server,
      specs: ['8核32G', 'NVIDIA V100', '100G SSD'],
      price: '¥299/月起',
      color: '#6C63FF'
    },
    {
      name: 'AI推理服务器',
      description: '低延迟GPU推理实例，适合生产环境部署',
      icon: Zap,
      specs: ['4核16G', 'T4 GPU', '50G SSD'],
      price: '¥199/月起',
      color: '#3B82F6'
    },
    {
      name: '对象存储COS',
      description: '海量非结构化数据存储，支持CDN加速',
      icon: Cloud,
      specs: ['容量无上限', '99.9%可用性', '按量计费'],
      price: '¥0.05/GB/月',
      color: '#10B981'
    },
    {
      name: '云数据库',
      description: 'MySQL/PostgreSQL/MongoDB等多种数据库',
      icon: Database,
      specs: ['自动备份', '读写分离', '弹性扩展'],
      price: '¥58/月起',
      color: '#F59E0B'
    }
  ]

  // 数据API数据
  const dataAPIs = [
    {
      name: '企业信息查询API',
      description: '全国企业工商信息、信用报告、经营状态',
      category: '企业数据',
      calls: '10,000次/免费',
      latency: '<100ms',
      color: '#6C63FF'
    },
    {
      name: '产业数据API',
      description: '产业链数据、产业结构、市场规模分析',
      category: '产业数据',
      calls: '5,000次/免费',
      latency: '<200ms',
      color: '#3B82F6'
    },
    {
      name: '知识产权API',
      description: '专利、商标、著作权等知识产权信息',
      category: '知产数据',
      calls: '3,000次/免费',
      latency: '<150ms',
      color: '#10B981'
    },
    {
      name: '招投标数据API',
      description: '全国招标公告、中标结果、企业业绩',
      category: '商业数据',
      calls: '2,000次/免费',
      latency: '<200ms',
      color: '#F59E0B'
    },
    {
      name: '舆情监控API',
      description: '全网媒体、社交平台舆情监测与分析',
      category: '媒体数据',
      calls: '1,000次/免费',
      latency: '<300ms',
      color: '#EC4899'
    },
    {
      name: '地图位置API',
      description: 'POI检索、路径规划、地理编码服务',
      category: '位置数据',
      calls: '10,000次/免费',
      latency: '<50ms',
      color: '#14B8A6'
    }
  ]

  const tabs = [
    { id: 'ai-models', label: 'AI模型', icon: Cpu },
    { id: 'cloud', label: '云资源', icon: Cloud },
    { id: 'data-api', label: '数据API', icon: Database }
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 50%, #0F1729 100%)',
      paddingBottom: '4rem'
    }}>
      {/* 顶部Banner */}
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
            技术资源中心
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#94A3B8',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            汇聚顶尖AI模型、弹性云资源和企业级数据API，打造AI创业“隐形团队
          </p>
        </div>
      </div>

      {/* 标签切换 */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1rem',
        padding: '2rem',
        position: 'sticky',
        top: '60px',
        zIndex: 100,
        background: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(10px)'
      }}>
        {tabs.map(tab => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                border: 'none',
                background: isActive 
                  ? 'linear-gradient(135deg, #6C63FF 0%, #8A84FF 100%)' 
                  : 'rgba(30, 41, 59, 0.8)',
                color: isActive ? 'white' : '#94A3B8',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                boxShadow: isActive ? '0 4px 15px rgba(108, 99, 255, 0.3)' : 'none'
              }}
            >
              <Icon style={{ width: '20px', height: '20px' }} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* 内容区域 */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* AI模型 */}
        {activeTab === 'ai-models' && (
          <div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {aiModels.map((model, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(71, 85, 105, 0.5)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = model.color
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = `0 8px 25px ${model.color}20`
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `${model.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Cpu style={{ width: '24px', height: '24px', color: model.color }} />
                    </div>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {model.tags.map((tag, i) => (
                        <span key={i} style={{
                          padding: '4px 10px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          background: tag === '免费' || tag === '开源' 
                            ? 'rgba(16, 185, 129, 0.1)' 
                            : 'rgba(245, 158, 11, 0.1)',
                          color: tag === '免费' || tag === '开源' ? '#10B981' : '#F59E0B'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 style={{ 
                    color: '#F1F5F9', 
                    fontSize: '1.2rem', 
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>
                    {model.name}
                  </h3>
                  <p style={{ 
                    color: '#94A3B8', 
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}>
                    {model.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    color: '#64748B',
                    fontSize: '0.85rem'
                  }}>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(108, 99, 255, 0.1)',
                      color: '#A5B4FC'
                    }}>{model.category}</span>
                  </div>
                  <Link to="/models" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    marginTop: '1rem',
                    color: '#6C63FF',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}>
                    了解更多 <ArrowRight style={{ width: '14px', height: '14px' }} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 云资源 */}
        {activeTab === 'cloud' && (
          <div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '1.5rem' 
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
        )}

        {/* 数据API */}
        {activeTab === 'data-api' && (
          <div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {dataAPIs.map((api, index) => (
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
                    e.currentTarget.style.borderColor = api.color
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <span style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        background: `${api.color}20`,
                        color: api.color
                      }}>{api.category}</span>
                    </div>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: `${api.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Database style={{ width: '20px', height: '20px', color: api.color }} />
                    </div>
                  </div>
                  <h3 style={{ 
                    color: '#F1F5F9', 
                    fontSize: '1.15rem', 
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>
                    {api.name}
                  </h3>
                  <p style={{ 
                    color: '#94A3B8', 
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}>
                    {api.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    gap: '1.5rem',
                    padding: '1rem',
                    background: 'rgba(15, 23, 42, 0.5)',
                    borderRadius: '10px',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <div style={{ color: '#64748B', fontSize: '0.8rem', marginBottom: '2px' }}>免费额度</div>
                      <div style={{ color: '#10B981', fontWeight: 600 }}>{api.calls}</div>
                    </div>
                    <div>
                      <div style={{ color: '#64748B', fontSize: '0.8rem', marginBottom: '2px' }}>响应延迟</div>
                      <div style={{ color: '#3B82F6', fontWeight: 600 }}>{api.latency}</div>
                    </div>
                  </div>
                  <Link to="/data-apis" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    color: '#6C63FF',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}>
                    申请调用 <ArrowRight style={{ width: '14px', height: '14px' }} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
