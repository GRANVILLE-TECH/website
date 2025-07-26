import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ArticlesPage from './pages/ArticlesPage.jsx'
import InnovationsPage from './pages/InnovationsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/innovations" element={<InnovationsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
