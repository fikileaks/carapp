import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
// Importing Font Helvetica
import '../src/font/Helvetica-Bold.ttf';
import '../src/font/Helvetica-BoldOblique.ttf'
import '../src/font/helvetica-compressed-5871d14b6903a.otf'
import '../src/font/helvetica-light-587ebe5a59211.ttf'
import '../src/font/Helvetica-Oblique.ttf'
import '../src/font/helvetica-rounded-bold-5871d05ead8de.otf'
import '../src/font/Helvetica.ttf'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
