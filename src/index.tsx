import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyle, GlobalReset } from '@/styles/global'

import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <GlobalReset />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)