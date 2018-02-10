import React from 'react'
import styled from 'styled-components'

import AddFrameworkForm from './AddFrameworkForm'

import {
  FrameworkInput,
  FrameworkSelect,
  FrameworkSelectOpt,
  FrameworkDescription,
  StyledButton
} from '../theme/components'

const InventoryWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  grid-area: i;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
`

const AddFrameworks = StyledButton.extend.attrs({
  type: 'submit'
})`
  grid-area: a;
  width: 100%;
  text-align: center;
`

const InventoryTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`

const FrameworkList = styled.div`
  margin: 1rem 0rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'n p s'
    'd d d'
    'i i i'
    'a a a';
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
  justify-items: center;
`

class Inventory extends React.Component {
  constructor() {
    super()
    this.renderInventory = this.renderInventory.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, key) {
    const framework = this.props.frameworks[key]

    const updatedFramework = {
      ...framework,
      [e.target.name]: e.target.value
    }

    this.props.updateFramework(key, updatedFramework)
  }

  renderInventory(key) {
    const framework = this.props.frameworks[key]
    return (
      <FrameworkList key={key}>
        <FrameworkInput
          area={'n'}
          type={'text'}
          name="name"
          value={framework.name}
          placeholder={'Framework Name'}
          onChange={e => this.handleChange(e, key)}
        />
        <FrameworkInput
          area={'p'}
          type={'text'}
          name="price"
          value={framework.price}
          placeholder={'Framework Price'}
          onChange={e => this.handleChange(e, key)}
        />
        <FrameworkSelect
          type={'text'}
          name="status"
          value={framework.status}
          placeholder={'Framework Status'}
          onChange={e => this.handleChange(e, key)}
        >
          <FrameworkSelectOpt value="available">
            Fresh!
          </FrameworkSelectOpt>
          <FrameworkSelectOpt value="unavailable">
            Depreciated!
          </FrameworkSelectOpt>
        </FrameworkSelect>
        <FrameworkDescription
          type={'text'}
          name="desc"
          value={framework.desc}
          placeholder={'Framework Desc'}
          onChange={e => this.handleChange(e, key)}
        />
        <FrameworkInput
          area={'i'}
          type={'text'}
          name="image"
          value={framework.image}
          placeholder={'Framework Image'}
          onChange={e => this.handleChange(e, key)}
        />
      </FrameworkList>
    )
  }

  render() {
    return (
      <InventoryWrapper>
        <InventoryTitle>Inventory</InventoryTitle>
        {Object.keys(this.props.frameworks).map(this.renderInventory)}
        <AddFrameworkForm addFramework={this.props.addFramework} />
        <AddFrameworks onClick={this.props.loadSamples}>
          Load Sample Frameworks
        </AddFrameworks>
      </InventoryWrapper>
    )
  }
}

export default Inventory
