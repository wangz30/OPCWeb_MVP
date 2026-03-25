import { Model, DataAPI, CloudResource, Space, Policy, Course, Demand, Event } from '../types'

export const mockModels: Model[] = [
  { id: '1', name: 'GPT-4 Turbo', provider: 'OpenAI', description: '最新GPT-4模型,支持128K上下文', price: '¥0.01/1K tokens', category: 'LLM' },
  { id: '2', name: 'Claude 3 Opus', provider: 'Anthropic', description: '强大的多模态模型,支持图像理解', price: '¥0.015/1K tokens', category: 'LLM' },
  { id: '3', name: 'DeepSeek-V2', provider: 'DeepSeek', description: '国产开源大模型,高性能推理', price: '¥0.001/1K tokens', category: 'LLM' },
  { id: '4', name: 'Stable Diffusion XL', provider: 'Stability AI', description: '最先进的图像生成模型', price: '¥0.02/图', category: '图像生成' },
  { id: '5', name: 'Whisper Large v3', provider: 'OpenAI', description: '高精度语音识别模型', price: '¥0.006/分钟', category: '语音识别' },
  { id: '6', name: 'TTS-1-HD', provider: 'OpenAI', description: '高清语音合成,支持多种音色', price: '¥0.015/1K字符', category: '语音合成' },
]

export const mockDataAPIs: DataAPI[] = [
  { id: '1', name: '天气数据API', category: '气象', description: '全球实时天气数据和历史天气查询', endpoint: 'api.weather.com/v1', rateLimit: '1000次/天' },
  { id: '2', name: '股票行情API', category: '金融', description: 'A股、港股、美股实时行情数据', endpoint: 'api.stock.com/v1', rateLimit: '5000次/天' },
  { id: '3', name: '地图地理API', category: '地理信息', description: '地理编码、路径规划、周边搜索', endpoint: 'api.map.com/v1', rateLimit: '10000次/天' },
  { id: '4', name: '新闻资讯API', category: '新闻', description: '实时新闻聚合、热点追踪', endpoint: 'api.news.com/v1', rateLimit: '2000次/天' },
  { id: '5', name: 'OCR识别API', category: 'AI服务', description: '通用文字识别、票据识别、身份证识别', endpoint: 'api.ocr.com/v1', rateLimit: '500次/天' },
  { id: '6', name: '翻译API', category: 'AI服务', description: '支持100+语言互译,专业术语翻译', endpoint: 'api.translate.com/v1', rateLimit: '10000次/天' },
]

export const mockCloudResources: CloudResource[] = [
  { id: '1', type: 'vm', name: '轻量应用服务器', spec: '2核4G, 40G SSD', price: '¥99/月', region: '广州' },
  { id: '2', type: 'vm', name: '标准云主机', spec: '4核8G, 80G SSD', price: '¥299/月', region: '北京' },
  { id: '3', type: 'vm', name: '高性能计算实例', spec: '8核16G, 200G SSD', price: '¥699/月', region: '上海' },
  { id: '4', type: 'storage', name: '对象存储COS', spec: '标准存储,无限容量', price: '¥0.118/GB/月', region: '多地域' },
  { id: '5', type: 'storage', name: '文件存储CFS', spec: '高性能文件系统', price: '¥0.35/GB/月', region: '广州' },
  { id: '6', type: 'database', name: '云数据库MySQL', spec: '1核2G, 50G存储', price: '¥199/月', region: '北京' },
  { id: '7', type: 'database', name: '云数据库PostgreSQL', spec: '2核4G, 100G存储', price: '¥399/月', region: '上海' },
  { id: '8', type: 'database', name: '文档数据库MongoDB', spec: '2核4G, 50G存储', price: '¥349/月', region: '广州' },
]

export const mockSpaces: Space[] = [
  {
    id: '1',
    name: '深圳湾科技生态园',
    location: '深圳市南山区',
    capacity: 200,
    available: 45,
    amenities: ['高速网络', '会议室', '茶水间', '打印机', '空调'],
    price: '¥2000/工位/月'
  },
  {
    id: '2',
    name: '中关村创业大街',
    location: '北京市海淀区',
    capacity: 150,
    available: 20,
    amenities: ['高速网络', '会议室', '培训室', '茶水间', '停车'],
    price: '¥2500/工位/月'
  },
  {
    id: '3',
    name: '张江高科孵化器',
    location: '上海市浦东新区',
    capacity: 180,
    available: 60,
    amenities: ['高速网络', '共享实验室', '会议室', '茶水间'],
    price: '¥2200/工位/月'
  },
  {
    id: '4',
    name: '杭州梦想小镇',
    location: '杭州市余杭区',
    capacity: 120,
    available: 35,
    amenities: ['高速网络', '会议室', '创业服务中心', '茶水间'],
    price: '¥1800/工位/月'
  },
]

