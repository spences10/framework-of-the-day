import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledButton } from '../theme/components'

import { getFunName } from '../helpers'

const StoreForm = styled.form`
  background: ${props => props.theme.white};
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  border: 1px solid ${props => props.theme.black};
`

const FormTitle = styled.h2``

const StoreName = styled.input.attrs({
  type: 'text',
  required: true,
  placeholder: 'Store Name',
  defaultValue: getFunName()
})`
  width: 100%;
  text-align: center;
  font-size: 1rem;
`

const VisitStore = StyledButton.extend.attrs({
  type: 'submit'
})`
  width: 100%;
  text-align: center;
`

class StorePicker extends React.Component {
  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault()

    // 2. get the text from that input
    console.log('====================')
    console.log(this.name.value)
    console.log('====================')
    const storeName = this.name.value
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <StoreForm onSubmit={this.goToStore}>
        <FormTitle>Please Enter a Store</FormTitle>
        <StoreName innerRef={input => (this.name = input)} />
        <VisitStore>Visit Store 👉</VisitStore>
      </StoreForm>
    )
  }
}

export default StorePicker
