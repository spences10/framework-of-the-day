import React from 'react'
import styled from 'styled-components'

const InventoryTitle = styled.h2``

const FrameworkEdit = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'n p s'
    'd d d'
    'i i i'
    'a a a';
  background: ${props => props.theme.white};
  padding: 2rem;
  border: 1px solid ${props => props.theme.black};
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

const AddItem = styled.button.attrs({
  type: 'submit'
})`
  grid-area: a;
  width: 100%;
  text-align: center;
`

class AddFrameworkForm extends React.Component {
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
          <FrameworkSelectOpt>Fresh!</FrameworkSelectOpt>
          <FrameworkSelectOpt>Depreciated!</FrameworkSelectOpt>
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
