import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Footer } from '@/components/Footer'

// 要素数据分类数据
const elementDataCategories = [
  {
    id: 'enterprise',
    name: '企业',
    icon: '🏢',
    description: '提供企业多维度信息查询 API，涵盖工商信息、知识产权、资质认定、财务数据、所属产业集群等企业核心数据',
    datasets: [
      {
        id: 'enterprise-search',
        name: '企业搜索查询',
        description: '提供多维度企业基础信息相关 API 接口功能，支持获取企业基本信息、所属产业集群等信息'
      },
      {
        id: 'enterprise-business',
        name: '工商信息',
        description: '提供企业工商信息相关 API 接口功能，支持获取工商照面、企业联系方式、企业简介等信息'
      },
      {
        id: 'enterprise-development',
        name: '企业发展',
        description: '提供企业发展相关 API 接口功能，支持获取企业科技认定信息、企业迁移信息等信息'
      }
    ]
  },
  {
    id: 'patent',
    name: '专利',
    icon: '💡',
    description: '提供专利多维度查询与分析 API，涵盖专利基础信息、产业属性、法律状态、家族关系、引用关系等维度的数据服务',
    datasets: [
      {
        id: 'patent-basic',
        name: '专利基础信息',
        description: '提供专利基础信息相关 API 接口功能，支持获取专利摘要、发明人等字段信息'
      },
      {
        id: 'patent-industry',
        name: '专利产业分析',
        description: '提供专利产业分析相关 API 接口功能，支持获得专利所属产业集群等字段信息'
      },
      {
        id: 'patent-legal',
        name: '专利法律状态分析',
        description: '提供专利法律状态分析相关 API 接口功能，支持获得专利寿命周期、法律状态等信息'
      },
      {
        id: 'patent-family',
        name: '专利家族分析',
        description: '提供专利家族分析相关 API 接口功能，支持获得 PCT 专利信息等信息'
      },
      {
        id: 'patent-citation',
        name: '专利引用分析',
        description: '提供专利引用分析相关 API 接口功能，支持获得专利寿命周期、法律状态等信息'
      },
      {
        id: 'patent-search',
        name: '专利检索服务',
        description: '提供专利检索服务相关 API 接口功能，支持通过优先权、摘要关键词等信息'
      }
    ]
  },
  {
    id: 'investment',
    name: '投融资',
    icon: '💰',
    description: '提供投融资事件相关信息查询 API，涵盖企业融资历史、投资方信息、融资轮次等数据服务',
    datasets: [
      {
        id: 'investment-search',
        name: '投融资查询',
        description: '提供投融资查询相关 API 接口功能，支持获得获投方、投资方、所属产业领域等信息'
      }
    ]
  },
  {
    id: 'investment-org',
    name: '投资机构',
    icon: '🏦',
    description: '提供投资机构相关信息查询 API，涵盖投资机构基本信息、投资行为、管理基金等数据服务',
    datasets: [
      {
        id: 'org-search',
        name: '投资机构信息检索',
        description: '提供投资机构信息检索相关API接口功能，支持获得投资机构基本信息、团队成员、联系方式等信息'
      },
      {
        id: 'org-analysis',
        name: '投资能力分析',
        description: '提供投资能力分析相关API接口功能，支持获得投资行业偏好、投资成功率、投资区域偏好等信息'
      },
      {
        id: 'org-event',
        name: '投资事件分析',
        description: '提供投资事件分析相关 API 接口功能，支持获得退出事件、获投企业信息等信息'
      },
      {
        id: 'fund-search',
        name: '基金产品检索',
        description: '提供基金产品检索相关 API 接口功能，支持获得基金产品列表、基金管理人信息等信息'
      }
    ]
  },
  {
    id: 'policy',
    name: '政策',
    icon: '📋',
    description: '提供产业政策相关信息查询 API，支持政策标题、扶持类型、产业领域等维度的政策检索功能',
    datasets: [
      {
        id: 'policy-search',
        name: '政策搜索',
        description: '提供政策搜索相关 API 接口功能，支持获得政策内容、产业集群等信息'
      }
    ]
  },
  {
    id: 'copyright',
    name: '著作权',
    icon: '📜',
    description: '提供著作权相关信息查询 API，支持软件著作权等核心著作权数据的检索与获取',
    datasets: [
      {
        id: 'copyright-search',
        name: '著作权检索服务',
        description: '提供著作权检索服务相关 API 接口功能，支持获得著作权基本信息、著作权作者等信息'
      },
      {
        id: 'copyright-industry',
        name: '著作权产业分析',
        description: '提供著作权产业分析相关 API 接口功能，支持获得著作权所在企业的产业集群等信息'
      }
    ]
  },
  {
    id: 'bidding',
    name: '招投标',
    icon: '📢',
    description: '提供招投标相关信息查询 API，支持通过关键词、单位名称等维度检索招投标数据',
    datasets: [
      {
        id: 'bidding-search',
        name: '招投标查询',
        description: '提供招投标查询相关 API 接口功能，支持获得项目招投标、公告标题等信息'
      }
    ]
  },
  {
    id: 'innovation',
    name: '创新载体',
    icon: '🔬',
    description: '提供创新载体相关信息查询 API，支持各类创新平台、科研机构等创新载体数据的检索与获取',
    datasets: [
      {
        id: 'innovation-basic',
        name: '创新载体基础信息',
        description: '提供创新载体基础信息相关 API 接口功能，支持获得创新载体基本信息等信息'
      },
      {
        id: 'innovation-relation',
        name: '创新载体关联关系信息',
        description: '提供创新载体关联关系信息相关 API 接口功能，支持获得创新载体区域分布等信息'
      }
    ]
  },
  {
    id: 'opensource',
    name: '开源资讯',
    icon: '🌐',
    description: '提供产业相关开源资讯查询 API，支持通过关键词、区域、产业环节等维度检索资讯信息',
    datasets: [
      {
        id: 'opensource-get',
        name: '资讯获取',
        description: '提供咨询获取相关 API 接口功能，支持资讯关键词查询、产业资讯等功能'
      }
    ]
  }
]

