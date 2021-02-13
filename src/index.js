import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {ThemeProvider} from "styled-components"
import { theme } from './themes/theme'
import App from './App'


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
  ,
  document.getElementById('root')
)

