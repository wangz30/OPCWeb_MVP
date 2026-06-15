import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BackendApp from './BackendApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BackendApp />
  </StrictMode>,
)
