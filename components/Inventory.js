import React from 'react'
import styled from 'styled-components'

import AddFrameworkForm from './AddFrameworkForm'

const InventoryWrapper = styled.div`
  grid-area: i;
`

const InventoryTitle = styled.h2``

class Inventory extends React.Component {
  render() {
    return (
      <InventoryWrapper>
        <InventoryTitle>inventory</InventoryTitle>
        <AddFrameworkForm addFramework={this.props.addFramework} />
      </InventoryWrapper>
    )
  }
}

export default Inventory
