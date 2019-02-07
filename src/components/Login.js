import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { StyledButton as SB } from '../theme/components'

const LoginNav = styled.nav``

const LoginTitle = styled.h2``

const LoginP = styled.h2``

const AuthButton = styled(SB)`
  border: 0;
  display: block;
  margin-bottom: 2rem;
  width: 100%;
  color: #fff;
  padding: 2rem;
`

const GitHubButton = styled(AuthButton)`
  background: #5cc437;
`

const TwitterButton = styled(AuthButton)`
  background: #2c8dd0;
`

const FacebookButton = styled(AuthButton)`
  background: #2d5082;
`

const Login = props => (
  <LoginNav>
    <LoginTitle>Inventory Login</LoginTitle>
    <LoginP>Sign in to manage store inventory.</LoginP>
    <GitHubButton onClick={() => props.authenticate('Github')}>
      Log in with GitHub
    </GitHubButton>
    <TwitterButton onClick={() => props.authenticate('Twitter')}>
      Log in with Twitter
    </TwitterButton>
    <FacebookButton onClick={() => props.authenticate('Facebook')}>
      Log in with Facebook
    </FacebookButton>
  </LoginNav>
)

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login
