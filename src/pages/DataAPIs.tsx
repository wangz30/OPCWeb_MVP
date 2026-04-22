import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Footer } from '@/components/Footer'

// 要素数据分类数据
const elementDataCategories = [
  {
    id: 'enterprise',
    name: '企业',
    icon: '🏢',
    description: '提供企业多维度信息查询 API，涵盖工商信息、知识产权、资质认定、财务数据、所属产业集群等企业核心数据',
    datasets: [
      {
        id: 'enterprise-search',
        name: '企业搜索查询',
        description: '提供多维度企业基础信息相关 API 接口功能，支持获取企业基本信息、所属产业集群等信息'
      },
      {
        id: 'enterprise-business',
        name: '工商信息',
        description: '提供企业工商信息相关 API 接口功能，支持获取工商照面、企业联系方式、企业简介等信息'
      },
      {
        id: 'enterprise-development',
        name: '企业发展',
        description: '提供企业发展相关 API 接口功能，支持获取企业科技认定信息、企业迁移信息等信息'
      }
    ]
  },
  {
    id: 'patent',
    name: '专利',
    icon: '💡',
    description: '提供专利多维度查询与分析 API，涵盖专利基础信息、产业属性、法律状态、家族关系、引用关系等维度的数据服务',
    datasets: [
      {
        id: 'patent-basic',
        name: '专利基础信息',
        description: '提供专利基础信息相关 API 接口功能，支持获取专利摘要、发明人等字段信息'
      },
      {
        id: 'patent-industry',
        name: '专利产业分析',
        description: '提供专利产业分析相关 API 接口功能，支持获得专利所属产业集群等字段信息'
      },
      {
        id: 'patent-legal',
        name: '专利法律状态分析',
        description: '提供专利法律状态分析相关 API 接口功能，支持获得专利寿命周期、法律状态等信息'
      },
      {
        id: 'patent-family',
        name: '专利家族分析',
        description: '提供专利家族分析相关 API 接口功能，支持获得 PCT 专利信息等信息'
      },
      {
        id: 'patent-citation',
        name: '专利引用分析',
        description: '提供专利引用分析相关 API 接口功能，支持获得专利寿命周期、法律状态等信息'
      },
      {
        id: 'patent-search',
        name: '专利检索服务',
        description: '提供专利检索服务相关 API 接口功能，支持通过优先权、摘要关键词等信息'
      }
    ]
  },
  {
    id: 'investment',
    name: '投融资',
    icon: '💰',
    description: '提供投融资事件相关信息查询 API，涵盖企业融资历史、投资方信息、融资轮次等数据服务',
    datasets: [
      {
        id: 'investment-search',
        name: '投融资查询',
        description: '提供投融资查询相关 API 接口功能，支持获得获投方、投资方、所属产业领域等信息'
      }
    ]
  },
  {
    id: 'investment-org',
    name: '投资机构',
    icon: '🏦',
    description: '提供投资机构相关信息查询 API，涵盖投资机构基本信息、投资行为、管理基金等数据服务',
    datasets: [
      {
        id: 'org-search',
        name: '投资机构信息检索',
        description: '提供投资机构信息检索相关API接口功能，支持获得投资机构基本信息、团队成员、联系方式等信息'
      },
      {
        id: 'org-analysis',
        name: '投资能力分析',
        description: '提供投资能力分析相关API接口功能，支持获得投资行业偏好、投资成功率、投资区域偏好等信息'
      },
      {
        id: 'org-event',
        name: '投资事件分析',
        description: '提供投资事件分析相关 API 接口功能，支持获得退出事件、获投企业信息等信息'
      },
      {
        id: 'fund-search',
        name: '基金产品检索',
        description: '提供基金产品检索相关 API 接口功能，支持获得基金产品列表、基金管理人信息等信息'
      }
    ]
  },
  {
    id: 'policy',
    name: '政策',
    icon: '📋',
    description: '提供产业政策相关信息查询 API，支持政策标题、扶持类型、产业领域等维度的政策检索功能',
    datasets: [
      {
        id: 'policy-search',
        name: '政策搜索',
        description: '提供政策搜索相关 API 接口功能，支持获得政策内容、产业集群等信息'
      }
    ]
  },
  {
    id: 'copyright',
    name: '著作权',
    icon: '📜',
    description: '提供著作权相关信息查询 API，支持软件著作权等核心著作权数据的检索与获取',
    datasets: [
      {
        id: 'copyright-search',
        name: '著作权检索服务',
        description: '提供著作权检索服务相关 API 接口功能，支持获得著作权基本信息、著作权作者等信息'
      },
      {
        id: 'copyright-industry',
        name: '著作权产业分析',
        description: '提供著作权产业分析相关 API 接口功能，支持获得著作权所在企业的产业集群等信息'
      }
    ]
  },
  {
    id: 'bidding',
    name: '招投标',
    icon: '📢',
    description: '提供招投标相关信息查询 API，支持通过关键词、单位名称等维度检索招投标数据',
    datasets: [
      {
        id: 'bidding-search',
        name: '招投标查询',
        description: '提供招投标查询相关 API 接口功能，支持获得项目招投标、公告标题等信息'
      }
    ]
  },
  {
    id: 'innovation',
    name: '创新载体',
    icon: '🔬',
    description: '提供创新载体相关信息查询 API，支持各类创新平台、科研机构等创新载体数据的检索与获取',
    datasets: [
      {
        id: 'innovation-basic',
        name: '创新载体基础信息',
        description: '提供创新载体基础信息相关 API 接口功能，支持获得创新载体基本信息等信息'
      },
      {
        id: 'innovation-relation',
        name: '创新载体关联关系信息',
        description: '提供创新载体关联关系信息相关 API 接口功能，支持获得创新载体区域分布等信息'
      }
    ]
  },
  {
    id: 'opensource',
    name: '开源资讯',
    icon: '🌐',
    description: '提供产业相关开源资讯查询 API，支持通过关键词、区域、产业环节等维度检索资讯信息',
    datasets: [
      {
        id: 'opensource-get',
        name: '资讯获取',
        description: '提供咨询获取相关 API 接口功能，支持资讯关键词查询、产业资讯等功能'
      }
    ]
  }
]

