import React, { createContext, Component } from 'react'

const FrameworkContext = React.createContext()

class FrameworkProvider extends React.Component {
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

export default FrameworkProvider
