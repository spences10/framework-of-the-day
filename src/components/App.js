import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  constructor () {
    super()

    this.addFish = this.addFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)

    // get initialState
    this.state = {
      fishes: {},
      state: {}
    }
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

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        {/* And Pass addFish from here down to Inventory, same for loadSamples */}
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App
