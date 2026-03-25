import { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, Database, Cloud, Zap, Play, Star, Shield, Clock, Check } from 'lucide-react'
import { Footer } from '@/components/Footer'

// Banner数据
const banners = [
  {
    id: 1,
    title: 'GPT-4 Turbo',
    subtitle: '最新一代GPT-4模型',
    description: '支持128K上下文，强大的多轮对话能力，适用于各类智能应用场景',
    image: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    color: '#6C63FF',
    stats: ['128K上下文', 'GPT-4最新版本', '多模态理解']
  },
  {
    id: 2,
    title: 'DeepSeek-V2',
    subtitle: '国产开源大模型',
    description: '高性能推理能力，开源可商用，助力企业低成本AI应用落地',
    image: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)',
    color: '#10B981',
    stats: ['开源免费', '高性能推理', '中文优化']
  },
  {
    id: 3,
    title: 'Stable Diffusion XL',
    subtitle: 'AI图像生成利器',
    description: '最先进的图像生成模型，一句话生成专业级图片',
    image: 'linear-gradient(135deg, #2d132c 0%, #801336 50%, #ee4540 100%)',
    color: '#F59E0B',
    stats: ['文生图', '图生图', 'ControlNet']
  }
]

// AI模型按应用场景分类
const modelScenarios = [
  {
    id: 'smart-office',
    title: '智能办公',
    icon: '💼',
    description: '提升办公效率，自动化处理文档、会议、沟通',
    models: [
      { id: '1', name: 'GPT-4 Turbo', provider: 'OpenAI', price: '¥0.01/1K tokens', icon: '🤖', feature: '文档撰写、邮件生成、会议纪要' },
      { id: '2', name: 'Claude 3 Opus', provider: 'Anthropic', price: '¥0.015/1K tokens', icon: '🧠', feature: '长文档分析、代码审查、报告生成' },
      { id: '3', name: 'DeepSeek-V2', provider: 'DeepSeek', price: '¥0.001/1K tokens', icon: '🔮', feature: '中文办公、表格处理、数据分析' },
      { id: '4', name: 'TTS-1-HD', provider: 'OpenAI', price: '¥0.015/1K字符', icon: '🔊', feature: '语音播报、有声文档、会议录音' },
    ]
  },
  {
    id: 'content-creation',
    title: '内容创作',
    icon: '🎨',
    description: '赋能创意生产，图文音视频一站式生成',
    models: [
      { id: '5', name: 'Stable Diffusion XL', provider: 'Stability AI', price: '¥0.02/图', icon: '🎨', feature: '海报设计、产品图、创意插画' },
      { id: '6', name: 'DALL-E 3', provider: 'OpenAI', price: '¥0.04/图', icon: '🖼️', feature: '营销配图、社交媒体、概念设计' },
      { id: '7', name: 'GPT-4 Turbo', provider: 'OpenAI', price: '¥0.01/1K tokens', icon: '✍️', feature: '文案创作、脚本编写、小说生成' },
      { id: '8', name: 'Midjourney v6', provider: 'Midjourney', price: '¥0.03/图', icon: '🌟', feature: '艺术风格、品牌视觉、封面设计' },
    ]
  },
  {
    id: 'customer-service',
    title: '智能客服',
    icon: '🎧',
    description: '7×24小时智能服务，提升客户满意度',
    models: [
      { id: '9', name: 'GPT-4 Turbo', provider: 'OpenAI', price: '¥0.01/1K tokens', icon: '💬', feature: '多轮对话、意图识别、情感分析' },
      { id: '10', name: 'Claude 3 Opus', provider: 'Anthropic', price: '¥0.015/1K tokens', icon: '🎯', feature: '复杂咨询、专业问答、知识库检索' },
      { id: '11', name: 'Whisper Large v3', provider: 'OpenAI', price: '¥0.006/分钟', icon: '🎤', feature: '语音客服、电话质检、语音转写' },
      { id: '12', name: 'TTS-1-HD', provider: 'OpenAI', price: '¥0.015/1K字符', icon: '🗣️', feature: '语音播报、智能外呼、语音导航' },
    ]
  },
  {
    id: 'code-dev',
    title: '代码开发',
    icon: '💻',
    description: 'AI辅助编程，提升开发效率与代码质量',
    models: [
      { id: '13', name: 'GPT-4 Turbo', provider: 'OpenAI', price: '¥0.01/1K tokens', icon: '⚡', feature: '代码生成、Bug修复、代码解释' },
      { id: '14', name: 'Claude 3 Opus', provider: 'Anthropic', price: '¥0.015/1K tokens', icon: '🔧', feature: '代码审查、重构建议、架构设计' },
      { id: '15', name: 'GitHub Copilot', provider: 'GitHub', price: '¥10/月', icon: '🚀', feature: '实时代码补全、函数生成、测试用例' },
      { id: '16', name: 'DeepSeek-Coder', provider: 'DeepSeek', price: '¥0.001/1K tokens', icon: '📟', feature: '中文编程、代码翻译、算法优化' },
    ]
  },
  {
    id: 'data-analysis',
    title: '数据分析',
    icon: '📊',
    description: '智能数据洞察，快速发现业务价值',
    models: [
      { id: '17', name: 'GPT-4 Turbo', provider: 'OpenAI', price: '¥0.01/1K tokens', icon: '📈', feature: '数据解读、报表生成、趋势预测' },
      { id: '18', name: 'Claude 3 Opus', provider: 'Anthropic', price: '¥0.015/1K tokens', icon: '📉', feature: '财务分析、风险评估、商业洞察' },
      { id: '19', name: 'DeepSeek-V2', provider: 'DeepSeek', price: '¥0.001/1K tokens', icon: '🔍', feature: '数据清洗、特征工程、模型训练' },
      { id: '20', name: 'Tableau GPT', provider: 'Tableau', price: '¥50/月', icon: '📋', feature: '可视化生成、智能问答、仪表板' },
    ]
  },
]

