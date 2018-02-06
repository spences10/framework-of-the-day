import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

const FrameworkOfTheDay = styled.div`
  background: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.black};
`

const Menu = styled.div`
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
          <Header />
        </Menu>
        <Order />
        <Inventory />
      </FrameworkOfTheDay>
    )
  }
}

export default App
