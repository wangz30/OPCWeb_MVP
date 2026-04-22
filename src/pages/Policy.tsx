import { useState, useEffect } from 'react'
import { ArrowRight, Megaphone, FileText, ExternalLink, Plus, MessageSquare } from 'lucide-react'
import { Footer } from '@/components/Footer'

const officialContent = {
  activities: [
    {
      id: 1,
      title: '云上OPC·创享会第二期圆满举办',
      summary: '2026年4月15日，第二期创享会以《AI公司老板模拟器》为主题，吸引上千人在线参与。围绕AI工作流搭建、OPC自媒体创业案例拆解、一人公司法务合规等核心话题展开分享。',
      source: 'GBAnexus',
      date: '2026-04-15',
      link: 'https://mp.weixin.qq.com/s/taRUBCHaR77kzLaocG2zZQ'
    },
    {
      id: 2,
      title: '云上OPC·创享会首期圆满举办',
      summary: '2026年4月3日，首期创享会以"门槛消失：为什么现在人人都在开AI公司？"为主题，五位实战嘉宾围绕AI工具赋能、大模型工程化落地、AI安全合规等话题深度分享。',
      source: 'GBAnexus',
      date: '2026-04-03',
      link: 'https://mp.weixin.qq.com/s/9-sEWL85GmrXipj3bUQjJw'
    }
  ],
  articles: [
    {
      id: 3,
      title: 'MemPalace爆火的真相：AI创业的下半场，拼的不是智商，是记性',
      summary: '好莱坞影星米拉·乔沃维奇与工程师联合开源的AI记忆系统MemPalace，在长期记忆评测中斩获全球首个满分500题全对，运行成本仅年均0.7美元，累计收获27.5k Star。',
      source: 'GBAnexus',
      date: '2026-04-09',
      link: 'https://mp.weixin.qq.com/s/qgGFTyPj_-nQBAFU1S2rcw'
    },
    {
      id: 4,
      title: 'OPC背后的新趋势：三个案例看"AI+个体创业"如何重塑商业形态',
      summary: '从跨境电商4个月突破500万销售额，到招聘平台月均服务50万人次，再到AI动画创作工具全球注册用户超6000个，三个真实案例展示AI如何赋能个体创业者。',
      source: 'GBAnexus',
      date: '2026-03-27',
      link: 'https://mp.weixin.qq.com/s/ujl-toKV2l6NyorpHuvHeQ'
    },
    {
      id: 5,
      title: '当AI开始"收税"：词元，这个新单位正在悄悄掏空你的钱包？',
      summary: '2026年3月，国家数据局正式公布Token的中文官方译名为"词元"。我国日均词元调用量已突破140万亿，一个全新的"词元经济"正在加速形成，AI服务正从"买软件"转向"缴电费"模式。',
      source: 'GBAnexus',
      date: '2026-03-26',
      link: 'https://mp.weixin.qq.com/s/M8iFhvv7BlQAO593jlZHmQ'
    }
  ]
}