export function DataAPIsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('enterprise')
  const [expandedElement, setExpandedElement] = useState<boolean>(false)

  const currentCategory = elementDataCategories.find(cat => cat.id === selectedCategory)

  const toggleElementData = () => {
    setExpandedElement(!expandedElement)
  }
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
              为AI OPC创业者提供国家级产业数据接口，快速获取知识产权、政策融资等关键要素信息,
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
          gap: '2rem',
          marginBottom: expandedElement ? '0' : '2rem'
        }}>
          {/* 要素数据 */}
          <div 
            onClick={toggleElementData}
            style={{ 
              background: 'rgba(30, 41, 59, 0.8)',
              border: expandedElement ? '2px solid #6C63FF' : '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '16px',
              padding: '2.5rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              if (!expandedElement) {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
              }
            }}
            onMouseOut={(e) => {
              if (!expandedElement) {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                e.currentTarget.style.boxShadow = 'none'
              }
            }}
          >
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
            {/* 底部横杠 */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #6C63FF, #8A84FF)',
              transform: expandedElement ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.3s ease'
            }} />
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
              场景数据（敬请期待）
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
              主题数据（敬请期待）
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

        {/* 要素数据详细内容区 */}
        {expandedElement && (
          <div style={{
            marginTop: '3rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(108, 99, 255, 0.3)',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '2rem'
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 700, 
                color: '#6C63FF',
                marginBottom: '0.5rem'
              }}>
                要素数据
              </h2>
            </div>

            {/* 交互式界面 */}
            <div style={{ 
              background: 'rgba(15, 23, 42, 0.5)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(108, 99, 255, 0.2)'
            }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '220px 1fr', 
                gap: '2rem'
              }}>
                {/* 左侧边栏 */}
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.5rem',
                  borderRight: '1px solid rgba(71, 85, 105, 0.3)',
                  paddingRight: '1.5rem'
                }}>
                  {elementDataCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 16px',
                        background: selectedCategory === category.id 
                          ? 'rgba(108, 99, 255, 0.15)' 
                          : 'transparent',
                        border: selectedCategory === category.id 
                          ? '2px solid #6C63FF' 
                          : '1px solid transparent',
                        borderRadius: '8px',
                        color: selectedCategory === category.id 
                          ? '#A5B4FC' 
                          : '#CBD5E1',
                        fontSize: '0.9rem',
                        fontWeight: selectedCategory === category.id ? 600 : 400,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textAlign: 'left'
                      }}
                      onMouseOver={(e) => {
                        if (selectedCategory !== category.id) {
                          e.currentTarget.style.background = 'rgba(108, 99, 255, 0.1)'
                          e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.3)'
                        }
                      }}
                      onMouseOut={(e) => {
                        if (selectedCategory !== category.id) {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.borderColor = 'transparent'
                        }
                      }}
                    >
                      <span style={{ fontSize: '1.1rem' }}>{category.icon}</span>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>

                {/* 右侧内容区 */}
                <div>
                  {currentCategory && (
                    <>
                      <h4 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: 700, 
                        color: '#F1F5F9',
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span style={{ fontSize: '1.3rem' }}>{currentCategory.icon}</span>
                        {currentCategory.name}
                      </h4>
                      <p style={{ 
                        color: '#94A3B8', 
                        fontSize: '0.9rem', 
                        lineHeight: 1.7,
                        marginBottom: '1.5rem',
                        paddingBottom: '1.5rem',
                        borderBottom: '1px solid rgba(71, 85, 105, 0.3)'
                      }}>
                        {currentCategory.description}
                      </p>

                      {currentCategory.datasets.length > 0 ? (
                        <>
                          <h5 style={{ 
                            fontSize: '1rem', 
                            fontWeight: 600, 
                            color: '#F1F5F9',
                            marginBottom: '1rem'
                          }}>
                            数据集清单
                          </h5>
                          <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                            gap: '1rem'
                          }}>
                            {currentCategory.datasets.map((dataset) => (
                              <div
                                key={dataset.id}
                                style={{
                                  background: 'rgba(30, 41, 59, 0.6)',
                                  border: '1px solid rgba(71, 85, 105, 0.4)',
                                  borderRadius: '10px',
                                  padding: '1.25rem',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease'
                                }}
                                onMouseOver={(e) => {
                                  e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
                                  e.currentTarget.style.background = 'rgba(30, 41, 59, 0.8)'
                                  e.currentTarget.style.transform = 'translateY(-2px)'
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.4)'
                                  e.currentTarget.style.background = 'rgba(30, 41, 59, 0.6)'
                                  e.currentTarget.style.transform = 'translateY(0)'
                                }}
                              >
                                <h6 style={{ 
                                  fontSize: '0.95rem', 
                                  fontWeight: 600, 
                                  color: '#F1F5F9',
                                  marginBottom: '0.5rem'
                                }}>
                                  {dataset.name}
                                </h6>
                                <p style={{ 
                                  color: '#64748B', 
                                  fontSize: '0.8rem', 
                                  lineHeight: 1.5
                                }}>
                                  {dataset.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div style={{
                          background: 'rgba(108, 99, 255, 0.1)',
                          border: '1px dashed rgba(108, 99, 255, 0.3)',
                          borderRadius: '10px',
                          padding: '2rem',
                          textAlign: 'center'
                        }}>
                          <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                            数据集清单即将推出，敬请期待...
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
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
            已入驻？申请数据API支持 <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
        </a>
      </section>

      <Footer />
    </div>
  )
}
