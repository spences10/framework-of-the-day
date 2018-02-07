import React from 'react'
import styled from 'styled-components'

const HeaderTop = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
`

const Title = styled.h1`
  margin: 0.5rem 0.5rem -2rem 0.5rem;
  padding: 0.5rem 0.5rem -2rem 0.5rem;
  font-family: 'Bungee Inline';
  font-size: 3rem;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
`

const OfThe = styled.span`
  font-family: 'Bungee Inline';
  font-size: 1rem;
  text-align: center;
  vertical-align: middle;
`

const Tagline = styled.h3`
  margin: 0rem 0.5rem 1rem 0.5rem;
  padding: 0rem 0.5rem 1rem 0.5rem;
  text-align: center;
`

const Header = props => {
  return (
    <HeaderTop>
      <Title>
        Framework
        <OfThe>
          <span> of</span> <span>the </span>
        </OfThe>
        Day
      </Title>
      <Tagline>{props.tagline}</Tagline>
    </HeaderTop>
  )
}

export default Header
