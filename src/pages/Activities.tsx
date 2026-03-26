import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Calendar,
  MapPin,
  Users,
  Video,
  Clock,
  ArrowRight,
  Check,
  Bell,
  Share2,
  PlayCircle,
  FileText,
  MessageSquare,
  User,
  Cpu,
  Cloud,
  Lightbulb,
  Zap,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Trophy,
  Handshake,
  QrCode,
  History,
  Star,
  TrendingUp
} from 'lucide-react'
import { Footer } from '@/components/Footer'

export function ActivitiesPage() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentReview, setCurrentReview] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)

  const bannerData = [
    {
      id: 1,
      title: 'OPC创业避坑指南',
      subtitle: '线下沙龙',
      description: 'AI协同下"单人成军"实战分享会，创业导师现场答疑',
      date: '2024-04-15',
      location: '深圳南山区',
      image: 'linear-gradient(135deg, #FF6584, #6C63FF)'
    },
    {
      id: 2,
      title: 'AI大模型应用训练营',
      subtitle: '实战训练营',
      description: '7天集中培训，掌握AI协同工具完成创业项目',
      date: '2024-04-20',
      location: '线上+线下',
      image: 'linear-gradient(135deg, #6C63FF, #4ECDC4)'
    },
    {
      id: 3,
      title: '创业者融资路演会',
      subtitle: '资源对接会',
      description: '优质项目路演，投资机构对接，诚邀参加',
      date: '2024-04-25',
      location: '深圳福田区',
      image: 'linear-gradient(135deg, #4ECDC4, #10B981)'
    }
  ]

  const categories = [
    { id: 'all', label: '全部活动', icon: Calendar },
    { id: 'salon', label: '创业沙龙', icon: Users },
    { id: 'camp', label: '实战训练营', icon: GraduationCap },
    { id: 'match', label: '资源对接会', icon: Handshake },
  ]

  const activities = [
    {
      id: 1,
      type: 'salon',
      typeLabel: '创业沙龙',
      typeColor: '#FF6584',
      title: 'OPC创业避坑指南——AI协同下"单人成军"实战分享会',
      description: '线下/线上结合，由OPC创业导师、AI协同工具专家分享OPC创业全流程经验、案例拆解、AI工具使用技巧，现场答疑、互动交流',
      date: '2024-04-15',
      time: '14:00-17:00',
      location: '深圳南山区科兴科学园',
      participants: 85,
      maxParticipants: 150,
      status: 'upcoming',
      tags: ['线下', '现场答疑', '案例拆解'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },

    {
      id: 3,
      type: 'camp',
      typeLabel: '实战训练营',
      typeColor: '#4ECDC4',
      title: 'OPC创业训练营第三期——AI赋能创业',
      description: '短期集中培训，由导师/专家带队，指导目标用户掌握OPC创业全流程、AI协同工具使用、云资源运用技能，完成小型OPC创业项目雏形搭建',
      date: '2024-04-20',
      time: '为期7天',
      location: '深圳OPC创客空间',
      participants: 28,
      maxParticipants: 30,
      status: 'upcoming',
      tags: ['集中培训', '项目孵化', '导师带队'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      type: 'match',
      typeLabel: '资源对接会',
      typeColor: '#10B981',
      title: '创业者融资路演会——优质项目路演',
      description: '线下活动，邀请OPC创业导师、AI工具服务商、云资源服务商、目标用户，实现面对面创业交流、资源对接、合作洽谈',
      date: '2024-04-25',
      time: '13:00-18:00',
      location: '深圳福田区CBD',
      participants: 120,
      maxParticipants: 200,
      status: 'upcoming',
      tags: ['路演', '投资对接', '资源洽谈'],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },

    {
      id: 6,
      type: 'salon',
      typeLabel: '创业沙龙',
      typeColor: '#FF6584',
      title: 'OPC创业训练营第二期回顾——创业者分享',
      description: '第二期训练营圆满落幕，优秀学员分享创业心得',
      date: '2024-04-05',
      time: '已结束',
      location: '深圳OPC创客空间',
      participants: 200,
      maxParticipants: 200,
      status: 'ended',
      tags: ['回顾', '学员分享'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const filteredActivities = activeCategory === 'all' 
    ? activities 
    : activities.filter(a => a.type === activeCategory)

  const reviewData = [
    {
      id: 1,
      type: 'salon',
      typeLabel: '创业沙龙',
      typeColor: '#FF6584',
      title: 'OPC创业避坑指南——AI协同下"单人成军"实战分享会',
      description: '线下/线上结合，由OPC创业导师、AI协同工具专家分享OPC创业全流程经验、案例拆解、AI工具使用技巧，现场答疑、互动交流。',
      date: '2024-04-15',
      participants: 85,
      rating: 4.8,
      ratingCount: 96,
      bgGradient: 'linear-gradient(135deg, #FF6584, #6C63FF)',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      summary: 'AI协同创业实战经验分享，现场答疑互动'
    },
    {
      id: 2,
      type: 'camp',
      typeLabel: '实战训练营',
      typeColor: '#4ECDC4',
      title: 'OPC创业训练营第二期——创业者成功案例分享',
      description: '第二期训练营圆满落幕，优秀学员分享创业心得、项目经验，多位创业者成功对接资源并启动项目。',
      date: '2024-04-05',
      participants: 200,
      rating: 4.9,
      ratingCount: 42,
      bgGradient: 'linear-gradient(135deg, #4ECDC4, #10B981)',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      summary: '优秀学员创业心得分享，资源对接成功案例'
    },
    {
      id: 3,
      type: 'match',
      typeLabel: '资源对接会',
      typeColor: '#10B981',
      title: '创业者融资路演会第一期——5个项目成功对接',
      description: '8个优质项目路演，5个项目成功对接投资机构，累计达成意向投资额超2000万元。',
      date: '2024-03-25',
      participants: 120,
      rating: 4.7,
      ratingCount: 68,
      bgGradient: 'linear-gradient(135deg, #10B981, #4ECDC4)',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      summary: '优质项目路演，投资机构对接成功'
    },
    {
      id: 4,
      type: 'camp',
      typeLabel: '实战训练营',
      typeColor: '#4ECDC4',
      title: 'OPC创业训练营第一期回顾',
      description: '第一期训练营圆满结束，学员完成项目孵化，多位创业者获得初步投资意向。',
      date: '2024-02-28',
      participants: 150,
      rating: 4.6,
      ratingCount: 58,
      bgGradient: 'linear-gradient(135deg, #6C63FF, #FF6584)',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      summary: '项目孵化成功，获得投资意向'
    }
  ]

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerData.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerData.length) % bannerData.length)
  }

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviewData.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviewData.length) % reviewData.length)
  }

  // 横向自动滑动效果
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        // 每个卡片宽度为300px，间距为1rem，总共有4个卡片
        // 当滚动到最后时，回到起始位置
        if (prev >= (300 + 16) * 3) {
          return 0
        }
        return prev + (300 + 16) // 移动到下一个卡片
      })
    }, 3000) // 每3秒自动滑动

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 100%)' }}>
      {/* Banner区 */}
      <section style={{ padding: '2rem 0', position: 'relative' }}>
        <div style={{ 
          position: 'relative', 
          height: '320px', 
          maxWidth: '1200px', 
          margin: '0 auto',
          borderRadius: '16px',
          overflow: 'hidden'
        }}>
          {bannerData.map((banner, index) => (
            <div
              key={banner.id}
              style={{
                position: 'absolute',
                inset: 0,
                background: banner.image,
                opacity: index === currentBanner ? 1 : 0,
                transition: 'all 0.5s ease-in-out',
                transform: index === currentBanner ? 'scale(1)' : 'scale(0.95)'
              }}
            >
              <div style={{ 
                position: 'absolute', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '2rem'
              }}>
                <div style={{ textAlign: 'center', maxWidth: '700px' }}>
                  <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    padding: '6px 14px', 
                    borderRadius: '20px', 
                    background: 'rgba(255,255,255,0.15)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    marginBottom: '16px',
                    color: 'white',
                    fontSize: '0.85rem'
                  }}>
                    <Calendar style={{ width: '14px', height: '14px' }} />
                    {banner.subtitle}
                  </div>
                  <h2 style={{ 
                    fontSize: '2.2rem', 
                    fontWeight: 700, 
                    color: 'white', 
                    marginBottom: '12px'
                  }}>
                    {banner.title}
                  </h2>
                  <p style={{ 
                    fontSize: '1.05rem', 
                    color: 'rgba(255,255,255,0.85)', 
                    marginBottom: '20px'
                  }}>
                    {banner.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar style={{ width: '14px', height: '14px' }} />
                      {banner.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin style={{ width: '14px', height: '14px' }} />
                      {banner.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 轮播控制 */}
          <button
            onClick={prevBanner}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              zIndex: 20
            }}
          >
            <ChevronLeft style={{ width: '20px', height: '20px' }} />
          </button>
          <button
            onClick={nextBanner}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              zIndex: 20
            }}
          >
            <ChevronRight style={{ width: '20px', height: '20px' }} />
          </button>

          {/* 轮播指示器 */}
          <div style={{ 
            position: 'absolute', 
            bottom: '20px', 
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
                  width: index === currentBanner ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
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

      {/* 活动回顾 - 4*1网格横向滑动 */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#F1F5F9' }}>
              活动回顾
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#A5B4FC', fontSize: '0.9rem', cursor: 'pointer' }}>
              查看全部 <ArrowRight style={{ width: '16px', height: '16px' }} />
            </div>
          </div>
          
          <div style={{ 
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '12px'
          }}>
            <div style={{
              display: 'flex',
              gap: '1rem',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${scrollPosition}px)`,
              padding: '4px' // 为阴影留出空间
            }}>
              {reviewData.map((review) => (
                <div
                  key={review.id}
                  style={{
                    flex: '0 0 300px', // 固定宽度
                    background: '#1E293B',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #475569',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)'
                    e.currentTarget.style.borderColor = review.typeColor
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
                    e.currentTarget.style.borderColor = '#475569'
                  }}
                >
                  {/* 图片区域 */}
                  <div style={{
                    width: '100%',
                    height: '225px', // 4:3比例 (300 * 0.75)
                    background: `linear-gradient(135deg, ${review.typeColor}40, #1E293B)`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `url(${review.image}) center/cover no-repeat`,
                      opacity: 0.8
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <History style={{ width: '12px', height: '12px' }} />
                      {review.typeLabel}
                    </div>
                  </div>
                  
                  {/* 内容区域 */}
                  <div style={{ padding: '1.25rem' }}>
                    {/* 活动名称 */}
                    <h3 style={{
                      color: '#F1F5F9',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                      lineHeight: 1.4,
                      height: '3em',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {review.title}
                    </h3>
                    
                    {/* 活动摘要 */}
                    <p style={{
                      color: '#94A3B8',
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                      marginBottom: '1rem',
                      height: '3em',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {review.summary}
                    </p>
                    
                    {/* 时间及查看详情 */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid #334155'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#64748B',
                        fontSize: '0.8rem'
                      }}>
                        <Calendar style={{ width: '12px', height: '12px' }} />
                        {review.date}
                      </div>
                      
                      <button
                        onClick={() => {
                          // 这里可以添加查看详情的逻辑
                        }}
                        style={{
                          padding: '6px 12px',
                          background: 'transparent',
                          border: '1px solid #6C63FF',
                          borderRadius: '6px',
                          color: '#A5B4FC',
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = 'rgba(108, 99, 255, 0.1)'
                          e.currentTarget.style.transform = 'translateY(-1px)'
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.transform = 'translateY(0)'
                        }}
                      >
                        查看详情
                        <ArrowRight style={{ width: '12px', height: '12px' }} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 滑动指示器 */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '1.5rem'
            }}>
              {[0, 1, 2, 3].map((position) => (
                <div
                  key={position}
                  style={{
                    width: scrollPosition === position * (300 + 16) ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: scrollPosition === position * (300 + 16) ? '#6C63FF' : '#475569',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setScrollPosition(position * (300 + 16))
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 活动列表 */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#F1F5F9', marginBottom: '2rem', textAlign: 'center' }}>
            活动列表
          </h2>
          
          {/* 活动分类 */}
          <section style={{ padding: '0 0 2rem' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {categories.map((cat) => {
                  const Icon = cat.icon
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      style={{
                        padding: '12px 24px',
                        background: activeCategory === cat.id 
                          ? 'linear-gradient(135deg, #6C63FF, #8A84FF)' 
                          : 'rgba(30, 41, 59, 0.8)',
                        border: `1px solid ${activeCategory === cat.id ? '#6C63FF' : '#475569'}`,
                        color: 'white',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Icon style={{ width: '18px', height: '18px' }} />
                      {cat.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </section>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {filteredActivities.map((activity) => {
              const progress = (activity.participants / activity.maxParticipants) * 100
              return (
                <div
                  key={activity.id}
                  style={{ 
                    background: '#1E293B', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    border: '1px solid #475569',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)'
                    e.currentTarget.style.borderColor = activity.typeColor
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.borderColor = '#475569'
                  }}
                >
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '300px 1fr auto', 
                    gap: '1.5rem', 
                    alignItems: 'start'
                  }}>
                    {/* 左侧图片区域 - 4:3比例 */}
                    <div style={{
                      width: '300px',
                      height: '225px', // 4:3比例 (300 * 0.75)
                      background: `linear-gradient(135deg, ${activity.typeColor}40, #1E293B)`,
                      position: 'relative',
                      overflow: 'hidden',
                      borderTopLeftRadius: '16px',
                      borderBottomLeftRadius: '16px'
                    }}>
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: `url(${activity.image}) center/cover no-repeat`,
                        opacity: 0.9
                      }} />
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(10px)',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        {activity.status === 'upcoming' ? (
                          <>
                            <Calendar style={{ width: '12px', height: '12px' }} />
                            即将开始
                          </>
                        ) : (
                          <>
                            <History style={{ width: '12px', height: '12px' }} />
                            已结束
                          </>
                        )}
                      </div>
                      <div style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '12px',
                        right: '12px',
                        display: 'flex',
                        gap: '6px',
                        flexWrap: 'wrap'
                      }}>
                        {activity.tags.map((tag, i) => (
                          <span key={i} style={{ 
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            padding: '3px 8px',
                            borderRadius: '8px',
                            fontSize: '0.7rem',
                            color: 'white'
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* 中间内容区域 */}
                    <div style={{ padding: '1.5rem 0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                        <span style={{ 
                          background: `${activity.typeColor}20`, 
                          color: activity.typeColor, 
                          padding: '4px 12px', 
                          borderRadius: '20px', 
                          fontSize: '0.75rem', 
                          fontWeight: 500 
                        }}>
                          {activity.typeLabel}
                        </span>
                      </div>
                      <h3 style={{ color: '#F1F5F9', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                        {activity.title}
                      </h3>
                      <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                        {activity.description}
                      </p>
                      <div style={{ display: 'flex', gap: '1.5rem', color: '#64748B', fontSize: '0.85rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Calendar style={{ width: '14px', height: '14px' }} />
                          {activity.date}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Clock style={{ width: '14px', height: '14px' }} />
                          {activity.time}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <MapPin style={{ width: '14px', height: '14px' }} />
                          {activity.location}
                        </span>
                      </div>
                    </div>

                    {/* 右侧操作 */}
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'flex-end', 
                      gap: '1rem',
                      minWidth: '180px',
                      padding: '1.5rem 1.5rem 1.5rem 0'
                    }}>
                      {/* 报名进度 */}
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '8px', 
                          marginBottom: '8px',
                          justifyContent: 'flex-end'
                        }}>
                          <Users style={{ width: '14px', height: '14px', color: '#64748B' }} />
                          <span style={{ color: '#CBD5E1', fontSize: '0.85rem' }}>
                            {activity.participants}/{activity.maxParticipants}
                          </span>
                        </div>
                        <div style={{ width: '120px', height: '6px', background: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ 
                            width: `${Math.min(progress, 100)}%`, 
                            height: '100%', 
                            background: activity.typeColor,
                            borderRadius: '3px'
                          }} />
                        </div>
                      </div>

                      {/* 操作按钮 */}
                      {activity.status === 'upcoming' ? (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button style={{
                            padding: '8px 16px',
                            background: 'transparent',
                            border: '1px solid #475569',
                            borderRadius: '6px',
                            color: '#CBD5E1',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}>
                            <Bell style={{ width: '14px', height: '14px' }} />
                            提醒
                          </button>
                          <button style={{
                            padding: '8px 16px',
                            background: activity.typeColor,
                            border: 'none',
                            borderRadius: '6px',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}>
                            <QrCode style={{ width: '14px', height: '14px' }} />
                            报名
                          </button>
                        </div>
                      ) : (
                        <button style={{
                          padding: '8px 16px',
                          background: 'rgba(108, 99, 255, 0.1)',
                          border: '1px solid #6C63FF',
                          borderRadius: '6px',
                          color: '#A5B4FC',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <PlayCircle style={{ width: '14px', height: '14px' }} />
                          查看回顾
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>





      {/* 活动类型介绍 */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#F1F5F9', marginBottom: '2rem', textAlign: 'center' }}>
            活动类型
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { 
                icon: Users, 
                title: '创业沙龙', 
                color: '#FF6584',
                desc: '线下/线上结合，由OPC创业导师、AI协同工具专家分享OPC创业全流程经验、案例拆解、AI工具使用技巧，现场答疑、互动交流'
              },
              { 
                icon: GraduationCap, 
                title: '实战训练营', 
                color: '#4ECDC4',
                desc: '短期集中培训，由导师/专家带队，指导目标用户掌握OPC创业全流程、AI协同工具使用、云资源运用技能'
              },
              { 
                icon: Handshake, 
                title: '资源对接会', 
                color: '#10B981',
                desc: '线下活动，邀请OPC创业导师、AI工具服务商、云资源服务商、目标用户，实现面对面创业交流、资源对接'
              },
            ].map((type, i) => {
              const Icon = type.icon
              return (
                <div key={i} style={{ 
                  background: '#1E293B', 
                  borderRadius: '12px', 
                  padding: '1.5rem', 
                  border: '1px solid #475569',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = type.color
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#475569'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                >
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    background: `${type.color}20`, 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <Icon style={{ color: type.color, width: '24px', height: '24px' }} />
                  </div>
                  <h4 style={{ color: '#F1F5F9', fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 600 }}>{type.title}</h4>
                  <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.6 }}>{type.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
