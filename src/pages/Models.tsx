import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { mockModels } from '@/data/mockData'
import { Search, Zap, Play, FileText, Image, Mic, Video, Layers, Code, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from '@/components/Footer'

// 模型能力分类配置 - 无方框隔断
const capabilityGroups = [
  {
    id: 'text',
    title: '文本能力',
    icon: FileText,
    color: '#3B82F6',
    subCategories: [
      { id: 'text-writing', label: '写作', icon: '✍️' },
      { id: 'text-chat', label: '对话', icon: '💬' },
      { id: 'text-summary', label: '总结', icon: '📝' },
    ]
  },
  {
    id: 'image',
    title: '图片能力',
    icon: Image,
    color: '#8B5CF6',
    subCategories: [
      { id: 'image-generate', label: '生成', icon: '🎨' },
      { id: 'image-edit', label: '编辑', icon: '✏️' },
      { id: 'image-recognize', label: '识别', icon: '👁️' },
    ]
  },
  {
    id: 'audio',
    title: '语音能力',
    icon: Mic,
    color: '#10B981',
    subCategories: [
      { id: 'audio-recognize', label: '识别', icon: '🎤' },
      { id: 'audio-synthesize', label: '合成', icon: '🔊' },
    ]
  },
  {
    id: 'video',
    title: '视频能力',
    icon: Video,
    color: '#F59E0B',
    subCategories: [
      { id: 'video-generate', label: '生成', icon: '🎬' },
    ]
  },
  {
    id: 'multimodal',
    title: '多模态能力',
    icon: Layers,
    color: '#EC4899',
    subCategories: [
      { id: 'multimodal-text', label: '文本', icon: '📄' },
      { id: 'multimodal-image', label: '图片', icon: '🖼️' },
      { id: 'multimodal-audio', label: '语音', icon: '🎵' },
    ]
  },
  {
    id: 'code',
    title: '代码能力',
    icon: Code,
    color: '#6366F1',
    subCategories: [
      { id: 'code-programming', label: '编程', icon: '💻' },
      { id: 'code-develop', label: '开发', icon: '🚀' },
    ]
  },
]

// 模型能力标签映射 - 扩展版
const modelCapabilities: Record<string, string[]> = {
  'GPT-4 Turbo': ['text-writing', 'text-chat', 'text-summary', 'code-programming', 'code-develop'],
  'Claude 3 Opus': ['text-writing', 'text-chat', 'text-summary', 'multimodal-text', 'multimodal-image', 'code-programming'],
  'DeepSeek-V2': ['text-writing', 'text-chat', 'code-programming', 'code-develop'],
  'GPT-3.5-Turbo': ['text-writing', 'text-chat'],
  'Gemini Pro': ['text-writing', 'text-chat', 'multimodal-text', 'multimodal-image'],
  'Llama 3': ['text-writing', 'text-chat', 'code-programming'],
  'Stable Diffusion XL': ['image-generate', 'image-edit'],
  'DALL-E 3': ['image-generate'],
  'Midjourney': ['image-generate'],
  'Whisper Large v3': ['audio-recognize'],
  'TTS-1-HD': ['audio-synthesize'],
  'Sora': ['video-generate'],
  'GPT-4V': ['multimodal-text', 'multimodal-image'],
  'Claude 3 Sonnet': ['text-writing', 'text-chat', 'multimodal-text', 'multimodal-image'],
  'GitHub Copilot': ['code-programming', 'code-develop'],
  'Code Llama': ['code-programming', 'code-develop'],
  'PaLM 2': ['text-writing', 'text-chat', 'code-programming'],
  'Qwen 2': ['text-writing', 'text-chat', 'code-programming'],
  'Baichuan 3': ['text-writing', 'text-chat'],
  'ChatGLM 4': ['text-writing', 'text-chat', 'code-programming'],
}

export function ModelsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([])

  // 切换能力选择
  const toggleCapability = (capabilityId: string) => {
    setSelectedCapabilities(prev => 
      prev.includes(capabilityId) 
        ? prev.filter(id => id !== capabilityId)
        : [...prev, capabilityId]
    )
  }

  // 筛选模型
  const filteredModels = mockModels.filter((model) => {
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCapabilities = selectedCapabilities.length === 0 || 
      selectedCapabilities.some(cap => modelCapabilities[model.name]?.includes(cap))
    
    return matchesSearch && matchesCapabilities
  })

  const cardStyle: React.CSSProperties = {
    background: 'rgba(30, 41, 59, 0.8)',
    border: '1px solid rgba(71, 85, 105, 0.5)',
    borderRadius: '12px',
    padding: '20px',
    transition: 'all 0.3s ease'
  }

  const inputStyle: React.CSSProperties = {
    background: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid #475569',
    borderRadius: '8px',
    color: '#F1F5F9',
    padding: '10px 14px',
    outline: 'none',
    width: '100%'
  }

  const btnPrimary: React.CSSProperties = {
    background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
    border: 'none',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.3s ease'
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 100%)', minHeight: '100vh', padding: '40px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* 页面标题 */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '8px' }}>AI模型调用</h1>
          <p style={{ color: '#94A3B8', fontSize: '1rem' }}>选择适合的AI模型，快速集成到您的应用中</p>
        </div>

        {/* 筛选区 */}
        <div style={{ 
          background: 'rgba(30, 41, 59, 0.6)', 
          border: '1px solid rgba(71, 85, 105, 0.5)', 
          borderRadius: '12px', 
          padding: '24px',
          marginBottom: '32px'
        }}>
          {/* 搜索框 */}
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '18px', height: '18px', color: '#94A3B8' }} />
            <input
              type="text"
              placeholder="搜索模型..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ ...inputStyle, paddingLeft: '40px', width: '100%' }}
            />
          </div>

          {/* 按模型能力分组筛选 - 无方框隔断，紧凑布局 */}
          <div>
            <div style={{ color: '#94A3B8', fontSize: '0.8rem', marginBottom: '14px', fontWeight: 500 }}>按模型能力筛选（可多选）</div>
            {/* 6 大能力分类 - 水平排列，无隔断 */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'nowrap', overflowX: 'auto', paddingBottom: '4px' }}>
              {capabilityGroups.map((group) => (
                <div key={group.id} style={{ flex: '0 0 auto' }}>
                  {/* 组标题 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px' }}>
                    <div style={{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: '5px', 
                      background: `${group.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <group.icon style={{ width: '14px', height: '14px', color: group.color }} />
                    </div>
                    <span style={{ color: 'white', fontWeight: 600, fontSize: '0.8rem', whiteSpace: 'nowrap' }}>{group.title}</span>
                  </div>
                  
                  {/* 子分类按钮 */}
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'nowrap' }}>
                    {group.subCategories.map((sub) => {
                      const isSelected = selectedCapabilities.includes(sub.id)
                      return (
                        <button
                          key={sub.id}
                          onClick={() => toggleCapability(sub.id)}
                          style={{
                            background: isSelected ? group.color : 'rgba(71, 85, 105, 0.3)',
                            border: `1px solid ${isSelected ? group.color : 'rgba(71, 85, 105, 0.5)'}`,
                            color: isSelected ? 'white' : '#CBD5E1',
                            padding: '4px 8px',
                            borderRadius: '5px',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '3px',
                            transition: 'all 0.2s ease',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <span style={{ fontSize: '0.8rem' }}>{sub.icon}</span>
                          {sub.label}
                          {isSelected && <Check style={{ width: '10px', height: '10px' }} />}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            {/* 已选筛选条件 */}
            {selectedCapabilities.length > 0 && (
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(71, 85, 105, 0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>已选条件：</span>
                  {selectedCapabilities.map(capId => {
                    const group = capabilityGroups.find(g => g.subCategories.some(s => s.id === capId))
                    const sub = group?.subCategories.find(s => s.id === capId)
                    return (
                      <span 
                        key={capId} 
                        style={{ 
                          background: `${group?.color}30`, 
                          color: group?.color,
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        {sub?.icon} {group?.title}-{sub?.label}
                      </span>
                    )
                  })}
                  <button 
                    onClick={() => setSelectedCapabilities([])}
                    style={{ 
                      background: 'transparent', 
                      border: '1px solid #475569', 
                      color: '#94A3B8',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    清除全部
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 模型列表 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {filteredModels.map((model) => (
            <div key={model.id} style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '4px' }}>{model.name}</h3>
                  <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>{model.provider}</span>
                </div>
                <span style={{ 
                  background: 'rgba(108, 99, 255, 0.2)', 
                  color: '#A5B4FC', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  fontSize: '0.75rem'
                }}>
                  {model.category}
                </span>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '12px', lineHeight: 1.5 }}>{model.description}</p>
              
              {/* 能力标签 */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                {modelCapabilities[model.name]?.map(capId => {
                  const group = capabilityGroups.find(g => g.subCategories.some(s => s.id === capId))
                  const sub = group?.subCategories.find(s => s.id === capId)
                  return (
                    <span 
                      key={capId} 
                      style={{ 
                        background: `${group?.color}20`, 
                        color: group?.color,
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px'
                      }}
                    >
                      {sub?.icon} {sub?.label}
                    </span>
                  )
                })}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#A5B4FC', fontWeight: 600 }}>{model.price}</span>
                <Link to="/login">
                  <button style={btnPrimary}>
                    <Play style={{ width: '14px', height: '14px' }} />
                    立即调用
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
