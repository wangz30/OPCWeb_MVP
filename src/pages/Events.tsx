import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockEvents } from '@/data/mockData'
import { Calendar, MapPin, Users, Ticket } from 'lucide-react'

export function EventsPage() {
  const typeConfig = {
    workshop: { label: '工作坊', icon: Ticket },
    meetup: { label: '交流沙龙', icon: Users },
    competition: { label: '比赛', icon: Calendar },
  }

  const statusConfig = {
    upcoming: { label: '即将开始', color: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20' },
    ongoing: { label: '进行中', color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20' },
    ended: { label: '已结束', color: 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20' },
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 100%)', minHeight: '100vh', padding: '40px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold" style={{ color: '#F1F5F9' }}>活动资讯</h1>
            <p style={{ color: '#94A3B8' }}>参与各类活动,拓展人脉,学习新知识</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockEvents.map((event) => {
              const TypeIcon = typeConfig[event.type].icon
              const progress = (event.participants / event.maxParticipants) * 100
              return (
                <Card key={event.id} className="hover:shadow-lg transition-shadow" style={{ background: '#1E293B', border: '1px solid #475569' }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge className={statusConfig[event.status].color as string}>
                        {statusConfig[event.status].label}
                      </Badge>
                      <Badge variant="outline" className="gap-1" style={{ borderColor: '#475569', color: '#94A3B8' }}>
                        <TypeIcon className="h-3 w-3" />
                        {typeConfig[event.type].label}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-2" style={{ color: '#F1F5F9' }}>{event.title}</CardTitle>
                    <div className="space-y-1 text-sm" style={{ color: '#94A3B8' }}>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span style={{ color: '#64748B' }}>报名进度</span>
                        <span className="font-medium" style={{ color: '#F1F5F9' }}>{event.participants}/{event.maxParticipants}</span>
                      </div>
                      <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: '#334155' }}>
                        <div
                          className="h-full transition-all"
                          style={{ width: `${Math.min(progress, 100)}%`, background: '#6C63FF' }}
                        />
                      </div>
                    </div>
                    <Button
                      className="w-full"
                      disabled={event.status === 'ended' || event.participants >= event.maxParticipants}
                      style={{ 
                        background: event.status === 'ended' || event.participants >= event.maxParticipants ? '#475569' : 'linear-gradient(135deg, #6C63FF, #8A84FF)', 
                        border: 'none', 
                        color: 'white' 
                      }}
                    >
                      {event.status === 'ended' ? '已结束' : event.participants >= event.maxParticipants ? '名额已满' : '立即报名'}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
