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

const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`

const OrderList = styled.ul`
  margin: 0rem;
  padding: 0rem;
`

const OrderItem = styled.li`
  margin: 1rem 0rem;
  padding: 1rem 0rem;
  border-bottom: 1px dashed ${props => props.theme.black};
`

const OrderTotal = styled.li`
  margin: 1rem 0rem;
  padding: 1rem 0rem;
  border-bottom: 3px solid ${props => props.theme.black};
`

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
        <OrderList key={key}>
          Sorry, {framework ? framework.name : 'framework'} is now
          depreciated!
        </OrderList>
      )
    }

    return (
      <OrderItem key={key}>
        <span>
          {count} courses of <strong>{framework.name}</strong>
        </span>
        <span> {formatPrice(count * framework.price)}</span>
      </OrderItem>
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
