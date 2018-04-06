import React from 'react'
import ReactDOM from 'react-dom'

import Router from './components/Router'
import { FrameworkProvider } from './FrameworksContext'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <FrameworkProvider>
    <Router />
  </FrameworkProvider>,

  document.getElementById('root')
)
registerServiceWorker()
