import React, { createContext, Component } from 'react'

export const FrameworkContext = createContext()

export class FrameworkProvider extends Component {
  state = {
    frameworks: {},
    order: {}
  }
  render() {
    return (
      <FrameworkContext.Provider
        value={{
          state: this.state,

          // used set and update state
          addFramework: framework => {
            // spread current state into a var
            const frameworks = { ...this.state.frameworks }
            const timestamp = Date.now()
            frameworks[`framework-${timestamp}`] = framework
            // set state with new data frameworks: frameworks or just frameworks
            this.setState({ frameworks })
          },

          updateFramework: (key, updatedFramework) => {
            const frameworks = { ...this.state.frameworks }
            frameworks[key] = updatedFramework
            this.setState({ frameworks })
          },

          removeFramework: key => {
            // copy state
            const frameworks = { ...this.state.frameworks }
            // delete w/ null
            frameworks[key] = null
            // update state
            this.setState({ frameworks })
          },

          loadSamples: () => {
            this.setState({
              frameworks: sampleFrameworks
            })
          },

          addToOrder: key => {
            // copy state into var
            const order = { ...this.state.order }
            // update the order or add new
            order[key] = order[key] + 1 || 1
            // update state
            this.setState({ order })
          },

          removeFromOrder: key => {
            const order = { ...this.state.order }
            delete order[key]
            this.setState({ order })
          }
        }}>
        {this.props.children}
      </FrameworkContext.Provider>
    )
  }
}

// example usage
// <FrameworkContext.Consumer>
//   {context => (
//     <React.Fragment>
//       <p>Name:{context.state.name}</p>
//     </React.Fragment>
//   )}
// </FrameworkContext.Consumer>
