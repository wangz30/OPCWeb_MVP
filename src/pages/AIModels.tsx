import { useState, useEffect } from 'react'
import { 
  Cpu, 
  Database, 
  Zap, 
  Award,
  ArrowRight,
  Globe
} from 'lucide-react'
import { Footer } from '@/components/Footer'

const modelGroups = [
  {
    vendor: '通义千问 Qwen',
    color: '#6C63FF',
    models: [
      {
        name: 'Qwen3-235B-A22B',
        tags: ['旗舰模型', '双模式推理', '256K上下文'],
        description: '阿里通义千问旗舰模型，支持思考/非思考双模式，256K超长上下文，119种语言，深度推理与复杂任务处理',
        scenarios: '深度分析、复杂推理、多语言翻译'
      },
      {
        name: 'Qwen3-Coder-480B',
        tags: ['代码专家', '480B超大参数', '全栈开发'],
        description: '专为代码生成和理解优化的超大模型，支持多编程语言，复杂架构设计与代码重构',
        scenarios: '代码生成、代码审查、架构设计'
      }
    ]
  },
  {
    vendor: 'DeepSeek 深度求索',
    color: '#3B82F6',
    models: [
      {
        name: 'DeepSeek-V3.2',
        tags: ['通用对话', '逻辑推理', '知识问答'],
        description: '深度求索最新通用语言模型，强大的逻辑推理、知识问答和文本生成能力',
        scenarios: '智能客服、知识问答、内容创作'
      },
      {
        name: 'DeepSeek-R1',
        tags: ['数学推理', '代码生成', '深度思考'],
        description: '专为推理和代码优化的模型，在数学计算、算法设计和复杂逻辑推理方面表现卓越',
        scenarios: '学术研究、算法开发、数学计算'
      }
    ]
  },
  {
    vendor: '智谱AI GLM',
    color: '#10B981',
    models: [
      {
        name: 'GLM-5',
        tags: ['旗舰模型', '长文本理解', 'Agent能力'],
        description: '智谱AI最新一代基础模型，具备超长文本理解、智能Agent和多轮对话能力',
        scenarios: '智能助手、内容创作、客户服务'
      },
      {
        name: 'GLM-4.7',
        tags: ['代码生成', '多轮对话', '工具调用'],
        description: '强化代码理解和生成能力的模型，支持多工具调用和复杂任务编排',
        scenarios: '编程辅助、自动化工作流、API集成'
      }
    ]
  },
  {
    vendor: 'Kimi 月之暗面',
    color: '#8B5CF6',
    models: [
      {
        name: 'Kimi-K2.5',
        tags: ['超长上下文', '深度思考', 'Agent'],
        description: '月之暗面最新旗舰模型，支持256K超长上下文，具备强大的Agent自主执行能力',
        scenarios: '长文档分析、复杂任务自动化、研究助手'
      },
      {
        name: 'Kimi-K2-Thinking',
        tags: ['深度推理', '思维链', '复杂决策'],
        description: '专为深度推理优化的模型，支持思维链推理，适合需要多步推理的复杂场景',
        scenarios: '策略规划、数据分析、复杂决策'
      }
    ]
  },
  {
    vendor: 'Claude Anthropic',
    color: '#F59E0B',
    models: [
      {
        name: 'Claude Opus 4.6',
        tags: ['顶级智能', '代码理解', '长文分析'],
        description: 'Anthropic旗舰模型，在代码理解、长文本分析和复杂推理方面表现卓越',
        scenarios: '高级编程、法律分析、学术研究'
      },
      {
        name: 'Claude Sonnet 4.6',
        tags: ['平衡性能', '多模态', '性价比'],
        description: '性能与成本平衡的优秀模型，支持多模态输入，日常任务处理能力强',
        scenarios: '日常办公、内容审核、文档处理'
      }
    ]
  },
  {
    vendor: 'Gemini Google',
    color: '#EF4444',
    models: [
      {
        name: 'Gemini 3 Pro',
        tags: ['多模态推理', '图像生成', '原生思考'],
        description: 'Google最新旗舰模型，原生支持多模态推理和图像生成，具备强大的逻辑分析能力',
        scenarios: '创意设计、数据分析、复杂推理'
      },
      {
        name: 'Gemini 2.5 Pro',
        tags: ['深度推理', '长上下文', '代码能力'],
        description: '支持超长上下文的推理模型，在代码生成和复杂逻辑推理方面表现突出',
        scenarios: '编程辅助、算法设计、研究分析'
      }
    ]
  },
  {
    vendor: 'GPT OpenAI',
    color: '#06B6D4',
    models: [
      {
        name: 'GPT-5.2',
        tags: ['通用智能', '工具调用', '多模态'],
        description: 'OpenAI最新一代通用模型，强大的工具调用能力和多模态理解，适用于各类场景',
        scenarios: '全场景应用、自动化工作流、智能助手'
      },
      {
        name: 'GPT-4',
        tags: ['经典模型', '稳定可靠', '广泛集成'],
        description: '经过广泛验证的经典模型，生态集成完善，稳定性和可靠性高',
        scenarios: '内容创作、代码生成、数据分析'
      }
    ]
  },
  {
    vendor: '特色模型',
    color: '#EC4899',
    models: [
      {
        name: '快手 Kling 视频',
        tags: ['视频生成', '高质量渲染', '动态场景'],
        description: '快手旗下视频生成模型，支持高质量视频生成和动态场景渲染',
        scenarios: '短视频创作、营销内容、动画制作'
      },
      {
        name: 'Eleven Labs 语音',
        tags: ['语音合成', '多语言', '情感表达'],
        description: '领先的AI语音合成模型，支持多语言和高保真语音生成',
        scenarios: '语音助手、有声书、播客制作'
      }
    ]
  }
]

