import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes'

import './index.css';

import AuthContextProvider from './hooks/Auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  </React.StrictMode>,
)
