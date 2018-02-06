import React from 'react'
import { ThemeProvider } from 'styled-components'

import StorePicker from '../components/StorePicker'
import { theme } from '../theme/globalStyle'

export default () => (
  <ThemeProvider theme={theme}>
    <StorePicker />
  </ThemeProvider>
)