export function AIModelsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeVendor, setActiveVendor] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 50%, #0F1729 100%)',
      paddingBottom: '4rem'
    }}>
      {/* Hero Banner */}
      <div style={{
        position: 'relative',
        background: 'url(/Pic4AIModels/1.png) center/cover no-repeat',
        borderBottom: '1px solid rgba(108, 99, 255, 0.2)',
        padding: '5rem 2rem',
        textAlign: 'center',
        overflow: 'hidden',
        minHeight: '400px'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.65) 0%, rgba(138, 132, 255, 0.55) 100%)',
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            color: '#FFFFFF',
            marginBottom: '1rem',
            letterSpacing: '2px',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
          }}>
            AI 模型服务
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#E2E8F0',
            marginBottom: '2.5rem',
            fontWeight: 300,
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
          }}>
            一站式调用主流 AI 大模型，赋能您的OPC项目
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
              整合全球主流厂商 AI 大模型，
              覆盖文本生成、代码开发、图像理解、视频创作、语音合成等多模态场景，
              标准化 API 接口，灵活计费，让 AI 能力触手可及。
            </p>
          </div>
        </div>
      </div>

      {/* 模型服务矩阵 */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 700, 
            color: '#F1F5F9',
            marginBottom: '0.5rem'
          }}>
            主流 AI 模型服务
          </h2>
          
          <div style={{ 
            width: '80px', 
            height: '3px', 
            background: 'linear-gradient(90deg, #6C63FF, #8A84FF)',
            margin: '0 auto 1rem'
          }} />
          
          <p style={{ 
            color: '#A5B4FC', 
            fontSize: '0.95rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            以下展示各厂商代表性模型，完整列表以实际开放为准
          </p>
        </div>

        {/* 厂商筛选标签 */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          flexWrap: 'nowrap',
          justifyContent: 'center',
          marginBottom: '3rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem'
        }}>
          {modelGroups.map((group) => (
            <button
              key={group.vendor}
              onClick={() => setActiveVendor(activeVendor === group.vendor ? null : group.vendor)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: activeVendor === group.vendor ? 'none' : '1px solid rgba(108, 99, 255, 0.3)',
                background: activeVendor === group.vendor ? group.color : 'transparent',
                color: activeVendor === group.vendor ? '#FFFFFF' : '#CBD5E1',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              {group.vendor}
            </button>
          ))}
        </div>

        {/* 模型卡片 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {modelGroups
            .filter(group => activeVendor === null || activeVendor === group.vendor)
            .map((group, groupIndex) => (
              <div key={group.vendor} style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? `fadeInUp 0.8s ease-out ${groupIndex * 0.1}s both` : 'none'
              }}>
                {/* 厂商标题 */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '2rem',
                  paddingBottom: '1rem',
                  borderBottom: `2px solid ${group.color}40`
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: `linear-gradient(135deg, ${group.color}, ${group.color}80)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Cpu style={{ width: '20px', height: '20px', color: '#FFFFFF' }} />
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 700, 
                    color: '#F1F5F9'
                  }}>
                    {group.vendor}
                  </h3>
                  <span style={{ 
                    marginLeft: 'auto',
                    padding: '4px 12px',
                    background: `${group.color}20`,
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    color: group.color,
                    fontWeight: 500
                  }}>
                    代表性模型
                  </span>
                </div>

                {/* 模型卡片网格 */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                  gap: '1.5rem' 
                }}>
                  {group.models.map((model, modelIndex) => (
                    <div
                      key={model.name}
                      style={{
                        background: 'rgba(30, 41, 59, 0.8)',
                        border: '1px solid rgba(71, 85, 105, 0.5)',
                        borderRadius: '16px',
                        padding: '2rem',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        opacity: isVisible ? 1 : 0,
                        animation: isVisible ? `fadeInUp 0.6s ease-out ${modelIndex * 0.05}s both` : 'none'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-6px)'
                        e.currentTarget.style.borderColor = `${group.color}60`
                        e.currentTarget.style.boxShadow = `0 16px 32px rgba(0, 0, 0, 0.3)`
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <h4 style={{ 
                        fontSize: '1.15rem', 
                        fontWeight: 700, 
                        color: '#F1F5F9',
                        marginBottom: '1rem'
                      }}>
                        {model.name}
                      </h4>
                      
                      {/* 能力标签 */}
                      <div style={{ 
                        display: 'flex', 
                        gap: '6px', 
                        flexWrap: 'wrap',
                        marginBottom: '1rem'
                      }}>
                        {model.tags.map((tag) => (
                          <span key={tag} style={{
                            padding: '4px 10px',
                            background: `${group.color}15`,
                            border: `1px solid ${group.color}30`,
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            color: group.color,
                            fontWeight: 500
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <p style={{ 
                        color: '#94A3B8', 
                        fontSize: '0.9rem', 
                        lineHeight: 1.7,
                        marginBottom: '1rem'
                      }}>
                        {model.description}
                      </p>
                      
                      <div style={{
                        padding: '0.75rem',
                        background: 'rgba(108, 99, 255, 0.05)',
                        borderRadius: '8px',
                        border: '1px solid rgba(108, 99, 255, 0.1)'
                      }}>
                        <span style={{ color: '#A5B4FC', fontSize: '0.8rem', fontWeight: 600 }}>适用场景：</span>
                        <span style={{ color: '#CBD5E1', fontSize: '0.85rem' }}>{model.scenarios}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* 服务优势 */}
      <section style={{ 
        padding: '4rem 2rem',
        background: 'linear-gradient(180deg, transparent 0%, rgba(30, 41, 59, 0.3) 50%, transparent 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 700, 
              color: '#F1F5F9',
              marginBottom: '0.5rem'
            }}>
              为什么选择我们
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              {
                icon: Globe,
                title: '一站集成',
                description: '一个平台接入多款主流 AI 模型，无需多平台切换'
              },
              {
                icon: Zap,
                title: '快速接入',
                description: '标准化 API 接口，配套完善文档，快速完成集成'
              },
              {
                icon: Database,
                title: '灵活计费',
                description: '按量付费，支持多种计费模式，灵活控制成本'
              },
              {
                icon: Award,
                title: '技术支持',
                description: '专业技术团队提供支持，助力项目顺利落地'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(71, 85, 105, 0.5)',
                    borderRadius: '16px',
                    padding: '2.5rem',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
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
                    width: '56px',
                    height: '56px',
                    margin: '0 auto 1.5rem',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.2), rgba(138, 132, 255, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon style={{ width: '28px', height: '28px', color: '#A5B4FC' }} />
                  </div>
                  <h3 style={{ 
                    fontSize: '1.15rem', 
                    fontWeight: 700, 
                    color: '#F1F5F9',
                    marginBottom: '0.75rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    color: '#94A3B8', 
                    fontSize: '0.9rem',
                    lineHeight: 1.6
                  }}>
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 立即申请按钮 */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          fontWeight: 700, 
          color: '#F1F5F9',
          marginBottom: '0.75rem'
        }}>
          AI 模型服务即将上线
        </h2>
        <p style={{ 
          color: '#94A3B8', 
          fontSize: '1rem',
          marginBottom: '2.5rem'
        }}>
          多款模型即将上线，锁定内测名额优先体验
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
            立即申请内测席位 <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
        </a>
      </section>

      <Footer />
      
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
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          
          h2 {
            font-size: 1.75rem !important;
          }
        }
      `}</style>
    </div>
  )
}