// 数据API垂直领域
const apiCategories = [
  {
    id: '1',
    name: '金融数据',
    icon: '💰',
    count: 12,
    summary: '股票、基金、期货、外汇实时行情与历史数据，支持K线图、技术指标分析。'
  },
  {
    id: '2',
    name: '气象环境',
    icon: '🌦️',
    count: 8,
    summary: '全球实时天气、空气质量、灾害预警，支持7-15天预报和历史查询。'
  },
  {
    id: '3',
    name: '地理信息',
    icon: '🗺️',
    count: 15,
    summary: '地图服务、地理编码、路径规划、POI搜索，支持多模式导航。'
  },
  {
    id: '4',
    name: 'AI智能服务',
    icon: '🤖',
    count: 20,
    summary: 'OCR识别、人脸识别、语音识别、NLP等AI能力，开箱即用。'
  },
  {
    id: '5',
    name: '电商零售',
    icon: '🛒',
    count: 10,
    summary: '商品信息、价格监控、库存查询、物流追踪，支持主流平台对接。'
  },
  {
    id: '6',
    name: '内容资讯',
    icon: '📰',
    count: 18,
    summary: '新闻、社交媒体、短视频、知识百科聚合，支持热点追踪分析。'
  },
  {
    id: '7',
    name: '企业工商',
    icon: '🏢',
    count: 6,
    summary: '企业注册、股权结构、经营异常、司法风险、知识产权数据。'
  },
  {
    id: '8',
    name: '交通出行',
    icon: '🚗',
    count: 14,
    summary: '航班、火车、公交、共享单车、网约车数据，支持多式联运。'
  },
]

// 云资源配置推荐
const cloudServices = [
  {
    id: 1,
    category: '云计算',
    icon: '☁️',
    title: '弹性云服务器ECS',
    description: '支持2核 | 4G及4核 | 16G选择，立即咨询',
    color: '#6C63FF',
    features: ['弹性伸缩', '按需付费', '高性能计算', '安全可靠']
  },
  {
    id: 2,
    category: '云存储',
    icon: '💾',
    title: '对象存储服务OBS',
    description: '对象存储服务OBS、云备份CBR、弹性文件服务SFS',
    color: '#10B981',
    features: ['海量存储', '数据备份', '文件共享', '高可用']
  },
  {
    id: 3,
    category: '云数据库',
    icon: '🗄️',
    title: 'Flexus云数据库RDS',
    description: '高性能、高可靠、弹性扩展的云数据库服务',
    color: '#F59E0B',
    features: ['自动备份', '读写分离', '监控告警', '弹性扩容']
  },
]

