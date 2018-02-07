import React from 'react'
import styled from 'styled-components'

const FrameworkList = styled.li`
  margin: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 100px auto auto;
  grid-template-rows: 3;
  grid-template-areas:
    'image name price'
    'image desc desc'
    'image   .  add';
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
  margin: 0rem 0.5rem;
  padding: 0rem 0.5rem;
  align-self: center;
  grid-area: name;
  font-size: 2rem;
`
const FrameworkPrice = styled.span`
  margin: 0rem;
  padding: 0rem;
  align-self: center;
  grid-area: price;
`
const FrameworkDesc = styled.p`
  margin: 0rem 0.5rem;
  padding: 0rem 0.5rem;
  grid-area: desc;
`
const AddToOrder = styled.button`
  margin: 0rem 0.5rem;
  padding: 0rem 0.5rem;
  grid-area: add;
`

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
