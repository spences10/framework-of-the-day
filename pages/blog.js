import React from 'react'
import { Router } from '../routes'

export default class Blog extends React.Component {
  handleClick() {
    // With route name and params
    Router.pushRoute('blog', { slug: 'hello-world' })
    // With route URL
    Router.pushRoute('/')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Home</button>
      </div>
    )
  }
}
