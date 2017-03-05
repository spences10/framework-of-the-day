import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'
import base from '../base'

class App extends React.Component {
  constructor () {
    super()

    this.addFish = this.addFish.bind(this)
    this.removeFish = this.removeFish.bind(this)
    this.updateFish = this.updateFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.removeFromOrder = this.removeFromOrder.bind(this)

    // get initialState
    this.state = {
      fishes: {},
      order: {}
    }
  }

  componentWillMount () {
    // this runs right before teh App is rednered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
      {
        context: this,
        state: 'fishes'
      })

    // check is there is any order in loca storage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`)

    if (localStorageRef) {
      // update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  componentWillUpdate (nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
  }

  addFish (fish) {
    // update state
    const fishes = {...this.state.fishes}
    //  add in our fish
    const timestamp = Date.now()
    // add fish to updated state
    fishes[`fish-${timestamp}`] = fish
    // set state
    this.setState({ fishes }) // no need to pass fishes: fishes
  }

  updateFish (key, updatedFish) {
    const fishes = {...this.state.fishes}
    fishes[key] = updatedFish
    this.setState({ fishes })
  }

  removeFish (key) {
    const fishes = {...this.state.fishes}
    // when using firebase `delete fishes[key]` will not work as you need auth
    // so just set it to null instead
    fishes[key] = null
    // then update state
    this.setState({ fishes })
  }

  loadSamples () {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder (key) {
    // take a copy of the state
    const order = {...this.state.order}
    // update or add new number of fish ordered
    order[key] = order[key] + 1 || 1 // if it already exists then increment else it's 1
    // update the state
    this.setState({ order }) // or order: order
  }

  removeFromOrder (key) {
    // take a copy of the state
    const order = {...this.state.order}
    // delete order this time not limited by firebase so
    delete order[key]
    // update the state
    this.setState({ order }) // or order: order
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='list-of-fishes'>
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.params}
          removeFromOrder={this.removeFromOrder}
        />
        {/* And Pass addFish from here down to Inventory, same for loadSamples */}
        <Inventory
          addFish={this.addFish}
          removeFish={this.removeFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
        />
      </div>
    )
  }
}

export default App
