import { Model, DataAPI, CloudResource, Space, Policy, Course, Demand, Event } from '../types'

export const mockModels: Model[] = [
  { id: '1', name: 'GPT-4 Turbo', provider: 'OpenAI', description: '最新 GPT-4 模型，支持 128K 上下文，强大的多轮对话能力', price: '¥0.01/1K tokens', category: 'LLM' },
  { id: '2', name: 'Claude 3 Opus', provider: 'Anthropic', description: '强大的多模态模型，支持图像理解和文本生成', price: '¥0.015/1K tokens', category: 'LLM' },
  { id: '3', name: 'DeepSeek-V2', provider: 'DeepSeek', description: '国产开源大模型，高性能推理，中文优化', price: '¥0.001/1K tokens', category: 'LLM' },
  { id: '4', name: 'GPT-3.5-Turbo', provider: 'OpenAI', description: '快速高效的对话模型，性价比高', price: '¥0.002/1K tokens', category: 'LLM' },
  { id: '5', name: 'Gemini Pro', provider: 'Google', description: '谷歌多模态大模型，支持图文理解', price: '¥0.005/1K tokens', category: 'LLM' },
  { id: '6', name: 'Llama 3', provider: 'Meta', description: '开源大模型，支持多种语言和代码生成', price: '免费', category: 'LLM' },
  { id: '7', name: 'Stable Diffusion XL', provider: 'Stability AI', description: '最先进的图像生成模型，支持文生图和图生图', price: '¥0.02/图', category: '图像生成' },
  { id: '8', name: 'DALL-E 3', provider: 'OpenAI', description: '精准的文生图模型，创意视觉设计', price: '¥0.04/图', category: '图像生成' },
  { id: '9', name: 'Midjourney', provider: 'Midjourney', description: '艺术风格图像生成，高质量创作', price: '¥30/月', category: '图像生成' },
  { id: '10', name: 'Whisper Large v3', provider: 'OpenAI', description: '高精度语音识别模型，支持多语言', price: '¥0.006/分钟', category: '语音识别' },
  { id: '11', name: 'TTS-1-HD', provider: 'OpenAI', description: '高清语音合成，支持多种音色和情感', price: '¥0.015/1K 字符', category: '语音合成' },
  { id: '12', name: 'Sora', provider: 'OpenAI', description: '文本生成视频模型，高质量视频创作', price: '即将上线', category: '视频生成' },
  { id: '13', name: 'GPT-4V', provider: 'OpenAI', description: 'GPT-4 视觉版，强大的图像理解能力', price: '¥0.015/1K tokens', category: '多模态' },
  { id: '14', name: 'Claude 3 Sonnet', provider: 'Anthropic', description: '中等规模多模态模型，性价比高', price: '¥0.003/1K tokens', category: '多模态' },
  { id: '15', name: 'GitHub Copilot', provider: 'GitHub', description: 'AI 编程助手，实时代码补全和生成', price: '¥10/月', category: '代码生成' },
  { id: '16', name: 'Code Llama', provider: 'Meta', description: '专注代码生成的开源模型', price: '免费', category: '代码生成' },
  { id: '17', name: 'PaLM 2', provider: 'Google', description: '谷歌语言模型，支持代码和多语言', price: '¥0.008/1K tokens', category: 'LLM' },
  { id: '18', name: 'Qwen 2', provider: 'Alibaba', description: '阿里通义千问，强大的中文能力', price: '¥0.004/1K tokens', category: 'LLM' },
  { id: '19', name: 'Baichuan 3', provider: '百川智能', description: '国产大模型，中文对话优化', price: '¥0.003/1K tokens', category: 'LLM' },
  { id: '20', name: 'ChatGLM 4', provider: '智谱 AI', description: '国产开源对话模型，支持代码生成', price: '¥0.002/1K tokens', category: 'LLM' },
]

export const mockDataAPIs: DataAPI[] = [
  { id: '1', name: '天气数据 API', category: '气象', description: '全球实时天气数据和历史天气查询', endpoint: 'api.weather.com/v1', rateLimit: '1000 次/天' },
  { id: '2', name: '股票行情 API', category: '金融', description: 'A 股、港股、美股实时行情数据', endpoint: 'api.stock.com/v1', rateLimit: '5000 次/天' },
  { id: '3', name: '地图地理 API', category: '地理信息', description: '地理编码、路径规划、周边搜索', endpoint: 'api.map.com/v1', rateLimit: '10000 次/天' },
  { id: '4', name: '新闻资讯 API', category: '新闻', description: '实时新闻聚合、热点追踪', endpoint: 'api.news.com/v1', rateLimit: '2000 次/天' },
  { id: '5', name: 'OCR 识别 API', category: 'AI 服务', description: '通用文字识别、票据识别、身份证识别', endpoint: 'api.ocr.com/v1', rateLimit: '500 次/天' },
  { id: '6', name: '翻译 API', category: 'AI 服务', description: '支持 100+ 语言互译，专业术语翻译', endpoint: 'api.translate.com/v1', rateLimit: '10000 次/天' },
]

