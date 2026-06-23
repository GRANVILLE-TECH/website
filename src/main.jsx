import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App.jsx';
import './index.css';
import './i18n';
import { registerSW } from 'virtual:pwa-register';

// Register the PWA service worker
if ('serviceWorker' in navigator) {
  registerSW({ immediate: true });
}

// Lazy load non-critical pages
const ArticlesPage = lazy(() => import('./pages/ArticlesPage.jsx'));
const InnovationsPage = lazy(() => import('./pages/InnovationsPage.jsx'));
const Alumni = lazy(() => import('./pages/alumni.jsx'));
const AletuApp = lazy(() => import('./aletu/AletuApp.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const LecturePage = lazy(() => import('./pages/LecturePage.jsx'));

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
          <Route path="/about" element={<App />} />
          <Route path="/innovations" element={<App />} />
          <Route path="/services" element={<App />} />
          <Route path="/booking" element={<App />} />
          <Route path="/resources" element={<App />} />
          <Route path="/partners" element={<App />} />
          <Route path="/contact" element={<App />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/aletu/*" element={<AletuApp />} />
          <Route path="/lecture" element={<LecturePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
