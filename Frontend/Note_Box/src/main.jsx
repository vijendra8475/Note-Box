import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import { Route, Routes } from "react-router"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </StrictMode>,
)
