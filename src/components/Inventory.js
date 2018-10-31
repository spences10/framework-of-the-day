import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import firebase from 'firebase'

import AddFrameworkForm from './AddFrameworkForm'
import Login from './Login'
import base, { firebaseApp } from '../base'

import {
  FrameworkInput,
  FrameworkSelect,
  FrameworkSelectOpt,
  FrameworkDescription,
  StyledButton
} from '../theme/components'

const InventoryWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  grid-area: i;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
`

const AddFrameworks = styled(StyledButton).attrs({
  type: 'submit'
})`
  grid-area: a;
  width: 100%;
  text-align: center;
`

const RemoveFramework = styled(StyledButton).attrs({
  type: 'submit'
})`
  grid-area: r;
  width: 100%;
  text-align: center;
`

const InventoryTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`

const FrameworkList = styled.div`
  margin: 1rem 0rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'n p s'
    'd d d'
    'i i i'
    'r r r';
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
  justify-items: center;
`

class Inventory extends React.Component {
  static propTypes = {
    frameworks: PropTypes.object,
    updateFramework: PropTypes.func,
    removeFramework: PropTypes.func,
    loadSamples: PropTypes.func
  }

  state = {
    uid: null,
    owner: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user })
      }
    })
  }

  authHandler = async authData => {
    // look up current user
    const store = await base.fetch(this.props.storeId, {
      context: this
    })
    // clain it if no owner
    if (!store.owner) {
      // save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      })
    }
    // set inventory to current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    })
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[
      `${provider}AuthProvider`
    ]()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler)
  }

  logout = async () => {
    console.log('Logging out!')
    await firebase.auth().signOut()
    this.setState({ uid: null })
  }

  handleChange = (e, key) => {
    const framework = this.props.frameworks[key]

    const updatedFramework = {
      ...framework,
      [e.target.name]: e.target.value
    }

    this.props.updateFramework(key, updatedFramework)
  }

  renderInventory = key => {
    const framework = this.props.frameworks[key]
    return (
      <FrameworkList key={key}>
        <FrameworkInput
          area={'n'}
          type={'text'}
          name="name"
          value={framework.name}
          placeholder={'Framework Name'}
          onChange={e => this.handleChange(e, key)}
        />
        <FrameworkInput
          area={'p'}
          type={'text'}
          name="price"
          value={framework.price}
          placeholder={'Framework Price'}
          onChange={e => this.handleChange(e, key)}
        />
        <FrameworkSelect
          type={'text'}
          name="status"
          value={framework.status}
          placeholder={'Framework Status'}
          onChange={e => this.handleChange(e, key)}
        >
          <FrameworkSelectOpt value="available">
            Fresh!
          </FrameworkSelectOpt>
          <FrameworkSelectOpt value="unavailable">
            Depreciated!
          </FrameworkSelectOpt>
        </FrameworkSelect>
        <FrameworkDescription
          type={'text'}
          name="desc"
          value={framework.desc}
          placeholder={'Framework Desc'}
          onChange={e => this.handleChange(e, key)}
        />
        <FrameworkInput
          area={'i'}
          type={'text'}
          name="image"
          value={framework.image}
          placeholder={'Framework Image'}
          onChange={e => this.handleChange(e, key)}
        />
        <RemoveFramework
          onClick={e => this.props.removeFramework(key)}
        >
          Remove Framework
        </RemoveFramework>
      </FrameworkList>
    )
  }

  render() {
    const logout = (
      <StyledButton onClick={this.logout}>Log Out!</StyledButton>
    )

    if (!this.state.uid) {
      return (
        <InventoryWrapper>
          <Login authenticate={this.authenticate} />
        </InventoryWrapper>
      )
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <InventoryWrapper>
          <InventoryTitle>
            Sorry! You are not the owner of this store.
          </InventoryTitle>
          {logout}
        </InventoryWrapper>
      )
    }
    return (
      <InventoryWrapper>
        <InventoryTitle>Inventory</InventoryTitle>
        {logout}
        {Object.keys(this.props.frameworks).map(this.renderInventory)}
        <AddFrameworkForm addFramework={this.props.addFramework} />
        <AddFrameworks onClick={this.props.loadSamples}>
          Load Sample Frameworks
        </AddFrameworks>
      </InventoryWrapper>
    )
  }
}

export default Inventory
