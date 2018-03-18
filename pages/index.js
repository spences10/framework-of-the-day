import React from 'react'
// import Head from '../components/head'
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

// export default () => (
//   <ThemeProvider theme={theme}>
//     <StorePicker />
//   </ThemeProvider>
// )

import { Link } from '../routes'

export default () => (
  <div>
    <div>Welcome to Next.js!</div>
    <Link route="blog" params={{ slug: 'hello-world' }}>
      <a>Hello world</a>
    </Link>
    or
    <Link route="/blog/hello-world">
      <a>Hello world</a>
    </Link>
  </div>
)
