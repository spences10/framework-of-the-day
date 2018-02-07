import React from 'react'
import styled from 'styled-components'

const FrameworkList = styled.li``

class Framework extends React.Component {
  render() {
    return (
      <FrameworkList>
        <img
          src={this.props.details.image}
          alt={this.props.details.name}
        />
      </FrameworkList>
    )
  }
}

export default Framework