// 场景数据分类
const sceneDataCategories = [
  {
    id: 'investment-promotion',
    name: '招商引资',
    icon: '🎯',
    description: '提供招商引资全流程数据支撑 API，支持产业匹配分析、目标企业筛选、招商可行性评估、政策匹配等招商决策服务',
    datasets: [
      {
        id: 'capital-investment',
        name: '资本招商',
        description: '资本招商，根据企业/统一社会信用代码获得企业投资方规模、注册资本、投资方机构类型等字段信息'
      },
      {
        id: 'enterprise-verify',
        name: '企业信息核查',
        description: '根据企业名称/统一社会信用代码获得该企业详情，企业详情包含企业基本信息、工商信息、产业属性、融资上市、招商可行性评分、企业综合评分等信息'
      },
      {
        id: 'industry-chain-investment',
        name: '产业链招商',
        description: '根据所需产业链及地区进行企业招商获得企业清单和企业相关信息，企业相关信息包括企业基本信息、企业地址信息、工商信息、产业属性、股权信息等信息'
      }
    ]
  },
  {
    id: 'enterprise-stabilization',
    name: '安商稳商',
    icon: '🛡️',
    description: '提供企业服务与风险监控 API，支持企业经营状况跟踪、经营风险预警、需求精准匹配、企业迁出风险预测等安商稳商服务',
    datasets: [
      {
        id: 'enterprise-risk-monitor',
        name: '企业风险监测',
        description: '企业风险监测，根据企业名称/统一社会信用代码获得基本信息、风险监测、企业地址等信息'
      },
      {
        id: 'enterprise-relocation-predict',
        name: '企业迁出风险预测',
        description: '企业迁出风险预测，根据企业名称/统一社会信用代码获得企业基本信息、是否异地购地、是否异地建厂等信息'
      }
    ]
  },
  {
    id: 'industry-monitoring',
    name: '产业监测',
    icon: '📊',
    description: '提供区域产业发展动态监测与评估 API，支持产业集群竞争力指数分析等产业治理服务',
    datasets: [
      {
        id: 'industry-cluster-index',
        name: '产业集群竞争力指数',
        description: '产业集群竞争力指数，根据产业集群名称获得产业集群的各项指标信息'
      }
    ]
  },
  {
    id: 'enterprise-portrait',
    name: '企业画像',
    icon: '👤',
    description: '提供多维度企业精准画像 API，支持企业实力评估、信用评级、技术创新能力分析、企业综合评分、发展潜力预测等综合评估服务',
    datasets: [
      {
        id: 'enterprise-score-detail',
        name: '企业综合评分详情',
        description: '企业综合评分，根据企业名称/统一社会信用代码获得企业多维度分析计算评分详情，包括成长能力评分、科创能力评分等信息'
      },
      {
        id: 'listed-enterprise-finance',
        name: '上市企业财务信息',
        description: '上市企业财务信息，根据企业名称/统一社会信用代码获取上市企业财务情况的相关信息，包括上市企业基础信息、报表基础信息、财务核心指标、产业属性、资本结构、盈利能力、利润表、现金流量表、资产负债表等信息'
      },
      {
        id: 'enterprise-investment',
        name: '企业投资布局',
        description: '企业投资布局，根据投资或获投方名称获取企业在投资的投资方及被投资方的相关信息'
      },
      {
        id: 'enterprise-innovation',
        name: '企业创新能力',
        description: '企业创新能力，根据企业名称/统一社会信用代码查询企业相关专利、著作权、标准、商标的信息'
      }
    ]
  }
]

