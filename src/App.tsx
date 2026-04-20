import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { FloatingFeedback } from './components/FloatingFeedback'
import { HomePage } from './pages/Home'
import { DataAPIsPage } from './pages/DataAPIs'
import { CloudResourcesPage } from './pages/CloudResources'
import { SpacePage } from './pages/Space'
import { AboutPage } from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation()
  
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data-apis" element={<div className="container mx-auto px-4 py-8"><DataAPIsPage /></div>} />
          <Route path="/cloud-resources" element={<div className="container mx-auto px-4 py-8"><CloudResourcesPage /></div>} />
          <Route path="/space" element={<div className="container mx-auto px-4 py-8"><SpacePage /></div>} />
          <Route path="/about" element={<div className="container mx-auto px-4 py-8"><AboutPage /></div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <FloatingFeedback currentPath={location.pathname} />
    </>
  )
}

export default App