export const mockPolicies: Policy[] = [
  { id: '1', type: 'financing', title: '2024年小微企业融资支持政策', summary: '提供最高500万无抵押贷款,利率优惠至3.5%', date: '2024-01-15', source: '工信部' },
  { id: '2', type: 'financing', title: '科技创新券发放通知', summary: '企业可申领最高50万科技创新券,用于购买技术服务', date: '2024-02-01', source: '科技部' },
  { id: '3', type: 'talent', title: '海外高层次人才引进计划', summary: '吸引海外博士回国创业,提供安家费和科研启动资金', date: '2024-01-20', source: '人社部' },
  { id: '4', type: 'talent', title: '高校毕业生创业补贴', summary: '应届毕业生创业可申领一次性创业补贴1万元', date: '2024-03-01', source: '教育部' },
  { id: '5', type: 'news', title: 'AI大模型产业扶持办法出台', summary: '支持大模型研发和应用,最高补贴1000万', date: '2024-02-15', source: '发改委' },
  { id: '6', type: 'news', title: '数字经济发展规划发布', summary: '到2025年培育100家独角兽企业', date: '2024-01-25', source: '国务院' },
]

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'AI大模型应用开发实战',
    instructor: '张教授',
    duration: '12周',
    level: 'intermediate',
    tags: ['大模型', 'Python', 'API开发'],
    enrolledCount: 1234,
    price: '¥2999'
  },
  {
    id: '2',
    title: '云原生架构设计',
    instructor: '李架构师',
    duration: '8周',
    level: 'advanced',
    tags: ['Kubernetes', 'Docker', '微服务'],
    enrolledCount: 856,
    price: '¥1999'
  },
  {
    id: '3',
    title: '深度学习基础入门',
    instructor: '王研究员',
    duration: '10周',
    level: 'beginner',
    tags: ['神经网络', 'PyTorch', '机器学习'],
    enrolledCount: 2341,
    price: '¥999'
  },
  {
    id: '4',
    title: 'OPC创业运营指南',
    instructor: '刘创业导师',
    duration: '6周',
    level: 'beginner',
    tags: ['创业', '运营', '财务管理'],
    enrolledCount: 567,
    price: '¥499'
  },
  {
    id: '5',
    title: '数据处理与分析实战',
    instructor: '陈数据专家',
    duration: '8周',
    level: 'intermediate',
    tags: ['Pandas', '数据分析', '可视化'],
    enrolledCount: 1876,
    price: '¥1299'
  },
  {
    id: '6',
    title: '产品经理从入门到精通',
    instructor: '赵产品总监',
    duration: '12周',
    level: 'intermediate',
    tags: ['产品思维', '需求分析', '原型设计'],
    enrolledCount: 1567,
    price: '¥1999'
  },
]

export const mockDemands: Demand[] = [
  {
    id: '1',
    company: '智汇科技',
    title: '智能客服系统开发',
    description: '需要开发基于大模型的智能客服系统,支持多轮对话、知识库检索、意图识别等功能',
    budget: '¥50,000-80,000',
    deadline: '2024-04-30',
    skills: ['Python', '大模型', 'API开发', 'NLP'],
    status: 'open'
  },
  {
    id: '2',
    company: '数据宝',
    title: '数据清洗与标注工具',
    description: '开发数据清洗和标注工具,支持图片、文本、音频等多种数据类型',
    budget: '¥30,000-50,000',
    deadline: '2024-04-15',
    skills: ['Python', 'React', '数据处理', '工具开发'],
    status: 'in_progress'
  },
  {
    id: '3',
    company: '云创智联',
    title: 'AI图像识别API对接',
    description: '将开源图像识别模型部署为API服务,并进行性能优化',
    budget: '¥20,000-40,000',
    deadline: '2024-03-31',
    skills: ['TensorFlow', 'API开发', '部署优化'],
    status: 'open'
  },
  {
    id: '4',
    company: '教育科技',
    title: '在线教育平台AI助手',
    description: '为学生提供个性化学习建议和答疑的AI助手',
    budget: '¥80,000-120,000',
    deadline: '2024-05-30',
    skills: ['大模型', '教育领域知识', '系统设计'],
    status: 'open'
  },
]

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'OPC创业者交流沙龙',
    type: 'meetup',
    date: '2024-03-20 14:00',
    location: '深圳湾科技生态园',
    participants: 45,
    maxParticipants: 60,
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'AI大模型应用开发工作坊',
    type: 'workshop',
    date: '2024-03-25 09:00',
    location: '中关村创业大街',
    participants: 28,
    maxParticipants: 30,
    status: 'upcoming'
  },
  {
    id: '3',
    title: '2024 OPC创新大赛',
    type: 'competition',
    date: '2024-04-01 00:00',
    location: '线上',
    participants: 156,
    maxParticipants: 500,
    status: 'upcoming'
  },
  {
    id: '4',
    title: '云原生技术分享会',
    type: 'workshop',
    date: '2024-02-28 19:00',
    location: '张江高科孵化器',
    participants: 42,
    maxParticipants: 50,
    status: 'ended'
  },
]
