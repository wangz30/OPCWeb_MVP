import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockDemands } from '@/data/mockData'
import { Building2, DollarSign, Calendar, Tag } from 'lucide-react'
import { Footer } from '@/components/Footer'

export function DemandsPage() {
  const statusConfig = {
    open: { label: '招募中', color: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20' },
    in_progress: { label: '进行中', color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20' },
    closed: { label: '已关闭', color: 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20' },
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 100%)', minHeight: '100vh', padding: '40px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold" style={{ color: '#F1F5F9' }}>企业AI需求对接</h1>
            <p style={{ color: '#94A3B8' }}>查看企业的AI项目需求,展示您的技术能力</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {mockDemands.map((demand) => (
              <Card key={demand.id} className="hover:shadow-md transition-shadow" style={{ background: '#1E293B', border: '1px solid #475569' }}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className={statusConfig[demand.status].color as string}>
                          {statusConfig[demand.status].label}
                        </Badge>
                        <div className="flex items-center text-sm gap-1" style={{ color: '#94A3B8' }}>
                          <Building2 className="h-4 w-4" />
                          {demand.company}
                        </div>
                      </div>
                      <CardTitle className="text-lg" style={{ color: '#F1F5F9' }}>{demand.title}</CardTitle>
                      <CardDescription className="text-sm" style={{ color: '#94A3B8' }}>{demand.description}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {demand.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs" style={{ borderColor: '#475569', color: '#94A3B8' }}>
                            <Tag className="h-3 w-3 mr-1" />
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3 text-right min-w-[150px]">
                      <div>
                        <div className="flex items-center justify-end gap-1 text-sm" style={{ color: '#64748B' }}>
                          <DollarSign className="h-4 w-4" />
                          预算
                        </div>
                        <p className="text-lg font-bold" style={{ color: '#A5B4FC' }}>{demand.budget}</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-end gap-1 text-sm" style={{ color: '#64748B' }}>
                          <Calendar className="h-4 w-4" />
                          截止日期
                        </div>
                        <p className="text-sm font-medium" style={{ color: '#F1F5F9' }}>{demand.deadline}</p>
                      </div>
                      <Button className="w-full" style={{ background: 'linear-gradient(135deg, #6C63FF, #8A84FF)', border: 'none', color: 'white' }}>立即接单</Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
