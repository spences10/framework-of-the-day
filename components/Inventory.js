import React from 'react'
import styled from 'styled-components'

import AddFrameworkForm from './AddFrameworkForm'

const InventoryWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  grid-area: i;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
`

const AddFrameworks = styled.button.attrs({
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

const FrameworkEdit = styled.div`
  margin: 1rem 0rem;
  padding: 1rem 0rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'n p s'
    'd d d'
    'i i i'
    'a a a';
  background: ${props => props.theme.white};
`

const FrameworkInput = styled.input.attrs({
  type: props => props.type || 'text',
  placeholder: props => props.placeholder
})`
  grid-area: ${props => props.area};
  width: 100%;
  text-align: center;
  border: 1px solid ${props => props.theme.black};
`

const FrameworkSelect = styled.select`
  grid-area: s;
  width: 100%;
  text-align: center;
`

const FrameworkSelectOpt = styled.option``

const FrameworkDescription = styled.textarea.attrs({
  placeholder: props => props.placeholder || 'Framework Desc'
})`
  grid-area: d;
  width: 100%;
  text-align: center;
  resize: none;
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
      <FrameworkEdit key={key}>
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
      </FrameworkEdit>
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
