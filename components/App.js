import React from 'react'
import styled from 'styled-components'

import { media } from '../theme/globalStyle'

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Framework from './Framework'

import sampleFrameworks from '../sample-frameworks'

const FrameworkOfTheDay = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 'h h h h o o o o i i i i';

  background: ${props => props.theme.white};
  ${media.giant`
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 'h h h h o o o o i i i i';
  `};
  ${media.desktop`
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 'h h h h o o o o i i i i';
  `};
  ${media.tablet`
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
    'h h h h o o o o'
    'i i i i';
  `};
  ${media.phone`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      'h h h h'
      'o o o o'
      'i i i i';
  `};
`

const Menu = styled.div`
  grid-area: h;
  background: ${props => props.theme.white};
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

const VisitStore = styled.button.attrs({
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
  constructor() {
    super()

    // bind the addFramework function to the component
    this.addFramework = this.addFramework.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)

    // initial state
    this.state = {
      frameworks: {},
      order: {}
    }
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
  addFramework(framework) {
    // spread current state into a var
    const frameworks = { ...this.state.frameworks }
    const timestamp = Date.now()
    frameworks[`framework-${timestamp}`] = framework
    // set state with new data frameworks: frameworks or just frameworks
    this.setState({ frameworks })
  }

  loadSamples() {
    this.setState({
      frameworks: sampleFrameworks
    })
  }

  addToOrder(key) {
    // copy state into var
    const order = { ...this.state.order }
    // update the order or add new
    order[key] = order[key] + 1 || 1
    // update state
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
        />
        <Inventory
          addFramework={this.addFramework}
          loadSamples={this.loadSamples}
          frameworks={this.state.frameworks}
        />
      </FrameworkOfTheDay>
    )
  }
}

export default App
