import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Users, 
  Lightbulb, 
  Wallet,
  ArrowRight,
  Clock,
  Star,
  ExternalLink,
  Building,
  Award,
  TrendingUp,
  Calendar,
  BookOpen,
  Rocket,
  ChevronRight,
  MapPin,
  ChevronLeft,
  Shield,
  GraduationCap
} from 'lucide-react'
import { Footer } from '@/components/Footer'

export function PoliciesPage() {
  const [activeCity, setActiveCity] = useState('深圳')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  
  const cities = ['深圳', '香港', '澳门', '广州', '珠海', '佛山', '惠州', '东莞', '中山', '江门', '肇庆']
  
  // 处理城市切换，触发刷新效果
  const handleCityChange = (city: string) => {
    setActiveCity(city)
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 300)
  }

  // 轮播数据
  const carouselItems = [
    {
      id: 1,
      title: '关于申报2024年度中小企业技术创新专项资金的通知',
      category: '热门政策',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      type: 'policy'
    },
    {
      id: 2,
      title: 'AI大模型赋能一人公司创业：低成本高效能解决方案',
      category: '热门资讯',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      type: 'news'
    },
    {
      id: 3,
      title: '粤港澳大湾区高层次人才认定办法实施细则',
      category: '热门政策',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      type: 'policy'
    },
    {
      id: 4,
      title: '2024年云计算市场规模突破5000亿',
      category: '热门资讯',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      type: 'news'
    },
  ]

  // 轮播自动切换
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // 城市快捷入口
  const cityEntrances: Record<string, Array<{id: number; title: string; icon: any; desc: string}>> = {
    '深圳': [
      { id: 1, title: '深圳公司注册', icon: Building, desc: '0 元注册公司' },
      { id: 2, title: '深圳创业补贴', icon: Rocket, desc: '初创企业补贴' },
      { id: 3, title: '科创委项目', icon: TrendingUp, desc: '科技项目申报' },
      { id: 4, title: '人才引进', icon: Users, desc: '深圳人才认定' },
      { id: 5, title: '知识产权', icon: Award, desc: '专利申请' },
      { id: 6, title: '法律服务', icon: BookOpen, desc: '专业法务咨询' },
    ],
    '香港': [
      { id: 1, title: '香港公司注册', icon: Building, desc: '快速注册香港公司' },
      { id: 2, title: '香港创业签证', icon: Rocket, desc: '创业签证申请' },
      { id: 3, title: '科技研发资助', icon: TrendingUp, desc: '创新科技基金' },
      { id: 4, title: '人才计划', icon: Users, desc: '香港人才入境' },
      { id: 5, title: '知识产权', icon: Award, desc: '专利申请' },
      { id: 6, title: '法律咨询', icon: BookOpen, desc: '专业法务咨询' },
    ],
    '澳门': [
      { id: 1, title: '澳门公司注册', icon: Building, desc: '快速注册' },
      { id: 2, title: '青年创业资助', icon: Rocket, desc: '青年创业援助' },
      { id: 3, title: '会展业支持', icon: TrendingUp, desc: '会展业扶持政策' },
      { id: 4, title: '人才引进', icon: Users, desc: '澳门人才计划' },
      { id: 5, title: '知识产权', icon: Award, desc: '专利申请' },
      { id: 6, title: '法律咨询', icon: BookOpen, desc: '专业法务咨询' },
    ],
    '广州': [
      { id: 1, title: '广州公司注册', icon: Building, desc: '快速获取执照' },
      { id: 2, title: '广州高新认定', icon: TrendingUp, desc: '高新技术企业' },
      { id: 3, title: '人才绿卡', icon: Users, desc: '广州人才政策' },
      { id: 4, title: '科技项目', icon: Lightbulb, desc: '科技创新基金' },
      { id: 5, title: '融资对接', icon: Rocket, desc: '对接投资机构' },
      { id: 6, title: '法律咨询', icon: BookOpen, desc: '专业法务咨询' },
    ],
    '珠海': [
      { id: 1, title: '珠海公司注册', icon: Building, desc: '横琴优惠政策' },
      { id: 2, title: '跨境电商', icon: Rocket, desc: '跨境电商扶持' },
      { id: 3, title: '人才认定', icon: Users, desc: '珠海人才计划' },
      { id: 4, title: '科技研发', icon: Lightbulb, desc: '研发费用补贴' },
      { id: 5, title: '知识产权', icon: Award, desc: '专利申请' },
      { id: 6, title: '法律服务', icon: BookOpen, desc: '专业法务咨询' },
    ],
    '佛山': [
      { id: 1, title: '佛山公司注册', icon: Building, desc: '快速注册' },
      { id: 2, title: '制造业转型', icon: TrendingUp, desc: '数字化转型补贴' },
      { id: 3, title: '人才引进', icon: Users, desc: '佛山人才政策' },
      { id: 4, title: '科技创新', icon: Lightbulb, desc: '科技项目申报' },
      { id: 5, title: '知识产权', icon: Award, desc: '专利申请' },
      { id: 6, title: '法律服务', icon: BookOpen, desc: '专业法务咨询' },
    ],
    '惠州': [
      { id: 1, title: '惠州公司注册', icon: Building, desc: '快速注册' },
      { id: 2, title: '仲恺项目', icon: Rocket, desc: '仲恺高新区' },
      { id: 3, title: '人才政策', icon: Users, desc: '惠州人才引进' },
      { id: 4, title: '科技计划', icon: Lightbulb, desc: '科技项目申报' },
      { id: 5, title: '融资对接', icon: Wallet, desc: '融资服务' },
      { id: 6, title: '法律咨询', icon: BookOpen, desc: '专业法务咨询' },
    ],
    '东莞': [
      { id: 1, title: '东莞公司注册', icon: Building, desc: '快速注册' },
      { id: 2, title: '制造业补贴', icon: Rocket, desc: '技改项目申报' },
      { id: 3, title: '高新企业', icon: TrendingUp, desc: '高新技术企业认定' },
      { id: 4, title: '人才政策', icon: Users, desc: '技能人才引进' },
      { id: 5, title: '融资对接', icon: Wallet, desc: '贷款贴息' },
      { id: 6, title: '法律咨询', icon: BookOpen, desc: '专业法务咨询' },
    ],
    '中山': [
      { id: 1, title: '中山公司注册', icon: Building, desc: '快速注册' },
      { id: 2, title: '灯饰产业扶持', icon: Rocket, desc: '特色产业支持' },
      { id: 3, title: '人才引进', icon: Users, desc: '中山人才政策' },
      { id: 4, title: '科技创新', icon: Lightbulb, desc: '科技项目申报' },
      { id: 5, title: '知识产权', icon: Award, desc: '专利申请' },
      { id: 6, title: '法律服务', icon: BookOpen, desc: '专业法务咨询' },
    ],
    '江门': [
      { id: 1, title: '江门公司注册', icon: Building, desc: '快速注册' },
      { id: 2, title: '华侨创业支持', icon: Rocket, desc: '华侨创新创业' },
      { id: 3, title: '人才政策', icon: Users, desc: '江门人才引进' },
      { id: 4, title: '科技计划', icon: Lightbulb, desc: '科技项目申报' },
      { id: 5, title: '融资对接', icon: Wallet, desc: '融资服务' },
      { id: 6, title: '法律咨询', icon: BookOpen, desc: '专业法务咨询' },
    ],
    '肇庆': [
      { id: 1, title: '肇庆公司注册', icon: Building, desc: '快速注册' },
      { id: 2, title: '绿色产业扶持', icon: Rocket, desc: '生态环保产业' },
      { id: 3, title: '人才政策', icon: Users, desc: '肇庆人才引进' },
      { id: 4, title: '科技计划', icon: Lightbulb, desc: '科技项目申报' },
      { id: 5, title: '融资对接', icon: Wallet, desc: '融资服务' },
      { id: 6, title: '法律咨询', icon: BookOpen, desc: '专业法务咨询' },
    ],
  }

  const latestPolicies = [
    {
      id: 1,
      title: '关于申报2024年度中小企业技术创新专项资金的通知',
      category: '资金补贴',
      date: '2024-01-18',
      source: '深圳市科技创新委员会',
      hot: true
    },
    {
      id: 2,
      title: '粤港澳大湾区高层次人才认定办法实施细则',
      category: '人才政策',
      date: '2024-01-16',
      source: '广东省人力资源和社会保障厅',
      hot: true
    },
    {
      id: 3,
      title: '2024年首批科技创新券发放公告',
      category: '科技创新',
      date: '2024-01-15',
      source: '广州市科技局',
      hot: false
    },
    {
      id: 4,
      title: '创业担保贷款贴息政策延续实施',
      category: '融资政策',
      date: '2024-01-14',
      source: '深圳市人力资源和社会保障局',
      hot: false
    },
    {
      id: 5,
      title: '关于开展2024年第一批专精特新企业培育工作的通知',
      category: '企业培育',
      date: '2024-01-12',
      source: '工业和信息化局',
      hot: false
    },
  ]

  const latestNews = [
    {
      id: 1,
      title: 'AI大模型赋能一人公司创业：低成本高效能解决方案',
      category: '行业趋势',
      date: '2024-01-18',
      summary: '随着AI技术快速发展，一人公司创业者可以利用大模型技术实现业务自动化，大幅降低运营成本。'
    },
    {
      id: 2,
      title: '2024年云计算市场规模突破5000亿，创业新机遇在哪里？',
      category: '市场动态',
      date: '2024-01-16',
      summary: '根据最新报告，云计算市场持续增长，为创业者提供了丰富的商业机会和技术基础设施。'
    },
    {
      id: 3,
      title: '国家统计局：2024年新登记企业同比增长12.5%',
      category: '数据解读',
      date: '2024-01-15',
      summary: '新登记企业数量持续增长，创新创业活力强劲，显示出经济复苏的良好态势。'
    },
    {
      id: 4,
      title: '两会聚焦：科技创新成最热话题，创业者迎来新机遇',
      category: '两会观察',
      date: '2024-01-14',
      summary: '两会期间，多位代表委员围绕科技创新建言献策，为创业者指明发展方向。'
    },
  ]

  const subsidyGuides = [
    {
      id: 1,
      title: '科技型中小企业技术创新资金申请指南',
      amount: '最高50万元',
      deadline: '2024-02-28',
      conditions: '注册不满5年，上年度营收不超过2000万'
    },
    {
      id: 2,
      title: '创业担保贷款申请指南',
      amount: '最高300万元',
      deadline: '全年受理',
      conditions: '个人创业者或小微企业，需提供反担保'
    },
    {
      id: 3,
      title: '高层次人才创业启动资金申请指南',
      amount: '最高100万元',
      deadline: '2024-03-15',
      conditions: '经认定的高层次人才，首次在深创业'
    },
    {
      id: 4,
      title: '研发费用加计扣除申报指南',
      amount: '按研发费用75%抵税',
      deadline: '年度汇算清缴期',
      conditions: '有研发活动的企业，需进行研发费用归集'
    },
  ]

  const currentEntrances = cityEntrances[activeCity] || cityEntrances['深圳']

  return (
    <div style={{ background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 100%)', minHeight: '100vh' }}>
      {/* 顶部搜索区域 */}
      <div style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F1729 100%)', padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ color: '#F1F5F9', fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>
            信息与政策赋能
          </h1>
          <p style={{ color: '#94A3B8', textAlign: 'center', marginBottom: '2rem' }}>
            汇聚政策、人才、专利、资金，助力创业者一站式获取资源
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* 热门推荐轮播 + 最新政策与资讯 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '48px' }}>
          {/* 热门推荐轮播 */}
          <div style={{
            background: '#1E293B',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            height: '400px'
          }}>
            {/* 轮播图片 */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: carouselItems[carouselIndex].image,
              transition: 'opacity 0.5s ease'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0) 50%)'
              }} />
            </div>
            
            {/* 内容 */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
              <Badge style={{ background: '#6C63FF', color: 'white', marginBottom: '12px' }}>
                {carouselItems[carouselIndex].category}
              </Badge>
              <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.4 }}>
                {carouselItems[carouselIndex].title}
              </h3>
            </div>

            {/* 切换按钮 */}
            <button
              onClick={() => setCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronLeft style={{ width: '20px', height: '20px' }} />
            </button>
            <button
              onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselItems.length)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronRight style={{ width: '20px', height: '20px' }} />
            </button>

            {/* 指示器 */}
            <div style={{ position: 'absolute', bottom: '16px', right: '16px', display: 'flex', gap: '6px' }}>
              {carouselItems.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  style={{
                    width: idx === carouselIndex ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: idx === carouselIndex ? '#6C63FF' : 'rgba(255,255,255,0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>
          </div>

          {/* 最新政策 */}
          <div style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ color: '#F1F5F9', fontSize: '1.25rem', fontWeight: 700 }}>最新政策</h2>
              <a href="#" style={{ color: '#6C63FF', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}>
                查看全部 <ChevronRight style={{ width: '14px', height: '14px' }} />
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto' }}>
              {latestPolicies.slice(0, 4).map((policy) => (
                <div key={policy.id} style={{
                  background: '#1E293B',
                  border: '1px solid #334155',
                  borderRadius: '10px',
                  padding: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                      <Badge style={{ background: '#6C63FF20', color: '#A5B4FC', fontSize: '0.7rem', padding: '1px 6px' }}>
                        {policy.category}
                      </Badge>
                      {policy.hot && (
                        <span style={{ background: '#EF4444', color: 'white', fontSize: '0.6rem', padding: '1px 6px', borderRadius: '3px' }}>
                          热门
                        </span>
                      )}
                    </div>
                    <h3 style={{ color: '#F1F5F9', fontSize: '0.85rem', fontWeight: 500, marginBottom: '2px', lineHeight: 1.3 }}>{policy.title}</h3>
                    <div style={{ display: 'flex', gap: '8px', color: '#64748B', fontSize: '0.7rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                        <Clock style={{ width: '10px', height: '10px' }} /> {policy.date}
                      </span>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '80px' }}>{policy.source}</span>
                    </div>
                  </div>
                  <ArrowRight style={{ color: '#475569', width: '16px', height: '16px', flexShrink: 0, marginLeft: '8px' }} />
                </div>
              ))}
            </div>
          </div>

          {/* 最新资讯 */}
          <div style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ color: '#F1F5F9', fontSize: '1.25rem', fontWeight: 700 }}>最新资讯</h2>
              <a href="#" style={{ color: '#6C63FF', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}>
                查看全部 <ChevronRight style={{ width: '16px', height: '16px' }} />
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto' }}>
              {latestNews.slice(0, 4).map((news) => (
                <div key={news.id} style={{
                  background: '#1E293B',
                  border: '1px solid #334155',
                  borderRadius: '10px',
                  padding: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <Badge style={{ background: '#10B98120', color: '#34D399', fontSize: '0.7rem', padding: '1px 6px' }}>
                      {news.category}
                    </Badge>
                    <span style={{ color: '#64748B', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <Clock style={{ width: '10px', height: '10px' }} /> {news.date}
                    </span>
                  </div>
                  <h3 style={{ color: '#F1F5F9', fontSize: '0.85rem', fontWeight: 500, marginBottom: '4px', lineHeight: 1.3 }}>{news.title}</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.75rem', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{news.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 补贴申请指南 */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>补贴申请指南</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {subsidyGuides.map((guide) => (
              <div key={guide.id} style={{
                background: '#1E293B',
                border: '1px solid #334155',
                borderRadius: '16px',
                padding: '20px',
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <h3 style={{ color: '#F1F5F9', fontSize: '1rem', fontWeight: 600, flex: 1, marginRight: '12px' }}>{guide.title}</h3>
                  <ExternalLink style={{ color: '#64748B', width: '18px', height: '18px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ background: '#10B98120', color: '#34D399', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                    {guide.amount}
                  </span>
                  <span style={{ color: '#64748B', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock style={{ width: '12px', height: '12px' }} /> 截止{guide.deadline}
                  </span>
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>{guide.conditions}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 基础服务快捷入口 */}
        <div>
          <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>基础服务快捷入口</h2>
          
          {/* 城市选择 */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'nowrap', overflowX: 'auto', paddingBottom: '4px' }}>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => handleCityChange(city)}
                style={{
                  padding: '6px 14px',
                  background: activeCity === city ? 'linear-gradient(135deg, #6C63FF, #8A84FF)' : 'rgba(108, 99, 255, 0.1)',
                  border: `1px solid ${activeCity === city ? '#6C63FF' : 'rgba(108, 99, 255, 0.3)'}`,
                  borderRadius: '16px',
                  color: activeCity === city ? 'white' : '#A5B4FC',
                  fontSize: '0.75rem',
                  fontWeight: activeCity === city ? 600 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                  boxShadow: activeCity === city ? '0 2px 8px rgba(108, 99, 255, 0.3)' : 'none'
                }}
                onMouseOver={(e) => {
                  if (activeCity !== city) {
                    e.currentTarget.style.background = 'rgba(108, 99, 255, 0.15)'
                    e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
                  }
                }}
                onMouseOut={(e) => {
                  if (activeCity !== city) {
                    e.currentTarget.style.background = 'rgba(108, 99, 255, 0.1)'
                    e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.3)'
                  }
                }}
              >
                {city}
              </button>
            ))}
          </div>
          
          {/* 快捷入口卡片 - 全部排成一排 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(7, 1fr)', 
            gap: '16px',
            transition: 'all 0.3s ease-in-out',
            opacity: isRefreshing ? 0.5 : 1,
            transform: isRefreshing ? 'scale(0.98)' : 'scale(1)'
          }}>
            {/* 快速办理板块 */}
            <div style={{
              background: '#1E293B',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '24px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #6C63FF20, #8A84FF20)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px'
              }}>
                <Building style={{ width: '28px', height: '28px', color: '#A5B4FC' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>企业注册</h3>
              <p style={{ color: '#64748B', fontSize: '0.8rem' }}>快速注册公司主体</p>
            </div>
            
            <div style={{
              background: '#1E293B',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '24px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #6C63FF20, #8A84FF20)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px'
              }}>
                <Award style={{ width: '28px', height: '28px', color: '#A5B4FC' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>商标注册</h3>
              <p style={{ color: '#64748B', fontSize: '0.8rem' }}>保护品牌防止侵权</p>
            </div>
            
            {/* 资源支持板块 */}
            <div style={{
              background: '#1E293B',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '24px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #10B98120, #34D39920)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px'
              }}>
                <Rocket style={{ width: '28px', height: '28px', color: '#6EE7B7' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>创业补贴</h3>
              <p style={{ color: '#64748B', fontSize: '0.8rem' }}>申领政策资金支持</p>
            </div>
            
            <div style={{
              background: '#1E293B',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '24px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #10B98120, #34D39920)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px'
              }}>
                <Wallet style={{ width: '28px', height: '28px', color: '#6EE7B7' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>融资渠道</h3>
              <p style={{ color: '#64748B', fontSize: '0.8rem' }}>对接资金与投资人</p>
            </div>
            
            <div style={{
              background: '#1E293B',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '24px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #10B98120, #34D39920)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px'
              }}>
                <BookOpen style={{ width: '28px', height: '28px', color: '#6EE7B7' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>法律资讯</h3>
              <p style={{ color: '#64748B', fontSize: '0.8rem' }}>合规经营规避风险</p>
            </div>
            
            {/* 避坑与成长板块 */}
            <div style={{
              background: '#1E293B',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '24px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #F59E0B20, #FBBF2420)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px'
              }}>
                <Shield style={{ width: '28px', height: '28px', color: '#FBBF24' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>避坑指南</h3>
              <p style={{ color: '#64748B', fontSize: '0.8rem' }}>少走弯路快速起步</p>
            </div>
            
            <div style={{
              background: '#1E293B',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '24px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #F59E0B20, #FBBF2420)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px'
              }}>
                <GraduationCap style={{ width: '28px', height: '28px', color: '#FBBF24' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>学习资源</h3>
              <p style={{ color: '#64748B', fontSize: '0.8rem' }}>系统提升创业能力</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