// 主题数据分类
const themeDataCustom = [
  {
    id: 'innovative-drugs',
    name: '创新药',
    icon: '💊',
    description: '创新药主题数据集是创新药研发领域打造的深度定制化数据集，深度融合生物医药领域的海量数据与行业分析模型，内容全面覆盖全球及中国的药物研发管线、靶点布局、临床试验进展、审批上市动态等关键信息，为创新药企业研发决策、投资机构项目筛选、产业园区招商定位提供精准的数据支撑和深度洞察',
    datasets: [
      {
        id: 'drug-pipeline',
        name: '药物研发管线',
        description: '全球创新药研发管线全景数据，涵盖靶点、适应症、研发阶段等'
      },
      {
        id: 'clinical-trials',
        name: '临床试验数据',
        description: '临床试验登记数据、试验结果、不良反应等全维度信息'
      },
      {
        id: 'approval-tracking',
        name: '审批上市追踪',
        description: 'NMPA/FDA/EMA 等监管机构审批进度及上市药物信息'
      }
    ]
  },
  {
    id: 'industrial-machines',
    name: '工业母机',
    icon: '⚙️',
    description: '工业母机主题数据集是平台面向特定产业深度分析需求提供的定制化高质量数据集，聚焦工业母机及其上下游产业领域，内容涵盖工业母机核心专利技术、企业分布、产业链图谱、市场格局、技术演进路线等关键维度，为工业母机产业规划、技术攻关方向选择、产业链补链强链决策提供数据支撑',
    datasets: [
      {
        id: 'core-patents',
        name: '核心专利技术',
        description: '工业母机领域核心专利技术分析，包括数控机床、加工中心等'
      },
      {
        id: 'enterprise-distribution',
        name: '企业分布图谱',
        description: '工业母机产业链上下游企业分布及关联关系可视化'
      },
      {
        id: 'market-landscape',
        name: '市场格局分析',
        description: '全球及中国工业母机市场规模、竞争格局、技术路线对比'
      }
    ]
  }
]

