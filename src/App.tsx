import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { FloatingFeedback } from './components/FloatingFeedback'
import { LoginForm } from './components/auth/LoginForm'
import { RegisterForm } from './components/auth/RegisterForm'
import { HomePage } from './pages/Home'
import { ModelsPage } from './pages/Models'
import { DataAPIsPage } from './pages/DataAPIs'
import { CloudResourcesPage } from './pages/CloudResources'
import { SpacePage } from './pages/Space'
import { PoliciesPage } from './pages/Policies'
import { CoursesPage } from './pages/Courses'
import { DemandsPage } from './pages/Demands'
import { EventsPage } from './pages/Events'
import { ResourcesPage } from './pages/Resources'
import { SolutionsPage } from './pages/Solutions'
import { ProductsPage } from './pages/Products'
import { ActivitiesPage } from './pages/Activities'
import { MarketplacePage } from './pages/Marketplace'
import { DashboardPage } from './pages/Dashboard'
import { User } from './types'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [user, setUser] = useState<User | undefined>()

  const handleLogin = (email: string, password: string) => {
    console.log('Login:', { email, password })
    setIsAuthenticated(true)
    setUser({
      id: '1',
      email,
      name: email.split('@')[0],
      role: 'developer',
      createdAt: new Date().toISOString(),
    })
  }

  const handleRegister = (name: string, email: string, password: string, role: string) => {
    console.log('Register:', { name, email, role })
    setIsAuthenticated(true)
    setUser({
      id: '1',
      email,
      name,
      role: role as 'developer' | 'student' | 'admin',
      createdAt: new Date().toISOString(),
    })
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(undefined)
  }

  return (
    <BrowserRouter>
      <MainContent 
        isAuthenticated={isAuthenticated}
        showRegister={showRegister}
        user={user}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        handleLogout={handleLogout}
      />
    </BrowserRouter>
  )
}

interface MainContentProps {
  isAuthenticated: boolean
  showRegister: boolean
  user: User | undefined
  handleLogin: (email: string, password: string) => void
  handleRegister: (name: string, email: string, password: string, role: string) => void
  handleLogout: () => void
}

function MainContent({ isAuthenticated, showRegister, user, handleLogin, handleRegister, handleLogout }: MainContentProps) {
  const location = useLocation()
  
  return (
    <>
      <Routes>
        {/* 后台管理页面 - 独立布局，无顶部导航 */}
        <Route path="/dashboard" element={<DashboardPage />} />
        
        {/* 前台页面 - 含顶部导航 */}
        <Route path="/*" element={
          <div className="min-h-screen bg-background">
            <Navigation isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/login" element={
                  isAuthenticated ? <Navigate to="/" replace /> : 
                  <div className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950 flex items-center justify-center">
                    {showRegister ? (
                      <RegisterForm onRegister={handleRegister} onBackToLogin={() => setShowRegister(false)} />
                    ) : (
                      <LoginForm onLogin={handleLogin} onRegister={() => setShowRegister(true)} />
                    )}
                  </div>
                } />
                <Route path="/register" element={
                  isAuthenticated ? <Navigate to="/" replace /> :
                  <div className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950 flex items-center justify-center">
                    <RegisterForm onRegister={handleRegister} onBackToLogin={() => setShowRegister(false)} />
                  </div>
                } />
                <Route path="/models" element={<div className="container mx-auto px-4 py-8"><ModelsPage /></div>} />
                <Route path="/data-apis" element={<div className="container mx-auto px-4 py-8"><DataAPIsPage /></div>} />
                <Route path="/cloud-resources" element={<div className="container mx-auto px-4 py-8"><CloudResourcesPage /></div>} />
                <Route path="/space" element={<div className="container mx-auto px-4 py-8"><SpacePage /></div>} />
                <Route path="/policies" element={<div className="container mx-auto px-4 py-8"><PoliciesPage /></div>} />
                <Route path="/courses" element={<div className="container mx-auto px-4 py-8"><CoursesPage /></div>} />
                <Route path="/demands" element={<div className="container mx-auto px-4 py-8"><DemandsPage /></div>} />
                <Route path="/events" element={<div className="container mx-auto px-4 py-8"><EventsPage /></div>} />
                <Route path="/resources" element={<div className="container mx-auto px-4 py-0"><ResourcesPage /></div>} />
                <Route path="/activities" element={<div className="container mx-auto px-4 py-0"><ActivitiesPage /></div>} />
                <Route path="/marketplace" element={<div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', width: '100%' }}><MarketplacePage /></div>} />
                <Route path="/startup-resources" element={<div className="container mx-auto px-4 py-8"><HomePage /></div>} />
                <Route path="/about" element={<div className="container mx-auto px-4 py-8"><HomePage /></div>} />
                <Route path="/events/review" element={<div className="container mx-auto px-4 py-8"><EventsPage /></div>} />
                <Route path="/community" element={<div className="container mx-auto px-4 py-8"><HomePage /></div>} />
                <Route path="/data-community" element={<div className="container mx-auto px-4 py-8"><HomePage /></div>} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        } />
      </Routes>
      <FloatingFeedback currentPath={location.pathname} />
    </>
  )
}

export default App
