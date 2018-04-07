import React, { createContext, Component } from 'react'

export const FrameworkContext = createContext()

export class FrameworkProvider extends Component {
  state = {
    name: 'Scott',
    age: 40,
    feelingOld: true
  }
  render() {
    return (
      <FrameworkContext.Provider
        value={{
          state: this.state
        }}>
        {this.props.children}
      </FrameworkContext.Provider>
    )
  }
}
