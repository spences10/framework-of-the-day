import React from 'react'
import styled from 'styled-components'

const StoreForm = styled.form``

const FormTitle = styled.h2``

const StoreName = styled.input.attrs({
  type: 'text',
  required: true,
  placeholder: 'Store Name'
})``

const VisitStore = styled.button.attrs({
  type: 'submit'
})``

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
