import React from 'react'
import styled from 'styled-components'

import { formatPrice } from '../helpers'

const OrderWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  grid-area: o;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
`

const OrderTitle = styled.h2``

const OrderList = styled.ul`
  margin: 0rem;
  padding: 0rem;
`
const OrderTotal = styled.li``

const VisitStore = styled.button.attrs({
  type: 'submit'
})`
  width: 100%;
  text-align: center;
`

class Order extends React.Component {
  constructor() {
    super()
    this.renderOrder = this.renderOrder.bind(this)
  }
  renderOrder(key) {
    const framework = this.props.frameworks[key]
    const count = this.props.order[key]

    if (!framework || framework.status === 'unavailable') {
      return (
        <li key={key}>
          Sorry, {framework ? framework.name : 'framework'} is now
          depreciated!
        </li>
      )
    }

    return (
      <li key={key}>
        <span>
          {count} courses of <strong>{framework.name}</strong>
        </span>
        <span> {formatPrice(count * framework.price)}</span>
      </li>
    )
  }
  render() {
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce((prevTotal, key) => {
      const framework = this.props.frameworks[key]
      const count = this.props.order[key]
      const isAvailable =
        framework && framework.status === 'available'
      if (isAvailable) {
        return prevTotal + (count * framework.price || 0)
      }
    }, 0)
    return (
      <OrderWrapper>
        <OrderTitle>Your Order</OrderTitle>
        <OrderList>
          {orderIds.map(this.renderOrder)}
          <OrderTotal>
            <strong>Total:</strong> {formatPrice(total)}
          </OrderTotal>
        </OrderList>
      </OrderWrapper>
    )
  }
}

export default Order
