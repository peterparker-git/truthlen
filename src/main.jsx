import React from 'react'
import ReactDOM from 'react-dom/client'
import Popup from './popup/popup'
import { Toaster } from 'react-hot-toast'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Popup />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  </React.StrictMode>,
)
