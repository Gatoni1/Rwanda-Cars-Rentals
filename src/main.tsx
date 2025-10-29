import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import './index.css'
import { initGA, initSentry } from './utils/analytics'

// Initialize analytics and error tracking
if (import.meta.env.MODE === 'production') {
  initGA();
  initSentry();
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
