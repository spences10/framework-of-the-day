import React from 'react'
import styled from 'styled-components'

import StorePicker from '../components/StorePicker'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => (
  <Title>
    <StorePicker />
  </Title>
)
