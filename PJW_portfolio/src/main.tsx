import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from './router.tsx'
import Header from './component/layout/Header.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter />
    <Header />
  </StrictMode>,
)
