import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import CreateClass from './Pages/CreateClass.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateClass />
  </StrictMode>,
)
