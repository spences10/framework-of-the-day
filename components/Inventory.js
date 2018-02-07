import React from 'react'
import styled from 'styled-components'

import AddFrameworkForm from './AddFrameworkForm'

const InventoryWrapper = styled.div`
  grid-area: i;
`

const AddFrameworks = styled.button.attrs({
  type: 'submit'
})`
  grid-area: a;
  width: 100%;
  text-align: center;
`

const InventoryTitle = styled.h2``

class Inventory extends React.Component {
  render() {
    return (
      <InventoryWrapper>
        <InventoryTitle>inventory</InventoryTitle>
        <AddFrameworkForm addFramework={this.props.addFramework} />
        <AddFrameworks onClick={this.props.loadSamples}>
          Load Sample Frameworks
        </AddFrameworks>
      </InventoryWrapper>
    )
  }
}

export default Inventory
