import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderTop = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
  text-align: center;
  vertical-align: middle;
`

const Title = styled.h1`
  margin-top: ${props => `${props.marginTop}rem`};
  margin-bottom: ${props => `${props.marginBottom}rem`};
  /* margin: 0.5rem 0.5rem -2rem 0.5rem; */
  /* padding: 0.5rem 0.5rem -2rem 0.5rem; */
  font-family: 'Bungee Inline';
  font-size: 2rem;
  font-weight: 100;
  text-transform: uppercase;
`

const OfThe = styled.span`
  font-family: 'Bungee Inline';
  font-size: 1rem;
`

const Tagline = styled.h3`
  margin: 0rem 0.5rem 1rem 0.5rem;
  padding: 0rem 0.5rem 1rem 0.5rem;
  text-align: center;
`

const Header = props => {
  return (
    <HeaderTop>
      <Title marginTop={0.5} marginBottom={-2}>
        Framework
      </Title>
      <OfThe>
        <span> of</span> <span>the </span>
      </OfThe>
      <Title marginTop={-2} marginBottom={0.5}>
        Day
      </Title>
      <Tagline>{props.tagline}</Tagline>
    </HeaderTop>
  )
}

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Header
