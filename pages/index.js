import React from 'react'
import { ThemeProvider } from 'styled-components'

import StorePicker from '../components/StorePicker'
import App from '../components/App'
import { theme } from '../theme/globalStyle'

export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
