import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockCourses } from '@/data/mockData'
import { BookOpen, Clock, Users, Star } from 'lucide-react'

export function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>('all')

  const levelConfig = {
    all: { label: '全部', color: 'default' },
    beginner: { label: '入门', color: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20' },
    intermediate: { label: '进阶', color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20' },
    advanced: { label: '高级', color: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20' },
  }

  const filteredCourses = selectedLevel === 'all'
    ? mockCourses
    : mockCourses.filter((c) => c.level === selectedLevel)

  return (
    <div style={{ background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 100%)', minHeight: '100vh', padding: '40px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold" style={{ color: '#F1F5F9' }}>培训课程</h1>
            <p style={{ color: '#94A3B8' }}>系统学习创业知识和技能,提升您的竞争力</p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {(Object.keys(levelConfig) as Array<keyof typeof levelConfig>).map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? 'default' : 'outline'}
                onClick={() => setSelectedLevel(level)}
                size="sm"
                style={{ 
                  background: selectedLevel === level ? 'linear-gradient(135deg, #6C63FF, #8A84FF)' : 'transparent',
                  borderColor: selectedLevel === level ? '#6C63FF' : '#475569',
                  color: selectedLevel === level ? 'white' : '#94A3B8'
                }}
              >
                {levelConfig[level].label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow" style={{ background: '#1E293B', border: '1px solid #475569' }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge className={levelConfig[course.level].color as string}>
                      {levelConfig[course.level].label}
                    </Badge>
                    <div className="flex items-center text-xs gap-1" style={{ color: '#94A3B8' }}>
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      4.8
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2" style={{ color: '#F1F5F9' }}>{course.title}</CardTitle>
                  <CardDescription style={{ color: '#94A3B8' }}>讲师: {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs" style={{ borderColor: '#475569', color: '#94A3B8' }}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm" style={{ color: '#94A3B8' }}>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.enrolledCount}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{ color: '#A5B4FC' }}>{course.price}</span>
                    <Button size="sm" style={{ background: 'linear-gradient(135deg, #6C63FF, #8A84FF)', border: 'none', color: 'white' }}>立即报名</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
