import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EchangoApp } from './EchangoApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <EchangoApp/>
    </StrictMode>
  </BrowserRouter>
)
