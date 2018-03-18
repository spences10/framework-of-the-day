import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  FrameworkInput,
  FrameworkSelect,
  FrameworkSelectOpt,
  FrameworkDescription,
  StyledButton
} from '../theme/components'

const InventoryTitle = styled.h2``

const FrameworkEdit = styled.form`
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

const AddItem = StyledButton.extend.attrs({
  type: 'submit'
})`
  grid-area: a;
  width: 100%;
  text-align: center;
`

class AddFrameworkForm extends React.Component {
  static propTypes = {
    addFramework: PropTypes.func
  }
  createFramework(event) {
    event.preventDefault()
    const framework = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    this.props.addFramework(framework)
    this.frameworkForm.reset()
  }
  render() {
    return (
      <FrameworkEdit
        innerRef={input => (this.frameworkForm = input)}
        onSubmit={e => this.createFramework(e)}
      >
        <FrameworkInput
          innerRef={input => (this.name = input)}
          area={'n'}
          type={'text'}
          placeholder={'Framework Name'}
        />
        <FrameworkInput
          innerRef={input => (this.price = input)}
          area={'p'}
          type={'text'}
          placeholder={'Framework Price'}
        />
        <FrameworkSelect innerRef={input => (this.status = input)}>
          <FrameworkSelectOpt value="available">
            Fresh!
          </FrameworkSelectOpt>
          <FrameworkSelectOpt value="unavailable">
            Depreciated!
          </FrameworkSelectOpt>
        </FrameworkSelect>
        <FrameworkDescription
          innerRef={input => (this.desc = input)}
          placeholder={'Framework Desc'}
        />
        <FrameworkInput
          innerRef={input => (this.image = input)}
          area={'i'}
          type={'text'}
          placeholder={'Framework Image'}
        />
        <AddItem>Add Item</AddItem>
      </FrameworkEdit>
    )
  }
}

export default AddFrameworkForm
