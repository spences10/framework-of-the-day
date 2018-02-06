import React from 'react'
import styled from 'styled-components'

const FrameworkOfTheDay = styled.div`
  background: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.black};
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

const VisitStore = styled.button.attrs({
  type: 'submit'
})`
  width: 100%;
  text-align: center;
`

class Header extends React.Component {
  render() {
    return <p>header</p>
  }
}

export default Header