const policyNews = [
  // 广东省政策
  {
    id: 1,
    type: 'opc',
    title: '《广东省支持人工智能OPC创新发展行动方案（2026-2028年）》',
    summary: '算力券降低算力成本；免费模型接口和安全检测服务；建设OPC生态社区实现"拎脑入驻"；跨境场景支持开拓葡语国家、东南亚市场。到2028年建成百个OPC社区、培育千家标杆企业。',
    source: '广东省发展改革委',
    date: '2026-03-12',
    link: 'https://amr.sz.gov.cn/xxgk/qt/ztlm/opcfwzq/zcwj/content/post_12694570.html'
  },
  // 深圳市政策
  {
    id: 2,
    type: 'opc',
    title: '《深圳市打造人工智能OPC创业生态引领地行动计划（2026-2027年）》',
    summary: '落户补贴：新引进博士/硕士/本科最高10万元入户补贴。创业空间：入驻OPC社区享低成本工位，其他空间最高50平低成本创业空间。资金资助：智能券抵扣算力/模型成本，训力券最高1000万、模型券最高200万、语料券最高200万。政务场景应用最高500万资助。',
    source: '深圳市工业和信息化局',
    date: '2026-01-14',
    link: 'https://www.sz.gov.cn/cn/xxgk/zfxxgj/tzgg/content/post_12602687.html'
  },
  {
    id: 3,
    type: 'general',
    title: '《深圳市打造人工智能先锋城市若干措施》',
    summary: '训力券：大模型训练按合同金额50%资助（初创企业60%），最高1000万。语料券：购买语料按30%资助，最高200万。模型券：模型服务按30%资助，最高200万。行业应用最高1000万资助。开放50个政务场景。零租孵化器6个月至3年免租。',
    source: '深圳市政府',
    date: '2025-12-20',
    link: 'https://www.sz.gov.cn/zfgb/zcjd/content/post_11932960.html'
  },
  // 广州市政策
  {
    id: 4,
    type: 'general',
    title: '《广州市促进人工智能产业高质量发展实施方案》',
    summary: '到2027年引育万家AI企业，智能体应用普及率超70%。建设10个共性技术服务平台、100个垂直大模型、1000个场景示范，打造万亿级AI生态圈。重点支持AI+医疗/教育/交通/金融等应用场景落地。',
    source: '广州市政府办公厅',
    date: '2026-03-18',
    link: 'https://www.gz.gov.cn/zwgk/fggw/sfbgtwj/content/post_10743475.html'
  },
  {
    id: 5,
    type: 'opc',
    title: '《广州市海珠区OPC创新发展十条》',
    summary: '智能体专区：每年最高12个月工位费全免。要素保障：算力补贴50%（年度上限20万）、数据补贴30%（年度上限10万）、发放流量券。场景落地：引领性项目补贴30%，最高500万。算法备案：生成式AI备案最高100万、深度合成备案最高20万。',
    source: '广州市海珠区',
    date: '2026-03-19',
    link: 'https://zsj.gz.gov.cn/zwgk/zfxxgkml/zfxxgkzn/gzdt/content/post_10745642.html'
  },
  {
    id: 6,
    type: 'general',
    title: '《广州市白云区支持人工智能和数据产业高质量发展若干措施》',
    summary: '算力补贴：年度算力/Token费用超100万的企业补贴10%，OPC等小微初创企业补贴15%（年度总规模1000万）。数据奖励：标注业务按收入4%奖励，最高200万；高质量数据集最高200万。模型奖励：大模型首次备案最高100万。',
    source: '广州市白云区政府',
    date: '2026-03-31',
    link: 'https://www.gz.gov.cn/gzzcwjk/gzdata/content/post_10751591.html'
  },
  // 其他城市政策
  {
    id: 7,
    type: 'general',
    title: '《东莞市加快推动人工智能赋能制造业高质量发展若干措施》',
    summary: '算力券：按实际服务额50%资助，每年最高100万。模型券：最高100万资助。边端智算节点部署补贴30%，最高100万。先进制造场景投入3亿元，打造100个示范场景。设立50亿元子基金群。',
    source: '东莞市人民政府',
    date: '2025-02-05',
    link: 'https://www.dg.gov.cn/zwgk/zfxxgkml/szfbgs/zcwj/qtwj/content/post_4336091.html'
  },
  {
    id: 8,
    type: 'general',
    title: '《香港数码港人工智能资助计划》',
    summary: '特区政府拨款30亿港元，为期三年，资助本地院校/研发机构/企业善用超算中心算力。汇聚超400间AI初创企业。设立ABC服务中心（AI+大数据+网络安全）提供一站式服务。推出生成式AI沙盒，风险可控测试环境。',
    source: '香港数码港',
    date: '2024-12-01',
    link: 'https://www.cyberport.hk/zh-hk/digital_tech/ai/'
  }
]

