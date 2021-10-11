import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ChatProvider from './context/ChatProvider'

ReactDOM.render(
  <ChatProvider>
    <App />
  </ChatProvider>,
  document.getElementById('root')
)