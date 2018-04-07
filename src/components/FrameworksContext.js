import { createContext, Component } from 'react'

const FrameworkContext = createContext()

class FrameworkProvider extends Component {
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

// export const FrameworkConsumer = FrameworkContext.Consumer
