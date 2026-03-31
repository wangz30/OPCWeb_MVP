import { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, Database, Cloud, Zap, Play, Star, Shield, Clock, Check, FileText, Image, Mic, Video, Layers, Code, Server } from 'lucide-react'
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

// AI模型按能力分类 - 新结构
const modelCapabilities = [
  {
    id: 'text',
    title: '文本能力',
    icon: FileText,
    color: '#3B82F6',
    description: '强大的文本理解和生成能力',
    subCategories: [
      { 
        id: 'writing', 
        label: '写作', 
        icon: '✍️',
        models: [
          { id: '1', name: 'GPT-4 Turbo', provider: 'OpenAI', price: '¥0.01/1K tokens', feature: '文章创作、营销文案、创意写作', icon: '🤖' },
          { id: '2', name: 'Claude 3 Opus', provider: 'Anthropic', price: '¥0.015/1K tokens', feature: '长文撰写、报告生成、内容优化', icon: '🧠' },
        ]
      },
      { 
        id: 'chat', 
        label: '对话', 
        icon: '💬',
        models: [
          { id: '3', name: 'GPT-4 Turbo', provider: 'OpenAI', price: '¥0.01/1K tokens', feature: '多轮对话、智能问答、上下文理解', icon: '💬' },
          { id: '4', name: 'DeepSeek-V2', provider: 'DeepSeek', price: '¥0.001/1K tokens', feature: '中文对话、知识问答、情感交流', icon: '🔮' },
        ]
      },
      { 
        id: 'summary', 
        label: '总结', 
        icon: '📝',
        models: [
          { id: '5', name: 'Claude 3 Opus', provider: 'Anthropic', price: '¥0.015/1K tokens', feature: '文档摘要、会议总结、信息提炼', icon: '📋' },
          { id: '6', name: 'GPT-4 Turbo', provider: 'OpenAI', price: '¥0.01/1K tokens', feature: '长文本总结、关键点提取、内容归纳', icon: '📄' },
        ]
      },
    ]
  },
  {
    id: 'image',
    title: '图片能力',
    icon: Image,
    color: '#8B5CF6',
    description: '图像生成、编辑与识别',
    subCategories: [
      { 
        id: 'generate', 
        label: '生成', 
        icon: '🎨',
        models: [
          { id: '7', name: 'Stable Diffusion XL', provider: 'Stability AI', price: '¥0.02/图', feature: '高质量图像生成、艺术风格创作', icon: '🎨' },
          { id: '8', name: 'DALL-E 3', provider: 'OpenAI', price: '¥0.04/图', feature: '精准文生图、创意视觉设计', icon: '🖼️' },
        ]
      },
      { 
        id: 'edit', 
        label: '编辑', 
        icon: '✏️',
        models: [
          { id: '9', name: 'Stable Diffusion XL', provider: 'Stability AI', price: '¥0.02/图', feature: '图像修复、风格迁移、局部重绘', icon: '✨' },
        ]
      },
      { 
        id: 'recognize', 
        label: '识别', 
        icon: '👁️',
        models: [
          { id: '10', name: 'Claude 3 Opus', provider: 'Anthropic', price: '¥0.015/1K tokens', feature: '图像理解、内容描述、视觉问答', icon: '👁️' },
        ]
      },
    ]
  },
  {
    id: 'audio',
    title: '语音能力',
    icon: Mic,
    color: '#10B981',
    description: '语音识别与合成',
    subCategories: [
      { 
        id: 'recognize', 
        label: '识别', 
        icon: '🎤',
        models: [
          { id: '11', name: 'Whisper Large v3', provider: 'OpenAI', price: '¥0.006/分钟', feature: '高精度语音转文字、多语言支持', icon: '🎤' },
        ]
      },
      { 
        id: 'synthesize', 
        label: '合成', 
        icon: '🔊',
        models: [
          { id: '12', name: 'TTS-1-HD', provider: 'OpenAI', price: '¥0.015/1K字符', feature: '自然语音合成、多音色选择', icon: '🔊' },
        ]
      },
    ]
  },
  {
    id: 'video',
    title: '视频能力',
    icon: Video,
    color: '#F59E0B',
    description: '视频生成与处理',
    subCategories: [
      { 
        id: 'generate', 
        label: '生成', 
        icon: '🎬',
        models: [
          { id: '13', name: 'Sora', provider: 'OpenAI', price: '即将上线', feature: '文本生成视频、高质量视频创作', icon: '🎬' },
        ]
      },
    ]
  },
  {
    id: 'multimodal',
    title: '多模态能力',
    icon: Layers,
    color: '#EC4899',
    description: '跨模态理解与生成',
    subCategories: [
      { 
        id: 'text-image', 
        label: '图文', 
        icon: '📄🖼️',
        models: [
          { id: '14', name: 'GPT-4V', provider: 'OpenAI', price: '¥0.015/1K tokens', feature: '图像理解、图文对话、视觉推理', icon: '🔮' },
          { id: '15', name: 'Claude 3 Opus', provider: 'Anthropic', price: '¥0.015/1K tokens', feature: '多模态理解、图文分析、视觉问答', icon: '🎯' },
        ]
      },
    ]
  },
  {
    id: 'code',
    title: '代码能力',
    icon: Code,
    color: '#6366F1',
    description: 'AI辅助编程开发',
    subCategories: [
      { 
        id: 'programming', 
        label: '编程', 
        icon: '💻',
        models: [
          { id: '16', name: 'GPT-4 Turbo', provider: 'OpenAI', price: '¥0.01/1K tokens', feature: '代码生成、Bug修复、代码解释', icon: '⚡' },
          { id: '17', name: 'DeepSeek-Coder', provider: 'DeepSeek', price: '¥0.001/1K tokens', feature: '中文编程、代码翻译、算法优化', icon: '📟' },
        ]
      },
      { 
        id: 'develop', 
        label: '开发', 
        icon: '🚀',
        models: [
          { id: '18', name: 'Claude 3 Opus', provider: 'Anthropic', price: '¥0.015/1K tokens', feature: '代码审查、重构建议、架构设计', icon: '🔧' },
          { id: '19', name: 'GitHub Copilot', provider: 'GitHub', price: '¥10/月', feature: '实时代码补全、函数生成', icon: '🚀' },
        ]
      },
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
    name: '弹性云服务器 ECS',
    description: '灵活可调配的云端计算资源，助力业务快速上线',
    icon: 'Server',
    specs: ['2 核 | 4G', '4 核 | 16G', '弹性伸缩'],
    price: '按需选择',
    color: '#6C63FF'
  },
  {
    id: 2,
    category: '云存储',
    name: '对象存储服务 OBS',
    description: '海量安全的云端存储，支持图片视频等非结构化数据',
    icon: 'Cloud',
    specs: ['无限容量', '99.99% 可靠性', 'CDN 加速'],
    price: '按量计费',
    color: '#3B82F6'
  },
  {
    id: 3,
    category: '云存储',
    name: '弹性文件服务 SFS',
    description: '高性能共享文件存储，满足企业级应用需求',
    icon: 'Zap',
    specs: ['高 IOPS', '低延迟', '多机共享'],
    price: '经济实惠',
    color: '#10B981'
  },
  {
    id: 4,
    category: '云数据库',
    name: 'RDS for MySQL',
    description: '稳定可靠的关系型数据库，开箱即用免运维',
    icon: 'Database',
    specs: ['自动备份', '主从架构', '读写分离'],
    price: '58 元起/月',
    color: '#F59E0B'
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

      {/* AI 模型能力分类 - 新结构 */}
      <section style={{ position: 'relative', padding: '48px 0', zIndex: 10, background: 'transparent' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-1">热门 AI 模型</h2>
            <p className="text-slate-400 text-sm">按模型能力分类，快速找到适合你的 AI 能力</p>
          </div>

          {/* 6 大能力分类 - 水平布局，每个能力只显示 1 个代表模型 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
            {modelCapabilities.map((capability) => {
              // 获取第一个子分类的第一个模型作为整个能力的代表
              const firstModel = capability.subCategories[0]?.models[0]
              
              return (
                <div key={capability.id} style={{ 
                  background: 'rgba(30, 41, 59, 0.4)', 
                  border: '1px solid rgba(71, 85, 105, 0.5)', 
                  borderRadius: '16px', 
                  padding: '20px'
                }}>
                  {/* 能力分类标题 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '10px', 
                      background: `${capability.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <capability.icon style={{ width: '22px', height: '22px', color: capability.color }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '2px' }}>{capability.title}</h3>
                      <p style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{capability.description}</p>
                    </div>
                  </div>
                  
                  {/* 代表模型卡片 */}
                  {firstModel && (
                    <div style={{ 
                      background: 'rgba(15, 23, 42, 0.5)', 
                      border: '1px solid rgba(71, 85, 105, 0.5)', 
                      borderRadius: '10px', 
                      padding: '14px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = capability.color
                      e.currentTarget.style.transform = 'translateY(-3px)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <span style={{ fontSize: '1.8rem' }}>{firstModel.icon}</span>
                          <div>
                            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '3px' }}>{firstModel.name}</h4>
                            <p style={{ fontSize: '0.8rem', color: '#64748B' }}>{firstModel.provider}</p>
                          </div>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '10px', lineHeight: 1.5 }}>{firstModel.feature}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.8rem', color: capability.color, fontWeight: 600 }}>{firstModel.price}</span>
                        <button style={{ 
                          background: `linear-gradient(135deg, ${capability.color}, ${capability.color}dd)`,
                          border: 'none',
                          color: 'white',
                          padding: '6px 14px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.opacity = '0.9'
                          e.currentTarget.style.transform = 'scale(1.05)'
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.opacity = '1'
                          e.currentTarget.style.transform = 'scale(1)'
                        }}>
                          立即试用
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 热门数据 API - 紧凑布局 */}
      <section style={{ padding: '48px 0', background: 'rgba(30, 41, 59, 0.3)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-1">热门数据 API</h2>
            <p className="text-slate-400 text-sm">覆盖 8 大垂直领域，海量数据接口助力业务创新</p>
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

      {/* 云资源配置 - 与云资源页面保持一致 */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">云资源</h2>
            <p className="text-slate-400">汇聚顶尖硬件，一键云部署，助力您的 AI 创业之路</p>
          </div>

          {/* 2x2 网格布局 - 与云资源页面保持一致 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '2rem' 
          }}>
            {cloudServices.map((service) => {
              const IconComponent = service.icon === 'Server' ? Server : 
                                   service.icon === 'Cloud' ? Cloud : 
                                   service.icon === 'Zap' ? Zap : Database
              return (
                <div
                  key={service.id}
                  style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(71, 85, 105, 0.5)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  className="hover:-translate-y-1"
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = service.color
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
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
                      background: `${service.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent style={{ width: '28px', height: '28px', color: service.color }} />
                    </div>
                    <div>
                      <span style={{
                        display: 'inline-block',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        background: `${service.color}15`,
                        color: service.color,
                        fontWeight: 500,
                        marginBottom: '4px'
                      }}>
                        {service.category}
                      </span>
                      <h3 style={{ 
                        color: '#F1F5F9', 
                        fontSize: '1.2rem', 
                        fontWeight: 600
                      }}>
                        {service.name}
                      </h3>
                      <p style={{ 
                        color: service.color, 
                        fontSize: '0.9rem',
                        fontWeight: 500
                      }}>
                        {service.price}
                      </p>
                    </div>
                  </div>
                  <p style={{ 
                    color: '#94A3B8', 
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}>
                    {service.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px' 
                  }}>
                    {service.specs.map((spec, i) => (
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
                  <a href="/cloud-resources" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    marginTop: '1.5rem',
                    color: '#6C63FF',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}>
                    立即选购 <ArrowRight style={{ width: '14px', height: '14px' }} />
                  </a>
                </div>
              )
            })}
          </div>

          {/* 补充说明 */}
          <div className="mt-8 text-center">
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