const themeDataStrategic = [
  {
    id: 'semiconductor',
    name: '半导体与集成电路',
    icon: '🔬',
    description: '涵盖半导体材料、芯片设计、晶圆制造、封装测试等全产业链数据，支持产业分析和投资决策',
    datasets: []
  },
  {
    id: 'ai',
    name: '人工智能',
    icon: '🤖',
    description: '覆盖 AI 算法、算力、数据要素、应用场景等核心领域，追踪技术演进与产业落地动态',
    datasets: []
  },
  {
    id: 'energy-environment',
    name: '安全节能环保',
    icon: '🌱',
    description: '聚焦安全生产、环境保护、节能减排等领域，提供产业数据支撑和政策分析服务',
    datasets: []
  },
  {
    id: 'low-altitude',
    name: '低空经济与空天',
    icon: '🚁',
    description: '覆盖无人机、eVTOL、卫星通信、商业航天等低空与空天产业全链条数据',
    datasets: []
  },
  {
    id: 'smart-vehicles',
    name: '智能网联汽车',
    icon: '🚗',
    description: '涵盖智能驾驶、车路协同、新能源汽车、智能座舱等智能网联汽车产业数据',
    datasets: []
  },
  {
    id: 'new-energy',
    name: '新能源',
    icon: '⚡',
    description: '覆盖光伏、风电、储能、氢能等新能源全产业链数据，支持产业趋势分析',
    datasets: []
  },
  {
    id: 'software-info',
    name: '软件与信息服务',
    icon: '💻',
    description: '聚焦基础软件、工业软件、云计算、大数据等软件与信息技术服务业数据',
    datasets: []
  },
  {
    id: 'modern-fashion',
    name: '现代时尚',
    icon: '👔',
    description: '涵盖服装、珠宝、钟表、家具等时尚产业的设计、制造、品牌数据',
    datasets: []
  },
  {
    id: 'robotics',
    name: '机器人',
    icon: '🦾',
    description: '覆盖工业机器人、服务机器人、特种机器人等机器人产业全链条数据',
    datasets: []
  },
  {
    id: 'network-communication',
    name: '网络与通信',
    icon: '📡',
    description: '覆盖 5G/6G 通信、光通信、卫星互联网等网络与通信产业数据',
    datasets: []
  },
  {
    id: 'uhd-video',
    name: '超高清视频显示',
    icon: '📺',
    description: '涵盖 4K/8K 超高清视频采集、制作、传输、显示全产业链数据',
    datasets: []
  },
  {
    id: 'smart-terminal',
    name: '智能终端',
    icon: '📱',
    description: '覆盖智能手机、可穿戴设备、智能家居等智能终端产业数据',
    datasets: []
  },
  {
    id: 'smart-sensor',
    name: '智能传感器',
    icon: '📶',
    description: '涵盖 MEMS 传感器、光学传感器、生物传感器等智能传感器产业数据',
    datasets: []
  },
  {
    id: 'high-end-equipment',
    name: '高端装备与仪器',
    icon: '🔧',
    description: '覆盖高端数控机床、科学仪器、检测设备等高端装备与仪器产业数据',
    datasets: []
  },
  {
    id: 'digital-creative',
    name: '数字创意',
    icon: '🎨',
    description: '涵盖数字内容、数字娱乐、数字艺术等数字创意产业数据',
    datasets: []
  },
  {
    id: 'high-performance-materials',
    name: '高性能材料',
    icon: '🧪',
    description: '覆盖先进半导体材料、新能源材料、生物医用材料等高性能材料产业数据',
    datasets: []
  },
  {
    id: 'marine-industry',
    name: '海洋产业',
    icon: '🌊',
    description: '涵盖海洋工程、海洋生物、海洋新能源等海洋产业数据',
    datasets: []
  },
  {
    id: 'synthetic-biology',
    name: '合成生物',
    icon: '🧬',
    description: '覆盖合成生物学、基因编辑、生物制造等合成生物产业数据',
    datasets: []
  },
  {
    id: 'optoelectronic-info',
    name: '光载信息',
    icon: '💡',
    description: '涵盖光通信、光存储、光传感、光计算等光载信息产业数据',
    datasets: []
  },
  {
    id: 'intelligent-robot',
    name: '智能机器人',
    icon: '🦿',
    description: '覆盖人形机器人、协作机器人、特种机器人等智能机器人产业数据',
    datasets: []
  },
  {
    id: 'cell-gene',
    name: '细胞与基因',
    icon: '🧫',
    description: '涵盖细胞治疗、基因治疗、干细胞等细胞与基因产业数据',
    datasets: []
  },
  {
    id: 'brain-science',
    name: '脑科学与脑机工程',
    icon: '🧠',
    description: '覆盖脑机接口、脑科学、神经工程等脑科学与脑机工程产业数据',
    datasets: []
  },
  {
    id: 'deep-sea',
    name: '深地深海',
    icon: '⚓',
    description: '涵盖深海探测、深地资源开发等深地深海产业数据',
    datasets: []
  },
  {
    id: 'quantum-info',
    name: '量子信息',
    icon: '⚛️',
    description: '覆盖量子计算、量子通信、量子测量等量子信息产业数据',
    datasets: []
  },
  {
    id: 'advanced-new-materials',
    name: '前沿新材料',
    icon: '✨',
    description: '涵盖石墨烯、超材料、智能材料等前沿新材料产业数据',
    datasets: []
  },
  {
    id: 'biomedicine',
    name: '生物医药',
    icon: '💊',
    description: '覆盖创新药、生物制药、中药等生物医药产业数据',
    datasets: []
  },
  {
    id: 'big-health',
    name: '大健康',
    icon: '❤️',
    description: '涵盖健康管理、健康养老、健康保险等大健康产业数据',
    datasets: []
  },
  {
    id: 'high-end-medical',
    name: '高端医疗器械',
    icon: '🏥',
    description: '覆盖高端影像设备、体外诊断、手术机器人等高端医疗器械产业数据',
    datasets: []
  }
]

