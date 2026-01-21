import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import ArticlesPage from './pages/ArticlesPage.jsx';
import InnovationsPage from './pages/InnovationsPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/innovations" element={<InnovationsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
