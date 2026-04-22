import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Logo } from '@/components/Logo'
import { Footer } from '@/components/Footer'
import { 
  ArrowRight, 
  Zap, 
  Check, 
  Gift, 
  MessageSquare, 
  UsersRound,
  QrCode,
  Cpu,
  Database,
  Cloud,
  Building,
  Info,
  FileText
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Banner 轮播数据（精简为 2 个）
const bannerData = [
  {
    id: 1,
    title: '一人成军 · AI 赋能',
    subtitle: 'AI 协同创业新时代',
    description: 'AI 放大能力边界，技术 + 云资源双核驱动，打造"一人独角兽"公司',
    ctaText: '立即申请',
    ctaLink: 'https://jinshuju.net/f/需求申请表单 ID',
    gradient: 'from-[#6C63FF] to-[#4ECDC4]',
    icon: Zap,
    backgroundImage: '/Pic4Banner/1.png'
  },
  {
    id: 3,
    title: '十万元创业礼包',
    subtitle: '核心资源',
    description: '云资源、主流模型、海量数据API等资源加持，专属权益限量发放',
    ctaText: '立即申请',
    ctaLink: 'https://jinshuju.net/f/需求申请表单 ID',
    gradient: 'from-[#4ECDC4] to-[#10B981]',
    icon: Gift,
    backgroundImage: '/Pic4Banner/2.png'
  }
]

export function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [loadedBanners, setLoadedBanners] = useState<number[]>([0])

  const nextBanner = () => {
    setCurrentBanner((prev) => {
      const next = (prev + 1) % bannerData.length
      if (!loadedBanners.includes(next)) {
        setLoadedBanners(prevLoaded => [...prevLoaded, next])
      }
      return next
    })
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => {
      const next = (prev - 1 + bannerData.length) % bannerData.length
      if (!loadedBanners.includes(next)) {
        setLoadedBanners(prevLoaded => [...prevLoaded, next])
      }
      return next
    })
  }

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // 预加载下一张 Banner 图片
  useEffect(() => {
    const nextIndex = (currentBanner + 1) % bannerData.length
    const banner = bannerData[nextIndex]
    if (banner.backgroundImage) {
      const img = new Image()
      img.src = banner.backgroundImage
    }
  }, [currentBanner])

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
            const isLoaded = loadedBanners.includes(index)
            return (
              <div
                key={banner.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  // 背景图片 + 渐变叠加（懒加载）
                  backgroundImage: isLoaded && banner.backgroundImage ? `url(${banner.backgroundImage})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: index === currentBanner ? 1 : 0,
                  transition: 'all 0.5s ease-in-out',
                  transform: index === currentBanner ? 'scale(1)' : 'scale(0.95)'
                }}
              >
                {/* 渐变叠加层，确保文字清晰 */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, ${banner.gradient.replace('from-[', '').replace('] to-[', ', ').replace(']', '')})`,
                  opacity: 0.7
                }} />
                
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
                      margin: '0 auto'
                    }}>
                      {banner.description}
                    </p>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
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
            {/* 数据 API 服务 */}
            <Link to="/data-apis" style={{ textDecoration: 'none' }}>
              <div style={{ 
                background: 'linear-gradient(145deg, #1E293B, rgba(255, 255, 255, 0.05))',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
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
                  数据 API 服务
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', margin: 0 }}>国家级数据接口，海量数据支撑，赋能 AI 应用开发</p>
              </div>
            </Link>
            
            {/* 云资源服务 */}
            <Link to="/cloud-resources" style={{ textDecoration: 'none' }}>
              <div style={{ 
                background: 'linear-gradient(145deg, #1E293B, rgba(255, 255, 255, 0.05))',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
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
                  云资源服务
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', margin: 0 }}>云计算、云存储、云数据库，一键开通运维</p>
              </div>
            </Link>
            
            {/* 创客空间入驻 */}
            <Link to="/space" style={{ textDecoration: 'none' }}>
              <div style={{ 
                background: 'linear-gradient(145deg, #1E293B, rgba(255, 255, 255, 0.05))',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
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
                  <Building style={{ color: '#6C63FF' }} />
                  创客空间入驻
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', margin: 0 }}>共享办公空间，灵活工位，低成本开启创业</p>
              </div>
            </Link>
            
            {/* 新闻资讯 */}
            <Link to="/policy" style={{ textDecoration: 'none' }}>
              <div style={{ 
                background: 'linear-gradient(145deg, #1E293B, rgba(255, 255, 255, 0.05))',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
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
                  新闻资讯
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', margin: 0 }}>整合官方动态与政府政策，把握 AI OPC 前沿资讯</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 交流社区 CTA */}
      <section style={{ 
        padding: '3rem 0', 
        background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(78, 205, 196, 0.1))', 
        borderRadius: '12px', 
        margin: '0 4rem 2rem'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#F1F5F9', fontWeight: 700 }}>
              🔥 抢先锁定创始会员席位
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1rem', marginBottom: '2.5rem' }}>
              限时开放 1000 个内测名额，审核制加入
            </p>
            
            {/* 内测权益列表 - 3 列布局 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ 
                background: 'rgba(30, 41, 59, 0.6)',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(108, 99, 255, 0.2)'
              }}>
                <h3 style={{ color: '#F1F5F9', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  免费云资源额度
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                  限量免费领取
                  <br />
                  云服务器、存储、数据库资源
                </p>
              </div>
              
              <div style={{ 
                background: 'rgba(30, 41, 59, 0.6)',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(108, 99, 255, 0.2)'
              }}>
                <h3 style={{ color: '#F1F5F9', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  AI 技术支持
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                  免费 API 额度 
                  <br />
                  专业团队全程支持
                </p>
              </div>
              
              <div style={{ 
                background: 'rgba(30, 41, 59, 0.6)',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(108, 99, 255, 0.2)'
              }}>
                <h3 style={{ color: '#F1F5F9', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  创新管家服务
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                  一对一陪跑
                  <br />
                  从 0 到 1 孵化您的项目
                </p>
              </div>
            </div>
            
            <a 
              href="https://ucn19uuu5wk8.feishu.cn/share/base/form/shrcniKkFNUVlQC7YpA5fyg103d"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button style={{ 
                fontSize: '1rem', 
                padding: '14px 48px', 
                background: 'linear-gradient(135deg, #FF6584, #6C63FF)', 
                border: 'none',
                color: 'white',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 101, 132, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 101, 132, 0.4)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 101, 132, 0.3)'
              }}>
                获取内测席位，立即入驻 <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
