import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ItemContextProvider from '../store/ItemContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItemContextProvider>
    <App />
    </ItemContextProvider>
  </React.StrictMode>,
)
