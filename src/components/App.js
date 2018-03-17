import React from 'react'
import styled from 'styled-components'

import { media } from '../theme/globalStyle'

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Framework from './Framework'

import { StyledButton } from '../theme/components'
import sampleFrameworks from '../sample-frameworks'

const FrameworkOfTheDay = styled.div`
  /* min-height: 100vh; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 'h h h h o o o o i i i i';
  background: ${props => props.theme.white};
  /* background: papayawhip; */

  ${media.giant`
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      'h h h h o o o o i i i i';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      'h h h h o o o o'
      'i i i i . . . .';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      'h h h h'
      'o o o o'
      'i i i i';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      'h h h h'
      'o o o o'
      'i i i i';
      /* background: palevioletred; */
  `};
`

const Menu = styled.div`
  grid-area: h;
`

const FormTitle = styled.h2``

const StoreName = styled.input.attrs({
  type: 'text',
  required: true,
  placeholder: 'Store Name'
})`
  width: 100%;
  text-align: center;
`

const VisitStore = StyledButton.extend.attrs({
  type: 'submit'
})`
  width: 100%;
  text-align: center;
`

const ListOfFrameworks = styled.ul`
  margin: 0rem;
  padding: 0rem;
  /* display: grid;
  grid-template-columns: 1;
  grid-template-rows: auto; */
`

class App extends React.Component {
  state = {
    frameworks: {},
    order: {}
  }

  componentWillMount() {}

  componentDidMount() {
    const localStorageRef = localStorage.getItem(
      'framework-of-the-day'
    )

    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      })
      this.loadSamples()
    }
  }

  componentWillUnmount() {}

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      'framework-of-the-day',
      JSON.stringify(nextState.order)
    )
  }

  // used set and update state
  addFramework = framework => {
    // spread current state into a var
    const frameworks = { ...this.state.frameworks }
    const timestamp = Date.now()
    frameworks[`framework-${timestamp}`] = framework
    // set state with new data frameworks: frameworks or just frameworks
    this.setState({ frameworks })
  }

  updateFramework = (key, updatedFramework) => {
    const frameworks = { ...this.state.frameworks }
    frameworks[key] = updatedFramework
    this.setState({ frameworks })
  }

  removeFramework = key => {
    const frameworks = { ...this.state.frameworks }
    delete frameworks[key]
    this.setState({ frameworks })
  }

  loadSamples = () => {
    this.setState({
      frameworks: sampleFrameworks
    })
  }

  addToOrder = key => {
    // copy state into var
    const order = { ...this.state.order }
    // update the order or add new
    order[key] = order[key] + 1 || 1
    // update state
    this.setState({ order })
  }

  removeFromOrder = key => {
    const order = { ...this.state.order }
    delete order[key]
    this.setState({ order })
  }

  render() {
    return (
      <FrameworkOfTheDay>
        <Menu>
          <Header tagline={'Fresh JS Framework Market'} />
          <ListOfFrameworks>
            {Object.keys(this.state.frameworks).map(key => (
              <Framework
                key={key}
                index={key}
                details={this.state.frameworks[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ListOfFrameworks>
        </Menu>
        <Order
          frameworks={this.state.frameworks}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFramework={this.addFramework}
          loadSamples={this.loadSamples}
          frameworks={this.state.frameworks}
          updateFramework={this.updateFramework}
          removeFramework={this.removeFramework}
        />
      </FrameworkOfTheDay>
    )
  }
}

export default App