export function ProductsPage() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Banner自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextBanner = () => setCurrentBanner((currentBanner + 1) % banners.length)
  const prevBanner = () => setCurrentBanner((currentBanner - 1 + banners.length) % banners.length)

  // 筛选分类
  const categories = [
    { id: 'all', label: '全部产品', icon: '📦' },
    { id: 'model', label: 'AI模型', icon: '🤖' },
    { id: 'api', label: '数据API', icon: '🔌' },
    { id: 'cloud', label: '云资源', icon: '☁️' },
  ]

  return (
    <div style={{ background: 'linear-gradient(to bottom, #0f172a, #1e1b4b, #0f172a)', minHeight: '100vh', width: '100%' }}>
      {/* Banner轮播 */}
      <section style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
        {/* 当前Banner内容 */}
        <div
          style={{
            width: '100%',
            height: '100%',
            background: banners[currentBanner].image,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', width: '100%' }}>
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: `${banners[currentBanner].color}30`, color: banners[currentBanner].color }}>
                  {banners[currentBanner].subtitle}
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">{banners[currentBanner].title}</h1>
              <p className="text-lg text-slate-300 mb-6">{banners[currentBanner].description}</p>
              <div className="flex gap-2 mb-8">
                {banners[currentBanner].stats.map((stat, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                    {stat}
                  </span>
                ))}
              </div>
              <button className="px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2" style={{ background: banners[currentBanner].color }}>
                立即体验 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Banner导航 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentBanner ? 'bg-white w-8' : 'bg-white/40'}`}
            />
          ))}
        </div>

        {/* 左右箭头 */}
        <button onClick={prevBanner} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextBanner} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white">
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

        {/* AI模型应用场景 - 紧凑布局 */}
      <section style={{ position: 'relative', padding: '48px 0', zIndex: 10, background: 'transparent' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">热门AI模型</h2>
              <p className="text-slate-400 text-sm">按应用场景精选，快速找到适合你的AI能力</p>
            </div>
            <a href="/models" className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm">
              查看更多 <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* 5个应用场景 - 紧凑间距 */}
          <div className="space-y-8">
            {modelScenarios.map((scenario) => (
              <div key={scenario.id} className="bg-slate-800/30 border border-slate-700 rounded-2xl p-5">
                {/* 场景标题 */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{scenario.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{scenario.title}</h3>
                    <p className="text-slate-400 text-xs">{scenario.description}</p>
                  </div>
                </div>
                
                {/* 场景下的模型 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {scenario.models.map((model) => (
                    <div key={model.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 hover:border-purple-500 transition-all">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">{model.icon}</span>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm">{model.name}</h4>
                          <p className="text-slate-500 text-xs">{model.provider}</p>
                        </div>
                      </div>
                      <p className="text-slate-400 text-xs mb-2 line-clamp-2">{model.feature}</p>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-400 text-xs font-semibold">{model.price}</span>
                      </div>
                      <button className="w-full py-1.5 rounded-lg text-white text-xs font-medium transition-all" style={{ background: 'linear-gradient(135deg, #6C63FF, #8A84FF)', border: 'none' }}>
                        立即试用
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 热门数据API - 紧凑布局 */}
      <section style={{ padding: '48px 0', background: 'rgba(30, 41, 59, 0.3)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">热门数据API</h2>
              <p className="text-slate-400 text-sm">覆盖8大垂直领域，海量数据接口助力业务创新</p>
            </div>
            <a href="/data-apis" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-sm">
              查看更多 <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* 卡片式展示 - 4*2 网格，紧凑间距 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {apiCategories.map((api) => (
              <div 
                key={api.id} 
                className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {/* 卡片头部 - 图标和标题 */}
                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.05))',
                  padding: '16px',
                  borderBottom: '1px solid rgba(71, 85, 105, 0.5)'
                }}>
                  <div className="flex items-center gap-3">
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #10B981, #34D399)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px'
                    }}>
                      {api.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{api.name}</h3>
                      <span style={{ 
                        background: 'rgba(16, 185, 129, 0.2)', 
                        color: '#34D399', 
                        padding: '3px 10px', 
                        borderRadius: '16px',
                        fontSize: '0.75rem',
                        fontWeight: 500
                      }}>
                        {api.count}个API
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* 卡片内容 - 摘要 */}
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p className="text-slate-400 text-xs leading-relaxed" style={{ flex: 1 }}>
                    {api.summary}
                  </p>
                  
                  {/* 按钮 */}
                  <button 
                    className="w-full mt-3 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #10B981, #34D399)', border: 'none' }}
                  >
                    查看API列表
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 云资源配置推荐 - 紧凑布局 */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">云资源配置推荐</h2>
            <p className="text-slate-400">根据不同场景推荐最优云资源配置，即刻部署</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {cloudServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/30 hover:border-slate-500">
                {/* 头部 - 图标和分类 */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{service.icon}</div>
                  <div>
                    <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ background: `${service.color}20`, color: service.color }}>
                      {service.category}
                    </span>
                  </div>
                </div>
                
                {/* 主要内容 */}
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{service.description}</p>
                
                {/* 功能特性 - 紧凑列表 */}
                <div className="mb-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.color }}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* 按钮 */}
                <button className="w-full py-2.5 rounded-lg font-medium text-sm transition-colors hover:opacity-90 active:scale-[0.98]" style={{ background: service.color, color: 'white' }}>
                  {service.category === '云计算' ? '立即咨询' : '了解更多'}
                </button>
              </div>
            ))}
          </div>

          {/* 补充说明 */}
          <div className="mt-6 text-center">
            <p className="text-slate-500 text-sm">
              需要定制化配置？<a href="/contact" className="text-purple-400 hover:text-purple-300 ml-1">联系我们的云专家</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA - 紧凑布局 */}
      <section style={{ padding: '48px 0', background: 'linear-gradient(to bottom, #0f172a, #1e1b4b, #0f172a)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTIgMTIiPjxwYXRoIGQ9Ik0xMCAxaC0ydjJIMTBWMXptLTggMXYyaC0ydi0yaDJ6bS04IDdoLTJ2MmgtMnYtMmgydnptOCA3aC0ydjJoLTJ2LTJoMnYtMnptLTggOGgtMnYyaC0ydi0yaDJ6IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PS4xIi8+PC9zdmc+')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-3">开启智能新时代</h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto text-sm">
                注册即送免费额度，畅享AI模型、数据API、云资源一站式服务
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/register" className="px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors" style={{ background: 'linear-gradient(135deg, #6C63FF, #8A84FF)', color: 'white' }}>
                  免费注册
                </a>
                <a href="/cloud-resources" className="px-6 py-2.5 border-2 border-white text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors">
                  查看详情
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
