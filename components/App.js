import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

const FrameworkOfTheDay = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 'h h h h o o o o i i i i';

  background: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.black};
`

const Menu = styled.div`
  grid-area: h;

  background: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.black};
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

class App extends React.Component {
  render() {
    return (
      <FrameworkOfTheDay>
        <Menu>
          <Header tagline={'Fresh JS Framework Market'} />
        </Menu>
        <Order />
        <Inventory />
      </FrameworkOfTheDay>
    )
  }
}

export default App
