import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="TU_CLIENT_ID_DE_GOOGLE">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
