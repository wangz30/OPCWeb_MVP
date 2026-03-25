import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Footer } from '@/components/Footer'
import { 
  Search, 
  Bot,
  Lightbulb,
  Building,
  Shield,
  Users,
  ArrowRight,
  Clock,
  Star,
  ExternalLink,
  CheckCircle,
  MessageSquare,
  UserPlus,
  FileText,
  Send,
  ChevronRight,
  TrendingUp,
  Target,
  Zap,
  Plus
} from 'lucide-react'

export function ResourcesPage() {
  // 企业AI需求对接区数据
  const aiDemands = [
    {
      id: 1,
      company: '深圳智云科技',
      title: '智能客服系统需求',
      description: '需要基于大模型的智能客服系统，支持多轮对话和意图识别',
      budget: '50-100万',
      deadline: '2024-02-28',
      status: '对接中',
      tags: ['智能客服', '大模型']
    },
    {
      id: 2,
      company: '广州未来医疗',
      title: '医疗影像AI分析系统',
      description: '开发基于深度学习的医学影像辅助诊断系统',
      budget: '100-200万',
      deadline: '2024-03-15',
      status: '待对接',
      tags: ['医疗AI', '图像识别']
    },
    {
      id: 3,
      company: '东莞制造企业',
      title: '生产线缺陷检测系统',
      description: '基于机器视觉的工业产品缺陷自动检测系统',
      budget: '30-80万',
      deadline: '2024-02-15',
      status: '对接中',
      tags: ['工业视觉', '缺陷检测']
    },
    {
      id: 4,
      company: '珠海文创公司',
      title: 'AI内容生成平台',
      description: '需要营销文案、产品描述的AI生成工具',
      budget: '20-50万',
      deadline: '2024-03-01',
      status: '待对接',
      tags: ['AIGC', '内容生成']
    },
    {
      id: 5,
      company: '佛山智能家居',
      title: '智能家居控制系统',
      description: '基于物联网的智能家居集成控制解决方案',
      budget: '40-60万',
      deadline: '2024-03-10',
      status: '对接中',
      tags: ['物联网', '智能家居']
    },
    {
      id: 6,
      company: '惠州物流公司',
      title: '智能仓储管理系统',
      description: 'AI驱动的仓储物流智能调度与管理系统',
      budget: '60-120万',
      deadline: '2024-03-20',
      status: '待对接',
      tags: ['物流', '仓储']
    },
    {
      id: 7,
      company: '深圳金融科技',
      title: '智能风控系统',
      description: '基于机器学习的金融风险评估与预警系统',
      budget: '80-150万',
      deadline: '2024-02-25',
      status: '对接中',
      tags: ['金融科技', '风控']
    },
    {
      id: 8,
      company: '广州教育科技',
      title: 'AI个性化学习系统',
      description: '基于大数据的学习路径规划和智能推荐系统',
      budget: '50-80万',
      deadline: '2024-03-05',
      status: '待对接',
      tags: ['教育', '个性化']
    },
    {
      id: 9,
      company: '东莞电子科技',
      title: 'PCB缺陷检测系统',
      description: '基于深度学习的电路板缺陷自动识别系统',
      budget: '35-70万',
      deadline: '2024-02-20',
      status: '对接中',
      tags: ['工业', '检测']
    },
    {
      id: 10,
      company: '珠海 biotech',
      title: 'AI药物筛选平台',
      description: '利用AI技术加速新药研发中的化合物筛选',
      budget: '200-500万',
      deadline: '2024-04-01',
      status: '待对接',
      tags: ['生物医药', 'AI']
    },
    {
      id: 11,
      company: '深圳零售企业',
      title: '智能推荐系统',
      description: '电商平台的个性化商品推荐与用户画像系统',
      budget: '40-90万',
      deadline: '2024-03-15',
      status: '对接中',
      tags: ['推荐系统', '电商']
    },
    {
      id: 12,
      company: '广州餐饮连锁',
      title: '智能点餐系统',
      description: '基于语音和图像识别的智能点餐解决方案',
      budget: '25-50万',
      deadline: '2024-03-08',
      status: '待对接',
      tags: ['餐饮', '智能']
    },
  ]

  // "揭榜挂帅"项目数据
  const heroProjects = [
    {
      id: 1,
      title: '基于AI的新材料发现平台',
      organization: '香港科技大学深圳研究院',
      budget: '500万',
      deadline: '2024-02-28',
      description: '利用机器学习算法加速新材料发现过程',
      requirements: ['机器学习', '材料科学']
    },
    {
      id: 2,
      title: '智慧城市交通大脑',
      organization: '深圳市交通局',
      budget: '800万',
      deadline: '2024-03-20',
      description: '构建城市级交通态势感知和智能调度系统',
      requirements: ['大数据', '物联网']
    },
    {
      id: 3,
      title: '工业互联网安全防护平台',
      organization: '广东省工业和信息化厅',
      budget: '300万',
      deadline: '2024-03-10',
      description: '针对工业互联网的安全监测、预警和防护系统',
      requirements: ['网络安全', '威胁检测']
    },
    {
      id: 4,
      title: 'AI辅助精准医疗',
      organization: '深圳市卫健委',
      budget: '600万',
      deadline: '2024-03-25',
      description: '基于AI的个性化诊疗方案推荐系统',
      requirements: ['AI医疗', '大数据']
    },
    {
      id: 5,
      title: '智能制造数字化车间',
      organization: '佛山市工信局',
      budget: '450万',
      deadline: '2024-04-15',
      description: '制造业数字化转型智能车间解决方案',
      requirements: ['智能制造', '数字化']
    },
  ]

  // 创客空间入驻数据
  const spaces = [
    {
      id: 1,
      name: '深圳前海深港青年梦工场',
      location: '深圳市前海深港合作区',
      features: ['港资企业优惠', '共享办公', '创业辅导'],
      price: '500元/工位/月',
      vacancy: 23
    },
    {
      id: 2,
      name: '广州科学城创新基地',
      location: '广州市黄埔区科学城',
      features: ['高新技术企业聚集', '投融资对接', '人才公寓'],
      price: '800元/工位/月',
      vacancy: 15
    },
    {
      id: 3,
      name: '珠海横琴创业谷',
      location: '珠海市横琴新区',
      features: ['税收优惠政策', '跨境电商支持', '国际资源对接'],
      price: '600元/工位/月',
      vacancy: 8
    },
  ]

  // 法律咨询数据
  const legalServices = [
    { id: 1, title: '公司注册与变更', icon: Building, desc: '工商注册、股权变更等' },
    { id: 2, title: '知识产权保护', icon: Lightbulb, desc: '专利、商标、著作权' },
    { id: 3, title: '合同纠纷处理', icon: FileText, desc: '合同起草、审核、纠纷' },
    { id: 4, title: '劳动法务咨询', icon: Users, desc: '员工合同、劳动争议' },
    { id: 5, title: '投融资法律服务', icon: TrendingUp, desc: 'VC/PE融资、并购' },
    { id: 6, title: '合规审查', icon: Shield, desc: '数据合规、行业合规' },
  ]

  // OPC创业展示区数据
  const showCases = [
    {
      id: 1,
      name: 'AI智能写作助手',
      founder: '张明（创始人）',
      description: '基于GPT技术的内容创作平台，服务于电商、自媒体从业者',
      tags: ['AIGC', '内容创作', 'SaaS'],
      views: 12580,
      likes: 892,
      logo: 'https://via.placeholder.com/120x60/6C63FF/FFFFFF?text=AI写作'
    },
    {
      id: 2,
      name: '智能物流调度系统',
      founder: '李华（创始人）',
      description: '利用AI算法优化物流配送路线，降低企业运输成本30%',
      tags: ['物流', 'AI优化', 'B2B'],
      views: 9830,
      likes: 654,
      logo: 'https://via.placeholder.com/120x60/10B981/FFFFFF?text=物流系统'
    },
    {
      id: 3,
      name: '智慧教育平台',
      founder: '王芳（创始人）',
      description: '个性化学习路径规划，AI辅助教学，专注K12教育领域',
      tags: ['教育', 'AI辅导', '在线教育'],
      views: 15620,
      likes: 1120,
      logo: 'https://via.placeholder.com/120x60/F59E0B/FFFFFF?text=智慧教育'
    },
  ]

  return (
    <div style={{ background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 100%)', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F1729 100%)', padding: '60px 0 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ color: '#F1F5F9', fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>
            全维度能力与资源升级
          </h1>
          <p style={{ color: '#94A3B8', textAlign: 'center', marginBottom: '2rem' }}>
            集企业需求对接、揭榜挂帅、创业空间、法律服务于一体
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* 企业AI需求对接区 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>企业AI需求对接区</h2>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>发布AI需求，匹配优质技术服务商</p>
            </div>
            <Button style={{ background: 'linear-gradient(135deg, #6C63FF, #8A84FF)', border: 'none' }}>
              <Plus style={{ width: '16px', height: '16px', marginRight: '6px' }} />
              发布需求
            </Button>
          </div>

          {/* 搜索框 */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748B', width: '20px', height: '20px' }} />
              <Input
                placeholder="搜索AI需求..."
                style={{ paddingLeft: '48px', background: '#1E293B', border: '1px solid #475569', color: '#F1F5F9' }}
              />
            </div>
            <Button variant="outline" style={{ borderColor: '#475569', color: '#94A3B8' }}>筛选</Button>
          </div>

          {/* 4*2网格布局 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
            {aiDemands.slice(0, 8).map((demand) => (
              <div key={demand.id} style={{
                background: '#1E293B',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '16px',
                transition: 'all 0.2s'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <Badge style={{ background: '#6C63FF20', color: '#A5B4FC', fontSize: '0.65rem' }}>
                    {demand.company.slice(0, 6)}
                  </Badge>
                  <Badge style={{ 
                    background: demand.status === '对接中' ? '#10B98120' : '#F59E0B20', 
                    color: demand.status === '对接中' ? '#34D399' : '#FBBF24',
                    fontSize: '0.6rem',
                    padding: '2px 6px'
                  }}>
                    {demand.status}
                  </Badge>
                </div>
                <h3 style={{ color: '#F1F5F9', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', lineHeight: 1.3 }}>{demand.title}</h3>
                <p style={{ color: '#64748B', fontSize: '0.7rem', marginBottom: '8px', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2 }}>{demand.description}</p>
                <div style={{ color: '#34D399', fontSize: '0.75rem', fontWeight: 600, marginBottom: '4px' }}>{demand.budget}</div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  {demand.tags.map((tag) => (
                    <span key={tag} style={{ background: '#334155', color: '#94A3B8', padding: '2px 8px', borderRadius: '10px', fontSize: '0.6rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Button size="sm" style={{ width: '100%', background: 'linear-gradient(135deg, #6C63FF, #8A84FF)', border: 'none', fontSize: '0.7rem', padding: '6px 8px' }}>
                  对接
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* "揭榜挂帅"项目对接区 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>"揭榜挂帅"项目对接区</h2>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>对接政府及企业重大技术需求，攻克"卡脖子"难题</p>
            </div>
          </div>

          {/* 5*1横向滚动布局 */}
          <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '12px' }}>
            {heroProjects.map((project) => (
              <div key={project.id} style={{
                background: '#1E293B',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '16px',
                minWidth: '280px',
                flexShrink: 0,
                transition: 'all 0.2s'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <Badge style={{ background: '#F59E0B20', color: '#FBBF24', fontSize: '0.65rem' }}>火热征集</Badge>
                  <span style={{ color: '#34D399', fontSize: '0.8rem', fontWeight: 600 }}>{project.budget}</span>
                </div>
                <h3 style={{ color: '#F1F5F9', fontSize: '0.95rem', fontWeight: 600, marginBottom: '6px', lineHeight: 1.3 }}>{project.title}</h3>
                <p style={{ color: '#64748B', fontSize: '0.75rem', marginBottom: '8px', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{project.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8', fontSize: '0.7rem', marginBottom: '8px' }}>
                  <Building style={{ width: '12px', height: '12px' }} /> {project.organization}
                </div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  {project.requirements.map((req) => (
                    <span key={req} style={{ background: '#334155', color: '#94A3B8', padding: '2px 8px', borderRadius: '10px', fontSize: '0.6rem' }}>
                      {req}
                    </span>
                  ))}
                </div>
                <Button size="sm" style={{ width: '100%', background: 'linear-gradient(135deg, #F59E0B, #FBBF24)', border: 'none', color: '#1E293B', fontSize: '0.75rem' }}>
                  揭榜挑战
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* 创客空间入驻 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>创客空间入驻</h2>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>优质创业空间，一站式入驻服务</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
            {spaces.map((space) => (
              <div key={space.id} style={{
                background: '#1E293B',
                border: '1px solid #334155',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.2s'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>{space.name}</h3>
                    <div style={{ color: '#94A3B8', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Building style={{ width: '14px', height: '14px' }} /> {space.location}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#34D399', fontSize: '1.1rem', fontWeight: 700 }}>{space.price}</div>
                    <div style={{ color: '#64748B', fontSize: '0.8rem' }}>剩余{space.vacancy}工位</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  {space.features.map((feature) => (
                    <span key={feature} style={{ background: '#6C63FF20', color: '#A5B4FC', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>
                      {feature}
                    </span>
                  ))}
                </div>
                <Button style={{ width: '100%', background: 'linear-gradient(135deg, #6C63FF, #8A84FF)', border: 'none' }}>
                  申请入驻 <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '6px' }} />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* 法律咨询 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>法律咨询服务</h2>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>专业律师团队，为创业保驾护航</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
            {legalServices.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} style={{
                  background: '#1E293B',
                  border: '1px solid #334155',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #6C63FF20, #10B98120)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <Icon style={{ width: '32px', height: '32px', color: '#A5B4FC' }} />
                  </div>
                  <h3 style={{ color: '#F1F5F9', fontSize: '1rem', fontWeight: 600, marginBottom: '6px' }}>{service.title}</h3>
                  <p style={{ color: '#64748B', fontSize: '0.85rem' }}>{service.desc}</p>
                </div>
              )
            })}
          </div>

          {/* 咨询表单 */}
          <div style={{
            background: '#1E293B',
            border: '1px solid #334155',
            borderRadius: '16px',
            padding: '32px'
          }}>
            <h3 style={{ color: '#F1F5F9', fontSize: '1.2rem', fontWeight: 600, marginBottom: '20px', textAlign: 'center' }}>快速咨询</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <Input placeholder="您的姓名" style={{ background: '#0F1729', border: '1px solid #475569', color: '#F1F5F9' }} />
              <Input placeholder="联系电话" style={{ background: '#0F1729', border: '1px solid #475569', color: '#F1F5F9' }} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <select style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #475569',
                background: '#0F1729',
                color: '#94A3B8',
                fontSize: '1rem'
              }}>
                <option>选择咨询类型</option>
                {legalServices.map((s) => (<option key={s.id}>{s.title}</option>))}
              </select>
            </div>
            <textarea 
              placeholder="请描述您的法律问题..."
              rows={4}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #475569',
                background: '#0F1729',
                color: '#F1F5F9',
                fontSize: '1rem',
                marginBottom: '16px',
                resize: 'none'
              }}
            />
            <Button style={{ width: '100%', background: 'linear-gradient(135deg, #6C63FF, #8A84FF)', border: 'none' }}>
              <Send style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              提交咨询
            </Button>
          </div>
        </div>

        {/* OPC创业展示区 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>OPC创业展示区</h2>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>展示创业项目，对接投资人脉</p>
            </div>
            <Button style={{ background: 'linear-gradient(135deg, #6C63FF, #8A84FF)', border: 'none' }}>
              <Plus style={{ width: '16px', height: '16px', marginRight: '6px' }} />
              展示项目
            </Button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
            {showCases.map((project) => (
              <div key={project.id} style={{
                background: '#1E293B',
                border: '1px solid #334155',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                {/* Logo图片位 */}
                <div style={{
                  width: '100%',
                  height: '100px',
                  background: 'linear-gradient(135deg, #6C63FF20, #10B98120)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #334155'
                }}>
                  <img 
                    src={project.logo} 
                    alt={project.name}
                    style={{ maxWidth: '120px', maxHeight: '60px', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', fontWeight: 600 }}>{project.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F59E0B' }}>
                    <Star style={{ width: '14px', height: '14px', fill: '#F59E0B' }} />
                  </div>
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Users style={{ width: '14px', height: '14px' }} /> {project.founder}
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.5 }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ background: '#6C63FF20', color: '#A5B4FC', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #334155' }}>
                  <div style={{ display: 'flex', gap: '16px', color: '#64748B', fontSize: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Eye style={{ width: '14px', height: '14px' }} /> {project.views.toLocaleString()}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <ThumbsUp style={{ width: '14px', height: '14px' }} /> {project.likes}
                    </span>
                  </div>
                  <Button size="sm" variant="outline" style={{ borderColor: '#6C63FF', color: '#A5B4FC' }}>
                    查看详情
                  </Button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

function Eye({ style, className }: { style?: React.CSSProperties, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function ThumbsUp({ style, className }: { style?: React.CSSProperties, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}
