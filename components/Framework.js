import React from 'react'
import styled from 'styled-components'

const FrameworkList = styled.li`
  display: grid;
  grid-template-columns: 3;
  grid-template-rows: 2;
  grid-template-areas:
    'image name price'
    'image desc desc';
  list-style: none;
  border: 2px solid ${props => props.theme.black};
  border-radius: 4px;
`
const FrameworkImage = styled.img`
  grid-area: image;
  /* float: left; */
  width: 100px;
  margin-right: 1rem;
`
const FrameworkName = styled.h3`
  grid-area: name;
`
const FrameworkPrice = styled.span`
  grid-area: price;
`
const FrameworkDesc = styled.p`
  grid-area: desc;
`
const AddToOrder = styled.button``

class Framework extends React.Component {
  render() {
    const { details } = this.props
    return (
      <FrameworkList>
        <FrameworkImage src={details.image} alt={details.name} />
        <FrameworkName>{details.name}</FrameworkName>
        <FrameworkPrice>{details.price} hrs</FrameworkPrice>
        <FrameworkDesc>{details.desc}</FrameworkDesc>
        <AddToOrder>Add to Order</AddToOrder>
      </FrameworkList>
    )
  }
}

export default Framework
