import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockSpaces } from '@/data/mockData'
import { MapPin, Users, Check, Building } from 'lucide-react'

export function SpacePage() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #0F1729 0%, #1E293B 100%)', minHeight: '100vh', padding: '40px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold" style={{ color: '#F1F5F9' }}>创客空间入驻</h1>
            <p style={{ color: '#94A3B8' }}>申请入驻创客空间,享受专业的办公环境和创业服务</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockSpaces.map((space) => (
              <Card key={space.id} className="hover:shadow-lg transition-shadow" style={{ background: '#1E293B', border: '1px solid #475569' }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg" style={{ color: '#F1F5F9' }}>{space.name}</CardTitle>
                    <Badge variant="secondary">
                      <Users className="h-3 w-3 mr-1" />
                      {space.available}/{space.capacity}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1" style={{ color: '#94A3B8' }}>
                    <MapPin className="h-4 w-4" />
                    {space.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2" style={{ color: '#F1F5F9' }}>配套设施</p>
                    <div className="flex flex-wrap gap-2">
                      {space.amenities.map((amenity) => (
                        <Badge key={amenity} variant="outline" className="gap-1" style={{ borderColor: '#475569', color: '#94A3B8' }}>
                          <Check className="h-3 w-3" />
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold" style={{ color: '#A5B4FC' }}>{space.price}</p>
                      <p className="text-xs" style={{ color: '#64748B' }}>每工位每月</p>
                    </div>
                    <Button className="gap-2" style={{ background: 'linear-gradient(135deg, #6C63FF, #8A84FF)', border: 'none', color: 'white' }}>
                      <Building className="h-4 w-4" />
                      申请入驻
                    </Button>
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
