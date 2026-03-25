import { useState } from 'react'
import { 
  LayoutDashboard,
  Cpu,
  Cloud,
  Database,
  Users,
  TrendingUp,
  Settings,
  Bell,
  Search,
  Terminal,
  CreditCard,
  Calendar,
  Video,
  ChevronRight,
  LogOut,
  User,
  MessageSquare,
  FileText,
  Star,
  Gift,
  Edit,
  Trash2,
  Eye,
  Clock,
  Check,
  X,
  Upload,
  BookOpen,
  Briefcase,
  CalendarDays,
  Mail,
  Phone,
  Award,
  Sparkles,
  Coins,
  History,
  GiftIcon
} from 'lucide-react'

export function DashboardPage() {
  const [activeNav, setActiveNav] = useState('profile')

  // 用户信息
  const [userInfo, setUserInfo] = useState({
    name: '张创业',
    email: 'zhangchuangye@example.com',
    phone: '138****8888',
    avatar: '',
    bio: 'AI创业者，专注于智能简历项目开发',
    techAdvantage: '深度学习、Python全栈开发、大模型微调',
    projectName: 'AI智能简历',
    projectStage: '产品落地',
    projectDesc: '利用AI技术帮助用户生成个性化简历，提升求职成功率',
  })

  // 消息列表
  const [messages, setMessages] = useState([
    { id: 1, type: 'system', title: '系统通知', content: '您的账号已通过实名认证', time: '2025-03-16 10:30', read: false, avatar: '系' },
    { id: 2, type: 'activity', title: '活动提醒', content: 'AI创业沙龙活动将于3月20日举行', time: '2025-03-15 14:20', read: false, avatar: '活' },
    { id: 3, type: 'match', title: '对接消息', content: '导师李技术已接受您的预约请求', time: '2025-03-14 09:15', read: true, avatar: '对' },
    { id: 4, type: 'comment', title: '评论回复', content: '用户"产品小王"回复了您的帖子', time: '2025-03-13 16:45', read: true, avatar: '评' },
    { id: 5, type: 'qa', title: '答疑通知', content: '您的问题"如何申请创业补贴"已有新回答', time: '2025-03-12 11:30', read: true, avatar: '答' },
  ])

  // 我的内容
  const [myContents, setMyContents] = useState([
    { id: 1, type: 'share', title: '分享我的AI创业历程', content: '从0到1构建AI智能简历产品的心路历程...', views: 128, comments: 15, likes: 32, status: 'published', date: '2025-03-10' },
    { id: 2, type: 'qa', title: '提问：如何快速获得种子用户？', content: '创业初期如何获取第一批种子用户，有哪些有效渠道？', views: 256, comments: 28, likes: 18, status: 'published', date: '2025-03-08' },
    { id: 3, type: 'resource', title: '分享：AI开发工具合集', content: '整理了一份AI开发者必备的工具清单...', views: 89, comments: 7, likes: 45, status: 'published', date: '2025-03-05' },
    { id: 4, type: 'activity', title: '参加：AI创新创业大赛', content: '已报名参加第三届AI创新创业大赛', views: 0, comments: 0, likes: 0, status: 'published', date: '2025-03-01' },
  ])

  // 我的报名/对接
  const [myApplications, setMyApplications] = useState([
    { id: 1, type: 'activity', title: 'AI创业沙龙', status: '已通过', date: '2025-03-20', location: '线上', organizer: 'OPC社区' },
    { id: 2, type: 'project', title: 'AI智能简历项目入驻', status: '审核中', date: '2025-03-15', location: 'OPC孵化器', organizer: 'OPC运营团队' },
    { id: 3, type: 'mentor', title: '导师对接 - 李技术', status: '已确认', date: '2025-03-18', location: '线上会议', organizer: '李技术导师' },
  ])

  // 积分记录
  const [points, setPoints] = useState({
    balance: 2580,
    records: [
      { id: 1, action: '签到奖励', points: 10, date: '2025-03-16', type: 'gain' },
      { id: 2, action: '发布优质内容', points: 50, date: '2025-03-15', type: 'gain' },
      { id: 3, action: '兑换云存储包', points: -500, date: '2025-03-14', type: 'spend' },
      { id: 4, action: '回答用户问题', points: 30, date: '2025-03-13', type: 'gain' },
      { id: 5, action: '邀请新用户', points: 100, date: '2025-03-12', type: 'gain' },
    ]
  })

  // 积分兑换商品
  const [exchangeItems] = useState([
    { id: 1, name: '云存储100GB', points: 500, icon: Database },
    { id: 2, name: 'API调用次数100次', points: 300, icon: Cpu },
    { id: 3, name: '导师咨询30分钟', points: 800, icon: Users },
    { id: 4, name: '创业周边礼品', points: 200, icon: GiftIcon },
  ])

  const [editModal, setEditModal] = useState<{ show: boolean; field: string }>({ show: false, field: '' })
  const [editValue, setEditValue] = useState('')
  const [activeTab, setActiveTab] = useState('all')

  const navItems = [
    { id: 'profile', label: '个人信息', icon: User },
    { id: 'content', label: '我的内容', icon: FileText },
    { id: 'applications', label: '我的对接/报名', icon: Briefcase },
    { id: 'messages', label: '消息中心', icon: MessageSquare },
    { id: 'points', label: '积分管理', icon: Coins },
    { id: 'resources', label: '算力资源', icon: Cpu },
    { id: 'cloud', label: '云服务', icon: Cloud },
    { id: 'subsidy', label: '补贴申请', icon: CreditCard },
  ]

  const messageTypeColors: Record<string, string> = {
    system: '#667eea',
    activity: '#f59e0b',
    match: '#10b981',
    comment: '#8b5cf6',
    qa: '#3b82f6',
  }

  const handleEdit = (field: string, value: string) => {
    setEditModal({ show: true, field })
    setEditValue(value)
  }

  const handleSave = () => {
    setUserInfo({ ...userInfo, [editModal.field]: editValue })
    setEditModal({ show: false, field: '' })
  }

  const markAsRead = (id: number) => {
    setMessages(messages.map(m => m.id === id ? { ...m, read: true } : m))
  }

  const deleteMessage = (id: number) => {
    setMessages(messages.filter(m => m.id !== id))
  }

  const unreadCount = messages.filter(m => !m.read).length

  const renderContent = () => {
    switch (activeNav) {
      case 'profile':
        return <ProfileSection userInfo={userInfo} onEdit={handleEdit} />
      case 'content':
        return <ContentSection contents={myContents} setContents={setMyContents} />
      case 'applications':
        return <ApplicationsSection applications={myApplications} />
      case 'messages':
        return <MessagesSection 
          messages={messages} 
          onMarkAsRead={markAsRead} 
          onDelete={deleteMessage}
          unreadCount={unreadCount}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      case 'points':
        return <PointsSection points={points} exchangeItems={exchangeItems} />
      default:
        return <ResourcesSection />
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 100%)' }}>
      {/* 侧边栏 */}
      <aside style={{
        width: '250px',
        background: '#1a1f36',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '3rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '1.2rem',
            color: 'white',
          }}>
            OPC
          </div>
          <span style={{ fontWeight: 600, fontSize: '1.3rem', color: 'white' }}>OPC后台</span>
        </div>

        <nav style={{ flex: 1 }}>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeNav === item.id
            const showBadge = item.id === 'messages' && unreadCount > 0
            return (
              <div
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.9rem 1rem',
                  color: isActive ? 'white' : '#cbd5e0',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  marginBottom: '0.5rem',
                  transition: 'all 0.3s ease',
                  background: isActive ? '#667eea' : 'transparent',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Icon style={{ width: '20px', textAlign: 'center' }} />
                  <span>{item.label}</span>
                </div>
                {showBadge && (
                  <span style={{
                    background: '#f56565',
                    color: 'white',
                    fontSize: '0.7rem',
                    padding: '2px 6px',
                    borderRadius: '10px',
                    minWidth: '18px',
                    textAlign: 'center',
                  }}>{unreadCount}</span>
                )}
              </div>
            )
          })}
        </nav>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              color: 'white',
            }}>
              {userInfo.name.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: '0.95rem', color: 'white' }}>{userInfo.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#a0aec0' }}>OPC创业者</div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '0.9rem 1rem',
            color: '#cbd5e0',
            cursor: 'pointer',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
          }}>
            <LogOut style={{ width: '20px' }} />
            <span>退出登录</span>
          </div>
        </div>
      </aside>

      {/* 主内容区 */}
      <main style={{ flex: 1, marginLeft: '250px', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #334155' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.95rem' }}>
            <span>云上OPC社区</span>
            <span style={{ color: '#cbd5e0' }}>/</span>
            <span style={{ color: '#667eea' }}>OPC后台管理系统</span>
          </div>
        </div>

        {renderContent()}
      </main>

      {/* 编辑弹窗 */}
      {editModal.show && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: '#1E293B',
            borderRadius: '12px',
            padding: '2rem',
            width: '400px',
            border: '1px solid #475569',
          }}>
            <h3 style={{ color: '#F1F5F9', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              编辑{editModal.field === 'name' ? '昵称' : editModal.field === 'bio' ? '个人简介' : editModal.field === 'techAdvantage' ? '技术优势' : editModal.field === 'projectName' ? '项目名称' : editModal.field === 'projectDesc' ? '项目描述' : ''}
            </h3>
            <textarea
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #475569',
                background: '#0F1729',
                color: '#F1F5F9',
                fontSize: '0.95rem',
                minHeight: editModal.field === 'bio' || editModal.field === 'projectDesc' ? '100px' : '40px',
                resize: editModal.field === 'bio' || editModal.field === 'projectDesc' ? 'vertical' : 'none',
                outline: 'none',
              }}
              placeholder={`请输入${editModal.field === 'name' ? '昵称' : editModal.field === 'bio' ? '个人简介' : editModal.field === 'techAdvantage' ? '技术优势' : editModal.field === 'projectName' ? '项目名称' : editModal.field === 'projectDesc' ? '项目描述' : ''}`}
            />
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setEditModal({ show: false, field: '' })}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: '8px',
                  border: '1px solid #475569',
                  background: 'transparent',
                  color: '#94A3B8',
                  cursor: 'pointer',
                }}
              >
                取消
              </button>
              <button
                onClick={handleSave}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#667eea',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// 个人信息组件