type ExpandedSection = 'element' | 'scene' | 'theme' | null

export function DataAPIsPage() {
  const [selectedElementCategory, setSelectedElementCategory] = useState<string>('enterprise')
  const [selectedSceneCategory, setSelectedSceneCategory] = useState<string>('investment-promotion')
  const [expandedSection, setExpandedSection] = useState<ExpandedSection>(null)

  const currentElementCategory = elementDataCategories.find(cat => cat.id === selectedElementCategory)

  const toggleSection = (section: ExpandedSection) => {
    setExpandedSection(prev => prev === section ? null : section)
  }

  const DetailSection = ({ title, icon, color, gradient, categories, selectedCategory, setSelectedCategory }: {
    title: string
    icon: string
    color: string
    gradient: string
    categories: typeof elementDataCategories
    selectedCategory: string
    setSelectedCategory: (id: string) => void
  }) => {
    const currentCat = categories.find(cat => cat.id === selectedCategory)

    return (
      <div style={{
        marginTop: '3rem',
        paddingTop: '3rem',
        borderTop: `1px solid ${color}`,
        animation: 'fadeIn 0.3s ease'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: color,
            marginBottom: '0.5rem'
          }}>
            <span style={{ marginRight: '8px' }}>{icon}</span>
            {title}
          </h2>
        </div>

        <div style={{
          background: 'rgba(15, 23, 42, 0.5)',
          borderRadius: '16px',
          padding: '2rem',
          border: `1px solid ${color}33`
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '2rem'
          }}>
            {/* 左侧边栏 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              borderRight: '1px solid rgba(71, 85, 105, 0.3)',
              paddingRight: '1.5rem'
            }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 16px',
                    background: selectedCategory === category.id
                      ? `${color}18`
                      : 'transparent',
                    border: selectedCategory === category.id
                      ? `2px solid ${color}`
                      : '1px solid transparent',
                    borderRadius: '8px',
                    color: selectedCategory === category.id
                      ? color
                      : '#CBD5E1',
                    fontSize: '0.9rem',
                    fontWeight: selectedCategory === category.id ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left'
                  }}
                  onMouseOver={(e) => {
                    if (selectedCategory !== category.id) {
                      e.currentTarget.style.background = `${color}15`
                      e.currentTarget.style.borderColor = `${color}50`
                    }
                  }}
                  onMouseOut={(e) => {
                    if (selectedCategory !== category.id) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = 'transparent'
                    }
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* 右侧内容区 */}
            <div>
              {currentCat && (
                <>
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#F1F5F9',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ fontSize: '1.3rem' }}>{currentCat.icon}</span>
                    {currentCat.name}
                  </h4>
                  <p style={{
                    color: '#94A3B8',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid rgba(71, 85, 105, 0.3)'
                  }}>
                    {currentCat.description}
                  </p>

                  {currentCat.datasets.length > 0 ? (
                    <>
                      <h5 style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#F1F5F9',
                        marginBottom: '1rem'
                      }}>
                        数据集清单
                      </h5>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem'
                      }}>
                        {currentCat.datasets.map((dataset) => (
                          <div
                            key={dataset.id}
                            style={{
                              background: 'rgba(30, 41, 59, 0.6)',
                              border: '1px solid rgba(71, 85, 105, 0.4)',
                              borderRadius: '10px',
                              padding: '1.25rem',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.borderColor = `${color}80`
                              e.currentTarget.style.background = 'rgba(30, 41, 59, 0.8)'
                              e.currentTarget.style.transform = 'translateY(-2px)'
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.4)'
                              e.currentTarget.style.background = 'rgba(30, 41, 59, 0.6)'
                              e.currentTarget.style.transform = 'translateY(0)'
                            }}
                          >
                            <h6 style={{
                              fontSize: '0.95rem',
                              fontWeight: 600,
                              color: '#F1F5F9',
                              marginBottom: '0.5rem'
                            }}>
                              {dataset.name}
                            </h6>
                            <p style={{
                              color: '#64748B',
                              fontSize: '0.8rem',
                              lineHeight: 1.5
                            }}>
                              {dataset.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div style={{
                      background: `${color}15`,
                      border: `1px dashed ${color}50`,
                      borderRadius: '10px',
                      padding: '2rem',
                      textAlign: 'center'
                    }}>
                      <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                        数据集清单即将推出，敬请期待...
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 50%, #0F1729 100%)',
      minHeight: '100vh',
      paddingBottom: '4rem'
    }}>
      {/* 顶部 Banner */}
      <div style={{
        position: 'relative',
        background: 'url(/Pic4DataAPI/1.png) center/cover no-repeat',
        borderBottom: '1px solid rgba(108, 99, 255, 0.2)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.5) 0%, rgba(108, 99, 255, 0.4) 100%)',
        }} />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '1rem',
            letterSpacing: '2px',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
          }}>
            数据 API 服务
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#E2E8F0',
            marginBottom: '2.5rem',
            fontWeight: 300,
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
          }}>
            国家级数据接口，海量数据支撑，赋能 AI 应用开发
          </p>

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
              为 AI OPC 创业者提供国家级产业数据接口，快速获取知识产权、政策融资等关键要素信息，
              以精准数据洞察辅助决策，降低开发门槛，加速应用落地进程。
            </p>
          </div>
        </div>
      </div>

      {/* 核心数据服务 */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#F1F5F9',
            marginBottom: '0.5rem'
          }}>
            核心数据服务
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #6C63FF, #8A84FF)',
            margin: '0 auto'
          }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: expandedSection ? '0' : '2rem'
        }}>
          {/* 要素数据 */}
          <div
            onClick={() => toggleSection('element')}
            style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: expandedSection === 'element' ? '2px solid #6C63FF' : '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '16px',
              padding: '2.5rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              if (expandedSection !== 'element') {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
              }
            }}
            onMouseOut={(e) => {
              if (expandedSection !== 'element') {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                e.currentTarget.style.boxShadow = 'none'
              }
            }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              background: 'linear-gradient(135deg, #6C63FF, #8A84FF)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#F1F5F9',
              marginBottom: '1rem'
            }}>
              要素数据
            </h3>
            <p style={{
              color: '#94A3B8',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              margin: 0
            }}>
              涵盖产业发展所需的核心要素信息 API 服务，包括知识产权、市场主体、政策法规、投融资等关键领域，为产业分析、决策支持提供数据支撑。
            </p>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #6C63FF, #8A84FF)',
              transform: expandedSection === 'element' ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.3s ease'
            }} />
          </div>

          {/* 场景数据 */}
          <div
            onClick={() => toggleSection('scene')}
            style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: expandedSection === 'scene' ? '2px solid #3B82F6' : '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '16px',
              padding: '2.5rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              if (expandedSection !== 'scene') {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
              }
            }}
            onMouseOut={(e) => {
              if (expandedSection !== 'scene') {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                e.currentTarget.style.boxShadow = 'none'
              }
            }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#F1F5F9',
              marginBottom: '1rem'
            }}>
              场景数据
            </h3>
            <p style={{
              color: '#94A3B8',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              margin: 0
            }}>
              提供面向具体业务场景的综合数据服务 API，支持招商引资、企业服务、产业治理等各类应用场景的深度数据融合与智能分析。
            </p>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #3B82F6, #2563EB)',
              transform: expandedSection === 'scene' ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.3s ease'
            }} />
          </div>

          {/* 主题数据 */}
          <div
            onClick={() => toggleSection('theme')}
            style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: expandedSection === 'theme' ? '2px solid #10B981' : '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '16px',
              padding: '2.5rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              if (expandedSection !== 'theme') {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.5)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
              }
            }}
            onMouseOut={(e) => {
              if (expandedSection !== 'theme') {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'
                e.currentTarget.style.boxShadow = 'none'
              }
            }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              background: 'linear-gradient(135deg, #10B981, #059669)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.5-6.5l-4.5 4.5m-4 4L7.5 16.5m9 0l-4.5-4.5m-4 4L3.5 7.5" />
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#F1F5F9',
              marginBottom: '1rem'
            }}>
              主题数据
            </h3>
            <p style={{
              color: '#94A3B8',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              margin: 0
            }}>
              围绕战略性新兴产业集群和未来产业产业链与特定领域策划的深度专题包，如人工智能、半导体与集成电路、生物医药等。
            </p>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #10B981, #059669)',
              transform: expandedSection === 'theme' ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.3s ease'
            }} />
          </div>
        </div>

        {/* 要素数据详细内容区 */}
        {expandedSection === 'element' && (
          <DetailSection
            title="要素数据"
            icon="📊"
            color="#6C63FF"
            gradient="linear-gradient(135deg, #6C63FF, #8A84FF)"
            categories={elementDataCategories}
            selectedCategory={selectedElementCategory}
            setSelectedCategory={setSelectedElementCategory}
          />
        )}

        {/* 场景数据详细内容区 */}
        {expandedSection === 'scene' && (
          <div style={{
            marginTop: '3rem',
            paddingTop: '3rem',
            borderTop: '1px solid #3B82F6',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#3B82F6',
                marginBottom: '0.5rem'
              }}>
                <span style={{ marginRight: '8px' }}>🎯</span>
                场景数据
              </h2>
            </div>

            <div style={{
              background: 'rgba(15, 23, 42, 0.5)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid #3B82F633'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: '2rem'
              }}>
                {/* 左侧边栏 */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  borderRight: '1px solid rgba(71, 85, 105, 0.3)',
                  paddingRight: '1.5rem'
                }}>
                  {sceneDataCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedSceneCategory(category.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 16px',
                        background: selectedSceneCategory === category.id
                          ? '#3B82F618'
                          : 'transparent',
                        border: selectedSceneCategory === category.id
                          ? '2px solid #3B82F6'
                          : '1px solid transparent',
                        borderRadius: '8px',
                        color: selectedSceneCategory === category.id
                          ? '#3B82F6'
                          : '#CBD5E1',
                        fontSize: '0.9rem',
                        fontWeight: selectedSceneCategory === category.id ? 600 : 400,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textAlign: 'left'
                      }}
                      onMouseOver={(e) => {
                        if (selectedSceneCategory !== category.id) {
                          e.currentTarget.style.background = '#3B82F615'
                          e.currentTarget.style.borderColor = '#3B82F650'
                        }
                      }}
                      onMouseOut={(e) => {
                        if (selectedSceneCategory !== category.id) {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.borderColor = 'transparent'
                        }
                      }}
                    >
                      <span style={{ fontSize: '1.1rem' }}>{category.icon}</span>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>

                {/* 右侧内容区 */}
                <div>
                  {sceneDataCategories.map((category) => (
                    selectedSceneCategory === category.id && (
                      <div key={category.id}>
                        <h4 style={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#F1F5F9',
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <span style={{ fontSize: '1.3rem' }}>{category.icon}</span>
                          {category.name}
                        </h4>
                        <p style={{
                          color: '#94A3B8',
                          fontSize: '0.9rem',
                          lineHeight: 1.7,
                          marginBottom: '1.5rem',
                          paddingBottom: '1.5rem',
                          borderBottom: '1px solid rgba(71, 85, 105, 0.3)'
                        }}>
                          {category.description}
                        </p>

                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem'
                        }}>
                          {category.datasets.map((dataset) => (
                            <div
                              key={dataset.id}
                              style={{
                                background: 'rgba(30, 41, 59, 0.6)',
                                borderRadius: '10px',
                                padding: '1.25rem 1.5rem',
                                borderLeft: '3px solid #3B82F6',
                                transition: 'all 0.3s ease'
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(30, 41, 59, 0.8)'
                                e.currentTarget.style.transform = 'translateX(4px)'
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)'
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.background = 'rgba(30, 41, 59, 0.6)'
                                e.currentTarget.style.transform = 'translateX(0)'
                                e.currentTarget.style.boxShadow = 'none'
                              }}
                            >
                              <h5 style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: '#F1F5F9',
                                marginBottom: '0.5rem'
                              }}>
                                {dataset.name}
                              </h5>
                              <p style={{
                                color: '#94A3B8',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                margin: 0
                              }}>
                                {dataset.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 主题数据详细内容区 */}
        {expandedSection === 'theme' && (
          <div style={{
            marginTop: '3rem',
            paddingTop: '3rem',
            borderTop: '1px solid #10B981',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#10B981',
                marginBottom: '0.5rem'
              }}>
                <span style={{ marginRight: '8px' }}>🌐</span>
                主题数据
              </h2>
            </div>

            {/* 定制化高质量数据集 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#A78BFA',
                marginBottom: '1.5rem',
                paddingLeft: '1rem',
                borderLeft: '4px solid #A78BFA'
              }}>
                定制化高质量数据集
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {themeDataCustom.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: 'rgba(30, 41, 59, 0.8)',
                      border: '1px solid rgba(167, 139, 250, 0.3)',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.6)'
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(167, 139, 250, 0.2)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.3)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <h4 style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>{item.icon}</span>
                      {item.name}
                    </h4>
                    <p style={{
                      color: '#94A3B8',
                      fontSize: '0.85rem',
                      lineHeight: 1.7
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 战略性新兴产业集群和未来产业高质量数据集 */}
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#10B981',
                marginBottom: '1.5rem',
                paddingLeft: '1rem',
                borderLeft: '4px solid #10B981'
              }}>
                战略性新兴产业集群和未来产业高质量数据集
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '1rem'
              }}>
                {themeDataStrategic.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: 'rgba(30, 41, 59, 0.6)',
                      border: '1px solid rgba(71, 85, 105, 0.4)',
                      borderRadius: '10px',
                      padding: '0.8rem 1rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.5)'
                      e.currentTarget.style.background = 'rgba(30, 41, 59, 0.8)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.4)'
                      e.currentTarget.style.background = 'rgba(30, 41, 59, 0.6)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                    <span style={{
                      color: '#CBD5E1',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 立即申请按钮 */}
      <section style={{ textAlign: 'center', padding: '2rem' }}>
        <a
          href="https://ucn19uuu5wk8.feishu.cn/share/base/form/shrcnxTEftyaGTXZmW8RXqnyv0f"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button style={{
            background: 'linear-gradient(135deg, #FF6584, #6C63FF)',
            border: 'none',
            color: 'white',
            padding: '16px 64px',
            borderRadius: '16px',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 30px rgba(255, 101, 132, 0.4)'
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 101, 132, 0.5)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 101, 132, 0.4)'
            }}>
            已入驻？申请数据 API 支持 <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
        </a>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
