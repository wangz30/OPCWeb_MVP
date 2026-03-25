import { ArrowRight, FileText, Cloud, Briefcase, TrendingUp, Shield, Zap, Globe, Building, Award } from 'lucide-react'
import { useState } from 'react'
import { Footer } from '@/components/Footer'

export function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'policy' | 'cloud' | 'resource'>('all')
  // 统一的按钮样式
  const btnPrimary = {
    background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
    border: 'none',
    color: 'white',
    padding: '16px 40px',
    borderRadius: '8px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    fontSize: '1.1rem'
  } as const

  const btnSecondary = {
    background: 'transparent',
    border: '2px solid white',
    color: 'white',
    padding: '16px 40px',
    borderRadius: '8px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    fontSize: '1.1rem'
  } as const
  const solutions = [
    {
      id: 'policies',
      category: 'policy',
      title: '信息与政策赋能',
      subtitle: 'Policy Empowerment',
      description: '聚焦产业政策、扶持资金、申报指南，为企业提供最权威的政策解读与申报服务',
      icon: FileText,
      color: '#6C63FF',
      gradient: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
      features: [
        { title: '政策资讯', desc: '实时更新国家、省、市、区各级产业政策' },
        { title: '资金扶持', desc: '各类专项资金、补贴申报指南与对接服务' },
        { title: '申报指南', desc: '项目申报全流程指导与材料准备' },
      ],
      path: '/policies',
      imageGradient: 'linear-gradient(135deg, #6C63FF, #4ECDC4)'
    },
    {
      id: 'cloud-resources',
      category: 'cloud',
      title: 'AI技术与云资源',
      subtitle: 'AI Technology & Cloud Resources',
      description: '整合前沿AI技术与云端算力资源，助力企业快速实现数字化转型与智能化升级',
      icon: Cloud,
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981, #34D399)',
      features: [
        { title: 'AI大模型', desc: '接入主流大模型API，赋能业务创新' },
        { title: '云计算资源', desc: '弹性云服务器、GPU算力按需调用' },
        { title: '模型部署', desc: '一站式模型训练、部署与推理服务' },
      ],
      path: '/cloud-resources',
      imageGradient: 'linear-gradient(135deg, #10B981, #6C63FF)'
    },
    {
      id: 'resources',
      category: 'resource',
      title: '全维度资源与能力升级',
      subtitle: 'Comprehensive Resources Upgrade',
      description: '从人才对接、技术合作到市场拓展，提供企业成长全生命周期资源支持',
      icon: Briefcase,
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
      features: [
        { title: '企业需求对接', desc: 'AI需求发布与精准匹配对接服务' },
        { title: '揭榜挂帅', desc: '重大项目技术攻关需求发布与团队征集' },
        { title: '创客空间', desc: '拎包入驻办公空间与创业孵化支持' },
      ],
      path: '/resources',
      imageGradient: 'linear-gradient(135deg, #F59E0B, #FF6584)'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiM2QzYzRkYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }} className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              解决方案
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              依托产业生态优势，为企业提供从政策支持到技术赋能的全方位解决方案
            </p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2 text-slate-400">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span>产业升级</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Zap className="w-5 h-5 text-amber-400" />
                <span>技术赋能</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Shield className="w-5 h-5 text-purple-400" />
                <span>生态共建</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation - 参考华为云 */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            borderBottom: '2px solid #334155',
            paddingBottom: '0',
            marginBottom: '3rem',
            overflowX: 'auto'
          }}>
            {[
              { id: 'all' as const, label: '全部' },
              { id: 'policy' as const, label: '政策赋能' },
              { id: 'cloud' as const, label: '技术赋能' },
              { id: 'resource' as const, label: '资源对接' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '12px 32px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `3px solid ${activeTab === tab.id ? '#6C63FF' : 'transparent'}`,
                  color: activeTab === tab.id ? '#F1F5F9' : '#94A3B8',
                  fontSize: '1rem',
                  fontWeight: activeTab === tab.id ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.color = '#CBD5E1'
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.color = '#94A3B8'
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Cards - 左右布局 */}
      <section className="py-16">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {solutions
              .filter(s => activeTab === 'all' || s.category === activeTab)
              .map((solution, index) => (
              <div
                key={solution.id}
                style={{
                  background: '#1E293B',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #475569',
                  transition: 'all 0.3s ease',
                  height: '480px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
                  e.currentTarget.style.borderColor = solution.color
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#475569'
                }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Content */}
                  <div style={{ padding: '50px 80px', display: 'flex', flexDirection: 'column', height: '480px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '10px',
                          background: solution.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <solution.icon style={{ width: '22px', height: '22px', color: 'white' }} />
                      </div>
                      <div>
                        <span style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: 500, display: 'block', marginBottom: '2px' }}>
                          {solution.subtitle}
                        </span>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F1F5F9', marginBottom: 0 }}>
                          {solution.title}
                        </h3>
                      </div>
                    </div>

                    <p style={{
                      color: '#CBD5E1',
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
                      marginBottom: '24px'
                    }}>
                      {solution.description}
                    </p>

                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#F1F5F9',
                        marginBottom: '16px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        核心服务
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {solution.features.map((feature, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <div style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: solution.color,
                              marginTop: '7px',
                              flexShrink: 0
                            }}></div>
                            <div>
                              <div style={{ color: '#F1F5F9', fontSize: '0.9rem', fontWeight: 500, marginBottom: '2px' }}>
                                {feature.title}
                              </div>
                              <div style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.4 }}>
                                {feature.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={solution.path}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 28px',
                        background: solution.gradient,
                        border: 'none',
                        color: 'white',
                        borderRadius: '8px',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        width: 'fit-content',
                        marginTop: 'auto'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = `0 10px 25px ${solution.color}40`
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      了解更多 <ArrowRight style={{ width: '16px', height: '16px' }} />
                    </a>
                  </div>

                  {/* Right Image */}
                  <div style={{
                    background: solution.imageGradient,
                    height: '480px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+")',
                      opacity: 0.3
                    }}></div>
                    <div style={{
                      position: 'relative',
                      textAlign: 'center',
                      color: 'white',
                      padding: '60px'
                    }}>
                      <solution.icon style={{ width: '200px', height: '200px', marginBottom: '40px', opacity: 0.9 }} />
                      <h4 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '20px' }}>
                        {solution.title}
                      </h4>
                      <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '450px', margin: '0 auto', lineHeight: 1.6 }}>
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Link */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a 
              href="/"
              style={{ 
                color: '#6C63FF', 
                fontSize: '1rem', 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#8A84FF'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#6C63FF'
              }}
            >
              查看更多解决方案 <ArrowRight style={{ width: '16px', height: '16px' }} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTIgMTIiPjxwYXRoIGQ9Ik0xMCAxaC0ydjJIMTBWMXptLTggMXYyaC0ydi0yaDJ6bS04IDdoLTJ2MmgtMnYtMmgydnptOCA3aC0ydjJoLTJ2LTJoMnYtMnptLTggOGgtMnYyaC0ydi0yaDJ6IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PS4xIi8+PC9zdmc+')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">携手共创产业新未来</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                加入OPC产业社区，获取最新政策资讯、对接优质资源、共享发展机遇
              </p>
              
              {/* Stats Bar - 4×1 display */}
              <div className="grid grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
                <div className="text-center px-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Building className="w-5 h-5 text-purple-200" />
                    <span className="text-3xl font-bold text-white">500+</span>
                  </div>
                  <div className="text-white/90 text-sm">入驻企业</div>
                </div>
                <div className="text-center px-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-emerald-200" />
                    <span className="text-3xl font-bold text-white">200+</span>
                  </div>
                  <div className="text-white/90 text-sm">孵化项目</div>
                </div>
                <div className="text-center px-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-blue-200" />
                    <span className="text-3xl font-bold text-white">50+</span>
                  </div>
                  <div className="text-white/90 text-sm">合作机构</div>
                </div>
                <div className="text-center px-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-amber-200" />
                    <span className="text-3xl font-bold text-white">10亿+</span>
                  </div>
                  <div className="text-white/90 text-sm">扶持资金</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                <a 
                  href="/register"
                  style={btnPrimary}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(108, 99, 255, 0.4)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  立即加入
                </a>
                <a 
                  href="/about"
                  style={btnSecondary}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  联系我们
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
