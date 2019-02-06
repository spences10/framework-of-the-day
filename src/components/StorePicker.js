import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { getFunName } from '../helpers'
import { StyledButton } from '../theme/components'

// import Dump from './Dump'

const StoreForm = styled.form`
  background: ${props => props.theme.white};
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
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
  font-size: 1.5rem;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 1rem;
`

const VisitStore = styled(StyledButton).attrs({
  type: 'submit'
})`
  width: 100%;
  text-align: center;
`

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }
  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault()

    // 2. get the text from that input
    const storeName = this.name.value

    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <StoreForm onSubmit={this.goToStore}>
        {/* <Dump props={this.props} /> */}
        <FormTitle>Please Enter a Store</FormTitle>
        <StoreName ref={input => (this.name = input)} />
        <VisitStore>
          Visit Store{' '}
          <span role="img" aria-label="pointy hand">
            👉
          </span>
        </VisitStore>
      </StoreForm>
    )
  }
}

export default StorePicker
