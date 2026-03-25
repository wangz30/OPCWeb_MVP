import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Logo } from '@/components/Logo'
import { Footer } from '@/components/Footer'
import { 
  ArrowRight, 
  Zap, 
  Check, 
  Rocket, 
  Gift, 
  Lightbulb, 
  Store, 
  MessageSquare, 
  Newspaper,
  BarChart3,
  Bot,
  FileCheck,
  ShoppingCart,
  Cloud,
  Globe,
  Info,
  UsersRound,
  FileText,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Cpu,
  Database,
  GraduationCap,
  History,
  QrCode,
  UserPlus,
  Award
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Banner轮播数据
const bannerData = [
  {
    id: 1,
    title: '一人成军 · AI赋能',
    subtitle: 'AI协同创业新时代',
    description: '在AI的协同支持下，用您的技术+云资源，开启OPC创新创业之旅',
    ctaText: '立即加入',
    ctaLink: '/register',
    gradient: 'from-[#6C63FF] to-[#4ECDC4]',
    icon: Zap
  },
  {
    id: 2,
    title: 'OPC创业训练营',
    subtitle: '重点活动',
    description: '30天系统培训，从0到1打造你的AI创业项目，资深导师1对1指导',
    ctaText: '了解详情',
    ctaLink: '/events',
    gradient: 'from-[#FF6584] to-[#6C63FF]',
    icon: Rocket
  },
  {
    id: 3,
    title: '十万元创业礼包',
    subtitle: '核心资源',
    description: '云资源、AI算力、营销推广价值超十万元，首次创业者免费申请',
    ctaText: '立即申请',
    ctaLink: '/login',
    gradient: 'from-[#4ECDC4] to-[#10B981]',
    icon: Gift
  },
  {
    id: 4,
    title: '大湾区政策扶持',
    subtitle: '创业支持',
    description: '粤港澳大湾区大数据中心支持，享受最高50万元创业补贴',
    ctaText: '查看政策',
    ctaLink: '/policies',
    gradient: 'from-[#6C63FF] to-[#FF6584]',
    icon: Award
  }
]

export function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [activeTab, setActiveTab] = useState<'news' | 'policy'>('news')
  const [communityCarousel, setCommunityCarousel] = useState(0)

  const communityData = [
    {
      title: '加入OPC创业者交流社区',
      description: '与5000+创业者一起交流经验，寻找技术合伙人，获取最新行业洞察',
      gradient: 'linear-gradient(135deg, #FF6584, #6C63FF)',
      icon: MessageSquare,
      qrText: '扫码加入社群',
      buttonText: '立即注册',
      buttonLink: '/login'
    },
    {
      title: '加入创新情报可信数据开放社区',
      description: '获取可信数据，驱动创新决策',
      gradient: 'linear-gradient(135deg, #3B82F6, #6C63FF)',
      icon: Database,
      qrText: '扫码加入社区',
      buttonText: '',
      buttonLink: ''
    }
  ]

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerData.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerData.length) % bannerData.length)
  }

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // 统一的按钮样式
  const btnPrimary = {
    background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    textDecoration: 'none'
  } as const

  const btnSecondary = {
    background: 'transparent',
    border: '1px solid #475569',
    color: '#F1F5F9',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    textDecoration: 'none'
  } as const

  return (
    <div className="animate-fadeIn" style={{ background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 100%)', minHeight: '100vh' }}>
      
      {/* Banner 轮播区 */}
      <section style={{ padding: '2rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ 
          position: 'relative', 
          height: '400px', 
          maxWidth: '1280px', 
          margin: '0 auto',
          padding: '0 20px',
          borderRadius: '16px',
          overflow: 'hidden'
        }}>
          {bannerData.map((banner, index) => {
            const Icon = banner.icon
            return (
              <div
                key={banner.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, ${banner.gradient.replace('from-[', '').replace('] to-[', ', ').replace(']', '')})`,
                  opacity: index === currentBanner ? 1 : 0,
                  transition: 'all 0.5s ease-in-out',
                  transform: index === currentBanner ? 'scale(1)' : 'scale(0.95)'
                }}
              >
                {/* 装饰性背景 */}
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '300px', height: '300px', background: 'white', opacity: 0.05, borderRadius: '50%', filter: 'blur(60px)' }} />
                <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '250px', height: '250px', background: 'white', opacity: 0.05, borderRadius: '50%', filter: 'blur(60px)' }} />
                
                <div style={{ 
                  position: 'relative', 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: '2rem'
                }}>
                  <div style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      padding: '8px 16px', 
                      borderRadius: '9999px', 
                      background: 'rgba(255,255,255,0.1)', 
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      marginBottom: '24px',
                      color: 'white'
                    }}>
                      <Icon style={{ width: '16px', height: '16px' }} />
                      <span style={{ fontSize: '14px', fontWeight: 500 }}>{banner.subtitle}</span>
                    </div>
                    <h2 style={{ 
                      fontSize: '3rem', 
                      fontWeight: 800, 
                      color: 'white', 
                      marginBottom: '16px',
                      lineHeight: 1.2
                    }}>
                      {banner.title}
                    </h2>
                    <p style={{ 
                      fontSize: '1.25rem', 
                      color: 'rgba(255,255,255,0.8)', 
                      marginBottom: '32px',
                      maxWidth: '600px',
                      margin: '0 auto 32px'
                    }}>
                      {banner.description}
                    </p>
                    <Link to={banner.ctaLink}>
                      <button style={btnPrimary}>
                        {banner.ctaText}
                        <ArrowRight style={{ width: '18px', height: '18px' }} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}

          {/* 轮播控制 */}
          <button
            onClick={prevBanner}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              zIndex: 20,
              transition: 'all 0.3s'
            }}
          >
            <ChevronLeft style={{ width: '24px', height: '24px' }} />
          </button>
          <button
            onClick={nextBanner}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              zIndex: 20,
              transition: 'all 0.3s'
            }}
          >
            <ChevronRight style={{ width: '24px', height: '24px' }} />
          </button>

          {/* 轮播指示器 */}
          <div style={{ 
            position: 'absolute', 
            bottom: '24px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            display: 'flex', 
            gap: '8px',
            zIndex: 20
          }}>
            {bannerData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                style={{
                  width: index === currentBanner ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  background: index === currentBanner ? 'white' : 'rgba(255,255,255,0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 快速入口 */}
      <section style={{ padding: '2rem 0', margin: '2rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#F1F5F9', fontSize: '2rem', fontWeight: 700 }}>快速入口</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <Link to="/models" style={{ textDecoration: 'none' }}>
              <div style={{ 
                background: 'linear-gradient(145deg, #1E293B, rgba(255, 255, 255, 0.05))',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = '#6C63FF'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(108, 99, 255, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <h3 style={{ color: '#F1F5F9', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Cpu style={{ color: '#6C63FF' }} />
                  AI模型
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem' }}>集成主流AI模型，快速构建智能应用</p>
              </div>
            </Link>
            
            <Link to="/data-apis" style={{ textDecoration: 'none' }}>
              <div style={{ 
                background: 'linear-gradient(145deg, #1E293B, rgba(255, 255, 255, 0.05))',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = '#6C63FF'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(108, 99, 255, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <h3 style={{ color: '#F1F5F9', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Database style={{ color: '#6C63FF' }} />
                  数据API
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem' }}>丰富的数据接口，为应用提供数据支撑</p>
              </div>
            </Link>
            
            <Link to="/cloud-resources" style={{ textDecoration: 'none' }}>
              <div style={{ 
                background: 'linear-gradient(145deg, #1E293B, rgba(255, 255, 255, 0.05))',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = '#6C63FF'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(108, 99, 255, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <h3 style={{ color: '#F1F5F9', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Cloud style={{ color: '#6C63FF' }} />
                  云资源
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem' }}>云服务器、存储、数据库，一键申请</p>
              </div>
            </Link>
            
            <Link to="/policies" style={{ textDecoration: 'none' }}>
              <div style={{ 
                background: 'linear-gradient(145deg, #1E293B, rgba(255, 255, 255, 0.05))',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = '#6C63FF'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(108, 99, 255, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <h3 style={{ color: '#F1F5F9', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FileText style={{ color: '#6C63FF' }} />
                  政策查询
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem' }}>融资政策、人才政策、行业资讯</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* OPC创业十万元大礼包 */}
      <section style={{ 
        padding: '5rem 0', 
        background: 'linear-gradient(135deg, rgba(255, 101, 132, 0.15), rgba(108, 99, 255, 0.15))', 
        position: 'relative', 
        overflow: 'hidden',
        margin: '2rem 0'
      }}>
        {/* 装饰性元素 */}
        <div style={{ position: 'absolute', top: '20px', left: '20px', width: '100px', height: '100px', border: '2px dashed rgba(255, 101, 132, 0.3)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '80px', height: '80px', border: '2px dashed rgba(108, 99, 255, 0.3)', borderRadius: '50%' }}></div>
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '8px 20px', 
              background: 'linear-gradient(135deg, #FF6584, #6C63FF)', 
              color: 'white', 
              borderRadius: '30px', 
              fontWeight: 600, 
              marginBottom: '1rem'
            }}>
              公益性服务活动
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#F1F5F9', marginBottom: '1rem' }}>OPC创业十万元大礼包</h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              粤港澳大湾区大数据中心特别支持，为一人公司创业者提供的免费创业资源包
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
            {/* 云资源 */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)', 
              border: '1px solid rgba(255, 255, 255, 0.2)', 
              borderRadius: '12px', 
              padding: '2rem', 
              textAlign: 'center', 
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #3B82F6, #6C63FF)', 
                borderRadius: '20px', 
                margin: '0 auto 1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <Cloud style={{ fontSize: '2rem', color: 'white', width: '36px', height: '36px' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', marginBottom: '1rem', fontSize: '1.3rem' }}>云资源支持</h3>
              <ul style={{ listStyle: 'none', textAlign: 'left', color: '#CBD5E1', marginBottom: '1.5rem' }}>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>云服务器：2核4G × 12个月</span>
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>对象存储：100GB存储空间</span>
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>CDN加速：1TB流量包</span>
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>数据库服务：MySQL/Redis实例</span>
                </li>
              </ul>
              <div style={{ fontSize: '1.1rem', color: '#FF6584', fontWeight: 600 }}>
                市场价值：￥15,000
              </div>
            </div>

            {/* 算力资源 */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)', 
              border: '1px solid rgba(255, 255, 255, 0.2)', 
              borderRadius: '12px', 
              padding: '2rem', 
              textAlign: 'center', 
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #FF6584, #FF9A8B)', 
                borderRadius: '20px', 
                margin: '0 auto 1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <Zap style={{ fontSize: '2rem', color: 'white', width: '36px', height: '36px' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', marginBottom: '1rem', fontSize: '1.3rem' }}>AI算力资源</h3>
              <ul style={{ listStyle: 'none', textAlign: 'left', color: '#CBD5E1', marginBottom: '1.5rem' }}>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>GPU算力：100小时 A100/V100</span>
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>大模型API：10万token额度</span>
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>AI训练平台：3个月使用权</span>
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>数据标注服务：5000条数据</span>
                </li>
              </ul>
              <div style={{ fontSize: '1.1rem', color: '#FF6584', fontWeight: 600 }}>
                市场价值：￥20,000
              </div>
            </div>

            {/* 网络与营销资源 */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)', 
              border: '1px solid rgba(255, 255, 255, 0.2)', 
              borderRadius: '12px', 
              padding: '2rem', 
              textAlign: 'center', 
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #4ECDC4, #10B981)', 
                borderRadius: '20px', 
                margin: '0 auto 1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <Globe style={{ fontSize: '2rem', color: 'white', width: '36px', height: '36px' }} />
              </div>
              <h3 style={{ color: '#F1F5F9', marginBottom: '1rem', fontSize: '1.3rem' }}>网络与营销资源</h3>
              <ul style={{ listStyle: 'none', textAlign: 'left', color: '#CBD5E1', marginBottom: '1.5rem' }}>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>域名注册：.com域名 × 1年</span>
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>SSL证书：企业级证书 × 1年</span>
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>营销推广：1000元广告金</span>
                </li>
                <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#10B981', width: '16px', height: '16px' }} />
                  <span>SEO优化：网站诊断与优化</span>
                </li>
              </ul>
              <div style={{ fontSize: '1.1rem', color: '#FF6584', fontWeight: 600 }}>
                市场价值：￥8,000
              </div>
            </div>
          </div>

          {/* 礼包总结 */}
          <div style={{ 
            background: 'rgba(15, 23, 41, 0.8)', 
            border: '2px solid #6C63FF', 
            borderRadius: '12px', 
            padding: '2rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            position: 'relative', 
            zIndex: 1 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ color: '#F1F5F9', marginBottom: '0.5rem' }}>总价值超十万元创业资源</h3>
                <p style={{ color: '#CBD5E1' }}>专为一人公司创业者设计，助力您的创业之路</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 800, 
                  background: 'linear-gradient(135deg, #FF6584, #6C63FF)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent' 
                }}>
                  ¥100,000+
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.9rem' }}>市场总价值</div>
              </div>
            </div>
          </div>

          {/* CTA按钮 */}
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>
                ⚠ 名额有限，仅限前100名创业者申请
              </span>
            </div>
            <Link to="/login">
              <button style={{ 
                fontSize: '1.2rem', 
                padding: '1.2rem 3rem', 
                background: 'linear-gradient(135deg, #FF6584, #6C63FF)', 
                border: 'none',
                color: 'white',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Gift style={{ width: '24px', height: '24px' }} />
                立即申请十万元大礼包
              </button>
            </Link>
            <p style={{ color: '#CBD5E1', marginTop: '1rem', fontSize: '0.9rem' }}>
              申请条件：一人公司创业者、有明确的创业计划、首次申请
            </p>
          </div>
        </div>
      </section>

      {/* 解决方案区块 */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#F1F5F9' }}>OPC创业解决方案</h2>
          <p style={{ color: '#CBD5E1', marginBottom: '3rem', fontSize: '1.1rem' }}>为一人公司创业者量身定制的完整服务包</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* 方案1：一站式信息与政策赋能方案 */}
            <div style={{ 
              background: '#1E293B', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              border: '1px solid #475569',
              transition: 'all 0.3s ease'
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
            }}>
              <div style={{ 
                padding: '1.5rem', 
                background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.15), rgba(78, 205, 196, 0.15))', 
                borderBottom: '1px solid #475569' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: 'linear-gradient(135deg, #6C63FF, #4ECDC4)', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Lightbulb style={{ color: 'white', width: '20px', height: '20px' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#F1F5F9', marginBottom: 0 }}>一站式信息与政策赋能方案</h3>
                </div>
                <p style={{ color: '#A5B4FC', fontSize: '0.85rem', paddingLeft: '52px' }}>AI 智能聚合 + 精准匹配 + 轻量化对接</p>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  以"AI 智能聚合 + 精准匹配 + 轻量化对接" 为核心，打造创业启蒙全维度信息支撑体系，让创业起步更高效、更省心
                </p>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                  {['智能资讯速递', '政策智能匹配', '补贴申报全攻略', '创业快捷总入口'].map((item, i) => (
                    <li key={i} style={{ padding: '0.6rem 0', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Check style={{ color: '#6C63FF', width: '16px', height: '16px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link to="/login" style={{ flex: 1 }}>
                    <button style={{ ...btnPrimary, width: '100%', justifyContent: 'center' }}>
                      立即体验
                    </button>
                  </Link>
                  <button style={{ ...btnSecondary, flex: 1, justifyContent: 'center' }}>
                    查看详情
                  </button>
                </div>
              </div>
            </div>
            
            {/* 方案2：AI 技术与云资源一体化落地方案 */}
            <div style={{ 
              background: '#1E293B', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              border: '1px solid #475569',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)'
              e.currentTarget.style.borderColor = '#FF6584'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = '#475569'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                background: 'linear-gradient(135deg, rgba(255, 101, 132, 0.15), rgba(108, 99, 255, 0.15))', 
                borderBottom: '1px solid #475569' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: 'linear-gradient(135deg, #FF6584, #6C63FF)', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Cpu style={{ color: 'white', width: '20px', height: '20px' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#F1F5F9', marginBottom: 0 }}>AI技术与云资源一体化落地方案</h3>
                </div>
                <p style={{ color: '#FF9A8B', fontSize: '0.85rem', paddingLeft: '52px' }}>模型即服务（MaaS）+ 创业专属云资源</p>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  以"模型即服务（MaaS）+ 创业专属云资源 + 数据 / API 赋能" 为核心，打造技术成果快速转化的产品落地体系，让产品研发轻量化、高效化、低成本化
                </p>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                  {['开箱即用 AI 大模型服务', 'OPC 专属云资源套餐', '高质量数据与 API 赋能', '落地资源配套支撑'].map((item, i) => (
                    <li key={i} style={{ padding: '0.6rem 0', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Check style={{ color: '#FF6584', width: '16px', height: '16px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link to="/login" style={{ flex: 1 }}>
                    <button style={{ ...btnPrimary, width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #FF6584, #6C63FF)' }}>
                      开始开发
                    </button>
                  </Link>
                  <button style={{ ...btnSecondary, flex: 1, justifyContent: 'center' }}>
                    技术文档
                  </button>
                </div>
              </div>
            </div>
            
            {/* 方案3：全维度资源与能力升级方案 */}
            <div style={{ 
              background: '#1E293B', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              border: '1px solid #475569',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)'
              e.currentTarget.style.borderColor = '#4ECDC4'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = '#475569'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.15), rgba(16, 185, 129, 0.15))', 
                borderBottom: '1px solid #475569' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: 'linear-gradient(135deg, #4ECDC4, #10B981)', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Globe style={{ color: 'white', width: '20px', height: '20px' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#F1F5F9', marginBottom: 0 }}>全维度资源与能力升级方案</h3>
                </div>
                <p style={{ color: '#4ECDC4', fontSize: '0.85rem', paddingLeft: '52px' }}>精准对接 + 能力提升 + 生态合作</p>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  以"精准对接 + 能力提升 + 生态合作 + 专业护航" 为核心，打造全维度资源赋能体系，弥补单人创业资源短板，实现从"研发"到"商业"的跨越
                </p>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                  {['核心资源精准匹配', '创业能力定制提升', '生态合作高效对接', '专业服务全程护航'].map((item, i) => (
                    <li key={i} style={{ padding: '0.6rem 0', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Check style={{ color: '#4ECDC4', width: '16px', height: '16px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link to="/login" style={{ flex: 1 }}>
                    <button style={{ ...btnPrimary, width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #4ECDC4, #10B981)' }}>
                      申请资源
                    </button>
                  </Link>
                  <button style={{ ...btnSecondary, flex: 1, justifyContent: 'center' }}>
                    查看资格
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最新创业政策与资讯 */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#F1F5F9' }}>最新创业政策与资讯</h2>
              <p style={{ color: '#94A3B8', fontSize: '1rem' }}>掌握最新行业动态与政府扶持政策</p>
            </div>
          </div>
          
          {/* 标签页切换 */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #334155', paddingBottom: '1rem' }}>
            <button
              onClick={() => setActiveTab('news')}
              style={{
                padding: '10px 24px',
                background: activeTab === 'news' ? 'linear-gradient(135deg, #6C63FF, #8A84FF)' : 'transparent',
                border: `1px solid ${activeTab === 'news' ? '#6C63FF' : '#475569'}`,
                color: 'white',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Newspaper style={{ width: '18px', height: '18px' }} />
              创业资讯
            </button>
            <button
              onClick={() => setActiveTab('policy')}
              style={{
                padding: '10px 24px',
                background: activeTab === 'policy' ? 'linear-gradient(135deg, #4ECDC4, #10B981)' : 'transparent',
                border: `1px solid ${activeTab === 'policy' ? '#4ECDC4' : '#475569'}`,
                color: 'white',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FileText style={{ width: '18px', height: '18px' }} />
              创业政策
            </button>
          </div>
          
          {/* 资讯内容 */}
          {activeTab === 'news' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
              <div style={{ 
                background: '#1E293B', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                border: '1px solid #475569',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{ height: '180px', background: 'linear-gradient(135deg, #6C63FF 0%, #4ECDC4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Lightbulb style={{ width: '48px', height: '48px', color: 'white', opacity: 0.8 }} />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <span style={{ color: '#6C63FF', fontSize: '0.8rem', fontWeight: 500 }}>行业趋势</span>
                  <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, margin: '0.5rem 0', lineHeight: 1.4 }}>AI大模型赋能一人公司创业：低成本高效能解决方案</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.5 }}>随着AI技术快速发展，一人公司创业者可以利用大模型技术实现业务自动化...</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #334155' }}>
                    <span style={{ color: '#64748B', fontSize: '0.8rem' }}>2024-01-15</span>
                    <span style={{ color: '#6C63FF', fontSize: '0.85rem' }}>阅读全文 →</span>
                  </div>
                </div>
              </div>

              <div style={{ 
                background: '#1E293B', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                border: '1px solid #475569',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{ height: '180px', background: 'linear-gradient(135deg, #FF6584 0%, #FF9A8B 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BarChart3 style={{ width: '48px', height: '48px', color: 'white', opacity: 0.8 }} />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <span style={{ color: '#FF6584', fontSize: '0.8rem', fontWeight: 500 }}>市场分析</span>
                  <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, margin: '0.5rem 0', lineHeight: 1.4 }}>2024年云计算市场规模突破5000亿，创业新机遇在哪里？</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.5 }}>云计算行业持续增长，为创业者提供了更多低成本技术服务选择...</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #334155' }}>
                    <span style={{ color: '#64748B', fontSize: '0.8rem' }}>2024-01-12</span>
                    <span style={{ color: '#FF6584', fontSize: '0.85rem' }}>阅读全文 →</span>
                  </div>
                </div>
              </div>

              <div style={{ 
                background: '#1E293B', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                border: '1px solid #475569',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{ height: '180px', background: 'linear-gradient(135deg, #4ECDC4 0%, #10B981 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Rocket style={{ width: '48px', height: '48px', color: 'white', opacity: 0.8 }} />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <span style={{ color: '#4ECDC4', fontSize: '0.8rem', fontWeight: 500 }}>创业故事</span>
                  <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, margin: '0.5rem 0', lineHeight: 1.4 }}>90后程序员转型AI创业：一人公司如何年入百万</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.5 }}>从大厂辞职到独立创业，一位90后程序员的逆袭之路...</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #334155' }}>
                    <span style={{ color: '#64748B', fontSize: '0.8rem' }}>2024-01-10</span>
                    <span style={{ color: '#4ECDC4', fontSize: '0.85rem' }}>阅读全文 →</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* 政策内容 */}
          {activeTab === 'policy' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
              <div style={{ 
                background: '#1E293B', 
                borderRadius: '12px', 
                padding: '1.5rem', 
                border: '1px solid #475569',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'
                e.currentTarget.style.borderColor = '#4ECDC4'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#475569'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ background: 'rgba(78, 205, 196, 0.2)', color: '#4ECDC4', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 500 }}>补贴政策</span>
                  <span style={{ color: '#64748B', fontSize: '0.8rem' }}>2024-01-14</span>
                </div>
                <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: 1.4 }}>深圳市初创企业补贴政策升级：最高可获50万元</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1rem' }}>深圳市政府发布最新创业扶持政策，针对科技型初创企业提供最高50万元补贴...</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ECDC4', fontSize: '0.9rem' }}>
                  <FileCheck style={{ width: '16px', height: '16px' }} />
                  <span>查看详情</span>
                </div>
              </div>

              <div style={{ 
                background: '#1E293B', 
                borderRadius: '12px', 
                padding: '1.5rem', 
                border: '1px solid #475569',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'
                e.currentTarget.style.borderColor = '#6C63FF'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#475569'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ background: 'rgba(108, 99, 255, 0.2)', color: '#A5B4FC', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 500 }}>税收优惠</span>
                  <span style={{ color: '#64748B', fontSize: '0.8rem' }}>2024-01-11</span>
                </div>
                <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: 1.4 }}>小微企业税收优惠政策延续：增值税减免继续执行</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1rem' }}>国家税务总局发布通知，小微企业增值税减免政策延续至2024年底...</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#A5B4FC', fontSize: '0.9rem' }}>
                  <FileCheck style={{ width: '16px', height: '16px' }} />
                  <span>查看详情</span>
                </div>
              </div>

              <div style={{ 
                background: '#1E293B', 
                borderRadius: '12px', 
                padding: '1.5rem', 
                border: '1px solid #475569',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'
                e.currentTarget.style.borderColor = '#FF6584'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#475569'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ background: 'rgba(255, 101, 132, 0.2)', color: '#FF6584', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 500 }}>人才政策</span>
                  <span style={{ color: '#64748B', fontSize: '0.8rem' }}>2024-01-08</span>
                </div>
                <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: 1.4 }}>粤港澳大湾区人才引进计划：创业者的专属福利</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1rem' }}>大湾区发布最新人才政策，创业者可享受住房补贴、子女入学等优惠...</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FF6584', fontSize: '0.9rem' }}>
                  <FileCheck style={{ width: '16px', height: '16px' }} />
                  <span>查看详情</span>
                </div>
              </div>

              <div style={{ 
                background: '#1E293B', 
                borderRadius: '12px', 
                padding: '1.5rem', 
                border: '1px solid #475569',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'
                e.currentTarget.style.borderColor = '#10B981'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#475569'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 500 }}>融资支持</span>
                  <span style={{ color: '#64748B', fontSize: '0.8rem' }}>2024-01-05</span>
                </div>
                <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: 1.4 }}>政府引导基金助力创业：创业担保贷款额度提升</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1rem' }}>创业者可申请最高300万元创业担保贷款，政府给予贴息支持...</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.9rem' }}>
                  <FileCheck style={{ width: '16px', height: '16px' }} />
                  <span>查看详情</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 生态活动区块 */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#F1F5F9' }}>生态活动</h2>
          <p style={{ color: '#CBD5E1', marginBottom: '3rem', fontSize: '1.1rem' }}>最新活动资讯与社区动态</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
            {/* 活动日历 */}
            <div style={{ 
              background: '#1E293B', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              border: '1px solid #475569'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(78, 205, 196, 0.1))', 
                borderBottom: '1px solid #475569',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Calendar style={{ color: '#6C63FF', width: '24px', height: '24px' }} />
                <h3 style={{ fontSize: '1.25rem', color: '#F1F5F9', marginBottom: 0 }}>活动日历</h3>
              </div>
              <div style={{ padding: '1.5rem' }}>
                {[
                  { month: '04', day: '15', title: 'OPC创业训练营第三期', color: '#6C63FF' },
                  { month: '04', day: '20', title: 'AI应用开发工作坊', color: '#FF6584' },
                  { month: '04', day: '25', title: '创业者融资路演会', color: '#4ECDC4' },
                  { month: '05', day: '05', title: '创业导师见面会', color: '#10B981' },
                ].map((event, i) => (
                  <div key={i} style={{ 
                    padding: '0.75rem 0', 
                    borderBottom: i < 3 ? '1px solid #334155' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.paddingLeft = '8px'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.paddingLeft = '0'
                  }}>
                    <div style={{ 
                      width: '50px', 
                      height: '50px', 
                      background: `${event.color}20`,
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: event.color, fontSize: '0.75rem', fontWeight: 500 }}>{event.month}月</span>
                      <span style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 700 }}>{event.day}</span>
                    </div>
                    <div>
                      <h4 style={{ color: '#F1F5F9', fontSize: '0.95rem', marginBottom: '2px' }}>{event.title}</h4>
                      <p style={{ color: '#64748B', fontSize: '0.8rem' }}>即将开始</p>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <Link to="/events" style={{ color: '#6C63FF', textDecoration: 'none', fontSize: '0.9rem' }}>
                    查看完整日历 →
                  </Link>
                </div>
              </div>
            </div>

            {/* 活动回顾 - 图片+标题形式 */}
            <div style={{ 
              background: '#1E293B', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              border: '1px solid #475569'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(16, 185, 129, 0.1))', 
                borderBottom: '1px solid #475569',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <History style={{ color: '#4ECDC4', width: '24px', height: '24px' }} />
                <h3 style={{ fontSize: '1.25rem', color: '#F1F5F9', marginBottom: 0 }}>活动回顾</h3>
              </div>
              <div style={{ padding: '1.5rem' }}>
                {[
                  { 
                    title: 'OPC创业训练营第二期圆满落幕', 
                    image: 'linear-gradient(135deg, #6C63FF, #4ECDC4)', 
                    views: '2.5k',
                    summary: '本次训练营汇聚了来自全国各地的50名优秀创业者，通过为期30天的系统培训，学员们完成了从0到1的创业项目孵化，涵盖商业模式设计、产品开发、市场推广等核心环节。'
                  },
                  { 
                    title: 'AI应用开发工作坊成功举办', 
                    image: 'linear-gradient(135deg, #FF6584, #FF9A8B)', 
                    views: '1.8k',
                    summary: '工作坊邀请了多位AI领域专家，深入讲解大模型技术原理与实际应用场景，现场演示了如何利用AI工具提升开发效率，吸引了超过200名开发者参与互动。'
                  },
                  { 
                    title: '创业者融资路演会圆满成功', 
                    image: 'linear-gradient(135deg, #4ECDC4, #10B981)', 
                    views: '3.2k',
                    summary: '本次路演会共有15个优质创业项目进行展示，涵盖人工智能、云计算、生物医药等多个领域。现场吸引了30余家投资机构参与，多个项目获得初步投资意向。'
                  },
                ].map((review, i) => (
                  <div key={i} style={{ 
                    padding: '1rem 0', 
                    borderBottom: i < 2 ? '1px solid #475569' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.paddingLeft = '8px'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.paddingLeft = '0'
                  }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '160px', 
                        height: '100px', 
                        background: review.image, 
                        borderRadius: '8px',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <PlayCircle style={{ color: 'white', width: '32px', height: '32px', opacity: 0.8 }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ color: '#F1F5F9', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 600 }}>{review.title}</h4>
                        <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '8px' }}>{review.summary}</p>
                        <p style={{ color: '#64748B', fontSize: '0.8rem' }}>👁 {review.views} 次观看</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <Link to="/events/review" style={{ color: '#4ECDC4', textDecoration: 'none', fontSize: '0.9rem' }}>
                    查看更多回顾 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 交流社区CTA - 左右结构 */}
      <section style={{ 
        padding: '4rem 0', 
        background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(78, 205, 196, 0.1))', 
        borderRadius: '12px', 
        margin: '0 4rem 2rem'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* 左侧：主题+立即加入按钮 */}
            <div style={{ textAlign: 'left', padding: '2rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#F1F5F9', fontWeight: 700 }}>
                加入OPC创业者交流社区
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                与5000+创业者交流经验，寻找技术合伙人，获取最新行业洞察，共同成长
              </p>
              <Link to="/login">
                <button style={{ 
                  fontSize: '1.1rem', 
                  padding: '16px 40px', 
                  background: 'linear-gradient(135deg, #FF6584, #6C63FF)', 
                  border: 'none',
                  color: 'white',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 101, 132, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <UsersRound style={{ width: '20px', height: '20px' }} />
                  立即加入社区
                </button>
              </Link>
            </div>

            {/* 右侧：扫码入群 */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '1.5rem'
            }}>
              <div style={{ 
                width: '220px', 
                height: '220px', 
                background: '#F1F5F9', 
                borderRadius: '16px', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <QrCode style={{ width: '140px', height: '140px', color: '#1E293B' }} />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '10px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #FF6584, #6C63FF)',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: 500
                }}>
                  扫码加入社群
                </div>
              </div>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', textAlign: 'center' }}>
                微信扫码即可加入OPC创业者交流社区
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
