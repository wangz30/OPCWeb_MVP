import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { mockModels } from '@/data/mockData'
import { Search, Zap, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ModelsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedScenario, setSelectedScenario] = useState('全部')

  // 模型类型筛选
  const categories = ['全部', 'LLM', '图像生成', '语音识别', '语音合成', '多模态', '代码生成']
  
  // 应用场景筛选
  const scenarios = ['全部', '智能办公', '内容创作', '智能客服', '代码开发', '数据分析', '教育学习', '医疗健康']

  const filteredModels = mockModels.filter(
    (model) =>
      (selectedCategory === '全部' || model.category === selectedCategory) &&
      (model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

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

  const btnOutline: React.CSSProperties = {
    background: 'transparent',
    border: '1px solid #475569',
    color: '#CBD5E1',
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
          padding: '20px',
          marginBottom: '32px'
        }}>
          {/* 搜索框 */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '18px', height: '18px', color: '#94A3B8' }} />
            <input
              type="text"
              placeholder="搜索模型..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ ...inputStyle, paddingLeft: '40px', width: '100%' }}
            />
          </div>

          {/* 按模型类型筛选 */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '10px', fontWeight: 500 }}>按模型类型</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={selectedCategory === category ? btnPrimary : btnOutline}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* 按应用场景筛选 */}
          <div>
            <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '10px', fontWeight: 500 }}>按应用场景</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {scenarios.map((scenario) => (
                <button
                  key={scenario}
                  onClick={() => setSelectedScenario(scenario)}
                  style={selectedScenario === scenario ? btnPrimary : btnOutline}
                >
                  {scenario}
                </button>
              ))}
            </div>
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
              <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.5 }}>{model.description}</p>
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
    </div>
  )
}
