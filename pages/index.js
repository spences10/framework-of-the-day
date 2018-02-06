import React from 'react'
// import Link from 'next/link'

import { ThemeProvider } from 'styled-components'

import StorePicker from '../components/StorePicker'
import App from '../components/App'
import { theme } from '../theme/globalStyle'

// const Main = () => {
//   return(
//     Link
//   )
// }

export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
