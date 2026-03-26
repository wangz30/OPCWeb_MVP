import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search,
  Sparkles,
  Bot,
  Code,
  FileText,
  Image,
  Video,
  Music,
  Volume2,
  ArrowRight,
  Star,
  Download,
  User,
  Eye,
  ThumbsUp,
  MessageSquare,
  Plus,
  Filter,
  Zap,
  Cpu,
  Database,
  Cloud,
  Shield,
  Clock,
  Check,
  ExternalLink
} from 'lucide-react'
import { Footer } from '@/components/Footer'

export function MarketplacePage() {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: '全部', icon: Sparkles },
    { id: 'ai-app', label: 'AI 应用', icon: Sparkles },
    { id: 'agent', label: 'AI 智能体', icon: Bot },
    { id: 'dev-tool', label: '开发工具', icon: Code },
    { id: 'content', label: '内容创作', icon: Image },
  ]

  const aiApps = [
    {
      id: 1,
      name: 'OPC智能客服',
      description: '基于大模型的智能客服系统，支持多轮对话、意图识别、知识库问答',
      category: 'ai-app',
      type: 'official',
      icon: MessageSquare,
      iconColor: '#6C63FF',
      iconBg: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
      rating: 4.8,
      downloads: 12580,
      tags: ['客服', '对话', '知识库'],
      featured: true
    },
    {
      id: 2,
      name: 'AI文案生成器',
      description: '一键生成营销文案、产品描述、社交媒体内容，多种风格可选',
      category: 'content',
      type: 'official',
      icon: FileText,
      iconColor: '#FF6584',
      iconBg: 'linear-gradient(135deg, #FF6584, #FF9A8B)',
      rating: 4.7,
      downloads: 8920,
      tags: ['文案', '营销', '内容生成'],
      featured: true
    },
    {
      id: 3,
      name: '图像生成大师',
      description: 'Text-to-Image AI绘画工具，支持多种风格，快速生成高质量图片',
      category: 'content',
      type: 'official',
      icon: Image,
      iconColor: '#4ECDC4',
      iconBg: 'linear-gradient(135deg, #4ECDC4, #10B981)',
      rating: 4.9,
      downloads: 15620,
      tags: ['AI绘画', '图像生成', '创意设计'],
      featured: true
    },
    {
      id: 4,
      name: '数据分析助手',
      description: '智能数据分析工具，自动生成可视化图表和数据报告',
      category: 'ai-app',
      type: 'third-party',
      icon: Database,
      iconColor: '#3B82F6',
      iconBg: 'linear-gradient(135deg, #3B82F6, #6C63FF)',
      rating: 4.6,
      downloads: 5430,
      tags: ['数据分析', '可视化', '报表'],
      featured: false
    },
    {
      id: 5,
      name: '代码助手',
      description: 'AI编程辅助工具，支持代码补全、bug修复、代码优化建议',
      category: 'dev-tool',
      type: 'official',
      icon: Code,
      iconColor: '#10B981',
      iconBg: 'linear-gradient(135deg, #10B981, #4ECDC4)',
      rating: 4.8,
      downloads: 11200,
      tags: ['编程', '代码生成', 'bug修复'],
      featured: false
    },
    {
      id: 6,
      name: '视频剪辑AI',
      description: '智能视频剪辑工具，自动识别精彩片段，生成字幕和特效',
      category: 'content',
      type: 'third-party',
      icon: Video,
      iconColor: '#F59E0B',
      iconBg: 'linear-gradient(135deg, #F59E0B, #FF6584)',
      rating: 4.5,
      downloads: 6780,
      tags: ['视频剪辑', '字幕', '特效'],
      featured: false
    },
    {
      id: 7,
      name: '语音合成助手',
      description: 'Text-to-Speech语音合成，支持多种音色和语言',
      category: 'content',
      type: 'opc',
      icon: Volume2,
      iconColor: '#8B5CF6',
      iconBg: 'linear-gradient(135deg, #8B5CF6, #6C63FF)',
      rating: 4.4,
      downloads: 3210,
      tags: ['语音合成', 'TTS', '配音'],
      featured: false
    },
    {
      id: 8,
      name: '智能营销顾问',
      description: '基于AI的营销策略分析工具，提供个性化营销建议',
      category: 'ai-app',
      type: 'opc',
      icon: Zap,
      iconColor: '#EC4899',
      iconBg: 'linear-gradient(135deg, #EC4899, #FF6584)',
      rating: 4.3,
      downloads: 2150,
      tags: ['营销', '策略', '分析'],
      featured: false
    },
  ]

  const agents = [
    {
      id: 1,
      name: '创业导师智能体',
      description: '模拟资深创业导师，提供创业咨询、商业模式优化建议',
      category: 'agent',
      type: 'official',
      icon: User,
      iconColor: '#6C63FF',
      rating: 4.9,
      conversations: 25680,
      tags: ['创业', '咨询', '导师']
    },
    {
      id: 2,
      name: '技术架构师',
      description: 'AI技术顾问，帮助设计系统架构、技术选型',
      category: 'agent',
      type: 'official',
      icon: Cpu,
      iconColor: '#3B82F6',
      rating: 4.7,
      conversations: 18320,
      tags: ['技术', '架构', '咨询']
    },
    {
      id: 3,
      name: '法律顾问',
      description: '创业法律问题咨询，包括公司注册、知识产权、合同审核等',
      category: 'agent',
      type: 'third-party',
      icon: Shield,
      iconColor: '#10B981',
      rating: 4.6,
      conversations: 9870,
      tags: ['法律', '合规', '咨询']
    },
    {
      id: 4,
      name: '财务管家',
      description: '创业财务顾问，解答记账、报税、融资财务问题',
      category: 'agent',
      type: 'third-party',
      icon: Database,
      iconColor: '#F59E0B',
      rating: 4.5,
      conversations: 7650,
      tags: ['财务', '税务', '咨询']
    },
    {
      id: 5,
      name: '产品经理助手',
      description: '协助完成需求分析、产品设计、PRD文档撰写',
      category: 'agent',
      type: 'opc',
      icon: Sparkles,
      iconColor: '#EC4899',
      rating: 4.4,
      conversations: 5430,
      tags: ['产品', '设计', '需求']
    },
    {
      id: 6,
      name: 'HR招聘助手',
      description: '简历筛选、面试问题推荐、招聘策略建议',
      category: 'agent',
      type: 'opc',
      icon: User,
      iconColor: '#8B5CF6',
      rating: 4.3,
      conversations: 4210,
      tags: ['招聘', 'HR', '面试']
    },
  ]

  const filteredApps = aiApps.filter(app => {
    const matchCategory = activeCategory === 'all' || activeCategory === 'ai-app' || app.category === activeCategory
    const matchSearch = app.name.toLowerCase().includes(searchKeyword.toLowerCase()) || 
                       app.description.toLowerCase().includes(searchKeyword.toLowerCase())
    return matchCategory && matchSearch
  })

  // AI 智能体也根据分类筛选
  const filteredAgents = agents.filter(agent => {
    const matchCategory = activeCategory === 'all' || activeCategory === 'agent' || agent.category === activeCategory
    const matchSearch = agent.name.toLowerCase().includes(searchKeyword.toLowerCase()) || 
                       agent.description.toLowerCase().includes(searchKeyword.toLowerCase())
    return matchCategory && matchSearch
  })

  const featuredApps = aiApps.filter(app => app.featured)

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 100%)' }}>
      {/* Hero区 */}
      <div style={{ 
        padding: '4rem 0 3rem', 
        background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.15), rgba(78, 205, 196, 0.15))' 
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#F1F5F9', marginBottom: '1rem', textAlign: 'center' }}>
            探索应用集市，用 AI 打造你的 One Person Company
          </h1>
          <p style={{ color: '#CBD5E1', textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem' }}>
            精选 AI 应用 & 智能体，开启高效创业之旅
          </p>
          
          {/* 搜索框 */}
          <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
            <input
              type="text"
              placeholder="你想用 AI 做什么？"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 60px 16px 24px',
                fontSize: '1rem',
                borderRadius: '12px',
                border: '1px solid #475569',
                background: '#1E293B',
                color: '#F1F5F9',
                outline: 'none'
              }}
            />
            <button style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Search style={{ width: '18px', height: '18px' }} />
              搜索
            </button>
          </div>

          {/* 快捷入口 */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem'
              }}>
                <Plus style={{ width: '16px', height: '16px' }} />
                发布应用
              </button>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 24px',
                background: 'transparent',
                border: '1px solid #475569',
                borderRadius: '8px',
                color: '#CBD5E1',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem'
              }}>
                <Cloud style={{ width: '16px', height: '16px' }} />
                上传应用到云端
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 分类筛选 */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          {/* 分类标签 */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '10px 20px',
                    background: activeCategory === cat.id ? 'linear-gradient(135deg, #6C63FF, #8A84FF)' : 'rgba(30, 41, 59, 0.8)',
                    border: `1px solid ${activeCategory === cat.id ? '#6C63FF' : '#475569'}`,
                    color: 'white',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Icon style={{ width: '16px', height: '16px' }} />
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 精选推荐 */}
      {activeCategory === 'all' && !searchKeyword && (
        <section style={{ padding: '0 0 4rem' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F1F5F9', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkles style={{ color: '#6C63FF', width: '24px', height: '24px' }} />
              精选推荐
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {featuredApps.map((app) => {
                const Icon = app.icon
                return (
                  <div
                    key={app.id}
                    style={{ 
                      background: '#1E293B', 
                      borderRadius: '16px', 
                      overflow: 'hidden', 
                      border: '1px solid #475569',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)'
                      e.currentTarget.style.borderColor = '#6C63FF'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.borderColor = '#475569'
                    }}
                  >
                    <div style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '56px', 
                        height: '56px', 
                        background: app.iconBg, 
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Icon style={{ color: 'white', width: '28px', height: '28px' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                          {app.name}
                        </h3>
                        <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                          {app.description}
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {app.tags.map((tag, i) => (
                            <span key={i} style={{ 
                              background: 'rgba(108, 99, 255, 0.1)', 
                              color: '#A5B4FC', 
                              padding: '2px 8px', 
                              borderRadius: '4px', 
                              fontSize: '0.7rem' 
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FBBF24', fontSize: '0.85rem' }}>
                          <Star style={{ width: '14px', height: '14px', fill: '#FBBF24' }} />
                          {app.rating}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748B', fontSize: '0.85rem' }}>
                          <Download style={{ width: '14px', height: '14px' }} />
                          {app.downloads.toLocaleString()}
                        </span>
                      </div>
                      <button style={{
                        padding: '6px 14px',
                        background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
                        border: 'none',
                        borderRadius: '6px',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '0.8rem'
                      }}>
                        立即使用
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* AI 智能体列表 */}
      {(activeCategory === 'all' || activeCategory === 'agent') && (
      <section style={{ padding: '0 0 4rem', background: 'rgba(15, 23, 41, 0.5)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F1F5F9', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Bot style={{ color: '#4ECDC4', width: '24px', height: '24px' }} />
            AI 智能体 {filteredAgents.length > 0 && `(${filteredAgents.length})`}
          </h2>
          
          {filteredAgents.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
              {filteredAgents.map((agent) => {
                const Icon = agent.icon
                return (
                  <div
                    key={agent.id}
                    style={{ 
                      background: '#1E293B', 
                      borderRadius: '16px', 
                      overflow: 'hidden', 
                      border: '1px solid #475569',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: `linear-gradient(135deg, ${agent.iconColor}, ${agent.iconColor}80)`, 
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Icon style={{ color: 'white', width: '24px', height: '24px' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ color: '#F1F5F9', fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                            {agent.name}
                          </h3>
                          {/* 来源标签 */}
                          <div style={{ marginBottom: '0.5rem' }}>
                            <span style={{
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontSize: '0.7rem',
                              fontWeight: 500,
                              background: agent.type === 'opc' 
                                ? 'rgba(16, 185, 129, 0.15)' 
                                : agent.type === 'official'
                                ? 'rgba(108, 99, 255, 0.15)'
                                : 'rgba(245, 158, 11, 0.15)',
                              color: agent.type === 'opc' 
                                ? '#10B981' 
                                : agent.type === 'official'
                                ? '#6C63FF'
                                : '#F59E0B'
                            }}>
                              {agent.type === 'opc' ? 'OPC 自制' : agent.type === 'official' ? '官方应用' : '第三方应用'}
                            </span>
                          </div>
                          <p style={{ color: '#94A3B8', fontSize: '0.8rem', lineHeight: 1.4 }}>
                            {agent.description}
                          </p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        {agent.tags.map((tag, i) => (
                          <span key={i} style={{ 
                            background: 'rgba(78, 205, 196, 0.1)', 
                            color: '#4ECDC4', 
                            padding: '2px 8px', 
                            borderRadius: '4px', 
                            fontSize: '0.7rem' 
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FBBF24', fontSize: '0.85rem' }}>
                            <Star style={{ width: '14px', height: '14px', fill: '#FBBF24' }} />
                            {agent.rating}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748B', fontSize: '0.85rem' }}>
                            <MessageSquare style={{ width: '14px', height: '14px' }} />
                            {agent.conversations.toLocaleString()}对话
                          </span>
                        </div>
                        <button style={{
                          padding: '6px 14px',
                          background: agent.type === 'opc' ? 'linear-gradient(135deg, #10B981, #4ECDC4)' : 'linear-gradient(135deg, #4ECDC4, #10B981)',
                          border: 'none',
                          borderRadius: '6px',
                          color: 'white',
                          cursor: 'pointer',
                          fontSize: '0.8rem'
                        }}>
                          开始对话
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#64748B' }}>
              <Bot style={{ width: '48px', height: '48px', margin: '0 auto 1rem', opacity: 0.5 }} />
              <p>暂无匹配的智能体</p>
            </div>
          )}
        </div>
      </section>
      )}

      {/* AI 应用列表 */}
      {(activeCategory === 'all' || activeCategory === 'ai-app') && (
      <section style={{ padding: '0 0 4rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F1F5F9', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles style={{ color: '#FF6584', width: '24px', height: '24px' }} />
            AI 应用 {filteredApps.length > 0 && `(${filteredApps.length})`}
          </h2>
          
          {filteredApps.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
              {filteredApps.map((app) => {
                const Icon = app.icon
                return (
                  <div
                    key={app.id}
                    style={{ 
                      background: '#1E293B', 
                      borderRadius: '16px', 
                      overflow: 'hidden', 
                      border: '1px solid #475569',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: app.iconBg, 
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Icon style={{ color: 'white', width: '24px', height: '24px' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ color: '#F1F5F9', fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                            {app.name}
                          </h3>
                          <p style={{ color: '#94A3B8', fontSize: '0.8rem', lineHeight: 1.4 }}>
                            {app.description}
                          </p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        {app.tags.map((tag, i) => (
                          <span key={i} style={{ 
                            background: 'rgba(108, 99, 255, 0.1)', 
                            color: '#A5B4FC', 
                            padding: '2px 8px', 
                            borderRadius: '4px', 
                            fontSize: '0.7rem' 
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FBBF24', fontSize: '0.85rem' }}>
                            <Star style={{ width: '14px', height: '14px', fill: '#FBBF24' }} />
                            {app.rating}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748B', fontSize: '0.85rem' }}>
                            <Download style={{ width: '14px', height: '14px' }} />
                            {app.downloads.toLocaleString()}
                          </span>
                        </div>
                        <button style={{
                          padding: '6px 14px',
                          background: app.type === 'opc' ? 'linear-gradient(135deg, #10B981, #4ECDC4)' : 'linear-gradient(135deg, #6C63FF, #8A84FF)',
                          border: 'none',
                          borderRadius: '6px',
                          color: 'white',
                          cursor: 'pointer',
                          fontSize: '0.8rem'
                        }}>
                          立即使用
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#64748B' }}>
              <Search style={{ width: '48px', height: '48px', margin: '0 auto 1rem', opacity: 0.5 }} />
              <p>暂无匹配的应用</p>
            </div>
          )}
        </div>
      </section>
      )}

      {/* OPC 自制说明 */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(78, 205, 196, 0.1))', 
            borderRadius: '16px', 
            padding: '2.5rem',
            border: '1px solid #10B981',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ color: '#F1F5F9', fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap style={{ color: '#10B981', width: '24px', height: '24px' }} />
                OPC自制应用
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                OPC创业者可以在应用集市发布自己开发的AI应用和智能体，与平台其他用户共享优质资源。所有OPC自制应用都将获得平台流量支持和优先展示机会。
              </p>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {['零成本发布应用', '平台流量扶持', '技术支持指导', '收益分成机制'].map((item, i) => (
                  <li key={i} style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #10B981, #4ECDC4)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap'
              }}>
                <Plus style={{ width: '18px', height: '18px' }} />
                发布自制应用
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