export const mockCloudResources: CloudResource[] = [
  { id: '1', type: 'vm', name: '轻量应用服务器', spec: '2 核 4G, 40G SSD', price: '¥99/月', region: '广州' },
  { id: '2', type: 'vm', name: '标准云主机', spec: '4 核 8G, 80G SSD', price: '¥299/月', region: '北京' },
  { id: '3', type: 'vm', name: '高性能计算实例', spec: '8 核 16G, 200G SSD', price: '¥699/月', region: '上海' },
  { id: '4', type: 'storage', name: '对象存储 COS', spec: '标准存储，无限容量', price: '¥0.118/GB/月', region: '多地域' },
  { id: '5', type: 'storage', name: '文件存储 CFS', spec: '高性能文件系统', price: '¥0.35/GB/月', region: '广州' },
  { id: '6', type: 'database', name: '云数据库 MySQL', spec: '1 核 2G, 50G 存储', price: '¥199/月', region: '北京' },
  { id: '7', type: 'database', name: '云数据库 PostgreSQL', spec: '2 核 4G, 100G 存储', price: '¥399/月', region: '上海' },
  { id: '8', type: 'database', name: '文档数据库 MongoDB', spec: '2 核 4G, 50G 存储', price: '¥349/月', region: '广州' },
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
  { id: '1', type: 'financing', title: '2024 年小微企业融资支持政策', summary: '提供最高 500 万无抵押贷款，利率优惠至 3.5%', date: '2024-01-15', source: '工信部' },
  { id: '2', type: 'financing', title: '科技创新券发放通知', summary: '企业可申领最高 50 万科技创新券，用于购买技术服务', date: '2024-02-01', source: '科技部' },
  { id: '3', type: 'talent', title: '海外高层次人才引进计划', summary: '吸引海外博士回国创业，提供安家费和科研启动资金', date: '2024-01-20', source: '人社部' },
  { id: '4', type: 'talent', title: '高校毕业生创业补贴', summary: '应届毕业生创业可申领一次性创业补贴 1 万元', date: '2024-03-01', source: '教育部' },
  { id: '5', type: 'news', title: 'AI 大模型产业扶持办法出台', summary: '支持大模型研发和应用，最高补贴 1000 万', date: '2024-02-15', source: '发改委' },
  { id: '6', type: 'news', title: '数字经济发展规划发布', summary: '到 2025 年培育 100 家独角兽企业', date: '2024-01-25', source: '国务院' },
]

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'AI 大模型应用开发实战',
    instructor: '张教授',
    duration: '12 周',
    level: 'intermediate',
    tags: ['大模型', 'Python', 'API 开发'],
    enrolledCount: 1234,
    price: '¥2999'
  },
  {
    id: '2',
    title: '云原生架构设计',
    instructor: '李架构师',
    duration: '8 周',
    level: 'advanced',
    tags: ['Kubernetes', 'Docker', '微服务'],
    enrolledCount: 856,
    price: '¥1999'
  },
]

export const mockDemands: Demand[] = [
  {
    id: '1',
    title: 'AI 客服系统开发',
    company: '某电商公司',
    budget: '¥50-100 万',
    type: '软件开发',
    deadline: '2024-06-30',
    description: '需要开发一套智能客服系统，支持自动回复和人工转接'
  },
  {
    id: '2',
    title: '数据分析平台搭建',
    company: '某金融科技公司',
    budget: '¥100-200 万',
    type: '数据分析',
    deadline: '2024-08-31',
    description: '搭建企业级数据分析平台，支持实时数据可视化'
  },
]

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'AI 技术沙龙',
    date: '2024-05-20',
    location: '深圳湾科技生态园',
    type: 'meetup',
    participants: 150,
    maxParticipants: 200,
    status: 'upcoming'
  },
  {
    id: '2',
    title: '创业路演大赛',
    date: '2024-06-15',
    location: '北京中关村',
    type: 'competition',
    participants: 200,
    maxParticipants: 300,
    status: 'ongoing'
  },
]