function ProfileSection({ userInfo, onEdit }: { userInfo: any; onEdit: (field: string, value: string) => void }) {
  return (
    <div>
      <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 600 }}>个人信息管理</h2>
      
      {/* 基本信息 */}
      <div style={{ background: '#1E293B', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', border: '1px solid #475569' }}>
        <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>基本信息</h3>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: 'white',
            fontWeight: 600,
            position: 'relative',
          }}>
            {userInfo.name.charAt(0)}
            <button style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: '#667eea',
              border: '2px solid #1E293B',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Upload style={{ width: '14px', height: '14px' }} />
            </button>
          </div>
          <div>
            <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '0.3rem' }}>头像</div>
            <div style={{ color: '#F1F5F9', fontSize: '0.9rem' }}>点击图标更换头像</div>
          </div>
        </div>

        <InfoRow label="昵称" value={userInfo.name} onEdit={() => onEdit('name', userInfo.name)} />
        <InfoRow label="邮箱" value={userInfo.email} onEdit={() => onEdit('email', userInfo.email)} />
        <InfoRow label="手机" value={userInfo.phone} onEdit={() => onEdit('phone', userInfo.phone)} />
        <InfoRow label="个人简介" value={userInfo.bio} onEdit={() => onEdit('bio', userInfo.bio)} />
      </div>

      {/* 技术优势 */}
      <div style={{ background: '#1E293B', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', border: '1px solid #475569' }}>
        <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>技术优势</h3>
        <div style={{ 
          padding: '1rem', 
          background: '#0F1729', 
          borderRadius: '8px',
          color: '#F1F5F9',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ flex: 1 }}>{userInfo.techAdvantage || '点击编辑添加您的技术优势'}</span>
          <button onClick={() => onEdit('techAdvantage', userInfo.techAdvantage)} style={editButtonStyle}>
            <Edit style={{ width: '14px', height: '14px' }} />编辑
          </button>
        </div>
      </div>

      {/* OPC创业项目 */}
      <div style={{ background: '#1E293B', borderRadius: '12px', padding: '1.5rem', border: '1px solid #475569' }}>
        <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>OPC创业项目</h3>
        
        <InfoRow label="项目名称" value={userInfo.projectName} onEdit={() => onEdit('projectName', userInfo.projectName)} />
        <InfoRow label="当前阶段" value={userInfo.projectStage} />
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>项目描述</div>
          <div style={{ 
            padding: '1rem', 
            background: '#0F1729', 
            borderRadius: '8px',
            color: '#F1F5F9',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
          }}>
            <span style={{ flex: 1 }}>{userInfo.projectDesc || '点击编辑添加项目描述'}</span>
            <button onClick={() => onEdit('projectDesc', userInfo.projectDesc)} style={editButtonStyle}>
              <Edit style={{ width: '14px', height: '14px' }} />编辑
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value, onEdit }: { label: string; value: string; onEdit?: () => void }) {
  return (
    <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{label}</div>
        <div style={{ color: '#F1F5F9', fontSize: '0.95rem' }}>{value || '未设置'}</div>
      </div>
      {onEdit && (
        <button onClick={onEdit} style={editButtonStyle}>
          <Edit style={{ width: '14px', height: '14px' }} />编辑
        </button>
      )}
    </div>
  )
}

const editButtonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  padding: '0.4rem 0.8rem',
  borderRadius: '6px',
  border: '1px solid #475569',
  background: 'transparent',
  color: '#94A3B8',
  cursor: 'pointer',
  fontSize: '0.85rem',
}

// 我的内容组件
function ContentSection({ contents, setContents }: { contents: any[]; setContents: any }) {
  const [filter, setFilter] = useState('all')
  
  const filteredContents = filter === 'all' ? contents : contents.filter(c => c.type === filter)

  const handleDelete = (id: number) => {
    setContents(contents.filter(c => c.id !== id))
  }

  const typeLabels: Record<string, string> = {
    share: '分享',
    qa: '问答',
    resource: '资源',
    activity: '活动',
  }

  const typeColors: Record<string, string> = {
    share: '#10b981',
    qa: '#3b82f6',
    resource: '#f59e0b',
    activity: '#8b5cf6',
  }

  return (
    <div>
      <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 600 }}>我的内容</h2>
      
      {/* 筛选 */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        {['all', 'share', 'qa', 'resource', 'activity'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: 'none',
              background: filter === type ? '#667eea' : '#1E293B',
              color: filter === type ? 'white' : '#94A3B8',
              cursor: 'pointer',
              fontSize: '0.9rem',
            }}
          >
            {type === 'all' ? '全部' : typeLabels[type]}
          </button>
        ))}
      </div>

      {/* 内容列表 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredContents.map(content => (
          <div key={content.id} style={{
            background: '#1E293B',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid #475569',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    background: `${typeColors[content.type]}20`,
                    color: typeColors[content.type],
                  }}>{typeLabels[content.type]}</span>
                  <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>{content.date}</span>
                </div>
                <h4 style={{ color: '#F1F5F9', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{content.title}</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1rem' }}>{content.content}</p>
                <div style={{ display: 'flex', gap: '1.5rem', color: '#64748B', fontSize: '0.85rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Eye style={{ width: '14px' }} /> {content.views}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MessageSquare style={{ width: '14px' }} /> {content.comments}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Star style={{ width: '14px' }} /> {content.likes}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={actionButtonStyle}><Eye style={{ width: '14px' }} /></button>
                <button style={actionButtonStyle}><Edit style={{ width: '14px' }} /></button>
                <button style={{ ...actionButtonStyle, color: '#f56565' }} onClick={() => handleDelete(content.id)}><Trash2 style={{ width: '14px' }} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const actionButtonStyle: React.CSSProperties = {
  padding: '0.5rem',
  borderRadius: '6px',
  border: '1px solid #475569',
  background: 'transparent',
  color: '#94A3B8',
  cursor: 'pointer',
}

// 我的对接/报名组件
function ApplicationsSection({ applications }: { applications: any[] }) {
  const typeIcons: Record<string, any> = {
    activity: CalendarDays,
    project: Briefcase,
    mentor: Users,
  }

  return (
    <div>
      <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 600 }}>我的对接/报名</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {applications.map(app => {
          const Icon = typeIcons[app.type]
          return (
            <div key={app.id} style={{
              background: '#1E293B',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #475569',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}>
                <Icon style={{ width: '24px', height: '24px' }} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: '#F1F5F9', fontSize: '1.1rem', marginBottom: '0.3rem' }}>{app.title}</h4>
                <div style={{ display: 'flex', gap: '1.5rem', color: '#94A3B8', fontSize: '0.85rem' }}>
                  <span>{app.organizer}</span>
                  <span>{app.date}</span>
                  <span>{app.location}</span>
                </div>
              </div>
              <span style={{
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                background: app.status === '已通过' || app.status === '已确认' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                color: app.status === '已通过' || app.status === '已确认' ? '#10b981' : '#f59e0b',
              }}>{app.status}</span>
              <button style={actionButtonStyle}><ChevronRight style={{ width: '16px' }} /></button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// 消息中心组件
function MessagesSection({ messages, onMarkAsRead, onDelete, unreadCount, activeTab, setActiveTab }: any) {
  const filteredMessages = activeTab === 'all' ? messages : activeTab === 'unread' ? messages.filter((m: any) => !m.read) : messages.filter((m: any) => m.read)

  return (
    <div>
      <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 600 }}>消息中心</h2>
      
      {/* 筛选 */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { id: 'all', label: '全部消息' },
          { id: 'unread', label: `未读${unreadCount > 0 ? ` (${unreadCount})` : ''}` },
          { id: 'read', label: '已读' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: 'none',
              background: activeTab === tab.id ? '#667eea' : '#1E293B',
              color: activeTab === tab.id ? 'white' : '#94A3B8',
              cursor: 'pointer',
              fontSize: '0.9rem',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 消息列表 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredMessages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#64748B' }}>暂无消息</div>
        ) : (
          filteredMessages.map((msg: any) => (
            <div key={msg.id} style={{
              background: '#1E293B',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #475569',
              borderLeft: msg.read ? '3px solid #475569' : '3px solid #667eea',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `${messageTypeColors[msg.type]}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: messageTypeColors[msg.type],
                fontWeight: 600,
                fontSize: '0.9rem',
              }}>
                {msg.avatar}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                  <h4 style={{ color: '#F1F5F9', fontSize: '1rem' }}>{msg.title}</h4>
                  <span style={{ color: '#64748B', fontSize: '0.8rem' }}>{msg.time}</span>
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>{msg.content}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {!msg.read && (
                  <button 
                    onClick={() => onMarkAsRead(msg.id)}
                    style={{ ...actionButtonStyle, color: '#10b981' }}
                    title="标记已读"
                  >
                    <Check style={{ width: '14px' }} />
                  </button>
                )}
                <button 
                  onClick={() => onDelete(msg.id)}
                  style={{ ...actionButtonStyle, color: '#f56565' }}
                  title="删除"
                >
                  <Trash2 style={{ width: '14px' }} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

const messageTypeColors: Record<string, string> = {
  system: '#667eea',
  activity: '#f59e0b',
  match: '#10b981',
  comment: '#8b5cf6',
  qa: '#3b82f6',
}

// 积分管理组件
function PointsSection({ points, exchangeItems }: { points: any; exchangeItems: any[] }) {
  return (
    <div>
      <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 600 }}>积分管理</h2>
      
      {/* 积分余额卡片 */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        padding: '2rem',
        marginBottom: '2rem',
        color: 'white',
      }}>
        <div style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '0.5rem' }}>当前积分</div>
        <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>{points.balance}</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>累计获得</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>3,580</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>累计消耗</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>1,000</div>
          </div>
        </div>
      </div>

      {/* 积分兑换 */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 600 }}>积分兑换</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {exchangeItems.map(item => {
            const Icon = item.icon
            const canExchange = points.balance >= item.points
            return (
              <div key={item.id} style={{
                background: '#1E293B',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #475569',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: canExchange ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#334155',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white',
                }}>
                  <Icon style={{ width: '24px', height: '24px' }} />
                </div>
                <div style={{ color: '#F1F5F9', fontWeight: 500, marginBottom: '0.5rem' }}>{item.name}</div>
                <div style={{ color: canExchange ? '#10b981' : '#f56565', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>{item.points} 积分</div>
                <button 
                  disabled={!canExchange}
                  style={{
                    width: '100%',
                    padding: '0.6rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: canExchange ? '#667eea' : '#334155',
                    color: 'white',
                    cursor: canExchange ? 'pointer' : 'not-allowed',
                    opacity: canExchange ? 1 : 0.5,
                  }}
                >
                  {canExchange ? '立即兑换' : '积分不足'}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* 积分记录 */}
      <div>
        <h3 style={{ color: '#F1F5F9', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 600 }}>积分记录</h3>
        <div style={{ background: '#1E293B', borderRadius: '12px', overflow: 'hidden', border: '1px solid #475569' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#0F1729' }}>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#94A3B8', fontSize: '0.9rem' }}>时间</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#94A3B8', fontSize: '0.9rem' }}>操作</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: '#94A3B8', fontSize: '0.9rem' }}>积分变化</th>
              </tr>
            </thead>
            <tbody>
              {points.records.map((record: any) => (
                <tr key={record.id} style={{ borderBottom: '1px solid #334155' }}>
                  <td style={{ padding: '1rem', color: '#94A3B8' }}>{record.date}</td>
                  <td style={{ padding: '1rem', color: '#F1F5F9' }}>{record.action}</td>
                  <td style={{ padding: '1rem', color: record.type === 'gain' ? '#10b981' : '#f56565', fontWeight: 600 }}>
                    {record.points > 0 ? '+' : ''}{record.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// 资源管理组件（默认显示）
function ResourcesSection() {
  return (
    <div>
      <h2 style={{ color: '#F1F5F9', fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 600 }}>资源管理</h2>
      <div style={{ 
        background: '#1E293B', 
        borderRadius: '12px', 
        padding: '3rem', 
        textAlign: 'center',
        border: '1px solid #475569',
      }}>
        <Cpu style={{ width: '48px', height: '48px', color: '#667eea', marginBottom: '1rem' }} />
        <h3 style={{ color: '#F1F5F9', marginBottom: '0.5rem' }}>资源管理</h3>
        <p style={{ color: '#94A3B8' }}>选择左侧导航查看和管理您的各类资源</p>
      </div>
    </div>
  )
}
