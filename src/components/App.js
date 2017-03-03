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
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)

    // get initialState
    this.state = {
      fishes: {},
      order: {}
    }
  }

  componentWillMount () {
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
      {
        context: this,
        state: 'fishes'
      })
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
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
        <Order fishes={this.state.fishes}
          order={this.state.order} />
        {/* And Pass addFish from here down to Inventory, same for loadSamples */}
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App