export function PolicyPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 50%, #0F1729 100%)',
      paddingBottom: '4rem'
    }}>
      {/* Hero Banner */}
      <div style={{
        position: 'relative',
        background: 'url(/Pic4Policy/2.png) center/cover no-repeat',
        borderBottom: '1px solid rgba(108, 99, 255, 0.2)',
        padding: '5rem 2rem',
        textAlign: 'center',
        overflow: 'hidden',
        minHeight: '400px'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.65) 0%, rgba(138, 132, 255, 0.55) 100%)',
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            color: '#FFFFFF',
            marginBottom: '1rem',
            letterSpacing: '2px',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
          }}>
            新闻资讯
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#E2E8F0',
            marginBottom: '2.5rem',
            fontWeight: 300,
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
          }}>
            紧跟 AI OPC 前沿创业资讯，抓住时代机遇，把握最新政策动向
          </p>
          
          {/* 介绍卡片 */}
          <div style={{ 
            maxWidth: '750px', 
            margin: '0 auto',
            padding: '2rem 2.5rem',
            background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
            borderRadius: '16px',
            border: '1px solid rgba(108, 99, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <p style={{ 
              fontSize: '1.05rem', 
              color: '#CBD5E1',
              lineHeight: 1.9,
              margin: 0,
              letterSpacing: '0.5px'
            }}>
              整合官方动态与政策红利，汇聚“云上OPC创享会”与创业实战经验，以有温度、有深度的解读，为您呈现最新行业资讯与政策分析，助您看清趋势，抢占先机。
            </p>
          </div>
        </div>
      </div>

      {/* 快速入口 */}
      <section style={{ 
        padding: '2rem 0',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <a 
            href="#policy"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.15), rgba(138, 132, 255, 0.15))',
              border: '1px solid rgba(108, 99, 255, 0.3)',
              borderRadius: '12px',
              color: '#A5B4FC',
              fontSize: '0.95rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(108, 99, 255, 0.25), rgba(138, 132, 255, 0.25))';
              e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(108, 99, 255, 0.15), rgba(138, 132, 255, 0.15))';
              e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FileText style={{ width: '18px', height: '18px' }} />
            政策速递
          </a>
          
          <a 
            href="#articles"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(16, 185, 129, 0.15))',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              borderRadius: '12px',
              color: '#6EE7B7',
              fontSize: '0.95rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(52, 211, 153, 0.25), rgba(16, 185, 129, 0.25))';
              e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(16, 185, 129, 0.15))';
              e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <MessageSquare style={{ width: '18px', height: '18px' }} />
            科普好文
          </a>
          
          <a 
            href="#activities"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.15))',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              borderRadius: '12px',
              color: '#FBBF24',
              fontSize: '0.95rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(251, 191, 36, 0.25), rgba(245, 158, 11, 0.25))';
              e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.15))';
              e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Megaphone style={{ width: '18px', height: '18px' }} />
            活动动态
          </a>
        </div>
      </section>

      {/* 新闻资讯内容区 */}
      <section style={{ 
        padding: '3rem 2rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
          {/* 政策速递 */}
          <div id="policy" style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 600, 
              color: '#F1F5F9',
              marginBottom: '1.5rem',
              paddingLeft: '1rem',
              borderLeft: '4px solid #A5B4FC'
            }}>
              政策速递
            </h3>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '4rem'
          }}>
            {policyNews.map((item, index) => (
              <div
                key={item.id}
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(71, 85, 105, 0.5)',
                  borderRadius: '16px',
                  padding: '1.5rem 2rem',
                  transition: 'all 0.3s ease',
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.05}s both` : 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '0.75rem' 
                }}>
                  <span style={{ color: '#64748B', fontSize: '0.8rem' }}>{item.date}</span>
                  <span style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    background: item.type === 'opc' ? 'rgba(251, 191, 36, 0.15)' : 'rgba(96, 165, 250, 0.15)',
                    border: item.type === 'opc' ? '1px solid rgba(251, 191, 36, 0.3)' : '1px solid rgba(96, 165, 250, 0.3)',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: item.type === 'opc' ? '#FBBF24' : '#60A5FA'
                  }}>
                    {item.type === 'opc' ? 'OPC 专项' : '普惠政策'}
                  </span>
                </div>
                
                <h3 style={{ 
                  fontSize: '1.05rem', 
                  fontWeight: 600, 
                  color: '#F1F5F9',
                  marginBottom: '0.5rem',
                  lineHeight: 1.5
                }}>
                  {item.title}
                </h3>
                
                <p style={{ 
                  color: '#94A3B8', 
                  fontSize: '0.85rem', 
                  lineHeight: 1.7,
                  marginBottom: '1rem'
                }}>
                  {item.summary}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(71, 85, 105, 0.3)'
                }}>
                  <span style={{ color: '#64748B', fontSize: '0.8rem' }}>{item.source}</span>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#A5B4FC',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      textDecoration: 'none'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    查看原文 <ExternalLink style={{ width: '14px', height: '14px' }} />
                  </a>
                </div>
              </div>
            ))}
            
            {/* 政策持续更新卡片 */}
            <div
              style={{
                background: 'rgba(30, 41, 59, 0.4)',
                border: '2px dashed rgba(108, 99, 255, 0.3)',
                borderRadius: '16px',
                padding: '1.5rem 2rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'default',
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.6)'
                e.currentTarget.style.background = 'rgba(30, 41, 59, 0.6)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.3)'
                e.currentTarget.style.background = 'rgba(30, 41, 59, 0.4)'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(108, 99, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Plus style={{ width: '24px', height: '24px', color: '#A5B4FC' }} />
              </div>
              
              <h3 style={{ 
                fontSize: '1.05rem', 
                fontWeight: 600, 
                color: '#F1F5F9',
                marginBottom: '0.5rem'
              }}>
                政策持续更新
              </h3>
              
              <p style={{ 
                color: '#94A3B8', 
                fontSize: '0.85rem', 
                lineHeight: 1.7,
                marginBottom: '0.75rem'
              }}>
                关注我们，第一时间获取<br />粤港澳大湾区最新 AI 政策动态
              </p>
              
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                background: 'rgba(108, 99, 255, 0.1)',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                borderRadius: '20px',
                color: '#A5B4FC',
                fontSize: '0.8rem',
                fontWeight: 500
              }}>
                <Megaphone style={{ width: '14px', height: '14px' }} />
                即将推出
              </div>
            </div>
          </div>
      </section>

      {/* 官方公众号 */}
      <section style={{ 
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* 科普好文 */}
        <div id="articles" style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 600, 
            color: '#F1F5F9',
            marginBottom: '1.5rem',
            paddingLeft: '1rem',
            borderLeft: '4px solid #34D399'
          }}>
            科普好文
          </h3>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {officialContent.articles.map((item, index) => (
              <div
                key={item.id}
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(71, 85, 105, 0.5)',
                  borderRadius: '16px',
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.5)'
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.3)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 600, 
                  color: '#F1F5F9',
                  marginBottom: '0.75rem',
                  lineHeight: 1.5
                }}>
                  {item.title}
                </h3>
                
                <p style={{ 
                  color: '#94A3B8', 
                  fontSize: '0.9rem', 
                  lineHeight: 1.7,
                  marginBottom: '1rem'
                }}>
                  {item.summary}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(71, 85, 105, 0.3)'
                }}>
                  <span style={{ color: '#64748B', fontSize: '0.8rem' }}>{item.source} · {item.date}</span>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#A5B4FC',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      textDecoration: 'none'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    阅读原文 <ExternalLink style={{ width: '14px', height: '14px' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 活动动态 */}
      <section style={{ 
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div id="activities">
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 600, 
            color: '#F1F5F9',
            marginBottom: '1.5rem',
            paddingLeft: '1rem',
            borderLeft: '4px solid #FBBF24'
          }}>
            活动动态
          </h3>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {officialContent.activities.map((item, index) => (
              <div
                key={item.id}
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(71, 85, 105, 0.5)',
                  borderRadius: '16px',
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.5)'
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.3)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 600, 
                  color: '#F1F5F9',
                  marginBottom: '0.75rem',
                  lineHeight: 1.5
                }}>
                  {item.title}
                </h3>
                
                <p style={{ 
                  color: '#94A3B8', 
                  fontSize: '0.9rem', 
                  lineHeight: 1.7,
                  marginBottom: '1rem'
                }}>
                  {item.summary}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(71, 85, 105, 0.3)'
                }}>
                  <span style={{ color: '#64748B', fontSize: '0.8rem' }}>{item.source} · {item.date}</span>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#A5B4FC',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      textDecoration: 'none'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    阅读原文 <ExternalLink style={{ width: '14px', height: '14px' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          
          h2 {
            font-size: 1.75rem !important;
          }
        }
      `}</style>
    </div>
  )
}
