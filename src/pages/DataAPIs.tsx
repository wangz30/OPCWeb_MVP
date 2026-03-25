import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { mockDataAPIs } from '@/data/mockData'
import { Search, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export function DataAPIsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedScenario, setSelectedScenario] = useState('全部')
  const [selectedTag, setSelectedTag] = useState('全部')

  // 垂直领域筛选
  const categories = ['全部', '金融数据', '气象环境', '地理信息', 'AI智能服务', '电商零售', '内容资讯', '企业工商', '交通出行']
  
  // 应用场景筛选
  const scenarios = ['全部', '智能办公', '移动应用', '电商平台', '智慧城市', '金融科技', '物流运输', '教育学习']
  
  // 热门标签筛选
  const tags = ['全部', '实时数据', '历史数据', '免费试用', '企业级', '高并发', '全球覆盖', '中文优化']

  const filteredAPIs = mockDataAPIs.filter(
    (api) =>
      (selectedCategory === '全部' || api.category === selectedCategory) &&
      (api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        api.description.toLowerCase().includes(searchQuery.toLowerCase()))
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
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '8px' }}>数据资源API</h1>
          <p style={{ color: '#94A3B8', fontSize: '1rem' }}>丰富的数据API接口，为您的应用提供数据支持</p>
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
              placeholder="搜索API..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ ...inputStyle, paddingLeft: '40px', width: '100%' }}
            />
          </div>

          {/* 按垂直领域筛选 */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '10px', fontWeight: 500 }}>按垂直领域</div>
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
          <div style={{ marginBottom: '16px' }}>
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

          {/* 按热门标签筛选 */}
          <div>
            <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '10px', fontWeight: 500 }}>按热门标签</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  style={selectedTag === tag ? btnPrimary : btnOutline}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* API列表 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px' }}>
          {filteredAPIs.map((api) => (
            <div key={api.id} style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '4px' }}>{api.name}</h3>
                  <code style={{ color: '#6C63FF', fontSize: '0.75rem', background: 'rgba(108, 99, 255, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>{api.endpoint}</code>
                </div>
                <span style={{ 
                  background: 'rgba(108, 99, 255, 0.2)', 
                  color: '#A5B4FC', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  fontSize: '0.75rem'
                }}>
                  {api.category}
                </span>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.5 }}>{api.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>调用限制: {api.rateLimit}</span>
                <Link to="/login">
                  <button style={btnPrimary}>
                    <LinkIcon style={{ width: '14px', height: '14px' }} />
                    查看文档
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
