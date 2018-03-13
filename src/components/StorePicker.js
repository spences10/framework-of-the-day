import React from 'react'
import styled from 'styled-components'

import { StyledButton } from '../theme/components'

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
  placeholder: 'Store Name'
})`
  width: 100%;
  text-align: center;
`

const VisitStore = StyledButton.extend.attrs({
  type: 'submit'
})`
  width: 100%;
  text-align: center;
`

class StorePicker extends React.Component {
  render() {
    return (
      <StoreForm>
        <FormTitle>Please Enter a Store</FormTitle>
        <StoreName />
        <VisitStore>Visit Store 👉</VisitStore>
      </StoreForm>
    )
  }
}

export default StorePicker
