import React from 'react'
import styled from 'styled-components'

const FrameworkList = styled.li``
const FrameworkImage = styled.img``
const FrameworkName = styled.h3``
const FrameworkPrice = styled.span``
const FrameworkDesc = styled.p``
const AddToOrder = styled.button``

class Framework extends React.Component {
  render() {
    const { details } = this.props
    return (
      <FrameworkList>
        <FrameworkImage src={details.image} alt={details.name} />
        <FrameworkName>
          {details.name}
          <FrameworkPrice> {details.price} </FrameworkPrice>
        </FrameworkName>
        <FrameworkDesc> {details.desc} </FrameworkDesc>
        <AddToOrder>Add to Order</AddToOrder>
      </FrameworkList>
    )
  }
}

export default Framework
