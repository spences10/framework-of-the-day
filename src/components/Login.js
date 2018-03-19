import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledButton as SB } from '../theme/components'

const LoginNav = styled.nav``

const LoginTitle = styled.h2``

const LoginP = styled.h2``

const GitHubButton = SB.extend``

const TwitterButton = SB.extend``

const FacebookButton = SB.extend``

const Login = () => (
  <LoginNav>
    <LoginTitle>Inventory Login</LoginTitle>
    <LoginP>Sign in to manage store inventory.</LoginP>
    <GitHubButton onClick={() => this.props.authenticate('Github')}>
      Log in with GitHub
    </GitHubButton>
    <TwitterButton onClick={() => this.props.authenticate('Twitter')}>
      Log in with Twitter
    </TwitterButton>
    <FacebookButton
      onClick={() => this.props.authenticate('Facebook')}
    >
      Log in with Facebook
    </FacebookButton>
  </LoginNav>
)

export default Login
