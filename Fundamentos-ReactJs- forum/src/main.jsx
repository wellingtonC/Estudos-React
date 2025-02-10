import { StrictMode } from 'react'
import { App } from './App.jsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render
(
  <StrictMode>
    <App />
  </StrictMode>,
)