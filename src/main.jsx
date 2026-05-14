import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App.jsx';
import './index.css';

// Lazy load non-critical pages
const ArticlesPage = lazy(() => import('./pages/ArticlesPage.jsx'));
const InnovationsPage = lazy(() => import('./pages/InnovationsPage.jsx'));
const Alumni = lazy(() => import('./pages/alumni.jsx'));
const AletuApp = lazy(() => import('./aletu/AletuApp.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/innovations" element={<InnovationsPage />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/aletu/*" element={<AletuApp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
