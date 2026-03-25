export interface User {
  id: string
  email: string
  name: string
  role: 'developer' | 'student' | 'admin'
  createdAt: string
}

export interface Model {
  id: string
  name: string
  provider: string
  description: string
  price: string
  category: string
}

export interface DataAPI {
  id: string
  name: string
  category: string
  description: string
  endpoint: string
  rateLimit: string
}

export interface CloudResource {
  id: string
  type: 'vm' | 'storage' | 'database'
  name: string
  spec: string
  price: string
  region: string
}

export interface Space {
  id: string
  name: string
  location: string
  capacity: number
  available: number
  amenities: string[]
  price: string
}

export interface Policy {
  id: string
  type: 'financing' | 'talent' | 'news'
  title: string
  summary: string
  date: string
  source: string
}

export interface Course {
  id: string
  title: string
  instructor: string
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
  enrolledCount: number
  price: string
}

export interface Demand {
  id: string
  company: string
  title: string
  description: string
  budget: string
  deadline: string
  skills: string[]
  status: 'open' | 'in_progress' | 'closed'
}

export interface Event {
  id: string
  title: string
  type: 'workshop' | 'meetup' | 'competition'
  date: string
  location: string
  participants: number
  maxParticipants: number
  status: 'upcoming' | 'ongoing' | 'ended'
}
